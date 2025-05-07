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
import { confirmAlert } from "react-confirm-alert";
import FormPortalPrestador from "../../components/servicios/FormPortalPrestador";
import FormLoginPortal from "../../components/servicios/FormLoginPortal";

function PortalPrestador(props) {
  const [errores, guardarErrores] = useState(null);
  const [prestado, guardarPrestado] = useState([]);
  const [cookie, guardarCookie] = useState("");
  const [listado, guardarListado] = useState([]);

  let codPresRef = React.createRef();
  let fechaRef = React.createRef();

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const logPortal = async () => {
    let codPres = codPresRef.current.value;

    if (codPres === "") {
      guardarErrores("Ingresa tu codigo de prestador para ingresar");
    } else {
      await axios
        .get("/api/servicios", {
          params: {
            f: "traer detalle medico",
            prestado: codPres,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            jsCookie.set("codpres", res.data[0].COD_PRES);
            jsCookie.set("prestado", res.data[0]);

            guardarPrestado(res.data[0]);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error en verificar al prestador");
        });
    }
  };

  const cerrarSesion = () => {
    jsCookie.remove("prestado");
    jsCookie.remove("codpres");
    setTimeout(() => {
      Router.reload();
    }, 500);
  };

  const traerOrdenesDia = async () => {
    let fecha = fechaRef.current.value;

    if (fecha === "") {
      guardarErrores("Debes ingresar una fecha");
    } else {
      await axios
        .get("/api/servicios", {
          params: {
            f: "traer ordenes dia prestador",
            codpres: jsCookie.get("codpres"),
            fecha: fecha,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarListado(res.data);
          } else {
            toastr.info("No hay ordenes generadas en el dia seleccionado");
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al generar el listado de ordenes");
        });
    }
  };

  const atendido = async () => {
    await confirmAlert({
      title: "Atencion",
      message: "¿Seguro vas a marcar como atendida a esta orden?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            toastr.success("La orden fue marcada como atendida");
          },
        },
        {
          label: "No",
          onClick: () => {
            toastr.info("El estado de la orden no se a modificado");
          },
        },
      ],
    });
  };

  const imprimir = () => {
    let contenido = document.getElementById("list").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    Router.reload();
  };

  const traerDatos = () => {
    if (jsCookie.get("prestado")) {
      let pres = JSON.parse(jsCookie.get("prestado"));
      guardarPrestado(pres);
    }
  };

  useSWR("/api/servicios", traerDatos);

  return (
    <>
      <Layout f="nonav">
        {jsCookie.get("codpres") ? (
          <FormPortalPrestador
            prestado={prestado}
            cerrarSesion={cerrarSesion}
            listado={listado}
            fechaRef={fechaRef}
            traerOrdenesDia={traerOrdenesDia}
            imprimir={imprimir}
          />
        ) : !jsCookie.get("codpres") ? (
          <FormLoginPortal
            codPresRef={codPresRef}
            logPortal={logPortal}
            errores={errores}
          />
        ) : null}
      </Layout>
    </>
  );
}

export default PortalPrestador;
