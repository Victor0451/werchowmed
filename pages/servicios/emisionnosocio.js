import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import useUser from "../../hook/useUser";
import useWerchow from "../../hook/useWerchow";
import useSWR from "swr";
import Redirect from "../../components/auth/RedirectToLogin";
import { Skeleton } from "../../components/layout/Skeleton";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import FormConsultaNoSocio from "../../components/servicios/FormConsultaNoSocio";
import ImpOrdenConsultaNoSocio from "../../components/servicios/ImpOrdenConsultaNoSocio";
import { registrarHistoria } from "../../utils/funciones";

const EmisionNoSocio = () => {
  let especialidadRef = React.createRef();
  let sucursalRef = React.createRef();
  let medicoRef = React.createRef();

  const [nosocio, guardarNoSocio] = useState(null);
  const [sucursales, guardarSucursales] = useState(null);
  const [espec, guardarEspec] = useState(null);
  const [medicos, guardarMedicos] = useState(null);
  const [detalleMed, guardarDetalleMed] = useState(null);
  const [nOrden, guardarNorden] = useState(null);
  const [orden, guardarOrden] = useState(null);
  const [f, guardarFlag] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerSucursales = async () => {
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

  const traerEspecialidades = async () => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer especialidades",
        },
      })
      .then((res) => {
        guardarEspec(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de sucursales",
          "ATENCION"
        );
      });
  };

  const traerMedicosPorSuc = async (f) => {
    if (f === "C" && especialidadRef.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            suc: sucursalRef.current.value,
            esp: especialidadRef.current.value,
            f: "traer medicos por suc",
          },
        })
        .then((res) => {
          guardarMedicos(res.data);
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer el listado de Especialidades",
            "ATENCION"
          );
        });
    } else if (f === "P" && especialidadRefP.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            suc: sucursalRefP.current.value,
            esp: especialidadRefP.current.value,
            f: "traer medicos por suc",
          },
        })
        .then((res) => {
          guardarMedicos(res.data);
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer el listado de Especialidades",
            "ATENCION"
          );
        });
    } else if (f === "Pl" && especialidadRefPl.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            suc: sucursalRefPl.current.value,
            esp: especialidadRefPl.current.value,
            f: "traer medicos por suc",
          },
        })
        .then((res) => {
          guardarMedicos(res.data);
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer el listado de Especialidades",
            "ATENCION"
          );
        });
    }
  };

  const traerDetalleMedSelec = async (f) => {
    if (f === "C" && medicoRef.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            prestado: medicoRef.current.value,
            f: "traer detalle medico",
          },
        })
        .then((res) => {
          guardarDetalleMed(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer el listado de Especialidades",
            "ATENCION"
          );
        });
    } else if (f === "P" && medicoRefP.current.value !== null) {
      let id = medicoRefP.current.value;

      await axios
        .get(`/api/servicios`, {
          params: {
            prestado: medicoRefP.current.value,
            f: "traer detalle medico",
          },
        })
        .then((res) => {
          guardarDetalleMed(res.data[0]);

          traerPracticasPrest(id, res.data[0].LUGAR);
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer el listado de Especialidades",
            "ATENCION"
          );
        });
    } else if (f === "E" && medicoRefE.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            prestado: medicoRefE.current.value,
            f: "traer detalle medico",
          },
        })
        .then((res) => {
          guardarDetalleEnfer(res.data[0]);

          traerPractEnfer();
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer el listado de Especialidades",
            "ATENCION"
          );
        });
    } else if (f === "Pl" && medicoRefPl.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            prestado: medicoRefPl.current.value,
            f: "traer detalle medico",
          },
        })
        .then((res) => {
          guardarDetalleMed(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer el listado de Especialidades",
            "ATENCION"
          );
        });
    }
  };

  const traerNoSocio = async (dni) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer no socio",
          dni: dni,
        },
      })
      .then((res) => {
        guardarNoSocio(res.data);

        setInterval(() => {
          traerNOrden();
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer al paciente", "ATENCION");
      });
  };

  const registrarOrdenUsos = async () => {
    const uso = {
      SUC: usu.sucursal,
      ORDEN: nOrden,
      CONTRATO: 0,
      NRO_ADH: 0,
      NRO_DOC: nosocio.dni,
      PLAN: "PROMO CONSULTA GRATIS NO SOCIOS",
      EDAD: 0,
      SEXO: "",
      OBRA_SOC: nosocio.obra_soc,
      FECHA: moment().format("YYYY-MM-DD"),
      FEC_CAJA: moment().format("YYYY-MM-DD"),
      HORA: moment().format("HH:mm"),
      SERVICIO: "ORDE",
      IMPORTE: detalleMed.MAX_DESC,
      IMP_LIQ: detalleMed.CON_PAGA,
      VALOR: "0",
      PUESTO: "",
      PRESTADO: detalleMed.COD_PRES,
      OPERADOR: usu.codigo,
      EMPRESA: "W",
      RENDIDO: 0,
      ANULADO: 0,
      NUSOS: 1,
      OPERADOR: usu.usuario,
      f: "reg uso",
    };

    if (detalleMed.CON_PAGA >= 1500) {
      uso.IMPORTE = 1500;
    } else if (detalleMed.CON_PAGA < 1500) {
      uso.IMPORTE = detalleMed.CON_PAGA;
    }

    await axios
      .post(`/api/servicios`, uso)
      .then((res) => {
        if (res.status === 200) {
          guardarOrden(uso);

          guardarFlag(true);

          regOrdenConsulta(uso.ORDEN);

          puntearCodigo(nosocio.idnosocio);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al registrar la orden de consulta",
          "ATENCION"
        );
      });
  };

  const regOrdenConsulta = async (orden) => {
    const consul = {
      CONTRATO: 0,
      FECHA: moment().format("YYYY-MM-DD"),
      HORA: moment().format("HH:mm"),
      NRO_ORDEN: orden,
      DESTINO: "",
      COD_PRES: detalleMed.COD_PRES,
      IMPORTE: 0,
      ANULADO: 0,
      OPERADOR: usu.usuario,
      OPE_ANU: 0,
      DIAGNOSTIC: "",
      ATENCION: 0,
      NRO_DNI: nosocio.dni,
      SUC: usu.sucursal,
      f: "reg consul",
    };

    if (detalleMed.CON_PAGA < 1500) {
      consul.IMPORTE = detalleMed.CON_PAGA;
    } else if (detalleMed.CON_PAGA >= 1500) {
      consul.IMPORTE = 1500;
    }

    await axios
      .post(`/api/servicios`, consul)
      .then((res) => {
        if (res.status === 200) {
          toastr.success(
            "Se registro la orden de consulta con exito",
            "ATENCION"
          );

          let accion = `Se registro una orden de consulta ID: ${consul.NRO_ORDEN}, para el paciente: ${nosocio.nosocio} por pormocion de consulta sin cargo para no afiliados, para el medico: ${detalleMed.NOMBRE}. Coseguro a pagar: ${consul.IMPORTE}`;

          registrarHistoria(accion, usu, usuario);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al registrar la orden de consulta",
          "ATENCION"
        );
      });
  };

  const traerNOrden = async () => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer norden",
        },
      })
      .then((res) => {
        setTimeout(() => {
          if (!res.data[0]) {
          } else {
            guardarNorden(`PROM-${res.data[0].iduso + 1}`);
          }
        }, 500);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer el N° de Orden", "ATENCION");
      });
  };

  const puntearCodigo = async (id) => {
    let data = {
      f: "puntear codigo",
      idnosocio: id,
    };

    await axios
      .put(`/api/servicios`, data)
      .then((res) => {
        if (res.status === 200) {
          toastr.info(
            "Este codigo ya fue utilizado, por ende no tendra mas validez de ahora en adelante",
            "ATENCION"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al puntear el codigo", "ATENCION");
      });
  };

  const imprimir = () => {
    let contenido = document.getElementById("orden").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.replace("/servicios/emision");
  };

  let router = useRouter();

  const traerInfo = () => {
    traerSucursales();
    traerEspecialidades();
    traerNoSocio(router.query.dni);
  };

  // ----------------------------------------------

  useSWR("/api/servicios", traerInfo);

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
            {f === false ? (
              <FormConsultaNoSocio
                nosocio={nosocio}
                sucursales={sucursales}
                espec={espec}
                medicos={medicos}
                detalleMed={detalleMed}
                sucursalRef={sucursalRef}
                especialidadRef={especialidadRef}
                medicoRef={medicoRef}
                traerMedicosPorSuc={traerMedicosPorSuc}
                traerDetalleMedSelec={traerDetalleMedSelec}
                registrarOrdenUsos={registrarOrdenUsos}
              />
            ) : f === true ? (
              <>
                <div id="orden">
                  <ImpOrdenConsultaNoSocio
                    nosocio={nosocio}
                    orden={orden}
                    medico={detalleMed}
                  />
                </div>

                <div className=" container list mt-4 border border-dark p-4">
                  <h3>
                    <strong>
                      <u>Opciones</u>
                    </strong>
                  </h3>
                  <div className="row border border-dark p-4 mt-4">
                    <div className="col-md-12 d-flex justify-content-center">
                      <button className=" btn btn-primary " onClick={imprimir}>
                        Imprimir
                      </button>
                      <a
                        className="ml-1 btn btn-secondary "
                        href="/servicios/listadoordenes"
                      >
                        Listado De Ordenes
                      </a>
                      <a
                        className="ml-1 btn btn-success "
                        href="/servicios/emision"
                      >
                        Generar Orden
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </Layout>
        </>
      ) : null}
    </>
  );
};

export default EmisionNoSocio;
