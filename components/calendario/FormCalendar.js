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
    <div className="container border border-dark p-4 mt-4 list">
      <h2>
        <strong>
          <u>Registro de Tareas</u>
        </strong>
      </h2>

      <div className="mt-4 mb-4 border border-dark p-4">
        <h4>Opciones</h4>
        <div className="border border-dark p-4">
          <button
            className="btn btn-warning"
            onClick={() => {
              editEnable();
            }}
          >
            Editar
          </button>
          <button
            className="btn btn-danger ml-1"
            onClick={() => {
              deleteEnable();
            }}
          >
            Eliminar
          </button>
        </div>

        <div className="mt-4 alert alert-info border border-dark text-center text-uppercase">
          Para crear una tarea, selecciona el dia y las horas que ocupara
          haciendo click en la hora de inicio y si soltar, arrastrar el cursor
          hasta la hora de fin. Esto abrira una ventana para poder ingresar el
          detalle de la tarea, operador y su prioridad. Una vez finalizada la
          carga de datos, hacer click en "Registrar Tarea".
        </div>

        <div className="alert alert-info border border-dark text-center text-uppercase">
          Para ver una tarea en detalle, solo debes hacer click en la tarea en
          cuestion y esta se mostrara en una ventana de manera mas detallada.
          Para editar y/o eliminar las tareas registradas, solo debes hacer
          click en los botones "Editar" o "Eliminar" y seguir las indicaciones.
        </div>

        <div className="alert alert-info border border-dark text-center text-uppercase">
          Para crear una tarea, selecciona el dia y las horas que ocupara
          haciendo click en la hora de inicio y si soltar, arrastrar el cursor
          hasta la hora de fin. Esto abrira una ventana para poder ingresar el
          detalle de la tarea, operador y su prioridad. Una vez finalizada la
          carga de datos, hacer click en "Registrar Tarea".
        </div>

        {edit === true ? (
          <>
            <div className="alert alert-warning border border-dark text-center text-uppercase">
              Activaste el modo edicion, ahora puedes editar la fecha y hora de
              tus eventos registrados.
            </div>

            <div className="alert alert-warning border border-dark text-center text-uppercase">
              Puedes cambiar la fecha y hora del evento simplemente
              arrastrandolo y/o expandiendolo. Para registrar la modificacion
              solo deberas hacer click en el evento y se te notificara cuando se
              haya realizado exitosamente.
            </div>
          </>
        ) : null}
        {delet === true ? (
          <>
            <div className="alert alert-danger border border-dark text-center text-uppercase">
              Activaste el modo eliminacion, ahora puedes eliminar tus eventos
              registrados.
            </div>

            <div className="alert alert-danger border border-dark text-center text-uppercase">
              Puedes eliminar el evento simplemente haciendole click, este
              desaparecera del calendario y te saldra un cartel de confirmacion
              de dicha accion.
            </div>
          </>
        ) : null}
        {eventSelected.length === 0 && reg === false ? (
          <div className="border border-dark p-4">
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
            />
          </div>
        ) : eventSelected.length !== 0 ? (
          <FormEvents eventos={eventSelected} cerrarEvento={cerrarEvento} />
        ) : reg === true ? (
          <>
            <FormNewEvent
              cerrarEvento={cerrarEvento}
              operadores={operadores}
              datosEv={datosEv}
              postEvent={postEvent}
              tareaRef={tareaRef}
              operadorRef={operadorRef}
              prioridadRef={prioridadRef}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FormCalendar;
