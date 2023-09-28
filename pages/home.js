import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import jsCookie from "js-cookie";
import Router from "next/router";
import axios from "axios";
import { ip } from "../config/config";
import AccesosRapidos from "../components/home/AccesosRapidos";
import Calendario from "../components/servicios/Calendario";
import TurnosMedicosDelDia from "../components/servicios/TurnosMedicosDelDia";

const home = () => {
  const [listTurno, guardarListTurno] = useState([]);
  const [visitas, guardarVisitas] = useState([]);
  const [detVisi, guardarDetVisi] = useState(null);
  const [user, guardarUsuario] = useState(null);

  const traerTurnosDelDia = async () => {
    await axios
      .get(`${ip}api/sgi/servicios/turnosdeldia`)
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
  };

  const traerVisitas = async () => {
    await axios
      .get(` ${ip}api/sgi/servicios/traervisitas`)
      .then((res) => {
        let evs = res.data;

        let arr = [];

        for (let i = 0; i < evs.length; i++) {
          let evarr = {
            title: evs[i].title,
            allDay: evs[i].allDay,
            start: new Date(evs[i].start),
            end: new Date(evs[i].end),
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eventSelected = (eventInfo) => {
    guardarDetVisi(eventInfo);

    let myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
    myModal.show();
  };

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.perfil);
      }

      traerTurnosDelDia();
      traerVisitas();
    }
  }, []);

  return (
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
                <u>Calendario de visitas - PLan Ortodoncia</u>
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
      </div>

      <AccesosRapidos user={user} />
    </Layout>
  );
};

export default home;
