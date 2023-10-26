import React, { useState, useEffect } from "react";
import useUser from "../../hook/useUser";
import useWerchow from "../../hook/useWerchow";
import useSWR from "swr";
import { Skeleton } from "../../components/layout/Skeleton";
import Layout from "../../components/layout/Layout";
import Redirect from "../../components/auth/RedirectToLogin";
import moment from "moment-timezone";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { confirmAlert } from "react-confirm-alert"; // Import
import BuscarSocio from "../../components/servicios/BuscarSocio";
import EmitirServicio from "../../components/servicios/EmitirServicio";
import { registrarHistoria } from "../../utils/funciones";
import ModalHistorialUsos from "../../components/servicios/ModalHistorialUsos";

const Emision = () => {
  let contratoRef = React.createRef();
  let dniRef = React.createRef();
  let farmaciaRef = React.createRef();
  let modalidadRef = React.createRef();
  let descuentoRef = React.createRef();
  let especialidadRef = React.createRef();
  let especialidadRefP = React.createRef();
  let especialidadRefPl = React.createRef();
  let sucursalRef = React.createRef();
  let sucursalRefP = React.createRef();
  let sucursalRefE = React.createRef();
  let sucursalRefPl = React.createRef();
  let medicoRef = React.createRef();
  let medicoRefP = React.createRef();
  let medicoRefE = React.createRef();
  let medicoRefPl = React.createRef();
  let prestacionRefE = React.createRef();
  let cantidadRefE = React.createRef();
  let cantidadRefP = React.createRef();

  // ADH PROVI

  let nacimientoRef = React.createRef();
  let nombreRef = React.createRef();
  let apellidoRef = React.createRef();
  let nroDocRef = React.createRef();

  let codNoSocioRef = React.createRef();

  const [errores, guardarErrores] = useState(null);
  const [flag, guardarFlag] = useState(false);
  const [socio, guardarSocio] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [pagos, guardarPagos] = useState(null);
  const [adhs, guardarAdhs] = useState([]);
  const [sucursales, guardarSucursales] = useState(null);
  const [espec, guardarEspec] = useState(null);
  const [medicos, guardarMedicos] = useState(null);
  const [detalleMed, guardarDetalleMed] = useState(null);
  const [nOrden, guardarNorden] = useState(null);
  const [practicas, guardarPracticas] = useState(null);
  const [pracSocio, guardarPracSocio] = useState([]);
  const [listado, guardarListSocios] = useState([]);
  const [farmacias, guardarFarmacias] = useState(null);
  const [descFarma, guardarDescFarma] = useState("");
  const [enfer, guadrarEnfer] = useState(null);
  const [detEnf, guardarDetalleEnfer] = useState(null);
  const [practEnfer, guadrarPractEnfer] = useState(null);
  const [priUso, guardarPriUso] = useState(0);
  const [nFisio, guardarNFisio] = useState(0);
  const [isj, guardarISJ] = useState(false);
  const [planOrto, guardarPlanOrto] = useState(null);
  const [planImp, guardarPlanImp] = useState(null);
  const [arancel, guardarArancel] = useState(0);
  const [habilita, guardarHabilita] = useState(false);
  const [infoAdh, guardarInfoAdh] = useState([]);
  const [usosFarm, guardarUsosFarm] = useState(0);
  const [farmaDescReg, guardarFarmaDescReg] = useState([]);
  const [promos, guardarPromociones] = useState([]);
  const [historialUsos, guardarHistorialUsos] = useState([]);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  // FUNCIONES SOCIO

  const buscarTitular = async (hc) => {
    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

    let contrato = "";

    if (hc) {
      contrato = hc;
    } else {
      contrato = contratoRef.current.value;
    }

    if (contrato === "") {
      guardarErrores("Debes Ingresar Un Numero De Contrato");
    } else {
      await axios
        .get(`/api/socios`, {
          params: {
            f: "maestro contrato",
            ficha: contrato,
          },
        })
        .then((res) => {
          if (res.data.length === 0) {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          } else {
            guardarFlag(true);

            setInterval(() => {
              traerNOrden(usu.sucursal);
            }, 1000);

            let ficha = res.data;

            guardarFicha(ficha);

            traerAdhs(ficha[0].CONTRATO);

            arancelEnfDomi(ficha[0].CONTRATO);

            if (
              ficha[0].GRUPO === 1001 ||
              ficha[0].GRUPO === 1005 ||
              ficha[0].GRUPO === 1006 ||
              ficha[0].GRUPO === 3444 ||
              ficha[0].GRUPO === 3666 ||
              ficha[0].GRUPO === 3777 ||
              ficha[0].GRUPO === 3888 ||
              ficha[0].GRUPO === 3999 ||
              ficha[0].GRUPO === 4004 ||
              ficha[0].GRUPO === 8500
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );

              confirmAlert({
                title: "ATENCION",
                message: `El socio ${ficha[0].CONTRATO} - ${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES} esta en estado moroso, por tal motivo todos sus servicios estan en dados de baja.`,
                buttons: [
                  {
                    label: "OK",
                    onClick: () => {
                      Router.reload();
                    },
                  },
                  // {
                  //   label: 'No',
                  //   onClick: () => alert('Click No')
                  // }
                ],
              });
            } else if (
              ficha[0].GRUPO === 3400 ||
              ficha[0].GRUPO === 3600 ||
              ficha[0].GRUPO === 3700 ||
              ficha[0].GRUPO === 3800 ||
              ficha[0].GRUPO === 3900 ||
              ficha[0].GRUPO === 4000 ||
              ficha[0].GRUPO > 5000
            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha[0].GRUPO}`,
                "ATENCION"
              );
              traerPagosBco(ficha[0].CONTRATO);
            } else if (ficha[0].GRUPO === 6) {
              toastr.warning(
                `El socio es policia - grupo ${ficha[0].GRUPO}`,
                "ATENCION"
              );
              traerPagosBco(ficha[0].CONTRATO);
            } else if (ficha[0].GRUPO === 1000) {
              traerPagos(ficha[0].CONTRATO);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const buscarTitularDni = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(`/api/socios`, {
          params: {
            f: "maestro",
            dni: dni,
          },
        })
        .then((res) => {
          if (res.data.length === 0) {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          } else {
            guardarFlag(true);

            setInterval(() => {
              traerNOrden(usu.sucursal);
            }, 1000);

            let ficha = res.data;

            guardarFicha(ficha);

            traerAdhs(ficha[0].CONTRATO);

            arancelEnfDomi(ficha[0].CONTRATO);

            if (
              ficha[0].GRUPO === 1001 ||
              ficha[0].GRUPO === 1005 ||
              ficha[0].GRUPO === 1006 ||
              ficha[0].GRUPO === 3444 ||
              ficha[0].GRUPO === 3666 ||
              ficha[0].GRUPO === 3777 ||
              ficha[0].GRUPO === 3888 ||
              ficha[0].GRUPO === 3999 ||
              ficha[0].GRUPO === 4004 ||
              ficha[0].GRUPO === 7777 ||
              ficha[0].GRUPO === 8500
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );

              confirmAlert({
                title: "ATENCION",
                message: `El socio ${ficha[0].CONTRATO} - ${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES} esta en estado moroso, por tal motivo todos sus servicios estan en dados de baja.`,
                buttons: [
                  {
                    label: "OK",
                    onClick: () => {
                      Router.reload();
                    },
                  },
                  // {
                  //   label: 'No',
                  //   onClick: () => alert('Click No')
                  // }
                ],
              });
            } else if (
              ficha[0].GRUPO === 3400 ||
              ficha[0].GRUPO === 3600 ||
              ficha[0].GRUPO === 3700 ||
              ficha[0].GRUPO === 3800 ||
              ficha[0].GRUPO === 3900 ||
              ficha[0].GRUPO === 4000 ||
              ficha[0].GRUPO > 5000
            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha.grupo}`,
                "ATENCION"
              );
              traerPagosBco(ficha[0].CONTRATO);
            } else {
              traerPagos(ficha[0].CONTRATO);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  const buscarTitularM = async (hc) => {
    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

    let contrato = "";

    if (hc) {
      contrato = hc;
    } else {
      contrato = contratoRef.current.value;
    }

    if (contrato === "") {
      guardarErrores("Debes Ingresar Un Numero De Contrato");
    } else {
      await axios
        .get(`/api/socios`, {
          params: {
            f: "mutual contrato",
            ficha: contrato,
          },
        })
        .then((res) => {
          if (res.data.length === 0) {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          } else {
            guardarFlag(true);

            setInterval(() => {
              traerNOrden(usu.sucursal);
            }, 1000);

            let ficha = res.data;

            guardarFicha(ficha);

            traerAdhsM(ficha[0].CONTRATO);

            if (
              ficha[0].GRUPO === 1001 ||
              ficha[0].GRUPO === 1005 ||
              ficha[0].GRUPO === 1006 ||
              ficha[0].GRUPO === 3444 ||
              ficha[0].GRUPO === 3666 ||
              ficha[0].GRUPO === 3777 ||
              ficha[0].GRUPO === 3888 ||
              ficha[0].GRUPO === 3999 ||
              ficha[0].GRUPO === 4004 ||
              ficha[0].GRUPO === 8500
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );

              confirmAlert({
                title: "ATENCION",
                message: `El socio ${ficha[0].CONTRATO} - ${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES} esta en estado moroso, por tal motivo todos sus servicios estan en dados de baja.`,
                buttons: [
                  {
                    label: "OK",
                    onClick: () => {
                      Router.reload();
                    },
                  },
                  // {
                  //   label: 'No',
                  //   onClick: () => alert('Click No')
                  // }
                ],
              });
            } else if (
              ficha[0].GRUPO === 3400 ||
              ficha[0].GRUPO === 3600 ||
              ficha[0].GRUPO === 3700 ||
              ficha[0].GRUPO === 3800 ||
              ficha[0].GRUPO === 3900 ||
              ficha[0].GRUPO === 4000 ||
              ficha[0].GRUPO > 5000
            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha[0].GRUPO}`,
                "ATENCION"
              );
              traerPagosBcoM(ficha[0].CONTRATO);
            } else if (ficha[0].GRUPO === 6) {
              toastr.warning(
                `El socio es policia - grupo ${ficha[0].GRUPO}`,
                "ATENCION"
              );
              traerPagosBcoM(ficha[0].CONTRATO);
            } else if (ficha[0].GRUPO === 1000) {
              traerPagosM(ficha[0].CONTRATO);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const buscarTitularDniM = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(`/api/socios`, {
          params: {
            f: "mutual",
            dni: dni,
          },
        })
        .then((res) => {
          if (res.data.length === 0) {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          } else {
            guardarFlag(true);

            setInterval(() => {
              traerNOrden(usu.sucursal);
            }, 1000);

            let ficha = res.data;

            guardarFicha(ficha);

            traerAdhsM(ficha[0].CONTRATO);

            if (
              ficha[0].GRUPO === 1001 ||
              ficha[0].GRUPO === 1005 ||
              ficha[0].GRUPO === 1006 ||
              ficha[0].GRUPO === 3444 ||
              ficha[0].GRUPO === 3666 ||
              ficha[0].GRUPO === 3777 ||
              ficha[0].GRUPO === 3888 ||
              ficha[0].GRUPO === 3999 ||
              ficha[0].GRUPO === 4004
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );

              confirmAlert({
                title: "ATENCION",
                message: `El socio ${ficha[0].CONTRATO} - ${ficha[0].APELLIDOS}, ${ficha[0].NOMBRES} esta en estado moroso, por tal motivo todos sus servicios estan en dados de baja.`,
                buttons: [
                  {
                    label: "OK",
                    onClick: () => {
                      Router.reload();
                    },
                  },
                  // {
                  //   label: 'No',
                  //   onClick: () => alert('Click No')
                  // }
                ],
              });
            } else if (
              ficha[0].GRUPO === 3400 ||
              ficha[0].GRUPO === 3600 ||
              ficha[0].GRUPO === 3700 ||
              ficha[0].GRUPO === 3800 ||
              ficha[0].GRUPO === 3900 ||
              ficha[0].GRUPO === 4000
            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha.grupo}`,
                "ATENCION"
              );
              traerPagosBcoM(ficha[0].CONTRATO);
            } else {
              traerPagosM(ficha[0].CONTRATO);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  const traerPagos = async (contrato) => {
    await axios
      .get(`/api/socios`, {
        params: {
          f: "traer pagos",
          ficha: contrato,
          empre: "WERCHOW",
        },
      })
      .then((res) => {
        guardarPagos(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
        console.log(error);
      });
  };

  const traerPagosM = async (contrato) => {
    await axios
      .get(`/api/socios`, {
        params: {
          f: "traer pagos",
          ficha: contrato,
          empre: "MUTUAL",
        },
      })
      .then((res) => {
        guardarPagos(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
        console.log(error);
      });
  };

  const traerPagosBco = async (contrato) => {
    await axios
      .get(`/api/socios`, {
        params: {
          f: "traer pagosb",
          ficha: contrato,
          empre: "WERCHOW",
        },
      })
      .then((res) => {
        guardarPagos(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
        console.log(error);
      });
  };

  const traerPagosBcoM = async (contrato) => {
    await axios
      .get(`/api/socios`, {
        params: {
          f: "traer pagosb",
          ficha: contrato,
          empre: "MUTUAL",
        },
      })
      .then((res) => {
        guardarPagos(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
        console.log(error);
      });
  };

  const traerAdhs = async (contrato) => {
    await axios
      .get(`/api/socios`, {
        params: {
          ficha: contrato,
          f: "adh",
        },
      })
      .then((res) => {
        guardarAdhs(res.data);

        traerAdhProvi(contrato, res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAdhsM = async (contrato) => {
    await axios
      .get(`/api/socios`, {
        params: {
          f: "mutual adh",
          contrato: contrato,
        },
      })
      .then((res) => {
        guardarAdhs(res.data);

        traerAdhProvi(contrato, res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectSocio = (row) => {
    guardarSocio(null);

    guardarSocio(row);
  };

  const listSocios = async () => {
    await axios
      .get(`/api/socios`, {
        params: {
          f: "werchow titulares",
        },
      })
      .then((res) => {
        guardarListSocios(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de socios",
          "ATENCION"
        );
      });
  };

  const listSociosM = async () => {
    await axios
      .get(`/api/socios`, {
        params: {
          f: "mutual titulares",
        },
      })
      .then((res) => {
        guardarListSocios(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de socios",
          "ATENCION"
        );
      });
  };

  const Seleccionar = async (contrato) => {
    buscarTitular(contrato);
  };

  const SeleccionarM = async (contrato) => {
    buscarTitularM(contrato);
  };

  const contarFisios = async (contrato) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "contar fisio",
          contrato: contrato,
        },
      })
      .then((res) => {
        console.log(res.data[0].N);
        guardarNFisio(parseInt(res.data[0].N));
      })
      .catch((error) => {
        console.log(error);

        toastr.error(
          "Ocurrio un error al verificar el numero de fisios",
          "ATENCION"
        );
      });
  };

  const verificarUso = async (f, grupo, contrato) => {
    if (f === "C") {
      await axios
        .get(`/api/servicios`, {
          params: {
            f: "verificar consultas",
            contrato: contrato,
          },
        })
        .then((res) => {
          guardarPriUso(parseInt(res.data[0].orde));
        })
        .catch((error) => {
          console.log(error);

          toastr.error("Ocurrio un error al verificar el uso", "ATENCION");
        });
    } else if (f === "P") {
      await axios
        .get(`/api/servicios`, {
          params: {
            f: "verificar practicas",
            contrato: contrato,
          },
        })
        .then((res) => {
          guardarPriUso(parseInt(res.data[0].orde));

          if (grupo === 66 || grupo === 55) {
            contarFisios(contrato);
          }
        })
        .catch((error) => {
          console.log(error);

          toastr.error("Ocurrio un error al verificar el uso", "ATENCION");
        });
    }
  };

  const regAdhProvi = async () => {
    const adh = {
      CONTRATO: ficha[0].CONTRATO,
      NRO_DOC: nroDocRef.current.value,
      PLAN: `${ficha[0].PLAN}${ficha[0].SUB_PLAN}`,
      APELLIDOS: apellidoRef.current.value,
      NOMBRES: nombreRef.current.value,
      NACIMIENTO: nacimientoRef.current.value,
      EMPRESA: ficha[0].EMPRESA,
      ESTADO: true,
      f: "reg adh provisorio",
    };

    if (adh.NRO_DOC === "") {
      toastr.warning("Debes ingresar un DNI", "ATENCION");
    } else if (adh.NACIMIENTO === "") {
      toastr.warning("Debes ingresar una fecha de nacimiento", "ATENCION");
    } else if (adh.APELLIDOS === "") {
      toastr.warning("Debes ingresar un apellido", "ATENCION");
    } else if (adh.NOMBRES === "") {
      toastr.warning("Debes ingresar un nombre", "ATENCION");
    } else {
      await axios
        .post(`/api/servicios`, adh)
        .then((res) => {
          if (res.status === 200) {
            toastr.success("Adhrente registrado con exito", "ATENCION");

            if (adh.EMPRESA === "WERCHOW") {
              traerAdhs(adh.CONTRATO);
            } else if (adh.EMPRESA === "MAESTRO") {
              traerAdhsM(adh.CONTRATO);
            }
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al registrar al adherente",
            "ATENCION"
          );
        });
    }
  };

  const checkAdhProvi = async () => {
    guardarInfoAdh([]);
    guardarHabilita(false);

    let dni = nroDocRef.current.value;

    if (ficha[0].EMPRESA === "WERCHOW") {
      await axios
        .get(`/api/socios`, {
          params: {
            f: "mae adh",
            dni: dni,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.length > 0) {
            toastr.warning(
              "El adherente ya esta cargado provisoriamente",
              "ATENCION"
            );

            guardarInfoAdh(res.data);
          } else if (res.data.length === 0) {
            toastr.info(
              "El DNI ingresado no esta registrado, puede cargar provisoriamente al adherente",
              "ATENCION"
            );

            guardarHabilita(true);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al checkear el adherente", "ATENCION");
        });
    } else if (ficha[0].EMPRESA === "MUTUAL") {
      await axios
        .get(`/api/socios`, {
          params: {
            f: "mut adh",
            dni: dni,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            toastr.warning(
              "El adherente ya esta cargado provisoriamente",
              "ATENCION"
            );

            guardarInfoAdh(res.data);
          } else if (res.data.length === 0) {
            toastr.info(
              "El DNI ingresado no esta registrado, puede cargar provisoriamente al adherente",
              "ATENCION"
            );

            guardarHabilita(true);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al checkear el adherente", "ATENCION");
        });
    }
  };

  const traerAdhProvi = async (contrato, ad) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer adh provi",
          contrato: contrato,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          let adAll = ad.concat(res.data);

          guardarAdhs(adAll);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer a los adherentes provisorios",
          "ATENCION"
        );
      });
  };

  // --------------------------------------------------------------

  // FUNCIONES CONSULTAS

  const registrarOrdenUsos = async () => {
    const uso = {
      SUC: usu.sucursal,
      ORDEN: nOrden,
      CONTRATO: socio.CONTRATO,
      NRO_ADH: socio.ADHERENTES,
      NRO_DOC: socio.NRO_DOC,
      PLAN: socio.PLAN,
      EDAD: socio.EDAD,
      SEXO: socio.SEXO,
      OBRA_SOC: `${socio.COD_OBRA}`,
      FECHA: moment().format("YYYY-MM-DD"),
      FEC_CAJA: moment().format("YYYY-MM-DD"),
      HORA: moment().format("HH:mm"),
      SERVICIO: "ORDE",
      IMPORTE: 0,
      IMP_LIQ: detalleMed.CON_PAGA,
      VALOR: "0",
      PUESTO: "",
      PRESTADO: detalleMed.COD_PRES,
      OPERADOR: usu.codigo,
      EMPRESA: "W",
      RENDIDO: 0,
      ANULADO: 0,
      NUSOS: priUso + 1,
      OPERADOR: usu.usuario,
      f: "reg uso",
    };

    if (detalleMed.PROMO === 1 && detalleMed.OTERO === 0) {
      if (priUso === 0) {
        if (socio.GRUPO === 55 || socio.GRUPO === 66) {
          uso.IMPORTE = 0;
        } else {
          uso.IMPORTE = promos.pint1;
        }
      } else if (priUso === 1) {
        if (isj === true) {
          uso.IMPORTE = promos.pint2 - 350;
        } else {
          uso.IMPORTE = promos.pint2;
        }
      } else if (priUso >= 2) {
        if (isj === true) {
          uso.IMPORTE = parseFloat(detalleMed.CON_PAGA) - 350;
        } else {
          uso.IMPORTE = detalleMed.CON_PAGA;
        }
      }
    } else if (detalleMed.PROMO === 1 && detalleMed.OTERO === 1) {
      if (priUso === 0) {
        if (socio.GRUPO === 55 || socio.GRUPO === 66) {
          uso.IMPORTE = 0;
        } else {
          if (detalleMed.COD_PRES === "C_CRI") {
            uso.IMPORTE = 3000;
          } else {
            uso.IMPORTE = promos.pot1;
          }
        }
      } else if (priUso === 1) {
        if (isj === true) {
          if (detalleMed.COD_PRES === "C_CRI") {
            uso.IMPORTE = 3500 - 350;
          } else {
            uso.IMPORTE = promos.pot2 - 350;
          }
        } else {
          if (detalleMed.COD_PRES === "C_CRI") {
            uso.IMPORTE = 3500;
          } else {
            uso.IMPORTE = promos.pot2;
          }
        }
      } else if (priUso >= 2) {
        if (isj === true) {
          uso.IMPORTE = parseFloat(detalleMed.CON_PAGA) - 350;
        } else {
          uso.IMPORTE = detalleMed.CON_PAGA;
        }
      }
    } else if (
      (detalleMed.PROMO === 0 && detalleMed.OTERO === 1) ||
      detalleMed.OTERO === 0
    ) {
      uso.IMPORTE = detalleMed.CON_PAGA;
    }

    await axios
      .post(`/api/servicios`, uso)
      .then((res) => {
        if (res.status === 200) {
          regOrdenConsulta(uso.ORDEN, uso);

          setTimeout(() => {
            push(
              "/servicios/orden",
              res.data.iduso,
              res.data.NRO_DOC,
              res.data.ORDEN,
              "O"
            );
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al registrar la orden de consulta",
          "ATENCION"
        );
      });
  };

  const regOrdenConsulta = async (orden, uso) => {
    const consul = {
      CONTRATO: socio.CONTRATO,
      FECHA: moment().format("YYYY-MM-DD"),
      HORA: moment().format("HH:mm"),
      NRO_ORDEN: orden,
      DESTINO: "",
      COD_PRES: detalleMed.COD_PRES,
      IMPORTE: uso.IMPORTE,
      ANULADO: false,
      OPERADOR: usu.usuario,
      OPE_ANU: 0,
      DIAGNOSTIC: "",
      ATENCION: 0,
      NRO_DNI: socio.NRO_DOC,
      SUC: usu.sucursal,
      f: "reg consul",
    };

    await axios
      .post(`/api/servicios`, consul)
      .then((res) => {
        if (res.status === 200) {
          toastr.success(
            "Se registro la orden de consulta con exito",
            "ATENCION"
          );

          let accion = `Se registro una orden de consulta ID: ${consul.NRO_ORDEN}, para el socio: ${socio.APELLIDOS}, ${socio.NOMBRES}, contrato: ${socio.CONTRATO}, para el medico: ${detalleMed.NOMBRE}. Coseguro a pagar: ${consul.IMPORTE}`;

          registrarHistoria(accion, usu.usuario);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al registrar la orden de consulta",
          "ATENCION"
        );
      });
  };

  // -----------------------------------------------

  // FUNCIONES PRACTICAS

  const traerPracticasPrest = async (id, lug) => {
    if (!lug) {
      toastr.info(
        "El prestador seleccionado, no tiene practicas registradas en el sistema.",
        "ATENCION"
      );
      guardarPracticas([]);
    } else {
      let lugar = "";

      if (lug < 10) {
        lugar = `0${lug}`;
      } else {
        lugar = lug;
      }

      await axios
        .get(`/api/servicios`, {
          params: {
            id: id,
            lugar: lugar,
            f: "traer prac prest",
          },
        })
        .then((res) => {
          guardarPracticas(res.data);
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al traer las practicas");
        });
    }
  };

  const agregarPractica = (row) => {
    let pra = {
      CODIGOS: row.CODIGOS,
      DESCRIP: row.DESCRIP,
      CANTIDAD: cantidadRefP.current.value,
      IMPORTE: parseFloat(row.IMPORTE) * parseFloat(cantidadRefP.current.value),
      idpractica: row.idpractica,
    };

    let encontrado = false;

    if (pracSocio.length === 0) {
      toastr.success("Pago pre cargado exitosamente", "ATENCION");
      guardarPracSocio([...pracSocio, pra]);
    } else {
      for (let i = 0; i < pracSocio.length; i++) {
        if (pracSocio[i].idpractica === pra.idpractica) {
          encontrado = true;
        }
      }
      if (encontrado === true) {
        toastr.warning("El codigo ingresado ya exitse", "ATENCION");
      } else if (encontrado === false) {
        toastr.success("Practica cargada exitosamente", "ATENCION");

        guardarPracSocio([...pracSocio, pra]);
      }
    }
  };

  const eliminarPracticaPrecargado = (index) => {
    pracSocio.splice(index, 1);

    guardarPracSocio([...pracSocio]);
  };

  const calcularTotalPracticas = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += parseFloat(arr[i].IMPORTE);
    }

    return total.toFixed(2);
  };

  const registrarPracticaUso = async () => {
    const uso = {
      SUC: usu.sucursal,
      ORDEN: nOrden,
      CONTRATO: socio.CONTRATO,
      NRO_ADH: socio.ADHERENTES,
      NRO_DOC: socio.NRO_DOC,
      PLAN: socio.PLAN,
      EDAD: socio.EDAD,
      SEXO: socio.SEXO,
      OBRA_SOC: `${socio.COD_OBRA}`,
      FECHA: moment().format("YYYY-MM-DD"),
      FEC_CAJA: moment().format("YYYY-MM-DD"),
      HORA: moment().format("HH:mm"),
      SERVICIO: `P${detalleMed.SERVICIO}`,
      IMPORTE: calcularTotalPracticas(pracSocio),
      IMP_LIQ: calcularTotalPracticas(pracSocio),
      VALOR: "0",
      PUESTO: "",
      PRESTADO: detalleMed.COD_PRES,
      OPERADOR: usu.codigo,
      EMPRESA: "W",
      RENDIDO: 0,
      ANULADO: 0,
      NUSOS: priUso + 1,
      OPERADOR: usu.usuario,
      f: "reg uso",
    };

    if (
      (detalleMed.SERVICIO === "FIS" && socio.GRUPO === 66) ||
      socio.GRUPO === 55
    ) {
      if (nFisio >= 0 && nFisio <= 8) {
        uso.IMPORTE = 0;
      }
    }

    // AUMENTO POR CANTIDAD DE USOS

    if (detalleMed.COD_PRES === "C_BIO") {
      if (priUso === 1) {
        uso.IMPORTE = uso.IMPORTE * 1.15;
      } else if (priUso === 2) {
        uso.IMPORTE = uso.IMPORTE * 1.2;
      } else if (priUso > 2) {
        uso.IMPORTE = uso.IMPORTE * 1.25;
      }
    }

    // --------------------------------------------

    await axios
      .post(`/api/servicios`, uso)
      .then((res) => {
        if (res.status === 200) {
          regPractica(uso.ORDEN);

          setTimeout(() => {
            push(
              "/servicios/orden",
              res.data.iduso,
              res.data.NRO_DOC,
              res.data.ORDEN,
              "P"
            );
          }, 5000);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al registrar la orden de practica",
          "ATENCION"
        );
      });
  };

  let regPractica = async (orden) => {
    for (let i = 0; i < pracSocio.length; i++) {
      const practi = {
        SUC_PRA: usu.sucursal,
        CONTRATO: socio.CONTRATO,
        NRO_DNI: socio.NRO_DOC,
        FECHA: moment().format("YYYY-MM-DD"),
        HORA: moment().format("HH:mm"),
        NRO_ORDEN: orden,
        PRAC_REA: detalleMed.SERVICIO,
        CANT_PRA: pracSocio[i].CANTIDAD,
        IMPORTE: pracSocio[i].IMPORTE,
        ANULADO: 0,
        OPERADOR: usu.usuario,
        OPE_ANU: 0,
        COD_PRAC: pracSocio[i].CODIGOS,
        DESCRIP: pracSocio[i].DESCRIP,
        f: "reg practica",
      };

      if (
        (detalleMed.SERVICIO === "FIS" && socio.GRUPO === 66) ||
        socio.GRUPO === 55
      ) {
        if (nFisio >= 0 && nFisio < 8) {
          practi.IMPORTE = 0;
        }
      }

      // AUMENTO POR CANTIDAD DE USOS
      if (detalleMed.COD_PRES === "C_BIO") {
        if (priUso === 1) {
          practi.IMPORTE = practi.IMPORTE * 1.15;
        } else if (priUso === 2) {
          practi.IMPORTE = practi.IMPORTE * 1.2;
        } else if (priUso > 2) {
          practi.IMPORTE = practi.IMPORTE * 1.25;
        }
      }

      // -----------------------------------------

      await axios
        .post(`/api/servicios`, practi)
        .then((res) => {
          if (res.status === 200) {
            toastr.success(
              "Se registro la orden de consulta con exito",
              "ATENCION"
            );

            let accion = `Se registro una orden de practica ID: ${practi.NRO_ORDEN}, para el socio: ${socio.APELLIDOS}, ${socio.NOMBRES}, contrato: ${socio.CONTRATO}, para el medico: ${detalleMed.NOMBRE}. Codigo de Practica: ${practi.COD_PRAC} , coseguro a pagar: ${practi.IMPORTE}`;

            registrarHistoria(accion, usu.usuario);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al registrar la orden de consulta",
            "ATENCION"
          );
        });
    }
  };

  // -----------------------------------------

  // FUNCIONES FARMACIA

  const traerFarmacias = async () => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer farmacias",
        },
      })
      .then((res) => {
        guardarFarmacias(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de farmacias",
          "ATENCION"
        );
      });
  };

  const gestionDescuento = (value) => {
    let ref = value.target.value;
    let codigo = ref.substr(0, 5);
    let desc = ref.substr(6, 20);
    guardarDescFarma("");
    conteoUsosFarm(ficha[0].CONTRATO, codigo);
  };

  const selDescuento = () => {
    if (usosFarm <= 1) {
      guardarDescFarma(farmaDescReg.DESC);
    } else if (usosFarm > 1) {
      guardarDescFarma(farmaDescReg.DESC2);
    }
  };

  const registrarFarmaciaUso = async () => {
    if (descFarma === "") {
      toastr.info(
        "Debes calcular el descuento del prestador primero",
        "ATENCION"
      );
    } else {
      const uso = {
        SUC: usu.sucursal,
        ORDEN: nOrden,
        CONTRATO: socio.CONTRATO,
        NRO_ADH: socio.ADHERENTES,
        NRO_DOC: socio.NRO_DOC,
        PLAN: socio.PLAN,
        EDAD: socio.EDAD,
        SEXO: socio.SEXO,
        OBRA_SOC: `${socio.COD_OBRA}`,
        FECHA: moment().format("YYYY-MM-DD"),
        FEC_CAJA: moment().format("YYYY-MM-DD"),
        HORA: moment().format("HH:mm"),
        VALOR: `${parseFloat(descuentoRef.current.value)}`,
        SERVICIO: `FARM`,
        IMPORTE: 0,
        IMP_LIQ: 0,
        PUESTO: "",
        PRESTADO: farmaciaRef.current.value.substr(0, 5),
        OPERADOR: usu.usuario,
        EMPRESA: "W",
        NUSOS: usosFarm + 1,
        RENDIDO: 0,
        ANULADO: 0,
        f: "reg uso",
      };

      await axios
        .post(`/api/servicios`, uso)
        .then((res) => {
          if (res.status === 200) {
            regFarmacia(uso.ORDEN);

            setTimeout(() => {
              push(
                "/servicios/orden",
                res.data.iduso,
                res.data.NRO_DOC,
                res.data.ORDEN,
                "F"
              );
            }, 500);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al registrar la orden de farmacia",
            "ATENCION"
          );
        });
    }
  };

  let regFarmacia = async (orden) => {
    const farma = {
      CONTRATO: socio.CONTRATO,
      FECHA: moment().format("YYYY-MM-DD"),
      HORA: moment().format("HH:mm"),
      NRO_DOC: socio.NRO_DOC,
      NRO_ORDEN: orden,
      DESTINO: farmaciaRef.current.value.substr(0, 5),
      MODO: `${descuentoRef.current.value}`,
      IMPORTE: 0,
      ANULADO: 0,
      OPERADOR: usu.usuario,
      OPE_ANU: 0,
      FEC_USO: moment().format("YYYY-MM-DD"),
      CAN_MEDI: 2,
      MATRICULA: 0,
      HABILITA: 1,
      SUC: usu.sucursal,
      f: "reg farmacia",
    };

    await axios
      .post(`/api/servicios`, farma)
      .then((res) => {
        if (res.status === 200) {
          toastr.success(
            "Se registro la orden de consulta con exito",
            "ATENCION"
          );

          let accion = `Se registro una orden de farmacia ID:${farma.NRO_ORDEN}, para el socio: ${socio.APELLIDOS}, ${socio.NOMBRES}, contrato: ${socio.CONTRATO}, para la farmacia: ${farma.DESTINO}, porcentale de descuento: ${farma.MODO} `;

          registrarHistoria(accion, usu.usuario);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al registrar la orden de farmacia",
          "ATENCION"
        );
      });
  };

  let conteoUsosFarm = async (contrato, prestado) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          contrato: contrato,
          prestado: prestado,
          f: "usos farmacia",
        },
      })
      .then((res) => {
        guardarUsosFarm(parseInt(res.data[0].usos));
      })
      .catch((error) => {
        console.log(error);

        toastr.error(
          "Ocurrio un error al verificar la cantidad de usos de farmacia",
          "ATENCION"
        );
      });

    await axios
      .get(`/api/servicios`, {
        params: {
          prestado: prestado,
          f: "traer farma desc",
        },
      })
      .then((res) => {
        guardarFarmaDescReg(res.data[0]);
      })
      .catch((error) => {
        console.log(error);

        toastr.error(
          "Ocurrio un error al verificar la cantidad de usos de farmacia",
          "ATENCION"
        );
      });
  };

  // ---------------------------------------------

  // FUNCIONES ENFERMERIA

  const traerEnfer = async () => {
    await axios
      .get(`/api/servicios`, {
        params: {
          suc: sucursalRefE.current.value,
          f: "traer enfermeria",
        },
      })
      .then((res) => {
        guadrarEnfer(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de Especialidades",
          "ATENCION"
        );
      });
  };

  const traerPractEnfer = async () => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer pract enfermeria",
        },
      })
      .then((res) => {
        guadrarPractEnfer(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de Practicas de enfermeria",
          "ATENCION"
        );
      });
  };

  const registrarEnfermeriaUso = async () => {
    const uso = {
      SUC: usu.sucursal,
      ORDEN: nOrden,
      CONTRATO: socio.CONTRATO,
      NRO_ADH: socio.ADHERENTES,
      NRO_DOC: socio.NRO_DOC,
      PLAN: socio.PLAN,
      EDAD: socio.EDAD,
      SEXO: socio.SEXO,
      OBRA_SOC: `${socio.COD_OBRA}`,
      FECHA: moment().format("YYYY-MM-DD"),
      FEC_CAJA: moment().format("YYYY-MM-DD"),
      HORA: moment().format("HH:mm"),
      VALOR: "0",
      SERVICIO: `ENFE`,
      IMPORTE: 0,
      IMP_LIQ: 0,
      PUESTO: "",
      PRESTADO: detEnf.COD_PRES,
      OPERADOR: usu.usuario,
      EMPRESA: "W",
      RENDIDO: 0,
      ANULADO: 0,
      f: "reg uso",
    };

    if (detEnf.COD_PRES === "E_NOE") {
      uso.IMPORTE = arancel;
    }

    await axios
      .post(`/api/servicios`, uso)
      .then((res) => {
        if (res.status === 200) {
          regEnfermeria(uso.ORDEN);

          setTimeout(() => {
            push(
              "/servicios/orden",
              res.data.iduso,
              res.data.NRO_DOC,
              res.data.ORDEN,
              "E"
            );
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al registrar la orden de farmacia",
          "ATENCION"
        );
      });
  };

  let regEnfermeria = async (orden) => {
    const enfer = {
      SUC: usu.sucursal,
      CONTRATO: socio.CONTRATO,
      FECHA: moment().format("YYYY-MM-DD"),
      HORA: moment().format("HH:mm"),
      NRO_ORDEN: orden,
      DESTINO: detEnf.COD_PRES,
      IMPORTE: 0,
      ANULADO: 0,
      PRACTICA: prestacionRefE.current.value,
      CANTIDAD: cantidadRefE.current.value,
      OPERADOR: usu.usuario,
      OPE_ANU: 0,
      NRO_DNI: socio.NRO_DOC,
      f: "reg enfermeria",
    };

    if (detEnf.COD_PRES === "E_NOE") {
      enfer.IMPORTE = arancel;
    }

    await axios
      .post(`/api/servicios`, enfer)
      .then((res) => {
        if (res.status === 200) {
          toastr.success(
            "Se registro la orden de enfermeria con exito",
            "ATENCION"
          );

          let accion = `Se registro una orden de enfermeria ID:${enfer.NRO_ORDEN}, para el socio: ${socio.APELLIDOS}, ${socio.NOMBRES}, contrato: ${socio.CONTRATO}, para el prestador: ${enfer.DESTINO} `;

          registrarHistoria(accion, usu.usuario);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al registrar la orden de enfermeria",
          "ATENCION"
        );
      });
  };

  const arancelEnfDomi = async (contrato) => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "arancel enfe domicilio",
          contrato: contrato,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          if (priUso === 0) {
            guardarArancel(400);
          } else {
            guardarArancel(600);
          }
        } else if (res.data.length === 0) {
          if (priUso === 0) {
            guardarArancel(600);
          } else {
            guardarArancel(800);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al determinar el arancel", "ATENCNION");
      });
  };

  // -------------------------------------------------

  // PLANES ORTODONCIA

  const traerPlanesOrto = async () => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer planes ortodoncia",
        },
      })
      .then((res) => {
        guardarPlanOrto(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer el plan", "ATENCION");
      });
  };

  const traerPlanesImp = async () => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer planes implante",
        },
      })
      .then((res) => {
        guardarPlanImp(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer el plan", "ATENCION");
      });
  };

  const registrarPlanOrto = async () => {
    const plan = {
      contrato: socio.CONTRATO,
      dni: socio.NRO_DOC,
      socio: `${socio.APELLIDOS}, ${socio.NOMBRES}`,
      fecha: moment().format("YYYY-MM-DD"),
      total: planOrto.total,
      pagado: planOrto.pago_inicial,
      saldo: parseFloat(planOrto.total) - parseFloat(planOrto.pago_inicial),
      estado: true,
      prestador: detalleMed.COD_PRES,
      prestador_nombre: detalleMed.NOMBRE,
      operador: usu.usuario,
      sucursal: usu.sucursal,
      plan: "ORTO",
      f: "reg plan odontologico",
    };

    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer plan dni",
          dni: plan.dni,
        },
      })
      .then((res1) => {
        if (!res1.data || res1.data.dni !== plan.dni) {
          axios
            .post(`/api/servicios`, plan)
            .then((res2) => {
              if (res2.status === 200) {
                toastr.success("Plan registrado correctamente", "ATENCION");

                regPlanVisitas(
                  res2.data.idplansocio,
                  plan.saldo,
                  planOrto.cuotas,
                  "ORTO",
                  planOrto.visitas
                );

                let accion = `Se registro plan implante dental ID: ${res2.data.idplansocio}, para el socio: ${plan.contrato} - ${plan.socio}, dni: ${plan.dni}. Con un monto de ${plan.total}`;

                registrarHistoria(accion, usu.usuario);

                setTimeout(() => {
                  Router.push({
                    pathname: "/servicios/reciboplan",
                    query: {
                      id: res2.data.idplansocio,
                    },
                  });
                }, 1000);
              }
            })
            .catch((error) => {
              console.log(error);
              toastr.error("Ocurrio un error al registrar el plan", "ATENCION");
            });
        } else if (res1.data && res1.data.dni === plan.dni) {
          toastr.warning(
            "El socio actualmente posee plan de ortodoncia registrado, consultar con gerencia",
            "ATENCION"
          );

          confirmAlert({
            title: "ATENCION",
            message: `El socio ${plan.contrato} - ${plan.socio}, actualmente posee un plan registrado y vigente.`,
            buttons: [
              {
                label: "OK",
                onClick: () => {},
              },
              // {
              //   label: 'No',
              //   onClick: () => alert('Click No')
              // }
            ],
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al registrar el plan", "ATENCION");
      });
  };

  const registrarPlanImp = async () => {
    const plan = {
      contrato: socio.CONTRATO,
      dni: socio.NRO_DOC,
      socio: `${socio.APELLIDOS}, ${socio.NOMBRES}`,
      fecha: moment().format("YYYY-MM-DD"),
      total: planImp.total,
      pagado: planImp.pago_inicial,
      saldo: parseFloat(planImp.total) - parseFloat(planImp.pago_inicial),
      estado: true,
      prestador: detalleMed.COD_PRES,
      prestador_nombre: detalleMed.NOMBRE,
      operador: usu.usuario,
      sucursal: usu.sucursal,
      plan: "IMP",
      f: "reg plan odontologico",
    };

    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer plan dni",
          dni: plan.dni,
        },
      })
      .then((res1) => {
        if (!res1.data || res1.data.dni !== plan.dni) {
          axios
            .post(`/api/servicios`, plan)
            .then((res2) => {
              if (res2.status === 200) {
                toastr.success("Plan registrado correctamente", "ATENCION");

                regPlanVisitas(
                  res2.data.idplansocio,
                  plan.saldo,
                  planImp.cuotas,
                  "IMP",
                  planImp.visitas
                );

                let accion = `Se registro plan implante dental ID: ${res2.data.idplansocio}, para el socio: ${plan.contrato} - ${plan.socio}, dni: ${plan.dni}. Con un monto de ${plan.total}`;

                registrarHistoria(accion, usu.usuario);

                setTimeout(() => {
                  Router.push({
                    pathname: "/servicios/reciboplan",
                    query: {
                      id: res2.data.idplansocio,
                    },
                  });
                }, 1000);
              }
            })
            .catch((error) => {
              console.log(error);
              toastr.error("Ocurrio un error al registrar el plan", "ATENCION");
            });
        } else if (res1.data && res1.data.dni === plan.dni) {
          toastr.warning(
            "El socio actualmente posee plan de implante dental registrado, consultar con gerencia",
            "ATENCION"
          );

          confirmAlert({
            title: "ATENCION",
            message: `El socio ${plan.contrato} - ${plan.socio}, actualmente posee un plan registrado y vigente.`,
            buttons: [
              {
                label: "OK",
                onClick: () => {},
              },
              // {
              //   label: 'No',
              //   onClick: () => alert('Click No')
              // }
            ],
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al registrar el plan", "ATENCION");
      });
  };

  const regPlanVisitas = async (plan, saldo, cuotas, tiPla, visitas) => {
    let visi = {
      idplan: plan,
      nvisita: "",
      pago: 0,
      fecha: moment().format("YYYY-MM-DD"),
      pagado: false,
      operador: usu.usuario,
      plan: tiPla,
      f: "reg plan visitas",
    };

    for (let i = 1; i < visitas; i++) {
      if (i <= cuotas) {
        visi.nvisita = i;
        visi.pago = saldo / cuotas;
        visi.fecha = moment().add(i, "months").format("YYYY-MM-DD");
      } else if (i > cuotas) {
        visi.nvisita = i;
        visi.pago = 0;
        visi.fecha = moment().add(i, "months").format("YYYY-MM-DD");
      }

      await axios.post(`/api/servicios`, visi);
    }
  };

  // ----------------------------------------------

  // FUNCIONES GENERALES

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

  const traerNOrden = async (suc) => {
    if (suc) {
      await axios
        .get(`/api/servicios`, {
          params: {
            f: "traer norden",
          },
        })
        .then((res) => {
          setTimeout(() => {
            if (!res.data[0]) {
            } else {
              guardarNorden(`${suc}-${res.data[0].iduso + 1}`);
            }
          }, 500);
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al traer el N° de Orden", "ATENCION");
        });
    }
  };

  const traerSucursales = async () => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer sucursales",
        },
      })
      .then((res) => {
        guardarSucursales(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de sucursales",
          "ATENCION"
        );
      });
  };

  const traerEspecialidades = async () => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer especialidades",
        },
      })
      .then((res) => {
        guardarEspec(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de sucursales",
          "ATENCION"
        );
      });
  };

  const traerMedicosPorSuc = async (f) => {
    if (f === "C" && especialidadRef.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            suc: sucursalRef.current.value,
            esp: especialidadRef.current.value,
            f: "traer medicos por suc",
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
    } else if (f === "P" && especialidadRefP.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            suc: sucursalRefP.current.value,
            esp: especialidadRefP.current.value,
            f: "traer medicos por suc",
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
    } else if (f === "Pl" && especialidadRefPl.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            suc: sucursalRefPl.current.value,
            esp: especialidadRefPl.current.value,
            f: "traer medicos por suc",
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
    }
  };

  const traerDetalleMedSelec = async (f) => {
    if (f === "C" && medicoRef.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            prestado: medicoRef.current.value,
            f: "traer detalle medico",
          },
        })
        .then((res) => {
          guardarDetalleMed(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer el listado de Especialidades",
            "ATENCION"
          );
        });
    } else if (f === "P" && medicoRefP.current.value !== null) {
      let id = medicoRefP.current.value;

      await axios
        .get(`/api/servicios`, {
          params: {
            prestado: medicoRefP.current.value,
            f: "traer detalle medico",
          },
        })
        .then((res) => {
          guardarDetalleMed(res.data[0]);

          traerPracticasPrest(id, res.data[0].LUGAR);
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer el listado de Especialidades",
            "ATENCION"
          );
        });
    } else if (f === "E" && medicoRefE.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            prestado: medicoRefE.current.value,
            f: "traer detalle medico",
          },
        })
        .then((res) => {
          guardarDetalleEnfer(res.data[0]);

          traerPractEnfer();
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer el listado de Especialidades",
            "ATENCION"
          );
        });
    } else if (f === "Pl" && medicoRefPl.current.value !== null) {
      await axios
        .get(`/api/servicios`, {
          params: {
            prestado: medicoRefPl.current.value,
            f: "traer detalle medico",
          },
        })
        .then((res) => {
          guardarDetalleMed(res.data[0]);
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

  const selector = (flag) => {
    if (flag === "si") {
      guardarISJ(true);
    } else if (flag === "no") {
      guardarISJ(false);
    }
  };

  const importeOrden = () => {
    if (detalleMed.PROMO === 1 && detalleMed.OTERO === 0) {
      if (priUso === 0) {
        if (socio.GRUPO === 55 || socio.GRUPO === 66) {
          const importe = 0;

          return importe;
        } else {
          const importe = promos.pint1;

          return importe;
        }
      } else if (priUso === 1) {
        const importe = promos.pint2;

        return importe;
      } else if (priUso >= 2) {
        const importe = detalleMed.CON_PAGA;

        return importe;
      }
    } else if (detalleMed.PROMO === 1 && detalleMed.OTERO === 1) {
      if (priUso === 0) {
        if (socio.GRUPO === 55 || socio.GRUPO === 66) {
          const importe = 0;

          return importe;
        } else {
          if (detalleMed.COD_PRES === "C_CRI") {
            const importe = 3000;

            return importe;
          } else {
            const importe = promos.pot1;

            return importe;
          }
        }
      } else if (priUso === 1) {
        if (detalleMed.COD_PRES === "C_CRI") {
          const importe = 3500;

          return importe;
        } else {
          const importe = promos.pot2;

          return importe;
        }
      } else if (priUso >= 2) {
        const importe = detalleMed.CON_PAGA;

        return importe;
      }
    } else if (
      (detalleMed.PROMO === 0 && detalleMed.OTERO === 1) ||
      detalleMed.OTERO === 0
    ) {
      const importe = detalleMed.CON_PAGA;

      return importe;
    }
  };

  const consultarCodigo = async () => {
    let codNoSoc = codNoSocioRef.current.value;

    if (codNoSoc === "") {
      toastr.warning(
        "Debes ingresar el codigo que te facilita el paciente",
        "ATENCION"
      );
    } else {
      await axios
        .get(`/api/servicios`, {
          params: {
            f: "codigo no socio",
            codNoSoc: codNoSoc,
          },
        })
        .then((res) => {
          if (res.data) {
            if (res.data.estado === true) {
              toastr.success(
                "Codigo valido, puedes generar la orden medica",
                "ATENCION"
              );

              Router.push({
                pathname: "/servicios/emisionnosocio",
                query: {
                  dni: res.data.dni,
                },
              });
            } else if (res.data.estado === false) {
              toastr.info("El codigo generado, ya fue utilizado.", "ATENCION");
            }
          } else {
            toastr.warning(
              "El codigo ingresado no existe o esta mal tipeado",
              "ATENCION"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al verificar el codigo", "ATENCION");
        });
    }
  };

  const traerPromociones = async () => {
    await axios
      .get(`/api/servicios`, {
        params: {
          f: "traer promociones",
        },
      })
      .then((res) => {
        guardarPromociones(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer las promociones", "ATENCION");
      });
  };

  const traerHistorialUsos = async (contrato) => {
    await axios
      .get("/api/servicios", {
        params: {
          f: "traer historial usos",
          contrato: contrato,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarHistorialUsos(res.data);
        } else {
          toastr.info(
            "La ficha no posee ningun uso registrado en su historial",
            "ATENCION"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al generar el historial de usos de la ficha",
          "ATENCION"
        );
      });
  };

  const traerInfo = () => {
    traerSucursales();
    traerEspecialidades();
    traerFarmacias();
    traerPlanesOrto();
    traerPlanesImp();
    traerPromociones();
  };

  // ----------------------------------------------

  useSWR("/api/servicios", traerInfo);

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
              {flag === false ? (
                <BuscarSocio
                  ficha={ficha}
                  contratoRef={contratoRef}
                  dniRef={dniRef}
                  buscarTitularM={buscarTitularM}
                  buscarTitularDniM={buscarTitularDniM}
                  buscarTitular={buscarTitular}
                  buscarTitularDni={buscarTitularDni}
                  errores={errores}
                  titulo={"Ordenes, consultas y farmacia"}
                  emp={"W"}
                  listSocios={listSocios}
                  listSociosM={listSociosM}
                  listado={listado}
                  Seleccionar={Seleccionar}
                  SeleccionarM={SeleccionarM}
                  codNoSocioRef={codNoSocioRef}
                  consultarCodigo={consultarCodigo}
                />
              ) : flag === true ? (
                <>
                  {ficha ? (
                    <>
                      <EmitirServicio
                        adhs={adhs}
                        pagos={pagos}
                        ficha={ficha}
                        selectSocio={selectSocio}
                        socio={socio}
                        farmaciaRef={farmaciaRef}
                        modalidadRef={modalidadRef}
                        descuentoRef={descuentoRef}
                        especialidadRef={especialidadRef}
                        especialidadRefP={especialidadRefP}
                        especialidadRefPl={especialidadRefPl}
                        sucursalRef={sucursalRef}
                        sucursalRefP={sucursalRefP}
                        sucursalRefPl={sucursalRefPl}
                        medicoRef={medicoRef}
                        medicoRefP={medicoRefP}
                        medicoRefPl={medicoRefPl}
                        traerDetalleMedSelec={traerDetalleMedSelec}
                        detalleMed={detalleMed}
                        sucursales={sucursales}
                        espec={espec}
                        medicos={medicos}
                        traerMedicosPorSuc={traerMedicosPorSuc}
                        registrarOrdenUsos={registrarOrdenUsos}
                        practicas={practicas}
                        agregarPractica={agregarPractica}
                        pracSocio={pracSocio}
                        eliminarPracticaPrecargado={eliminarPracticaPrecargado}
                        calcularTotalPracticas={calcularTotalPracticas}
                        registrarPracticaUso={registrarPracticaUso}
                        farmacias={farmacias}
                        gestionDescuento={gestionDescuento}
                        descFarma={descFarma}
                        registrarFarmaciaUso={registrarFarmaciaUso}
                        enfer={enfer}
                        sucursalRefE={sucursalRefE}
                        traerEnfer={traerEnfer}
                        detEnf={detEnf}
                        medicoRefE={medicoRefE}
                        practEnfer={practEnfer}
                        prestacionRefE={prestacionRefE}
                        cantidadRefE={cantidadRefE}
                        registrarEnfermeriaUso={registrarEnfermeriaUso}
                        cantidadRefP={cantidadRefP}
                        priUso={priUso}
                        nFisio={nFisio}
                        selector={selector}
                        isj={isj}
                        importeOrden={importeOrden}
                        verificarUso={verificarUso}
                        planOrto={planOrto}
                        registrarPlanOrto={registrarPlanOrto}
                        arancel={arancel}
                        nacimientoRef={nacimientoRef}
                        nombreRef={nombreRef}
                        apellidoRef={apellidoRef}
                        nroDocRef={nroDocRef}
                        regAdhProvi={regAdhProvi}
                        checkAdhProvi={checkAdhProvi}
                        habilita={habilita}
                        infoAdh={infoAdh}
                        planImp={planImp}
                        registrarPlanImp={registrarPlanImp}
                        usosFarm={usosFarm}
                        selDescuento={selDescuento}
                        traerHistorialUsos={traerHistorialUsos}
                      />

                      <ModalHistorialUsos historialUsos={historialUsos} />
                    </>
                  ) : null}
                </>
              ) : null}
            </Layout>
          </>
        ) : null}
      </>
    </>
  );
};

export default Emision;
