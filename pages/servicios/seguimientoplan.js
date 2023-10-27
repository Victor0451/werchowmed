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
import BuscarPlanOrtodoncia from "../../components/servicios/BuscarPlanOrtodoncia";
import DetallePlanSocio from "../../components/servicios/DetallePlanSocio";
import ModalReciboPagoVisita from "../../components/servicios/ModalReciboPagoVisita";

const seguimientoplan = () => {
  let socioRef = React.createRef();
  let pagoRef = React.createRef();

  const [errores, guardarErrores] = useState(null);
  const [plan, guardarPlan] = useState(null);
  const [planVisit, guardarPlanVisit] = useState(null);
  const [datVisi, guardarVisita] = useState([]);

  const traerPlanVisi = async (id, plan) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          plan: plan,
          id: id,
          f: "traer plan visitas",
        },
      })
      .then((res) => {
        if (res.data.length === 0) {
          toastr.error(
            "No se encuentra el plan de visitas del socio",
            "ATENCION"
          );

          guardarErrores("No se encuentra el plan de visitas del socio");
        } else {
          guardarPlanVisit(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error", "ATENCION");
      });
  };

  const traerPlan = async () => {
    guardarErrores(null);

    let socio = socioRef.current.value;

    if (socio === "") {
      guardarErrores("Debes ingresar el DNI o el numero de socio");
    } else {
      await axios
        .get(`/api/servicios`, {
          params: {
            f: "buscar plan",
            contrato: socio,
          },
        })
        .then((res) => {
          if (!res.data[0]) {
            axios
              .get(`/api/servicios`, {
                params: {
                  f: "buscar plan dni",
                  dni: socio,
                },
              })
              .then((res1) => {
                if (res1.data[0].length === 0) {
                  toastr.error("El socio no posee plan registrado", "ATENCION");

                  guardarErrores("El socio no posee plan registrado");
                } else {
                  guardarPlan(res1.data[0]);

                  traerPlanVisi(res1.data[0].idplansocio, res1.data[0].plan);
                }
              })
              .catch((error) => {
                console.log(error);
                toastr.error("Ocurrio un error", "ATENCION");
              });
          } else {
            guardarPlan(res.data[0]);

            traerPlanVisi(res.data[0].idplansocio, res.data[0].plan);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error", "ATENCION");
        });
    }
  };

  const updatePago = async (id, pag) => {
    if (pag > 0) {
      let pago = {
        pag: pag,
        id: id,
        f: "act pago visita",
      };

      await axios
        .put(`/api/servicios`, pago)
        .then((res) => {
          if (res.status === 200) {
            toastr.success("Pago impactado correctamente", "ATENCION");

            traerPlan();

            let accion = `Se registro cobranza de cuota del plan ID: ${plan.idplansocio}, para el socio: ${plan.contrato} - ${plan.socio}, dni: ${plan.dni}, por un total de ${pago.pag}`;

            registrarHistoria(accion, usu.usuario);

            if (plan.total > plan.pagado) {
              updatePlan(plan.idplansocio, pag);
            } else if (plan.total === plan.pagado) {
              toastr.info(
                "El plan esta cancelado, solo se cobran el valor por las visitas pactado por el/la DR/A",
                "ATENCION"
              );
            }
          }
        })
        .catch((error) => {
          console.log(error);

          toastr.error("Ocurrio un error al registrar el pago", "ATENCION");
        });
    } else if (pag === 0) {
      toastr.info(
        "Ingresa el monto acordado y volve a registrar el pago",
        "ATENCION"
      );
    }
  };

  const updatePlan = async (id, pag) => {
    let pago = {
      pag: pag,
      id: id,
      f: "act plan",
    };

    await axios
      .put(`/api/servicios`, pago)
      .then((res) => {
        if (res.status === 200) {
          toastr.info(
            "Valores del plan actualizados correctamente",
            "ATENCION"
          );
        }
      })
      .catch((error) => {
        console.log(error);

        toastr.error("Ocurrio un error al registrar el pago", "ATENCION");
      });
  };

  const checkPago = (row) => {
    if (row.pago === 0) {
      document.getElementById("frmpag").hidden = false;

      updatePago(row.idvisita, parseFloat(pagoRef.current.value));
    } else if (row.pago > 0) {
      document.getElementById("frmpag").hidden = true;

      updatePago(row.idvisita, row.pago);
    }
  };

  const datosVisita = (row) => {
    guardarVisita(null);

    guardarVisita(row);
  };

  const imprimir = () => {
    let contenido = document.getElementById("orden").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.replace("/servicios/seguimientoplan");
  };

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      <>
        {!usu ? (
          <Layout>
            <Redirect />
          </Layout>
        ) : usu ? (
          <>
            <Layout>
              <BuscarPlanOrtodoncia
                traerPlan={traerPlan}
                socioRef={socioRef}
                errores={errores}
              />

              {plan ? (
                <>
                  {planVisit ? (
                    <DetallePlanSocio
                      plan={plan}
                      planVisit={planVisit}
                      checkPago={checkPago}
                      pagoRef={pagoRef}
                      datosVisita={datosVisita}
                    />
                  ) : null}
                </>
              ) : null}

              {plan ? (
                <ModalReciboPagoVisita
                  plan={plan}
                  datVisi={datVisi}
                  imprimir={imprimir}
                />
              ) : null}
            </Layout>
          </>
        ) : null}
      </>
    </>
  );
};

export default seguimientoplan;
