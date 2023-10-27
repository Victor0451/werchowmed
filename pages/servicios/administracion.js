import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Skeleton } from "../../components/layout/Skeleton";
import useUser from "../../hook/useUser";
import useWerchow from "../../hook/useWerchow";
import useSWR from "swr";
import Redirect from "../../components/auth/RedirectToLogin";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../config/config";
import { confirmAlert } from "react-confirm-alert";
import { registrarHistoria } from "../../utils/funciones";
import FormAdministracion from "../../components/servicios/FormAdministracion";
import ModalActPractica from "../../components/servicios/ModalActPractica";

function Administracion(props) {
  let medicoRef = React.createRef();
  let consultaRef = React.createRef();
  let especialidadRef = React.createRef();
  let nombreRef = React.createRef();
  let matriculaRef = React.createRef();
  let direccionRef = React.createRef();
  let horario1Ref = React.createRef();
  let horario2Ref = React.createRef();
  let sucRef = React.createRef();
  let nuevoImportePrac = React.createRef();

  const [medicos, guardarMedicos] = useState(null);
  const [codPres, guardarCodPres] = useState("");
  const [presImp, guardarPresImp] = useState(0);
  const [prestador, guardarPrestador] = useState([]);
  const [practicasPres, guardarPracticasPres] = useState([]);
  const [row, guardarRow] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerMedicos = async (f) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "listado prestadores",
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
  };

  const traerPracticas = async (id, lugar) => {
    axios
      .get(`/api/servicios`, {
        params: {
          lugar: lugar,
          f: "traer prac prest",
          id: id,
        },
      })
      .then((res1) => {
        guardarPracticasPres(res1.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de practicas del prestador"
        );
      });
  };

  const traerDetMedico = async (prestado) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          prestado: prestado,
          f: "traer detalle medico",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarPrestador(res.data[0]);

          let lugar = 0;

          if (res.data[0].LUGAR && res.data[0].LUGAR < 10) {
            lugar = `0${res.data[0].LUGAR}`;
            setTimeout(() => {
              traerPracticas(res.data[0].COD_PRES, lugar);
            }, 500);
          } else if (res.data[0].LUGAR && res.data[0].LUGAR >= 10) {
            lugar = res.data[0].LUGAR;
            setTimeout(() => {
              traerPracticas(res.data[0].COD_PRES, lugar);
            }, 500);
          } else if (!res.data[0].LUGAR || res.data[0].LUGAR === "") {
            toastr.info(
              "El prestador seleccionado, no posee practicas cargadas"
            );
          }
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer los datos del prestador");
      });
  };

  const handleChange = async () => {
    guardarPracticasPres([]);
    guardarPrestador([]);

    let ref = medicoRef.current.value;

    guardarCodPres(ref.substr(0, 5));
    guardarPresImp(parseFloat(ref.substr(6, 20)));

    traerDetMedico(ref.substr(0, 5));
  };

  const updateConsulta = async () => {
    if (consultaRef.current.value === "") {
      toastr.warning(
        "Debes ingresar el nuevo valor de la consulta",
        "ATENCION"
      );
    } else {
      let data = {
        COD_PRES: codPres,
        CON_PAGA: consultaRef.current.value,
        f: "update conpaga",
      };

      await confirmAlert({
        title: "ATENCION",
        message: "¿Seguro quieres modificar el valor de la consulta?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              axios
                .put(`/api/servicios`, data)
                .then((res) => {
                  console.log(res);
                  if (res.status === 200) {
                    toastr.success(
                      "El valor de la consulta se modifico con exito"
                    );

                    let accion = `Se actualizo el valor de la consulta del prestador codigo: ${codPres}, de $${presImp} a $${consultaRef.current.value}.`;

                    registrarHistoria(accion, usu.usuario);

                    setTimeout(() => {
                      traerDetMedico(codPres);
                    }, 500);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toastr.error(
                    "Ocurrio un error al actualizar el valor de la consulta"
                  );
                });
            },
          },
          {
            label: "No",
            onClick: () => {
              toastr.info("El valor de la consulta no fue modificado");
            },
          },
        ],
      });
    }
  };

  const updatePrestador = async () => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres modificar los datos del prestador?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let data = {
              LIS_ESPE: especialidadRef.current.value,
              NOMBRE: nombreRef.current.value,
              MATRICULA: matriculaRef.current.value,
              DIRECCION: direccionRef.current.value,
              HORARIO1: horario1Ref.current.value,
              HORARIO2: horario2Ref.current.value,
              SUC: "",
              LOCALIDAD: "",
              OTERO: false,
              COD_PRES: prestador.COD_PRES,
              f: "update prestado",
            };

            if (sucRef.current.value === "S.S. DE JUJUY") {
              data.SUC = "W";
              data.LOCALIDAD = sucRef.current.value;
            } else if (sucRef.current.value === "OTERO") {
              data.SUC = "W";
              data.LOCALIDAD = sucRef.current.value;
              data.OTERO = true;
            } else if (sucRef.current.value === "PALPALA") {
              data.SUC = "L";
              data.LOCALIDAD = sucRef.current.value;
            } else if (sucRef.current.value === "PERICO") {
              data.SUC = "R";
              data.LOCALIDAD = sucRef.current.value;
            } else if (sucRef.current.value === "EL CARMEN") {
              data.SUC = "C";
              data.LOCALIDAD = sucRef.current.value;
            } else if (sucRef.current.value === "SAN PEDRO") {
              data.SUC = "P";
              data.LOCALIDAD = sucRef.current.value;
            }

            axios
              .put(`/api/servicios`, data)
              .then((res) => {
                if (res.status === 200) {
                  toastr.success(
                    "Los datos del prestador se modificaron con exito"
                  );

                  let accion = `Se actualizaron datos del prestador ${prestador.COD_PRES}.`;

                  registrarHistoria(accion, usu.usuario);

                  setTimeout(() => {
                    traerDetMedico(prestador.COD_PRES);
                  }, 500);
                }
              })
              .catch((error) => {
                console.log(error);
                toastr.error(
                  "Ocurrio un error al actualizar el valor de la consulta"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toastr.info(
              "Los datos del prestador seleccionado, no fueron modificados"
            );
          },
        },
      ],
    });
  };

  const actValorPractica = async () => {
    const importe = nuevoImportePrac.current.value;

    if (importe === "") {
      toastr.error("Debes ingresar el nuevo valor de la practica", "ATENCION");
    } else {
      await confirmAlert({
        title: "ATENCION",
        message:
          "¿Seguro quieres modificar el valor de la practica seleccionada?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              const data = {
                f: "act valor practica",
                importe: importe,
                lugar: prestador.LUGAR,
                prestado: prestador.COD_PRES,
                id: row.idpractica,
              };

              if (data.lugar < 10) {
                data.lugar = `0${data.lugar}`;
              }

              axios
                .put("/api/servicios", data)
                .then((res) => {
                  if (res.status === 200) {
                    toastr.success(
                      "El valor de la practica se actualizo correctamente",
                      "ATENCION"
                    );

                    let accion = `Se actualizo el valor de la practica ${row.CODIGOS} - ${row.DESCRIP} preteneciente al prestador ${prestador.COD_PRES} - ${prestador.NOMBRE}, de $${row.IMPORTE} a $${importe}.`;

                    registrarHistoria(accion, usu.usuario);

                    setTimeout(() => {
                      traerDetMedico(prestador.COD_PRES);
                    }, 500);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toastr.error(
                    "Ocurrio un error al actualizar el valor de la practica",
                    "ATENCION"
                  );
                });
            },
          },
          {
            label: "No",
            onClick: () => {
              toastr.info(
                "El valor de la practica seleccionada, no fue modificado"
              );
            },
          },
        ],
      });
    }
  };

  useSWR("/api/servicios", traerMedicos);

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
            <FormAdministracion
              medicos={medicos}
              medicoRef={medicoRef}
              handleChange={handleChange}
              presImp={presImp}
              updateConsulta={updateConsulta}
              consultaRef={consultaRef}
              prestador={prestador}
              practicasPres={practicasPres}
              especialidadRef={especialidadRef}
              nombreRef={nombreRef}
              matriculaRef={matriculaRef}
              direccionRef={direccionRef}
              horario1Ref={horario1Ref}
              horario2Ref={horario2Ref}
              sucRef={sucRef}
              updatePrestador={updatePrestador}
              guardarRow={guardarRow}
            />
          </Layout>

          <ModalActPractica
            row={row}
            nuevoImportePrac={nuevoImportePrac}
            actValorPractica={actValorPractica}
          />
        </>
      ) : null}
    </>
  );
}

export default Administracion;
