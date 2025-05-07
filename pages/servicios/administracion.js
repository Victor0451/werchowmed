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
import ModalNuevoPrestador from "../../components/servicios/ModalNuevoPrestador";
import uuid4 from "uuid4";

function Administracion(props) {
  let medicoRef = React.createRef();
  let consultaRef = React.createRef();
  let liquidacionRef = React.createRef();
  let nombreRef = React.createRef();
  let matriculaRef = React.createRef();
  let direccionRef = React.createRef();
  let horario1Ref = React.createRef();
  let horario2Ref = React.createRef();
  let nuevoImportePrac = React.createRef();
  let promo1Ref = React.createRef();
  let promo2Ref = React.createRef();

  // ALTA MEDICO

  let promoRef = React.createRef();
  let nuSucRef = React.createRef();
  let nuNombreRef = React.createRef();
  let nuEspRef = React.createRef();
  let nuDireccionRef = React.createRef();
  let nuHorario1Ref = React.createRef();
  let nuHorario2Ref = React.createRef();
  let nuMatriculaRef = React.createRef();
  let nuPromo1Ref = React.createRef();
  let nuPromo2Ref = React.createRef();
  let nuCoseguroRef = React.createRef();
  let nuLiquidacionRef = React.createRef();
  let nuTelefonoRef = React.createRef();
  let nuModalidadRef = React.createRef();
  let promoEditRef = React.createRef();

  const [medicos, guardarMedicos] = useState(null);
  const [especialidades, guardarEspecialidades] = useState(null);
  const [codPres, guardarCodPres] = useState("");
  const [presImp, guardarPresImp] = useState(0);
  const [prestador, guardarPrestador] = useState([]);
  const [practicasPres, guardarPracticasPres] = useState([]);
  const [row, guardarRow] = useState([]);
  const [showProm, guardarShowProm] = useState(false);
  const [nuCodPres, guardarNuCodPres] = useState("");
  const [errores, guardarErrores] = useState("");
  const [alertas, guardarAlertas] = useState("");

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
          "Ocurrio un error al traer el listado de Medicos",
          "ATENCION"
        );
      });

    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer especialidades",
        },
      })
      .then((res) => {
        guardarEspecialidades(res.data);
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

  const updateConsulta = async (f) => {
    if (f === "C") {
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
    } else if (f === "L") {
      if (liquidacionRef.current.value === "") {
        toastr.warning(
          "Debes ingresar el nuevo valor de liquidacion",
          "ATENCION"
        );
      } else {
        let data = {
          COD_PRES: codPres,
          LIQUIDACION: liquidacionRef.current.value,
          f: "update liquidacion",
        };

        await confirmAlert({
          title: "ATENCION",
          message: "¿Seguro quieres modificar el valor de liquidacion?",
          buttons: [
            {
              label: "Si",
              onClick: () => {
                axios
                  .put(`/api/servicios`, data)
                  .then((res) => {
                    if (res.status === 200) {
                      toastr.success(
                        "El valor de liquidacion se modifico con exito"
                      );

                      let accion = `Se actualizo el valor de liquidacion del prestador codigo: ${codPres}, de $${prestador.LIQUIDACION} a $${liquidacionRef.current.value}.`;

                      registrarHistoria(accion, usu.usuario);

                      setTimeout(() => {
                        traerDetMedico(codPres);
                      }, 500);
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    toastr.error(
                      "Ocurrio un error al actualizar el valor de liquidacion"
                    );
                  });
              },
            },
            {
              label: "No",
              onClick: () => {
                toastr.info("El valor de liquidacion no fue modificado");
              },
            },
          ],
        });
      }
    } else if (f === "P1") {
      if (promo1Ref.current.value === "") {
        toastr.warning(
          "Debes ingresar el nuevo valor de Promocion N°1",
          "ATENCION"
        );
      } else {
        let data = {
          COD_PRES: codPres,
          PROMO1: promo1Ref.current.value,
          f: "update promo1",
        };

        await confirmAlert({
          title: "ATENCION",
          message: "¿Seguro quieres modificar el valor de la Promocion N°1?",
          buttons: [
            {
              label: "Si",
              onClick: () => {
                axios
                  .put(`/api/servicios`, data)
                  .then((res) => {
                    if (res.status === 200) {
                      toastr.success(
                        "El valor de Promocion N°1 se modifico con exito"
                      );

                      let accion = `Se actualizo el valor de Promocion N°1 del prestador codigo: ${codPres}, de $${prestador.PROMO1} a $${promo1Ref.current.value}.`;

                      registrarHistoria(accion, usu.usuario);

                      setTimeout(() => {
                        traerDetMedico(codPres);
                      }, 500);
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    toastr.error(
                      "Ocurrio un error al actualizar el valor de Promocion N°1"
                    );
                  });
              },
            },
            {
              label: "No",
              onClick: () => {
                toastr.info("El valor de Promocion N°1 no fue modificado");
              },
            },
          ],
        });
      }
    } else if (f === "P2") {
      if (promo2Ref.current.value === "") {
        toastr.warning(
          "Debes ingresar el nuevo valor de Promocion N°2",
          "ATENCION"
        );
      } else {
        let data = {
          COD_PRES: codPres,
          PROMO2: promo2Ref.current.value,
          f: "update promo2",
        };

        await confirmAlert({
          title: "ATENCION",
          message: "¿Seguro quieres modificar el valor de la Promocion N°2?",
          buttons: [
            {
              label: "Si",
              onClick: () => {
                axios
                  .put(`/api/servicios`, data)
                  .then((res) => {
                    if (res.status === 200) {
                      toastr.success(
                        "El valor de Promocion N°2 se modifico con exito"
                      );

                      let accion = `Se actualizo el valor de Promocion N°2 del prestador codigo: ${codPres}, de $${prestador.PROMO2} a $${promo2Ref.current.value}.`;

                      registrarHistoria(accion, usu.usuario);

                      setTimeout(() => {
                        traerDetMedico(codPres);
                      }, 500);
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    toastr.error(
                      "Ocurrio un error al actualizar el valor de la Promocion N°2"
                    );
                  });
              },
            },
            {
              label: "No",
              onClick: () => {
                toastr.info("El valor de Promocion N°2 no fue modificado");
              },
            },
          ],
        });
      }
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
              NOMBRE: nombreRef.current.value,
              MATRICULA: matriculaRef.current.value,
              DIRECCION: direccionRef.current.value,
              HORARIO1: horario1Ref.current.value,
              HORARIO2: horario2Ref.current.value,
              COD_PRES: prestador.COD_PRES,
              PROMO: prestador.PROMO,
              PROMO1: prestador.PROMO1,
              PROMO2: prestador.PROMO2,
              f: "update prestado",
            };

            if (promoEditRef.current.value === "0") {
              data.PROMO = false;
              data.PROMO1 = 0;
              data.PROMO2 = 0;
            } else if (promoEditRef.current.value === "1") {
              data.PROMO = true;
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

  const handlePromo = () => {
    console.log(promoRef.current.value);
    if (promoRef.current.value === "1") {
      guardarShowProm(true);
    } else if (promoRef.current.value === "0") guardarShowProm(false);
  };

  const nuCodigoPrest = () => {
    let nomCod = nuNombreRef.current.value;
    let espec = nuEspRef.current.value;

    console.log(espec.substr(4, 10));

    if (nomCod !== "") {
      if (espec.substr(4, 10) === "ENFERMERIA") {
        let id = uuid4().toString(nomCod);
        let cod = id.slice(0, 3);

        guardarNuCodPres(`E_${cod}`);
      } else if (espec.substr(4, 10) === "FARMACIA") {
        let id = uuid4().toString(nomCod);
        let cod = id.slice(0, 3);

        guardarNuCodPres(`F_${cod}`);
      } else {
        let id = uuid4().toString(nomCod);
        let cod = id.slice(0, 3);

        guardarNuCodPres(`C_${cod}`);
      }
    } else if (nomCod === "") {
      guardarNuCodPres("");
    }
  };

  const regPrest = async () => {
    guardarErrores(null);
    guardarAlertas(null);

    let espec = nuEspRef.current.value;

    let data = {
      COD_PRES: nuCodPres,
      NOMBRE: nuNombreRef.current.value,
      ESPEC: espec.substr(4, 10),
      LIS_ESPE: espec.substr(0, 4),
      SUC: "",
      DIRECCION: nuDireccionRef.current.value,
      LOCALIDAD: "",
      TELEFONOS: nuTelefonoRef.current.value,
      HORARIO1: nuHorario1Ref.current.value,
      HORARIO2: nuHorario2Ref.current.value,
      MODALIDAD: nuModalidadRef.current.value,
      AUSENTE: 0,
      CON_PAGA: nuCoseguroRef.current.value,
      ALTA: moment().format("YYYY-MM-DD"),
      OTERO: 0,
      PROMO: promoRef.current.value,
      LIQUIDACION: nuLiquidacionRef.current.value,
      PROMO1: "",
      PROMO2: "",
      f: "reg prestador",
    };

    if (nuSucRef.current.value === "S.S. DE JUJUY") {
      data.SUC = "W";
      data.LOCALIDAD = nuSucRef.current.value;
    } else if (nuSucRef.current.value === "OTERO") {
      data.SUC = "W";
      data.LOCALIDAD = nuSucRef.current.value;
      data.OTERO = 1;
    } else if (nuSucRef.current.value === "PALPALA") {
      data.SUC = "L";
      data.LOCALIDAD = nuSucRef.current.value;
    } else if (nuSucRef.current.value === "PERICO") {
      data.SUC = "R";
      data.LOCALIDAD = nuSucRef.current.value;
    } else if (nuSucRef.current.value === "EL CARMEN") {
      data.SUC = "C";
      data.LOCALIDAD = nuSucRef.current.value;
    } else if (nuSucRef.current.value === "SAN PEDRO") {
      data.SUC = "P";
      data.LOCALIDAD = nuSucRef.current.value;
    } else if (nuSucRef.current.value === "SAN MIGUEL") {
      data.SUC = "SM";
      data.LOCALIDAD = nuSucRef.current.value;
    }

    if (promoRef.current.value === "0") {
      data.PROMO = false;
      data.PROMO1 = 0;
      data.PROMO2 = 0;
    } else if (promoRef.current.value === "1") {
      data.PROMO = true;
      data.PROMO1 = nuPromo1Ref.current.value;
      data.PROMO2 = nuPromo2Ref.current.value;
    }

    if (data.SUC === "") {
      guardarErrores(
        "Debes seleccionar la Sucursal en donde atendera el prestador"
      );
    } else if (data.ESPEC === "") {
      guardarErrores("Debes seleccionar la especialidad del prestador");
    } else if (data.NOMBRE === "") {
      guardarErrores("Debes ingresar el Apellido y Nombre del prestador");
    } else if (data.DIRECCION === "") {
      guardarErrores("Debes ingresar la direccion de atention del prestador");
    } else if (data.HORARIO1 === "") {
      guardarErrores(
        "Debes ingresar al menos un horario de atencion del prestador"
      );
    } else if (data.MODALIDAD === "no") {
      guardarErrores("Debes seleccionar la modalidad de pago del prestador");
    } else if (data.PROMO === "no") {
      guardarErrores(
        "Debes seleccionar si el prestador trabajara con promociones"
      );
    } else if (data.PROMO === true && data.PROMO1 === "") {
      guardarErrores("Debes ingresar el valor de la primera promocion");
    } else if (data.PROMO === true && data.PROMO2 === "") {
      guardarErrores("Debes ingresar el valor de la segunda promocion");
    } else if (data.CON_PAGA === "") {
      guardarErrores("Debes ingresar el valor del coseguro");
    } else if (data.LIQUIDACION === "") {
      guardarErrores(
        "Debes ingresar el valor del honorario (liquidacion de ordenes)"
      );
    } else {
      await axios
        .get("/api/servicios", {
          params: {
            f: "check nu prest",
            codPres: data.COD_PRES,
          },
        })
        .then((res) => {
          if (res.data) {
            toastr.warning(
              `El prestador que estas intenando registrar, ya existe --> COD: ${res.data.COD_PRES}, PRESTADOR: ${res.data.NOMBRE}`
            );

            guardarAlertas(
              `El prestador que estas intenando registrar, ya existe --> COD: ${res.data.COD_PRES}, PRESTADOR: ${res.data.NOMBRE}`
            );
          } else {
            axios
              .post("/api/servicios", data)
              .then((res) => {
                if (res.status === 200) {
                  toastr.success(
                    "El prestador fue registrado correctamente",
                    "ATENCION"
                  );

                  let accion = `Se registro un nuevo prestador ${data.COD_PRES} - ${data.NOMBRE}, de especialidad ${data.ESPEC}. Coseguro: $${data.CON_PAGA}, Honorarios: $${data.LIQUIDACION}`;

                  registrarHistoria(accion, usu.usuario);

                  setTimeout(() => {
                    traerMedicos();
                  }, 500);
                }
              })
              .catch((error) => {
                console.log(error);
                toastr.error(
                  "Ocurrio un error al registrar el nuevo prestador",
                  "ATENCION"
                );
              });
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al chequear la existencia del codigo del prestador",
            "ATENCION"
          );
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
              liquidacionRef={liquidacionRef}
              promo1Ref={promo1Ref}
              promo2Ref={promo2Ref}
              prestador={prestador}
              practicasPres={practicasPres}
              nombreRef={nombreRef}
              matriculaRef={matriculaRef}
              direccionRef={direccionRef}
              horario1Ref={horario1Ref}
              horario2Ref={horario2Ref}
              updatePrestador={updatePrestador}
              guardarRow={guardarRow}
              promoEditRef={promoEditRef}
            />
          </Layout>

          <ModalActPractica
            row={row}
            nuevoImportePrac={nuevoImportePrac}
            actValorPractica={actValorPractica}
          />

          <ModalNuevoPrestador
            especialidades={especialidades}
            showProm={showProm}
            promoRef={promoRef}
            handlePromo={handlePromo}
            nuCodPres={nuCodPres}
            nuCodigoPrest={nuCodigoPrest}
            nuSucRef={nuSucRef}
            nuNombreRef={nuNombreRef}
            nuEspRef={nuEspRef}
            nuDireccionRef={nuDireccionRef}
            nuHorario1Ref={nuHorario1Ref}
            nuHorario2Ref={nuHorario2Ref}
            nuMatriculaRef={nuMatriculaRef}
            nuPromo1Ref={nuPromo1Ref}
            nuPromo2Ref={nuPromo2Ref}
            nuCoseguroRef={nuCoseguroRef}
            nuLiquidacionRef={nuLiquidacionRef}
            nuTelefonoRef={nuTelefonoRef}
            nuModalidadRef={nuModalidadRef}
            regPrest={regPrest}
            errores={errores}
            alertas={alertas}
          />
        </>
      ) : null}
    </>
  );
}

export default Administracion;
