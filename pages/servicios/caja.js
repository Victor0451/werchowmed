import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Skeleton } from "../../components/layout/Skeleton";
import useUser from "../../hook/useUser";
import useWerchow from "../../hook/useWerchow";
import useSWR from "swr";
import Redirect from "../../components/auth/RedirectToLogin";
import moment from "moment-timezone";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { registrarHistoria } from "../../utils/funciones";
import NuevaCaja from "../../components/caja/NuevaCaja";
import FormCaja from "../../components/caja/FormCaja";
import jsCookie from "js-cookie";

const Caja = () => {
  let serieIRef = React.createRef();
  let nFacturaIRef = React.createRef();
  let descripcionIRef = React.createRef();
  let cuitIRef = React.createRef();
  let importeIRef = React.createRef();
  let serieERef = React.createRef();
  let nFacturaERef = React.createRef();
  let descripcionERef = React.createRef();
  let cuitERef = React.createRef();
  let importeERef = React.createRef();

  const [ordenes, guardarOrdenes] = useState(null);
  const [ingresos, guardarIngresos] = useState([]);
  const [egresos, guardarEgresos] = useState([]);
  const [errores, guadrarErrores] = useState(null);
  const [fechaOrd, guadrarFechaOrd] = useState(null);
  const [flag, guardarFlag] = useState(false);
  const [cuentas, guardarCuentas] = useState([]);
  const [tipoFac, guardartipoFac] = useState([]);
  const [codigoSel, guardarCodigoSel] = useState("");
  const [facturaSel, guardarFacturaSel] = useState("");
  const [nCuentaSel, guardarNcuentaSel] = useState("");
  const [cuenDescSel, guardarCuenDescSel] = useState("");
  const [sucur, guardarSucur] = useState("");

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerOrdenesSinRendir = async (user, suc) => {
    console.log(user, suc);
    await axios
      .get(`/api/caja`, {
        params: {
          suc: suc,
          user: user,
          f: "ordenes sin rendir",
        },
      })
      .then((res) => {
        guardarOrdenes(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer las ordenes sin rendir",
          "ATENCION"
        );
      });
  };

  const traerOrdenesPorDia = async (fecha) => {
    await axios
      .get(`/api/caja`, {
        params: {
          suc: sucur,
          fecha: fecha,
          user: usu.usuario,
          f: "ordenes por dia",
        },
      })
      .then((res) => {
        let ing = [];

        let arr = res.data;

        for (let i = 0; i < arr.length; i++) {
          ing.push(arr[i]);

          guardarIngresos([...ing]);
        }

        guadrarFechaOrd(fecha);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer las ordenes por dia",
          "ATENCION"
        );
      });
  };

  const regEgreso = () => {
    guadrarErrores(null);

    let egre = {
      CODIGO: codigoSel,
      CUENTA: nCuentaSel,
      MOVIM: "E",
      IMPORTE: importeERef.current.value,
      TIPO: facturaSel,
      SERIE: serieERef.current.value,
      NUMERO: nFacturaERef.current.value,
      CUIT: cuitERef.current.value,
      DETALLE: descripcionERef.current.value,
    };

    if (egre.CODIGO === "") {
      guadrarErrores("Debes seleccionar la cuenta de la imputacion");
    } else if (egre.IMPORTE === "") {
      guadrarErrores("Debes ingresar el importe de la imputacion");
    } else if (egre.TIPO === "") {
      guadrarErrores("Debes seleccionar el tipo de factura");
    } else if (egre.SERIE === "") {
      guadrarErrores("Debes ingresar el numero de serie de la factura");
    } else if (egre.NUMERO === "") {
      guadrarErrores("Debes ingresar el numero de serie de la factura");
    } else {
      guardarEgresos([...egresos, egre]);
      toastr.info("Se precargo el egreso exitosamente", "ATENCION");
    }
  };

  const regIngreso = () => {
    guadrarErrores(null);

    let ingre = {
      CODIGO: codigoSel,
      CUENTA: nCuentaSel,
      MOVIM: "I",
      IMPORTE: importeIRef.current.value,
      TIPO: facturaSel,
      SERIE: serieIRef.current.value,
      NUMERO: nFacturaIRef.current.value,
      CUIT: cuitIRef.current.value,
      DETALLE: descripcionIRef.current.value,
    };

    if (ingre.CODIGO === "") {
      guadrarErrores("Debes seleccionar la cuenta de la imputacion");
    } else if (ingre.IMPORTE === "") {
      guadrarErrores("Debes ingresar el importe de la imputacion");
    } else if (ingre.TIPO === "") {
      guadrarErrores("Debes seleccionar el tipo de factura");
    } else if (ingre.SERIE === "") {
      guadrarErrores("Debes ingresar el numero de serie de la factura");
    } else if (ingre.NUMERO === "") {
      guadrarErrores("Debes ingresar el numero de serie de la factura");
    } else {
      guardarIngresos([...ingresos, ingre]);
      toastr.info("Se precargo el ingreso exitosamente", "ATENCION");
    }
  };

  const imprimir = () => {
    let contenido = document.getElementById("caja").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.replace("/gestion/werchow/servicios/emision");
  };

  const calcTotalMovimientos = (arr, f) => {
    let total = 0;

    if (f === "I") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].IMPORTE);
      }
    } else if (f === "E") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].IMPORTE);
      }
    }

    return total.toFixed(2);
  };

  const regCaja = async () => {
    if (flag === false) {
      let totI = 0;
      let totE = 0;

      let caja = {
        SUCURSAL: usu.sucursal,
        PUESTO: "30",
        CODIGO: 0,
        MOVIM: "",
        CUENTA: "",
        IMPORTE: "",
        TIPO: "",
        SERIE: 0,
        NUMERO: 0,
        CUIT: "",
        DETALLE: "",
        DET_AUX: "",
        FECHA: moment().format("YYYY-MM-DD"),
        FEC_COMP: "",
        HORA: moment().format("HH:mm"),
        ORIGEN: "",
        OPERADOR: usu.usuario,
        ASIENTO: 0,
        EXENTO: "",
        CANT_AFIL: 0,
        CAE: "",
        VTO_CAE: "",
        f: "reg caja",
      };

      for (let i = 0; i < ingresos.length; i++) {
        caja.CODIGO = ingresos[i].CODIGO;
        caja.CUENTA = ingresos[i].CUENTA;
        caja.MOVIM = ingresos[i].MOVIM;
        caja.IMPORTE = ingresos[i].IMPORTE;
        caja.TIPO = ingresos[i].TIPO;
        caja.DETALLE = ingresos[i].DETALLE;
        caja.NUMERO = ingresos[i].NUMERO;
        caja.CUIT = ingresos[i].CUIT;

        totI += parseFloat(ingresos[i].IMPORTE);

        postCaja(caja, 0);
      }

      for (let j = 0; j < egresos.length; j++) {
        caja.CODIGO = egresos[j].CODIGO;
        caja.CUENTA = egresos[j].CUENTA;
        caja.MOVIM = egresos[j].MOVIM;
        caja.IMPORTE = egresos[j].IMPORTE;
        caja.TIPO = egresos[j].TIPO;
        caja.DETALLE = egresos[j].DETALLE;
        caja.NUMERO = egresos[j].NUMERO;
        caja.CUIT = egresos[j].CUIT;

        totE += parseFloat(egresos[j].IMPORTE);

        postCaja(caja, 0);
      }

      caja.CODIGO = 718;
      caja.CUENTA = "0101010700";
      caja.MOVIM = "E";
      caja.IMPORTE = totI - totE;
      caja.TIPO = "X";
      caja.DETALLE = "VALORES A DEPOSITAR";
      caja.NUMERO = 1;
      caja.CUIT = "0";

      postCaja(caja, 0);

      caja.CODIGO = -1;
      caja.CUENTA = "";
      caja.MOVIM = "I";
      caja.IMPORTE = 0;
      caja.TIPO = "";
      caja.DETALLE = "SALDO INICIAL";
      caja.NUMERO = 0;
      caja.CUIT = "0";

      postCaja(caja, 1);
    } else if (flag === true) {
      toastr.warning(
        `Ya se genero una caja con la fecha en el dia de hoy (${moment().format(
          "DD/MM/YYYY"
        )})`,
        "ATENCION"
      );
    }
  };

  const postCaja = async (caja, f) => {
    await axios
      .post(`/api/caja`, caja)
      .then((res) => {
        if (f === 1 && res.status === 200) {
          toastr.success(
            "Se registraron los movimientos en la caja correctamente",
            "ATENCION"
          );

          updateRendido();

          let accion = `El operador ${usu.usuario} cerro caja de Clinica Otero con fecha: ${caja.FECHA}`;

          registrarHistoria(accion, usu.usuario);

          setTimeout(() => {
            Router.reload();
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al reg la caja", "ATENCION");
      });
  };

  const updateRendido = async () => {
    let data = {
      f: "puntear rendido",
      fecha: fechaOrd,
      operador: usu.usuario,
      suc: sucur,
    };

    await axios
      .put(`/api/caja`, data)
      .then((res) => {
        if (res.data) {
          toastr.info(
            `Se marcaron como rendidas los movimientos del dia ${moment(
              fechaOrd
            ).format("DD/MM/YYYY")}`,
            "ATENCION"
          );

          traerOrdenesSinRendir();
        }
      })
      .catch((error) => {
        console.log(error);

        toastr.error(
          "Ocurrio un error al impactar como rendido los movimientos",
          "ATENCION"
        );
      });
  };

  const chekCaja = async (user) => {
    let fecha = moment().format("YYYY-MM-DD");

    await axios
      .get(`/api/caja`, {
        params: {
          fecha: fecha,
          user: user,
          f: "check caja",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarFlag(true);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al chequear la caja", "ATENCION");
      });
  };

  const traerTipoFac = async () => {
    await axios
      .get("/api/caja", {
        params: {
          f: "traer tipo facturas",
        },
      })
      .then((res) => {
        if (res.data) {
          let tipoFac = res.data;
          guardartipoFac(tipoFac);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al generar el listado de recibos");
      });
  };

  const tarerCuentas = async (movim) => {
    await axios
      .get("/api/caja", {
        params: {
          f: "traer cuentas",
          movim: movim,
        },
      })
      .then((res) => {
        if (res.data) {
          let movim = res.data;
          guardarCuentas(movim);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al generar el listado de cuentas");
      });
  };

  const traerInfo = () => {
    if (jsCookie.get("sucur")) {
      let suc = jsCookie.get("sucur");
      guardarSucur(suc);
      traerOrdenesSinRendir(usu.usuario, suc);
      chekCaja(usu.usuario);
      traerTipoFac();
    }
  };

  const handleChange = async (f, value) => {
    if (f === "cuenta") {
      let split = value.split("-");

      let cod = split[0];
      let nCuen = split[1];
      let cuenDesc = split[2];

      guardarCodigoSel(cod);

      guardarNcuentaSel(nCuen);

      guardarCuenDescSel(cuenDesc);
    } else if (f === "comprobante") {
      guardarFacturaSel(value);
    }
  };

  const eliminarImpuPrecargado = (index, movim) => {
    if (movim === "I") {
      ingresos.splice(index, 1);

      guardarIngresos([...ingresos]);
    } else if (movim === "E") {
      egresos.splice(index, 1);

      guardarEgresos([...egresos]);
    }
  };

  useSWR("/api/caja", traerInfo);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Layout>
          <Redirect />
        </Layout>
      ) : usu ? (
        <>
          <Layout>
            <div
              className="container-fluid p-4 min-vh-100"
              style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
              }}
            >
              <div className="row mb-4">
                <div className="col-12">
                  <h1 className="text-primary fw-bold">
                    <i className="fa fa-cash-register me-3"></i>
                    Gestión de Caja
                  </h1>
                </div>
              </div>

              <NuevaCaja
                listado={ordenes}
                traerOrdenesPorDia={traerOrdenesPorDia}
                flag={flag}
              />

              {ingresos ? (
                <>
                  <div id="caja">
                    <FormCaja
                      ingresos={ingresos}
                      errores={errores}
                      egresos={egresos}
                      cuentas={cuentas}
                      tipoFac={tipoFac}
                      descripcionIRef={descripcionIRef}
                      serieIRef={serieIRef}
                      nFacturaIRef={nFacturaIRef}
                      importeIRef={importeIRef}
                      descripcionERef={descripcionERef}
                      serieERef={serieERef}
                      nFacturaERef={nFacturaERef}
                      importeERef={importeERef}
                      cuitIRef={cuitIRef}
                      cuitERef={cuitERef}
                      regEgreso={regEgreso}
                      regIngreso={regIngreso}
                      calcTotalMovimientos={calcTotalMovimientos}
                      tarerCuentas={tarerCuentas}
                      handleChange={handleChange}
                      eliminarImpuPrecargado={eliminarImpuPrecargado}
                    />
                  </div>

                  <div className="row g-4 mt-2">
                    <div className="col-12">
                      <div className="card shadow-sm">
                        <div className="card-header bg-success text-white">
                          <h5 className="mb-0">
                            <i className="fa fa-cogs me-2"></i>
                            Acciones de Caja
                          </h5>
                        </div>
                        <div className="card-body">
                          <div className="d-flex justify-content-center">
                            <button
                              className="btn btn-success px-5 py-3"
                              onClick={regCaja}
                            >
                              <i className="fa fa-save me-2"></i>
                              Registrar Movimientos
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </Layout>
        </>
      ) : null}
    </>
  );
};

export default Caja;
