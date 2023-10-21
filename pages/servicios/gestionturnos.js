import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import useUser from "../../hook/useUser";
import useWerchow from "../../hook/useWerchow";
import useSWR from "swr";
import Redirect from "../../components/auth/RedirectToLogin";
import { Skeleton } from "../../components/layout/Skeleton";
import moment from "moment-timezone";
import axios from "axios";
import toastr from "toastr";
import { registrarHistoria } from "../../utils/funciones";
import FormGestionTurno from "../../components/servicios/FormGestionTurno";
import ListadoTurnosRegistrados from "../../components/servicios/ListadoTurnosRegistrados";
import ModalRegistrarTurno from "../../components/servicios/ModalRegistrarTurno";

const GestionTurnos = () => {
  let medicoRef = React.createRef();
  let diaRef = React.createRef();
  let turnoRef = React.createRef();
  let horaRef = React.createRef();
  let pacienteRef = React.createRef();
  let obraSocRef = React.createRef();
  let otraOSRef = React.createRef();
  let telefonoRef = React.createRef();
  let domicilioRef = React.createRef();
  let mailRef = React.createRef();

  const [medicos, guardarMedicos] = useState(null);
  const [listado, guardarListado] = useState([]);
  const [errores, guardarErrores] = useState(null);
  const [errores2, guardarErrores2] = useState(null);
  const [flag, guardarFlag] = useState(false);
  const [otroCamp, guardarOrtoCamp] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerMedicos = async (f) => {
    await axios
      .get(`/api/turnos`, {
        params: {
          f: "traer medicos otero",
        },
      })
      .then((res) => {
        guardarMedicos(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de medicos",
          "ATENCION"
        );
      });
  };

  const buscarListadoTurnos = async () => {
    guardarErrores(null);

    if (medicoRef.current.value === "no") {
      guardarErrores("Debes seleccionar un medico");
    } else if (diaRef.current.value === "") {
      guardarErrores("Debes seleccionar un dia");
    } else if (turnoRef.current.value === "no") {
      guardarErrores("Debes seleccionar un turno");
    } else {
      guardarFlag(true);

      await axios
        .get(`/api/turnos`, {
          params: {
            medico: medicoRef.current.value,
            dia: diaRef.current.value,
            turno: turnoRef.current.value,
            f: "buscar turno medico",
          },
        })
        .then((res) => {
          guardarListado(res.data);
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer el listado de Especialidades",
            "ATENCION"
          );
        });
    }
  };

  const registrarTurno = async () => {
    guardarErrores2(null);

    let turnoReg = {
      turno: turnoRef.current.value,
      fecha: moment(diaRef.current.value).format("YYYY-MM-DD"),
      hora: horaRef.current.value,
      doctor: medicoRef.current.value,
      paciente: pacienteRef.current.value,
      obra_soc: "",
      telefono: telefonoRef.current.value,
      domicilio: domicilioRef.current.value,
      mail: mailRef.current.value,
      operador: usu.usuario,
      estado: 0,
      f: "reg turno",
    };

    if (horaRef.current.value === "") {
      guardarErrores2("Debes ingresar una hora");
    } else if (pacienteRef.current.value === "") {
      guardarErrores2("Debes ingresar el apellido y nombre del paciente");
    } else {
      if (otroCamp === false) {
        turnoReg.obra_soc = obraSocRef.current.value;
      } else if (otroCamp === true) {
        turnoReg.obra_soc = otraOSRef.current.value;
      }

      await axios
        .post(`/api/turnos`, turnoReg)
        .then((res) => {
          if (res.status === 200) {
            toastr.success("Se registro el turno correctamente", "ATENCION");

            let accion = `Se registro turno del paciente: ${turnoReg.paciente}, para el DR/DRA: ${turnoReg.doctor} para el dia: ${turnoReg.fecha} - ${turnoReg.hora}`;

            registrarHistoria(accion, usu.usuario);

            buscarListadoTurnos();
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al registrar el turno", "ATENCION");
        });
    }
  };

  const usaWerchow = (flag) => {
    if (flag === "si") {
      setTimeout(() => {
        document.getElementById("obrasoc").value = "WERCHOW";
        document.getElementById("obrasoc").readOnly = true;
      }, 200);
    } else if (flag === "no") {
      setTimeout(() => {
        document.getElementById("obrasoc").readOnly = false;
        document.getElementById("obrasoc").value = "";
      }, 200);
    }
  };

  const estadoTurno = async (flag, id) => {
    let data = {
      estado: 0,
      f: "cambiar estado turno",
      idturno: id,
    };
    if (flag === "si") {
      data.estado = 1;

      await axios
        .put(`/api/turnos`, data)
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            toastr.success(
              "El estado del turno se cambio con exito",
              "ATENCION"
            );

            buscarListadoTurnos();
          }
        })
        .catch((error) => {
          console.log(error);

          toastr.error(
            "Ocurrio un error al cambiar el estado del turno",
            "ATENCION"
          );
        });
    } else if (flag === "no") {
      data.estado = 2;
      await axios
        .put(`/api/turnos`, data)
        .then((res) => {
          if (res.status === 200) {
            toastr.success(
              "El estado del turno se cambio con exito",
              "ATENCION"
            );

            buscarListadoTurnos();
          }
        })
        .catch((error) => {
          console.log(error);

          toastr.error(
            "Ocurrio un error al cambiar el estado del turno",
            "ATENCION"
          );
        });
    }
  };

  const handleChange = () => {
    let os = obraSocRef.current.value;

    if (os === "OTRA") {
      guardarOrtoCamp(true);
    } else {
      guardarOrtoCamp(false);
    }
  };

  useSWR("/api/turnos", traerMedicos);

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
            <FormGestionTurno
              medicos={medicos}
              medicoRef={medicoRef}
              diaRef={diaRef}
              turnoRef={turnoRef}
              errores={errores}
              buscarListadoTurnos={buscarListadoTurnos}
            />

            {flag === true ? (
              <ListadoTurnosRegistrados
                listado={listado}
                estadoTurno={estadoTurno}
              />
            ) : flag === false ? null : null}

            <ModalRegistrarTurno
              horaRef={horaRef}
              pacienteRef={pacienteRef}
              obraSocRef={obraSocRef}
              otraOSRef={otraOSRef}
              telefonoRef={telefonoRef}
              domicilioRef={domicilioRef}
              mailRef={mailRef}
              registrarTurno={registrarTurno}
              errores={errores2}
              usaWerchow={usaWerchow}
              handleChange={handleChange}
              otroCamp={otroCamp}
            />
          </Layout>
        </>
      ) : null}
    </>
  );
};

export default GestionTurnos;
