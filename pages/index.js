import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import LoginUsuario from "../components/auth/LoginUsuario";
import axios from "axios";
import Router from "next/router";
import jsCookie from "js-cookie";
import toastr from "toastr";

const Login = () => {
  let usuarioRef = React.createRef();
  let contrasenaRef = React.createRef();

  const [errores, guardarErrores] = useState(false);
  const [alertas, guardarAlertas] = useState(null);

  const iniciarSesion = async () => {
    guardarErrores(null);
    let usuario = usuarioRef.current.value;
    let contrasena = contrasenaRef.current.value;

    if (usuario === "") {
      guardarErrores("Debes ingresar un nombre de usuario");
    } else if (contrasena === "") {
      guardarErrores("Debes ingresar una contraseña");
    } else {
      try {
        //headers
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        //Req body

        const body = {
          usuario: usuario,
          contrasena: contrasena,
          f: "login",
        };

        await axios.post(`/api/auth`, body, config).then((res) => {
          if (res.data.user.medicos === true) {
            let user = JSON.stringify(res.data.user);
            jsCookie.set("token", res.data.token);
            jsCookie.set("usuario", user);
            Router.push("/home");
          } else if (res.data.user.medicos === false) {
            toastr.info(
              "No tienes autorizacion para acceder al sistema de servicios medicos"
            );
            guardarAlertas(
              "No tienes autorizacion para acceder al sistema de servicios medicos"
            );
          }
        });
      } catch (error) {
        if (error.response.status && error.response.status === 400) {
          guardarErrores(error.response.data.msg);
        } else {
          console.log(error, "LOGIN_FAIL");
        }
      }
    }
  };
  let token = jsCookie.get("token");

  if (token) {
    Router.push("/home");
  }

  return (
    <Layout>
      <LoginUsuario
        usuarioRef={usuarioRef}
        contrasenaRef={contrasenaRef}
        errores={errores}
        iniciarSesion={iniciarSesion}
        alertas={alertas}
      />
    </Layout>
  );
};

export default Login;
