import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import LoginUsuario from "../components/auth/LoginUsuario";
import axios from "axios";
import Router from "next/router";
import jsCookie from "js-cookie";
import { ip } from "../config/config";
import toastr from "toastr";

// Validaciones
import useValidacion from "../hooks/useValidacion";
import validarIniciarSession from "../validacion/validarIniciarSession";

const STATE_INICIAL = {
  usuario: "",
  contrasena: "",
};

const Login = () => {
  const [error, guardarError] = useState(false);
  const [alertas, guardarAlertas] = useState(null);

  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validarIniciarSession, iniciarSession);

  const { usuario, contrasena } = valores;

  async function iniciarSession() {
    try {
      //headers
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //Req body

      const body = JSON.stringify({ usuario, contrasena });

      await axios.post(`${ip}api/sgi/auth/auth`, body, config).then((res) => {
        const usuario = res.data.user;

        if (usuario.medicos === 1) {
          jsCookie.set("token", res.data.token);
          jsCookie.set("usuario", usuario);

          Router.push("/home");
        } else if (usuario.medicos === 0) {
          toastr.info(
            "No tienes autorizacion para acceder al sistema de servicios medicos"
          );
          guardarAlertas(
            "No tienes autorizacion para acceder al sistema de servicios medicos"
          );
        }
      });
    } catch (error) {
      console.log(error, error.response.status, "LOGIN_FAIL");
      guardarError(error.response.data.msg);
    }
  }

  let token = jsCookie.get("token");

  if (token) {
    Router.push("/home");
  }

  return (
    <Layout>
      <LoginUsuario
        usuario={usuario}
        contrasena={contrasena}
        errores={errores}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        error={error}
        alertas={alertas}
      />
    </Layout>
  );
};

export default Login;
