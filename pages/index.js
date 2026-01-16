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
  let SucursalRef = React.createRef();

  const [errores, guardarErrores] = useState(false);
  const [alertas, guardarAlertas] = useState(null);

  const iniciarSesion = async () => {
    guardarErrores(null);
    let usuario = usuarioRef.current.value;
    let contrasena = contrasenaRef.current.value;
    let sucur = SucursalRef.current.value;

    if (usuario === "") {
      guardarErrores("Debes ingresar un nombre de usuario");
    } else if (contrasena === "") {
      guardarErrores("Debes ingresar una contraseña");
    } else if (sucur === "no") {
      guardarErrores(
        "Debes seleccionar la sucursal en la que estas trabajando"
      );
    } else {
      jsCookie.set("sucur", sucur, { expires: 1 });

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
          if (res.data.user.medicos === 1) {
            let user = JSON.stringify(res.data.user);
            jsCookie.set("token", res.data.token, { expires: 1 });
            jsCookie.set("usuario", user, { expires: 1 });
            Router.push("/home");
          } else if (res.data.user.medicos === 0) {
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
        SucursalRef={SucursalRef}
        errores={errores}
        iniciarSesion={iniciarSesion}
        alertas={alertas}
      />
    </Layout>
  );
};

export default Login;
