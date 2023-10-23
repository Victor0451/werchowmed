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
  let fechaRef = React.createRef();

  const [listado, guardarListado] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [resu, guardarResu] = useState(false);

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

  const ordenesDelDia = async () => {
    let fecha = fechaRef.current.value;

    if (fecha === "") {
      guardarErrores("Debes seleccionar la fecha a consultar");
    } else {
      await axios
        .get(`/api/caja`, {
          params: {
            fecha: fecha,
            operador: usu.usuario,
            f: "traer listado de control",
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarListado(res.data);
            guardarResu(true);
          } else {
            toastr.info("No hay ordenes registradas en el dia seleccionado");
            guardarListado([]);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al traer el listado de control");
        });
    }
  };
  const totalImporte = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += parseFloat(arr[i].IMPORTE);
    }

    return total.toFixed(2);
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
              fechaRef={fechaRef}
              ordenesDelDia={ordenesDelDia}
              errores={errores}
              resu={resu}
              listado={listado}
              totalImporte={totalImporte}
              guardarResu={guardarResu}
              traerOrdenesEmitidas={traerOrdenesEmitidas}
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
