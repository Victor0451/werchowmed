import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../config/config";
import { confirmAlert } from "react-confirm-alert";
import { registrarHistoria } from "../../utils/funciones";
import FormAdministracion from "../../components/servicios/FormAdministracion";

function Administracion(props) {
  let medicoRef = React.createRef();
  let consultaRef = React.createRef();

  const [user, guardarUsuario] = useState(null);
  const [usuc, guardarUsuc] = useState(null);
  const [medicos, guardarMedicos] = useState(null);
  const [codPres, guardarCodPres] = useState("");
  const [presImp, guardarPresImp] = useState(0);
  const [prestador, guardarPrestador] = useState([]);
  const [practicasPres, guardarPracticasPres] = useState([]);

  const traerMedicos = async (f) => {
    await axios
      .get(`${ip}api/sgi/servicios/traermedicostodos`)
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
  };

  const traerPracticas = async (id, lugar) => {
    axios
      .get(`${ip}api/sgi/servicios/traerpracticaspresador/${id}`, {
        params: {
          lugar: lugar,
        },
      })
      .then((res1) => {
        guardarPracticasPres(res1.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de practicas del prestador"
        );
      });
  };

  const handleChange = async () => {
    let ref = medicoRef.current.value;

    guardarCodPres(ref.substr(0, 5));
    guardarPresImp(ref.substr(6, 20));

    await axios
      .get(`${ip}api/sgi/servicios/traerprestador`, {
        params: {
          COD_PRES: ref.substr(0, 5),
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarPrestador(res.data[0]);

          let lugar = 0;

          if (res.data[0].LUGAR && res.data[0].LUGAR < 10) {
            lugar = `0${res.data[0].LUGAR}`;
            setTimeout(() => {
              traerPracticas(res.data[0].COD_PRES, lugar);
            }, 500);
          } else if (res.data[0].LUGAR && res.data[0].LUGAR >= 10) {
            lugar = res.data[0].LUGAR;
            setTimeout(() => {
              traerPracticas(res.data[0].COD_PRES, lugar);
            }, 500);
          } else if (!res.data[0].LUGAR || res.data[0].LUGAR === "") {
            toastr.info(
              "El prestador seleccionado, no posee practicas cargadas"
            );
          }
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer los datos del prestador");
      });
  };

  const updateConsulta = async () => {
    if (consultaRef.current.value === "") {
      toastr.warning(
        "Debes ingresar el nuevo valor de la consulta",
        "ATENCION"
      );
    } else {
      let data = {
        COD_PRES: codPres,
        CON_PAGA: consultaRef.current.value,
      };

      await confirmAlert({
        title: "ATENCION",
        message: "¿Seguro quieres modificar el valor de la consulta?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              axios
                .put(`${ip}api/sgi/servicios/updateconpaga`, data)
                .then((res) => {
                  console.log(res);
                  if (res.status === 200) {
                    toastr.success(
                      "El valor de la consulta se modifico con exito"
                    );

                    let accion = `Se actualizo el valor de la consulta del prestador codigo: ${codPres}, de $${presImp} a $${consultaRef.current.value}.`;

                    registrarHistoria(accion, user);

                    setTimeout(() => {
                      Router.reload();
                    }, 500);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toastr.error(
                    "Ocurrio un error al actualizar el valor de la consulta"
                  );
                });
            },
          },
          {
            label: "No",
            onClick: () => {
              toastr.info("El valor de la consulta no fue modificado");
            },
          },
        ],
      });
    }
  };

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
        guardarUsuc(userData.sucursal);
      }

      traerMedicos();
    }
  }, []);

  return (
    <Layout>
      <FormAdministracion
        medicos={medicos}
        medicoRef={medicoRef}
        handleChange={handleChange}
        presImp={presImp}
        updateConsulta={updateConsulta}
        consultaRef={consultaRef}
        prestador={prestador}
        practicasPres={practicasPres}
      />
    </Layout>
  );
}

export default Administracion;
