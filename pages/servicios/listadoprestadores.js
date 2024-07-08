import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Skeleton } from "../../components/layout/Skeleton";
import useUser from "../../hook/useUser";
import useWerchow from "../../hook/useWerchow";
import useSWR from "swr";
import Redirect from "../../components/auth/RedirectToLogin";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../config/config";
import { confirmAlert } from "react-confirm-alert";
import { registrarHistoria } from "../../utils/funciones";
import ListadoPrestadores from "../../components/servicios/ListadoPrestadores";

const listadoprestadores = () => {
  const [prestadores, guardarPrestadores] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerPrestadores = async (f) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "list info prestadores",
        },
      })
      .then((res) => {
        guardarPrestadores(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de Medicos",
          "ATENCION"
        );
      });
  };

  useSWR("/api/servicios", traerPrestadores);

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
            <ListadoPrestadores listado={prestadores} />
          </Layout>
        </>
      ) : null}
    </>
  );
};

export default listadoprestadores;
