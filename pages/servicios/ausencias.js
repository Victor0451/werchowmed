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
import FormRegAusencias from "../../components/servicios/FormRegAusencias";
import ListadoAusencias from "../../components/servicios/ListadoAusencias";

const Ausencias = () => {
  let medicoRef = React.createRef();
  let motivoRef = React.createRef();
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();
  let observacionRef = React.createRef();

  const [medicos, guardarMedicos] = useState(null);
  const [codPres, guardarCodPres] = useState("");
  const [nomPres, guardarNomPres] = useState("");
  const [errores, guardarErrores] = useState(null);
  const [listAusen, guardarAusen] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerMedicos = async (f) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "listado prestadores",
        },
      })
      .then((res) => {
        guardarMedicos(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de Especialidades",
          "ATENCION"
        );
      });

    await axios
      .get(`/api/servicios`, {
        params: {
          f: "listado ausencias",
        },
      })
      .then((res) => {
        guardarAusen(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de Ausencias",
          "ATENCION"
        );
      });
  };

  const handleChange = async () => {
    let ref = medicoRef.current.value;

    guardarCodPres(ref.substr(0, 5));
    guardarNomPres(ref.substr(6, 20));
  };

  const putAusencia = async (codPres) => {
    let data = {
      codPres: codPres,
      AUSENTE: 1,
      f: "act ausencia",
    };

    await axios
      .put(`/api/servicios`, data)
      .then((res) => {
        if (res.status === 200) {
          toastr.info("Prestador marcado como ausente");
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al marcar ausente en prestador");
      });
  };

  const regAusencia = async () => {
    let ausen = {
      prestador: nomPres,
      cod_pres: codPres,
      motivo: motivoRef.current.value,
      desde: desdeRef.current.value,
      hasta: hastaRef.current.value,
      observacion: observacionRef.current.value,
      estado: 1,
      operador: usu.usuario,
      f: "reg ausencia",
    };

    if (ausen.cod_pres === "") {
      guardarErrores("Debes seleccionar al prestador");
    } else if (ausen.motivo === "no") {
      guardarErrores("Debes seleccionar el motivo de la ausencia");
    } else if (ausen.desde === "") {
      guardarErrores("Debes seleccionar la fecha de inicio de la ausencia");
    } else if (ausen.hasta === "") {
      guardarErrores("Debes seleccionar la fecha de fin de la ausencia");
    } else if (ausen.desde > ausen.hasta) {
      guardarErrores("La fecha DESDE no puede ser mayor que la fecha HASTA.");
    } else {
      await axios
        .post(`/api/servicios`, ausen)
        .then((res) => {
          if (res.status === 200) {
            toastr.success(
              "Ausencia Justificada y registrada con exito",
              "ATENCION"
            );

            putAusencia(ausen.cod_pres);

            let accion = `Se registro ausencia del prestadro: ${
              ausen.cod_pres
            } - ${ausen.prestador}, por motivo de: ${
              ausen.motivo
            }. En el periodo de ${moment(ausen.desde).format(
              "DD/MM/YYYY"
            )} hasta ${moment(ausen.hasta).format("DD/MM/YYYY")}.`;

            registrarHistoria(accion, usu.usuario);

            traerMedicos();
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al registrar la ausencia", "ATENCION");
        });
    }
  };

  const imprimir = () => {
    let contenido = document.getElementById("list").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.replace("/servicios/ausencias");
  };

  useSWR("/api/servicios", traerMedicos);

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
            <FormRegAusencias
              medicos={medicos}
              medicoRef={medicoRef}
              motivoRef={motivoRef}
              desdeRef={desdeRef}
              hastaRef={hastaRef}
              observacionRef={observacionRef}
              handleChange={handleChange}
              errores={errores}
              regAusencia={regAusencia}
            />

            <ListadoAusencias listado={listAusen} imprimir={imprimir} />
          </Layout>
        </>
      ) : null}
    </>
  );
};

export default Ausencias;
