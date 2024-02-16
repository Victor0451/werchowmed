import React, { useContext, useEffect, useState } from "react";
import useUser from "../hook/useUser";
import useWerchow from "../hook/useWerchow";
import useSWR from "swr";
import { Skeleton } from "../components/layout/Skeleton";
import Layout from "../components/layout/Layout";
import Redirect from "../components/auth/RedirectToLogin";
import axios from "axios";
import AccesosRapidos from "../components/home/AccesosRapidos";
import Calendario from "../components/servicios/Calendario";
import TurnosMedicosDelDia from "../components/servicios/TurnosMedicosDelDia";
import moment from "moment";
import toastr from "toastr";
import AusenciasPrestadores from "../components/servicios/AusenciasPrestadores";
import jsCookie from "js-cookie";

const home = () => {
  const { isLoading } = useUser();
  const [listTurno, guardarListTurno] = useState([]);
  const [visitas, guardarVisitas] = useState([]);
  const [detVisi, guardarDetVisi] = useState(null);
  const [listAusen, guardarAusen] = useState([]);

  const traerInfo = async () => {
    await axios
      .get(`/api/turnos`, {
        params: {
          f: "turnos del dia",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarListTurno(res.data);
        } else if (res.data.length === 0) {
          toastr.info(
            "No hay turnos registrados para el dia de hoy",
            "ATENCION"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de turnos",
          "ATENCION"
        );
      });

    await axios
      .get(`/api/turnos`, {
        params: {
          f: "traer visitas planes",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          let evs = res.data;

          let arr = [];

          for (let i = 0; i < evs.length; i++) {
            let evarr = {
              title: evs[i].title,
              allDay: evs[i].allDay,
              start: moment(evs[i].start).format("YYYY-MM-DD"),
              end: moment(evs[i].end).format("YYYY-MM-DD"),
              nvisita: evs[i].nvisita,
              pago: evs[i].pago,
            };

            if (evarr.allDay === 1) {
              evarr.allDay = true;
            } else if (evarr.allDay === 0) {
              evarr.allDay = false;
            }

            arr.push(evarr);

            guardarVisitas(arr);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`/api/servicios`, {
        params: {
          f: "listado ausencias vigentes",
        },
      })
      .then((res) => {
        if (res.data.length !== 0) {
          if (usu) {
            parImpar(res.data, usu.perfil);
          }
        }

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

  const eventSelected = (eventInfo) => {
    guardarDetVisi(eventInfo);

    let myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
    myModal.show();
  };

  const mandarMail = (array) => {
    fetch("/api/mail/licencias", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(array),
    })
      .then((res) => {
        if (res.status === 200) {
          jsCookie.set("env", true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const parImpar = (arr, per) => {
    console.log(per);
    let numero = moment().format("DD");
    let f = jsCookie.get("env");

    if (per === 1 || per === 3) {
      if (!f || f === "false") {
        if (numero % 2 === 0 && arr.length > 0) {
          mandarMail(arr);
        }
      }
    }
  };

  const { usu } = useWerchow();

  useSWR("/api/turnos", traerInfo);

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
            <div className="container p-4 border border-dark list mt-4">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="mt-2 mb-4">
                    <strong>
                      <u>Sistema de Servicios Medicos</u>
                    </strong>
                  </h2>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                  <img src="/img/logo.png" className="mt-2 werchowlogo" />
                </div>
              </div>

              <div className="border border-dark mt-4 mb-4 p-2">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-6">
                    <h4>
                      <u>Calendario de visitas - Plan Ortodoncia</u>
                    </h4>
                  </div>

                  <div className="col-md-4">
                    <button
                      className="btn btn-block btn-primary mt-1"
                      data-toggle="collapse"
                      data-target="#collapseWidthExample"
                    >
                      Ver Turnos
                    </button>
                  </div>
                </div>

                <Calendario
                  eventSelected={eventSelected}
                  visitas={visitas}
                  detVisi={detVisi}
                />
              </div>

              <div className="border border-dark mt-4 mb-4 p-2">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-6">
                    <h4>
                      <u>Turnos Medicos del Dia</u>
                    </h4>
                  </div>

                  <div className="col-md-4">
                    <button
                      className="btn btn-block btn-primary mt-1"
                      data-toggle="collapse"
                      data-target="#collapseTurnosMedicos"
                    >
                      Ver Turnos
                    </button>
                  </div>
                  <TurnosMedicosDelDia listTurno={listTurno} />
                </div>
              </div>

              <div className="border border-dark mt-4 mb-4 p-2">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-6">
                    <h4>
                      <u>Prestadores con Licencia</u>
                    </h4>
                  </div>

                  <div className="col-md-4">
                    <button
                      className="btn btn-block btn-primary mt-1"
                      data-toggle="collapse"
                      data-target="#collapseAusenciasPrestadores"
                    >
                      Ver Licencias
                    </button>
                  </div>
                  <AusenciasPrestadores listado={listAusen} />
                </div>
              </div>
            </div>

            <AccesosRapidos usu={usu} />
          </Layout>
        </>
      ) : null}
    </>
  );
};

export default home;
