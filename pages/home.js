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
import Router from "next/router";

const home = () => {
  const { isLoading, user } = useUser();
  const usu = user;

  const [listTurno, guardarListTurno] = useState([]);
  const [visitas, guardarVisitas] = useState([]);
  const [detVisi, guardarDetVisi] = useState(null);
  const [listAusen, guardarAusen] = useState([]);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(false);

  const traerInfo = async () => {
    if (!jsCookie.get("sucur")) {
      toastr.error("NO TIENES SUCURSAL SELECCIONADA, INICIA SESION NUEVAMENTE");

      jsCookie.remove("token");
      jsCookie.remove("usuario");

      setTimeout(() => {
        Router.push("/");
      }, 1500);
    } else {
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
    }
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

  // Check if user is authenticated via cookies
  const isAuthenticated = () => {
    return jsCookie.get("usuario") && jsCookie.get("token");
  };

  useSWR(isAuthenticated() && usu ? "/api/turnos" : null, traerInfo);

  // Welcome banner for version 6.0
  useEffect(() => {
    const welcomeShown = localStorage.getItem("v6_welcome_shown");

    if (!isAuthenticated() && !welcomeShown);
    {
      // Add a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        setShowWelcomeBanner(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseBanner = () => {
    setShowWelcomeBanner(false);
    localStorage.setItem("v6_welcome_shown", "true");
  };

  if (isLoading === true) return <Skeleton />;
  else if (!isAuthenticated())
    return (
      <Layout>
        <Redirect />
      </Layout>
    );
  else if (!usu)
    // Wait for user context to load
    return <Skeleton />;
  else
    return (
      <>
        <>
          <Layout>
            <div
              className="container-fluid p-4 min-vh-100"
              style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
              }}
            >
              <div className="row mb-4">
                <div className="col-md-8">
                  <h1 className="text-primary fw-bold">
                    Sistema de Servicios Médicos
                  </h1>
                </div>
                <div className="col-md-4 text-end">
                  <img src="/img/logo.png" className="werchowlogo" alt="Logo" />
                </div>
              </div>

              {/* Welcome Banner Version 6.0 */}
              {showWelcomeBanner && (
                <div
                  className="alert alert-primary alert-dismissible fade show shadow-sm mb-4 border-0"
                  role="alert"
                  style={{
                    background:
                      "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                    color: "white",
                    animation: "pulse 2s infinite",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <i
                      className="fa fa-star fa-2x me-3"
                      style={{ animation: "spin 3s linear infinite" }}
                    ></i>
                    <div className="flex-grow-1">
                      <h5 className="alert-heading mb-1">
                        <strong>¡Bienvenido a la Versión 6.0!</strong>
                      </h5>
                      <p className="mb-2">
                        <strong>
                          Sistema de Emisión de Órdenes Médicas - Renovado y
                          Modernizado
                        </strong>
                      </p>
                      <div className="row g-2">
                        <div className="col-md-6">
                          <small>
                            <i className="fa fa-palette me-1"></i>
                            Interfaz completamente renovada con Bootstrap 5
                          </small>
                        </div>
                        <div className="col-md-6">
                          <small>
                            <i className="fa fa-mobile me-1"></i>
                            Diseño responsive y optimización móvil
                          </small>
                        </div>
                        <div className="col-md-6">
                          <small>
                            <i className="fa fa-print me-1"></i>
                            Impresión profesional de documentos médicos
                          </small>
                        </div>
                        <div className="col-md-6">
                          <small>
                            <i className="fa fa-shield me-1"></i>
                            Mejor seguridad y validaciones robustas
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={handleCloseBanner}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="card shadow">
                    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">
                        Calendario de Visitas - Plan Ortodoncia
                      </h5>
                      <button
                        className="btn btn-light btn-sm"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseWidthExample"
                      >
                        Ver Turnos
                      </button>
                    </div>
                    <div className="card-body">
                      <Calendario
                        eventSelected={eventSelected}
                        visitas={visitas}
                        detVisi={detVisi}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card shadow">
                    <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Turnos Médicos del Día</h5>
                      <button
                        className="btn btn-light btn-sm"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTurnosMedicos"
                      >
                        Ver Turnos
                      </button>
                    </div>
                    <div className="card-body">
                      <TurnosMedicosDelDia listTurno={listTurno} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card shadow">
                    <div className="card-header bg-warning text-dark d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Prestadores con Licencia</h5>
                      <button
                        className="btn btn-light btn-sm"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseAusenciasPrestadores"
                      >
                        Ver Licencias
                      </button>
                    </div>
                    <div className="card-body">
                      <AusenciasPrestadores listado={listAusen} />
                    </div>
                  </div>
                </div>
              </div>
              <AccesosRapidos usu={usu} />
            </div>
          </Layout>
        </>
      </>
    );
};

export default home;
