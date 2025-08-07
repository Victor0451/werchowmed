import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import useUser from "../../hook/useUser";
import useWerchow from "../../hook/useWerchow";
import useSWR from "swr";
import { Skeleton } from "../../components/layout/Skeleton";
import Redirect from "../../components/auth/RedirectToLogin";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../config/config";
import { registrarHistoria, traerAdhs } from "../../utils/funciones";
import FormControlOrdenes from "../../components/servicios/FormControlOrdenes";
import ListadoControlOrdenes from "../../components/servicios/ListadoControlOrdenes";
import ListadoControlConsultasMedicos from "../../components/servicios/ListadoControlConsultasMedicos";
import ListadoControlUsosPorPrestador from "../../components/servicios/ListadoControlUsosPorPrestador";
import Restringed from "../../components/auth/Restringed";

const Control = () => {
  const { usu } = useWerchow();

  const { isLoading } = useUser();

  let desdeRef = React.createRef();
  let hastaRef = React.createRef();
  let desdeRef2 = React.createRef();
  let hastaRef2 = React.createRef();
  let medicoRef = React.createRef();
  let sucursalRef = React.createRef();

  const [medicos, guardarMedicos] = useState(null);
  const [listado, guardarListado] = useState(null);
  const [listado2, guardarListado2] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [rango, guardarRango] = useState([]);
  const [sucursales, guardarSucursales] = useState(null);
  const [sucur, guardarSucur] = useState("");

  const traerListado = async () => {
    guardarListado(null);
    guardarListado2(null);

    let desde = desdeRef.current.value;
    let hasta = hastaRef.current.value;
    let sucur = sucursalRef.current.value;

    if (desde === "" || hasta === "") {
      guardarErrores("Los campos DESDE y HASTA no deben estar vacios");
    } else if (desde > hasta) {
      guardarErrores("El campo DESDE no puede ser mayor que el campo HASTA");
    } else if (sucur === "no") {
      guardarErrores("Debes seleccionar la sucursal");
    } else {
      let rango = {
        desde: desde,
        hasta: hasta,
      };

      guardarRango(rango);

      if (sucur === "W") {
        guardarSucur("Casa Central");
      } else if (sucur === "O") {
        guardarSucur("Otero");
      } else if (sucur === "L") {
        guardarSucur("Palpala");
      } else if (sucur === "R") {
        guardarSucur("Perico");
      } else if (sucur === "C") {
        guardarSucur("El Carmen");
      } else if (sucur === "P") {
        guardarSucur("San Pedro");
      } else if (sucur === "SM") {
        guardarSucur("San Miguel");
      }

      await axios
        .get(`/api/servicios`, {
          params: {
            f: "listado por sucursal",
            desde: desde,
            hasta: hasta,
            sucur: sucur,
          },
        })
        .then((res) => {
          console.log(res.data);
          guardarListado(res.data);
        })
        .catch((error) => {
          console.log(error);
          toastr.info(
            "No se encuentran ordenes para este rango de fechas en el sistema de Otero",
            "ATENCION"
          );
        });
    }
  };

  const traerListadoConsultasMedicos = async () => {
    guardarListado(null);
    guardarListado2(null);

    let desde = desdeRef2.current.value;
    let hasta = hastaRef2.current.value;
    let medico = medicoRef.current.value;

    if (medico === "no") {
      guardarErrores("Debes seleccionar un medico");
    } else if (desde === "" || hasta === "") {
      guardarErrores("Los campos DESDE y HASTA no deben estar vacios");
    } else if (desde > hasta) {
      guardarErrores("El campo DESDE no puede ser mayor que el campo HASTA");
    } else {
      let rango = {
        medico: medico,
        desde: desde,
        hasta: hasta,
      };

      guardarRango(rango);

      await axios
        .get(`/api/servicios`, {
          params: {
            medico: medico,
            desde: desde,
            hasta: hasta,
            f: "listado por prestador",
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarListado2(res.data);

            toastr.success("Listado encontrado", "ATENCION");
          } else if (res.data.length === 0) {
            toastr.info(
              "No se encuentran ordenes para este rango de fechas en el sistema de Otero",
              "ATENCION"
            );
          }
        })
        .catch((error) => {
          console.log(error);

          toastr.error("Ocurrio un error al buscar el listado", "ATENCION");
        });
    }
  };

  const traerInfo = async (f) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "list info prestadores",
        },
      })
      .then((res) => {
        guardarMedicos(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de Medicos",
          "ATENCION"
        );
      });

    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer sucursales",
        },
      })
      .then((res) => {
        guardarSucursales(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de sucursales",
          "ATENCION"
        );
      });
  };

  const imprimir = () => {
    let contenido = document.getElementById("list").innerHTML;

    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload();
  };

  const calcTotales = (arr, campo) => {
    let total = 0;

    if (campo === "VALOR") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].IMPORTE);
      }

      return total.toFixed(2);
    } else if (campo === "COSEGURO") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].COSEGURO);
      }

      return total.toFixed(2);
    } else if (campo === "WERCHOW") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].WERCHOW);
      }

      return total.toFixed(2);
    } else if (campo === "IMPORTE") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].IMPORTE);
      }

      return total.toFixed(2);
    } else if (campo === "USOS") {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].USOS);
      }

      return total;
    }
  };

  useSWR("/api/servicios", traerInfo);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      <>
        {!usu ? (
          <Layout>
            <Redirect />
          </Layout>
        ) : usu ? (
          <>
            {usu.perfil === 1 || usu.perfil === 3 ? (
              <Layout>
                <FormControlOrdenes
                  traerListado={traerListado}
                  traerListadoConsultasMedicos={traerListadoConsultasMedicos}
                  desdeRef={desdeRef}
                  hastaRef={hastaRef}
                  errores={errores}
                  medicos={medicos}
                  medicoRef={medicoRef}
                  desdeRef2={desdeRef2}
                  hastaRef2={hastaRef2}
                  sucursalRef={sucursalRef}
                  sucursales={sucursales}
                />

                {listado ? (
                  <>
                    <ListadoControlOrdenes
                      titulo={"Listado de Ordenes Por Sucursal"}
                      listado={listado}
                      rango={rango}
                      imprimir={imprimir}
                      calcTotales={calcTotales}
                      sucur={sucur}
                    />
                  </>
                ) : null}

                {listado2 ? (
                  <ListadoControlOrdenes
                    titulo={"Listado de Ordenes Por Prestador"}
                    listado={listado2}
                    rango={rango}
                    imprimir={imprimir}
                    calcTotales={calcTotales}
                    sucur={sucur}
                  />
                ) : null}
              </Layout>
            ) : (
              <Layout>
                <Restringed />
              </Layout>
            )}
          </>
        ) : null}
      </>
    </>
  );
};

export default Control;
