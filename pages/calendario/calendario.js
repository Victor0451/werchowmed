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
import FormCalendar from "../../components/calendario/FormCalendar";

function calendario(props) {
  let tareaRef = React.createRef();
  let operadorRef = React.createRef();
  let prioridadRef = React.createRef();

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const [events, saveEvents] = useState([]);
  const [datosEv, guardarDatosEv] = useState([]);
  const [eventSelected, saveEventSelected] = useState([]);
  const [reg, saveReg] = useState(false);
  const [edit, saveEdit] = useState(false);
  const [delet, saveDelete] = useState(false);

  const [operadores, guardarOperadores] = useState([]);

  // FUNCIONES CALENDARIO

  const handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    saveReg(true);

    let datosEv = {
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    };

    if (datosEv.allDay === false) {
      datosEv.allDay = 0;
    } else if (datosEv.allDay === true) {
      datosEv.allDay = 1;
    }

    guardarDatosEv(datosEv);
  };

  const editEnable = () => {
    if (edit === true) {
      saveEdit(false);
      toastr.info("Modo edicion desactivado", "ATENCION");
    } else if (edit === false) {
      saveEdit(true);
      toastr.info("Modo edicion activado", "ATENCION");
    }
  };

  const deleteEnable = () => {
    if (delet === true) {
      saveDelete(false);
      toastr.info("Modo eliminacion desactivado", "ATENCION");
    } else if (delet === false) {
      saveDelete(true);
      toastr.info("Modo eliminacion activado", "ATENCION");
    }
  };

  const selEvent = (eventInfo) => {
    console.log(eventInfo.event.extendedProps.idevents);
    if (edit === true && delet === false) {
      let evE = {
        id: eventInfo.event.extendedProps.idevents,
        title: eventInfo.event.title,
        start: eventInfo.event.start,
        end: eventInfo.event.end,
        allDay: eventInfo.event.allDay,
        priority: eventInfo.event.extendedProps.priority,
        f: "editar evento",
        ft: "Modificacion",
      };

      if (evE.allDay === false) {
        evE.allDay = 0;
      } else if (evE.allDay === true) {
        evE.allDay = 1;
      }

      putEvent(evE);
    } else if (edit === false && delet === false) {
      saveEventSelected(eventInfo.event);
    } else if (edit === false && delet === true) {
      deleteEvents(eventInfo.event.extendedProps.idevents);
    }
  };

  const cerrarEvento = () => {
    saveEventSelected([]);
    saveReg(false);
  };

  // --------------------------------------

  // APIS

  const postEvent = async () => {
    let ev = {
      title: `${tareaRef.current.value} - ${operadorRef.current.value}`,
      start: moment(datosEv.start).format("YYYY-MM-DD HH:mm"),
      end: moment(datosEv.end).format("YYYY-MM-DD HH:mm"),
      allDay: datosEv.allDay,
      priority: parseInt(prioridadRef.current.value),
      f: "nueva tarea",
      ft: "Registro",
    };

    if (tareaRef.current.value === "") {
      toastr.info("Debes ingresar la tarea a realizar");
    } else if (operadorRef.current.value === "") {
      toastr.info("Debes seleccionar el operador");
    } else if (prioridadRef.current.value === "") {
      toastr.info("Debes seleccionar la prioridad de la tarea");
    } else {
      saveEvents([...events, ev]);

      await axios
        .post("/api/tareas", ev)
        .then((res) => {
          if (res.status === 200) {
            toastr.success("El evento se registro correctamente");
            saveReg(false);

            mandarMail(ev);
          }
        })
        .catch((error) => {
          console.log(error);

          toastr.error("Ocurrio un error al registrar el evento");
        });
    }
  };

  const getEvents = async () => {
    await axios
      .get("/api/tareas", {
        params: {
          f: "traer tareas",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          saveEvents(res.data);
        } else if (res.data.length === 0) {
          toastr.info("No hay tareas registradas");
        }
      })
      .catch((error) => {
        console.log(error);

        toastr.error("Ocurrio un error al cargar los eventos", "ATENCION");
      });

    await axios
      .get("/api/tareas", {
        params: {
          f: "traer operadores",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarOperadores(res.data);
        } else if (res.data.length === 0) {
          toastr.info("No hay operadores registrados");
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer el listado de operadores");
      });
  };

  const putEvent = async (data) => {
    await axios
      .put("/api/tareas", data)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("El evento se actualizo correctamente");
          mandarMail(data);
        }
      })
      .catch((error) => {
        console.log(error);

        toastr.error("Ocurrio un error al registrar el evento");
      });
  };

  const deleteEvents = async (id) => {
    await axios
      .delete(`/api/tareas`, {
        params: {
          id: id,
          f: "eliminar tarea",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toastr.success("Evento eliminado correctamente");
          getEvents();

          let index = events
            .map(function (item) {
              return item.id;
            })
            .indexOf(id);

          let ev = events.splice(index, 1);

          saveEvents([...events, ev]);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al eliminar el evento");
      });
  };

  const mandarMail = (array) => {
    fetch("/api/mail/mailtareas", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(array),
    })
      .then((res) => {
        if (res.status === 200) {
          toastr.info("Se envio un email con la notificacion de la novedad");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // --------------------------------------

  useSWR("/api/tareas", getEvents);

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
            <FormCalendar
              events={events}
              edit={edit}
              handleDateSelect={handleDateSelect}
              selEvent={selEvent}
              editEnable={editEnable}
              delet={delet}
              deleteEnable={deleteEnable}
              eventSelected={eventSelected}
              cerrarEvento={cerrarEvento}
              reg={reg}
              operadores={operadores}
              datosEv={datosEv}
              postEvent={postEvent}
              tareaRef={tareaRef}
              operadorRef={operadorRef}
              prioridadRef={prioridadRef}
            />
          </Layout>
        </>
      ) : null}
    </>
  );
}

export default calendario;
