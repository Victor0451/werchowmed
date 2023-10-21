import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import ImpOrdenConsulta from "../../components/servicios/ImpOrdenConsulta";

const Orden = () => {
  const [orden, guardarOrden] = useState(null);
  const [socio, guardarSocio] = useState(null);
  const [medico, guardarMedico] = useState(null);
  const [practicas, guardarPracticas] = useState([]);
  const [farmacia, guardarFarmacia] = useState([]);
  const [farmaNom, guardarFarmaNom] = useState([]);
  const [enfermeria, guardarEnfermeria] = useState([]);

  let token = jsCookie.get("token");
  let router = useRouter();

  const traerSocio = async (dni) => {
    await axios
      .get(`/api/socios`, {
        params: {
          f: "maestro",
          dni: dni,
        },
      })
      .then((res) => {
        if (res.data[0]) {
          guardarSocio(res.data[0]);
        } else if (!res.data[0]) {
          axios
            .get(`/api/socios`, {
              params: {
                f: "mutual",
                dni: dni,
              },
            })
            .then((resM) => {
              if (resM.data[0]) {
                guardarSocio(resM.data[0]);
              } else if (!resM.data[0]) {
                axios
                  .get(`/api/socios`, {
                    params: {
                      f: "mae adh",
                      dni: dni,
                    },
                  })
                  .then((resA) => {
                    if (resA.data[0]) {
                      guardarSocio(resA.data[0]);
                    } else if (!resA.data[0]) {
                      axios
                        .get(`/api/socios`, {
                          params: {
                            f: "mut adh",
                            dni: dni,
                          },
                        })
                        .then((resAM) => {
                          if (resAM.data[0]) {
                            guardarSocio(resAM.data[0]);
                          } else if (!resAM.data[0]) {
                            axios
                              .get(`/api/servicios`, {
                                params: {
                                  f: "traer adh provi dni",
                                  dni: dni,
                                },
                              })
                              .then((resAP) => {
                                if (resAP.data.length > 0) {
                                  guardarSocio(resAP.data[0]);
                                } else {
                                  toastr.warning(
                                    "No se encuentra el beneficiario",
                                    "ATENCION"
                                  );
                                }
                              })
                              .catch((error) => {
                                console.log(error);
                                toastr.error(
                                  "Ocurrio un error al traer al socio",
                                  "ATENCION"
                                );
                              });
                          }
                        })
                        .catch((error) => {
                          console.log(error);
                          toastr.error(
                            "Ocurrio un error al traer al socio",
                            "ATENCION"
                          );
                        });
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    toastr.error(
                      "Ocurrio un error al traer al socio",
                      "ATENCION"
                    );
                  });
              }
            })
            .catch((error) => {
              console.log(error);
              toastr.error("Ocurrio un error al traer al socio", "ATENCION");
            });
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer al socio", "ATENCION");
      });
  };

  const traerOrden = async (iduso) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          iduso: iduso,
          f: "traer uso",
        },
      })
      .then((res) => {
        if (res.data[0]) {
          guardarOrden(res.data[0]);

          traerMedico(res.data[0].PRESTADO);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer la orden", "ATENCION");
      });
  };

  const traerMedico = async (id) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          prestado: id,
          f: "traer detalle medico",
        },
      })
      .then((res) => {
        guardarMedico(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer el Medico", "ATENCION");
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

  const traerPracticas = async (orden) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer practicas",
          orden: orden,
        },
      })
      .then((res) => {
        guardarPracticas(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer las practicas", "ATENCION");
      });
  };

  const tarerFarmaNom = async (farma) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          farma: farma,
          f: "traer nombre farmacia",
        },
      })
      .then((res) => {
        guardarFarmaNom(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer la orden de farmacia",
          "ATENCION"
        );
      });
  };

  const traerFarmacia = async (orden) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          orden: orden,
          f: "traer farmacia",
        },
      })
      .then((res) => {
        guardarFarmacia(res.data);

        if (res.data[0].DESTINO) {
          tarerFarmaNom(res.data[0].DESTINO);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer la orden de farmacia",
          "ATENCION"
        );
      });
  };

  const traerEnfermeria = async (orden) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer enfermeria orden",
          orden: orden,
        },
      })
      .then((res) => {
        console.log(res.data);
        guardarEnfermeria(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer la orden de enfermeria",
          "ATENCION"
        );
      });
  };

  const calcularTotalPracticas = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += parseFloat(arr[i].IMPORTE);
    }

    return total.toFixed(2);
  };

  if (router.query.dni) {
    jsCookie.set("dnio", router.query.dni);
    jsCookie.set("idusoo", router.query.iduso);
    jsCookie.set("ordeno", router.query.orden);
    jsCookie.set("fo", router.query.f);
  }

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let dni = jsCookie.get("dnio");
      let iduso = jsCookie.get("idusoo");
      let orden = jsCookie.get("ordeno");
      let f = jsCookie.get("fo");

      traerSocio(dni);
      traerOrden(iduso);

      if (orden) {
        if (f && f === "F") {
          setTimeout(() => {
            traerFarmacia(orden);
          }, 500);
        } else if (f && f === "E") {
          setTimeout(() => {
            traerEnfermeria(orden);
          }, 500);
        } else if (f && f === "P") {
          setTimeout(() => {
            traerPracticas(orden);
          }, 500);
        }
      }
    }
  }, []);

  return (
    <Layout>
      <div id="orden">
        <ImpOrdenConsulta
          socio={socio}
          orden={orden}
          medico={medico}
          practicas={practicas}
          farmacia={farmacia}
          farmaNom={farmaNom}
          enfermeria={enfermeria}
          calcularTotalPracticas={calcularTotalPracticas}
          flag={router.query.flag}
        />
      </div>

      <div className=" container list mt-4 border border-dark p-4">
        <h3>
          <strong>
            <u>Opciones</u>
          </strong>
        </h3>
        <div className="row border border-dark p-4 mt-4">
          <div className="col-md-12 d-flex justify-content-center">
            <button className=" btn btn-primary " onClick={imprimir}>
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

export default Orden;
