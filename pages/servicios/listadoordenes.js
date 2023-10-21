import React, { useState, useEffect } from "react";
import useUser from "../../hook/useUser";
import useWerchow from "../../hook/useWerchow";
import useSWR from "swr";
import Redirect from "../../components/auth/RedirectToLogin";
import { Skeleton } from "../../components/layout/Skeleton";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import ListadoOrdenesEmitidas from "../../components/servicios/ListadoOrdenesEmitidas";
import { confirmAlert } from "react-confirm-alert";

const listadoordenes = () => {
  const [listado, guardarListado] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerOrdenesEmitidas = async () => {
    if (usu) {
      await axios
        .get(`/api/servicios`, {
          params: {
            f: "listar ordenes",
            perfil: usu.perfil,
            usu: usu.usuario,
          },
        })
        .then((res) => {
          guardarListado(res.data);
          //toastr.success("Se trajeron las ordenes con exito", "ATENCION")
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al traer las ordenes", "ATENCION");
        });
    }
  };

  const push = (url, p1, p2, p3, flag) => {
    if (p3) {
      Router.push({
        pathname: url,
        query: {
          iduso: p1,
          dni: p2,
          orden: p3,
          flag: flag,
        },
      });
    } else {
      Router.push({
        pathname: url,
        query: {
          iduso: p1,
          dni: p2,
        },
      });
    }
  };

  const generarImpresion = (iduso, doc, orden, flag) => {
    push("/servicios/orden", iduso, doc, orden, flag);
  };

  const anularOrdenes = (orden, servicio, id) => {
    confirmAlert({
      title: "ANULACION DE ORDEN",
      message: "¿Estas seguro de anular esta orden?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            putAnuUso(orden, id);

            if (servicio !== "ORDE") {
              putAnuPract(orden, servicio);
            }
          },
        },
        {
          label: "No",
          onClick: () => {
            toastr.info("La orden emitida, no fue anulada", "ATENCION");
          },
        },
      ],
    });
  };

  const putAnuUso = async (orden, id) => {
    let data = {
      f: "anular orden",
      id: id,
    };

    await axios
      .put(`/api/servicios`, data)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("Se anulo la orden con exito", "ATENCION");
          traerOrdenesEmitidas();
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al anular la orden", "ATENCION");
      });
  };

  const putAnuPract = async (orden, servicio) => {
    let data = {
      f: "anular practica",
      orden: orden,
      servicio: servicio,
    };

    await axios
      .put(`/api/servicios`, data)
      .then((res) => {
        if (res.status === 200) {
          toastr.success(
            "Se anulo los items de la orden con exito",
            "ATENCION"
          );

          traerOrdenesEmitidas();
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al anular la orden", "ATENCION");
      });
  };

  useSWR(usu ? "/api/servicios" : null, traerOrdenesEmitidas);

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
            <ListadoOrdenesEmitidas
              listado={listado}
              generarImpresion={generarImpresion}
              anularOrdenes={anularOrdenes}
              user={usu.usuario}
              perfil={usu.perfil}
            />
          </Layout>
        </>
      ) : null}
    </>
  );
};

export default listadoordenes;
