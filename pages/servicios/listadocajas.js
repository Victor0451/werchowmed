import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import useUser from "../../hook/useUser";
import useWerchow from "../../hook/useWerchow";
import useSWR from "swr";
import Redirect from "../../components/auth/RedirectToLogin";
import { Skeleton } from "../../components/layout/Skeleton";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import ListadoCajasGeneradas from "../../components/caja/ListadoCajasGeneradas";
import ModalImprimirCaja from "../../components/caja/ModalImprimirCaja";
import Restringed from "../../components/auth/Restringed";

const ListadoCajas = () => {
  const [cajas, guardarCajas] = useState([]);
  const [ingresos, guardarIngresos] = useState(null);
  const [egresos, guardarEgresos] = useState(null);
  const [listControl, guardarListControl] = useState(null);
  const [fec, guardarFec] = useState(null);
  const [operadores, guardarOperadores] = useState([]);
  const [operadorSel, guardarOperadorSel] = useState("");
  const [loading, guardarLoading] = useState(0);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const tarerOperadores = async () => {
    await axios
      .get("/api/caja", {
        params: {
          f: "operadores",
        },
      })
      .then((res) => {
        guardarOperadores(res.data);
      })
      .catch((error) => {
        console.log(error);

        toastr.error(
          "Ocurrio un error al traer el listado de operadores",
          "ATENCION"
        );
      });
  };

  const traerCajas = async () => {
    guardarLoading(1);
    await axios
      .get(`/api/caja`, {
        params: {
          f: "listado cajas",
          operador: operadorSel,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarCajas(res.data);
          guardarLoading(2);
        } else {
          guardarLoading(3);
        }
      })
      .catch((error) => {
        console.log(error);

        toastr.error(
          "Ocurrio un error al traer el listado de cajas",
          "ATENCION"
        );
      });
  };

  const traerMovimientos = async (fecha, operador) => {
    guardarFec(fecha);

    await axios
      .get(`/api/caja`, {
        params: {
          f: "traer ingresos",
          fecha: fecha,
          operador: operador,
        },
      })
      .then((res) => {
        guardarIngresos(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer los ingresos", "ATENCION");
      });

    await axios
      .get(`/api/caja`, {
        params: {
          f: "traer egresos",
          fecha: fecha,
        },
      })
      .then((res) => {
        guardarEgresos(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer los egresos", "ATENCION");
      });
  };

  const traerListadoControl = async (fecha, operador) => {
    guardarFec(fecha);

    await axios
      .get(`/api/caja`, {
        params: {
          fecha: fecha,
          operador: operador,
          f: "traer listado de control",
        },
      })
      .then((res) => {
        guardarListControl(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de control",
          "ATENCION"
        );
      });
  };

  const calcTotal = (arr) => {
    let total = 0;

    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i].IMPORTE);
      }

      return total.toFixed(2);
    }
  };

  const imprimir = () => {
    let contenido = document.getElementById("caja").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.replace("/servicios/listadocajas");
  };

  const handleChange = async (f, value) => {
    if (f === "operador") {
      guardarOperadorSel(value);
    }
  };

  useSWR(usu ? "/api/caja" : null, tarerOperadores);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Layout>
          <Redirect />
        </Layout>
      ) : usu ? (
        <>
          {usu.perfil === 1 || usu.perfil === 3 ? (
            <Layout>
              <ListadoCajasGeneradas
                listado={cajas}
                traerMovimientos={traerMovimientos}
                traerListadoControl={traerListadoControl}
                operadores={operadores}
                handleChange={handleChange}
                traerCajas={traerCajas}
                loading={loading}
              />

              <ModalImprimirCaja
                ingresos={ingresos}
                egresos={egresos}
                calcTotal={calcTotal}
                imprimir={imprimir}
                listControl={listControl}
                fec={fec}
              />
            </Layout>
          ) : (
            <Layout>
              <Restringed />
            </Layout>
          )}
        </>
      ) : null}
    </>
  );
};

export default ListadoCajas;
