import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Redirect from "../../components/auth/RedirectToLogin";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import ImpReciboPlan from "../../components/servicios/ImpReciboPlan";

const reciboplan = () => {
  const [planSocio, guardarPlanSocio] = useState(null);

  let token = jsCookie.get("token");
  let router = useRouter();

  const traerPlan = async (id) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer plan orto",
          id: id,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          guardarPlanSocio(res.data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer el plan", "ATENCION");
      });
  };

  const imprimir = () => {
    let contenido = document.getElementById("orden").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.replace("/servicios/emision");
  };

  if (router.query.id) {
    jsCookie.set("idplan", router.query.id);
  }

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let id = jsCookie.get("idplan");

      traerPlan(id);
    }
  }, []);

  return (
    <Layout>
      <div id="orden">
        <ImpReciboPlan planSocio={planSocio} />
      </div>

      <div className=" container list mt-4 border border-dark p-4">
        <h3>
          <strong>
            <u>Opciones</u>
          </strong>
        </h3>
        <div className="row border border-dark p-4 mt-4">
          <div className="col-md-12 d-flex justify-content-center">
            <button className=" btn btn-primary " onClick={() => imprimir()}>
              Imprimir
            </button>
            <a
              className="ml-1 btn btn-secondary "
              href="/servicios/listadoordenes"
            >
              Listado De Ordenes
            </a>
            <a className="ml-1 btn btn-success " href="/servicios/emision">
              Generar Orden
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default reciboplan;
