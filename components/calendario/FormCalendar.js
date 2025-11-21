import React from "react";
import Link from "next/link";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import es from "@fullcalendar/core/locales/es";
import FormEvents from "./FormEvents";
import FormNewEvent from "./FormNewEvent";

const FormCalendar = ({
  edit,
  events,
  handleDateSelect,
  selEvent,
  editEnable,
  delet,
  deleteEnable,
  eventSelected,
  cerrarEvento,
  reg,
  operadores,
  datosEv,
  postEvent,
  tareaRef,
  operadorRef,
  prioridadRef,
}) => {
  return (
    <div className="container-fluid p-4 min-vh-100" style={{
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    }}>
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="text-primary fw-bold">
            <i className="fa fa-calendar-alt me-3"></i>
            Registro de Tareas
          </h1>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-12">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <i className="fa fa-cogs me-2"></i>
                Opciones de Gestión
              </h5>
            </div>
            <div className="card-body">
              <div className="d-flex gap-2 flex-wrap">
                <button
                  className="btn btn-warning px-4"
                  onClick={() => {
                    editEnable();
                  }}
                >
                  <i className="fa fa-edit me-2"></i>
                  Editar
                </button>
                <button
                  className="btn btn-danger px-4"
                  onClick={() => {
                    deleteEnable();
                  }}
                >
                  <i className="fa fa-trash me-2"></i>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
      </div>

      <div className="row g-4 mt-2">
        <div className="col-12">
          <div className="alert alert-info border-0 shadow-sm">
            <i className="fa fa-info-circle me-2"></i>
            <strong>Instrucciones:</strong> Para crear una tarea, selecciona el día y las horas que ocupará
            haciendo click en la hora de inicio y arrastrando el cursor hasta la hora de fin.
            Esto abrirá un formulario para ingresar el detalle de la tarea, operador y prioridad.
          </div>
        </div>
      </div>

        {edit === true ? (
          <div className="row g-4 mt-2">
            <div className="col-12">
              <div className="alert alert-warning border-0 shadow-sm">
                <i className="fa fa-edit me-2"></i>
                <strong>Modo Edición Activado:</strong> Puedes cambiar la fecha y hora del evento
                arrastrándolo y/o expandiéndolo. Para registrar la modificación, haz click en el evento.
              </div>
            </div>
          </div>
        ) : null}

        {delet === true ? (
          <div className="row g-4 mt-2">
            <div className="col-12">
              <div className="alert alert-danger border-0 shadow-sm">
                <i className="fa fa-trash me-2"></i>
                <strong>Modo Eliminación Activado:</strong> Haz click en cualquier evento para eliminarlo.
                Aparecerá una confirmación antes de proceder.
              </div>
            </div>
          </div>
        ) : null}

        <div className="row g-4 mt-2">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body p-0">
                {eventSelected.length === 0 && reg === false ? (
                  <FullCalendar
                    plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
                    headerToolbar={{
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    initialView="timeGridWeek"
                    editable={edit}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateSelect}
                    events={events}
                    locale={es}
                    eventClick={selEvent}
                    height="auto"
                    aspectRatio={1.8}
                  />
                ) : eventSelected.length !== 0 ? (
                  <FormEvents eventos={eventSelected} cerrarEvento={cerrarEvento} />
                ) : reg === true ? (
                  <FormNewEvent
                    cerrarEvento={cerrarEvento}
                    operadores={operadores}
                    datosEv={datosEv}
                    postEvent={postEvent}
                    tareaRef={tareaRef}
                    operadorRef={operadorRef}
                    prioridadRef={prioridadRef}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCalendar;
