import React from "react";

import moment from "moment";

const FormEvents = ({ eventos, cerrarEvento }) => {
  return (
    <div className="container border border-dark p-4 mt-4 list">
      <h2>
        <strong>
          <u>Tarea N°</u>: {eventos.extendedProps.idevents}
        </strong>
      </h2>

      <div className="row border border-dark p-4 mt-4">
        <div className="col-md-4">
          <label>
            <u>Inicio</u>
          </label>
          <input
            size="md"
            label="Inicio"
            type="text"
            defaultValue={moment(eventos.start).format("DD/MM/YYYY HH:mm")}
            className="form-control"
          />
        </div>

        <div className="col-md-4">
          <label>
            <u>Fin</u>
          </label>
          <input
            size="md"
            label="Fin"
            type="text"
            defaultValue={moment(eventos.end).format("DD/MM/YYYY HH:mm")}
            className="form-control"
          />
        </div>

        <div className="col-md-4">
          <label>
            <u>Prioridad</u>
          </label>
          <input
            size="md"
            label="Prioridad"
            type="text"
            defaultValue={eventos.extendedProps.priority}
            className="form-control"
          />
        </div>

        <div className="col-md-12 mt-4">
          <label>
            <u>Tarea</u>
          </label>
          <textarea
            rows={10}
            label="Detalle"
            defaultValue={eventos.title}
            className="form-control"
          />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-5">
        <button className="btn btn-danger" onClick={cerrarEvento}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default FormEvents;
