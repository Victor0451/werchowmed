import React, { useState, useEffect } from "react";
import GuestLinks from "./GuestLinks";
import AuthLinks from "./AuthLinks";
import jsCookies from "js-cookie";
import axios from "axios";
import { ip } from "../../config/config";
import toastr from "toastr";

const Navbar = ({ sucur }) => {
  const [userData, guardarUsuario] = useState({});
  const [msj, guardarMensajes] = useState(0);
  const [events, guardarEvents] = useState(0);

  useEffect(() => {
    let usuario = jsCookies.get("usuario");

    if (usuario) {
      let userData = JSON.parse(usuario);
      guardarUsuario(userData);

      // traerMensajes(userData.usuario);
      traerTareasSuc();
    }
  }, []);

  // const traerMensajes = async (id) => {
  //   await axios
  //     .get(`${ip}api/sgi/mails/listmsjsinleer/${id}`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         guardarMensajes(res.data.length);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toastr.error("Ocurrio un error al traer los mensajes", "ATENCION");
  //     });
  // };

  const traerTareasSuc = async (id) => {
    await axios
      .get(`${ip}api/sgi/tareas/traertareasopnl`)
      .then((res) => {
        if (res.status === 200) {
          guardarEvents(res.data.length);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{background: 'linear-gradient(90deg, #0065D1 0%, #003975 100%)'}}>
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          {!sucur ? (
            <a className="navbar-brand me-3" href="/home">
              <strong>Serv. Médicos</strong>
            </a>
          ) : (
            <a className="navbar-brand me-3" href="/home">
              <strong>Sucursal:</strong> {sucur === "W" ? "Casa Central" : sucur === "L" ? "Palpala" : sucur === "R" ? "Perico" : sucur === "C" ? "El Carmen" : sucur === "M" ? "Monterrico" : sucur === "P" ? "San Pedro" : sucur === "O" ? "Clínica Otero" : ""}
            </a>
          )}
        </div>

        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {userData.id ? (
            <AuthLinks userData={userData} msj={msj} events={events} />
          ) : (
            <GuestLinks />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
