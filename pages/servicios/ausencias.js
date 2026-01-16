import React, { useState, useEffect } from "react";
import useUser from "../../hook/useUser";
import useWerchow from "../../hook/useWerchow";
import useSWR from "swr";
import { Skeleton } from "../../components/layout/Skeleton";
import Layout from "../../components/layout/Layout";
import Redirect from "../../components/auth/RedirectToLogin";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { registrarHistoria } from "../../utils/funciones";
import moment from "moment";
import FormRegAusencias from "../../components/servicios/FormRegAusencias";
import ListadoAusencias from "../../components/servicios/ListadoAusencias";
import { confirmAlert } from "react-confirm-alert";

const Ausencias = () => {
  let medicoRef = React.createRef();
  let motivoRef = React.createRef();
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();
  let observacionRef = React.createRef();

  const [medicos, guardarMedicos] = useState(null);
  const [codPres, guardarCodPres] = useState("");
  const [nomPres, guardarNomPres] = useState("");
  const [errores, guardarErrores] = useState(null);
  const [listAusen, guardarAusen] = useState([]);

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

    await axios
      .get(`/api/servicios`, {
        params: {
          f: "listado ausencias",
        },
      })
      .then((res) => {
        guardarAusen(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de Ausencias",
          "ATENCION"
        );
      });
  };

  const handleChange = async () => {
    let ref = medicoRef.current.value;

    guardarCodPres(ref.substr(0, 5));
    guardarNomPres(ref.substr(6, 20));
  };

  const putAusencia = async (codPres) => {
    let data = {
      codPres: codPres,
      AUSENTE: 1,
      f: "act ausencia",
    };

    await axios
      .put(`/api/servicios`, data)
      .then((res) => {
        if (res.status === 200) {
          toastr.info("Prestador marcado como ausente");
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al marcar ausente en prestador");
      });
  };

  const regAusencia = async () => {
    let ausen = {
      prestador: nomPres,
      cod_pres: codPres,
      motivo: motivoRef.current.value,
      desde: desdeRef.current.value,
      hasta: hastaRef.current.value,
      observacion: observacionRef.current.value,
      estado: 1,
      operador: usu.usuario,
      f: "reg ausencia",
    };

    if (ausen.cod_pres === "") {
      guardarErrores("Debes seleccionar al prestador");
    } else if (ausen.motivo === "no") {
      guardarErrores("Debes seleccionar el motivo de la ausencia");
    } else if (ausen.desde === "") {
      guardarErrores("Debes seleccionar la fecha de inicio de la ausencia");
    } else if (ausen.hasta === "") {
      guardarErrores("Debes seleccionar la fecha de fin de la ausencia");
    } else if (ausen.desde > ausen.hasta) {
      guardarErrores("La fecha DESDE no puede ser mayor que la fecha HASTA.");
    } else {
      await confirmAlert({
        title: "ATENCION",
        message: "¿Estas seguro de registrar la ausencia del prestador?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              axios
                .post(`/api/servicios`, ausen)
                .then((res) => {
                  if (res.status === 200) {
                    toastr.success(
                      "Ausencia Justificada y registrada con exito",
                      "ATENCION"
                    );

                    putAusencia(ausen.cod_pres);

                    let accion = `Se registro ausencia del prestadro: ${
                      ausen.cod_pres
                    } - ${ausen.prestador}, por motivo de: ${
                      ausen.motivo
                    }. En el periodo de ${moment(ausen.desde).format(
                      "DD/MM/YYYY"
                    )} hasta ${moment(ausen.hasta).format("DD/MM/YYYY")}.`;

                    registrarHistoria(accion, usu.usuario);

                    traerMedicos();
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toastr.error(
                    "Ocurrio un error al registrar la ausencia",
                    "ATENCION"
                  );
                });
            },
          },
          {
            label: "No",
            onClick: () => {
              toastr.info("Accion cancelada, la ausencia no fue registrada.");
            },
          },
        ],
      });
    }
  };

  const imprimir = () => {
    let contenido = document.getElementById("list").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.replace("/servicios/ausencias");
  };

  const reincorporarAusencia = async (row) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Estas seguro de reincorporar al prestador seleccionado?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let ausen = {
              idausencia: row.idausencia,
              estado: 0,
              f: "rein ausencia",
            };

            axios
              .put(`/api/servicios`, ausen)
              .then((res) => {
                if (res.status === 200) {
                  toastr.success(
                    "Prestador reincorporado con exito",
                    "ATENCION"
                  );

                  let accion = `Se registro la reincorporacion del prestadro: ${row.cod_pres} - ${row.prestador}.`;

                  registrarHistoria(accion, usu.usuario);

                  traerMedicos();
                }
              })
              .catch((error) => {
                console.log(error);
                toastr.error(
                  "Ocurrio un error al registrar la ausencia",
                  "ATENCION"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toastr.info(
              "Accion cancelada, el estado de la ausencia no cambio."
            );
          },
        },
      ],
    });
  };

  const eliminarAusencia = async (row) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Estas seguro de eliminar este registro?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete(`/api/servicios`, {
                params: {
                  idausencia: row.idausencia,
                  f: "dele ausencia",
                },
              })
              .then((res) => {
                if (res.status === 200) {
                  toastr.success("Registro eliminada", "ATENCION");

                  let accion = `Se elimino el siguiente registro: "Ausencia del prestadro: ${
                    row.cod_pres
                  } - ${row.prestador}, por motivo de: ${
                    row.motivo
                  }. En el periodo de ${moment(row.desde).format(
                    "DD/MM/YYYY"
                  )} hasta ${moment(row.hasta).format("DD/MM/YYYY")}".`;

                  registrarHistoria(accion, usu.usuario);

                  traerMedicos();
                }
              })
              .catch((error) => {
                console.log(error);
                toastr.error(
                  "Ocurrio un error al registrar la ausencia",
                  "ATENCION"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toastr.info("Accion cancelada, el registro no fue eliminado.");
          },
        },
      ],
    });
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
            <div
              className="container-fluid p-4 min-vh-100"
              style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
              }}
            >
              <div className="row mb-4">
                <div className="col-12">
                  <h1 className="text-primary fw-bold">
                    <i className="fa fa-user-times me-3"></i>
                    Gestión de Ausencias
                  </h1>
                </div>
              </div>

              <FormRegAusencias
                medicos={medicos}
                medicoRef={medicoRef}
                motivoRef={motivoRef}
                desdeRef={desdeRef}
                hastaRef={hastaRef}
                observacionRef={observacionRef}
                handleChange={handleChange}
                errores={errores}
                regAusencia={regAusencia}
              />

              <ListadoAusencias
                listado={listAusen}
                imprimir={imprimir}
                reincorporarAusencia={reincorporarAusencia}
                eliminarAusencia={eliminarAusencia}
              />
            </div>
          </Layout>
        </>
      ) : null}
    </>
  );
};

export default Ausencias;
