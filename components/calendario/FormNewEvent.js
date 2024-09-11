import React from "react";

import moment from "moment";

const FormNewEvent = ({
  cerrarEvento,
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
          <u>Nueva Tarea</u>
        </strong>
      </h2>

      <div className="row border border-dark p-4 mt-4">
        <div className="col-md-3">
          <label>
            <u>Inicio</u>
          </label>
          <input
            className="form-control"
            label="Inicio"
            type="text"
            value={moment(datosEv.start).format("DD/MM/YYYY HH:mm")}
          />
        </div>

        <div className="col-md-3">
          <label>
            <u>Fin</u>
          </label>
          <input
            className="form-control"
            type="text"
            value={moment(datosEv.end).format("DD/MM/YYYY HH:mm")}
          />
        </div>

        <div className="col-md-3">
          <label>
            <u>Operador</u>
          </label>
          <select label="Operador" className="custom-select" ref={operadorRef}>
            <option value="no">Selecciona un operador</option>
            {operadores.map((f, index) => (
              <option key={index} value={f.operador}>
                {f.operador}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <label>
            <u>Prioridad</u>
          </label>
          <select
            label="Prioridad"
            className="custom-select"
            ref={prioridadRef}
          >
            <option value="no">Selecciona una prioridad</option>
            <option value={1}>Normal</option>
            <option value={2}>Importante</option>
            <option value={3}>Urgente</option>
          </select>
        </div>

        <div className="col-md-12 mt-4">
          <label>
            <u>Tarea</u>
          </label>
          <textarea
            rows={10}
            label="Tarea"
            ref={tareaRef}
            className="form-control"
          />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-5">
        <button className="mr-1 btn btn-primary" onClick={postEvent}>
          Registrar Tarea
        </button>
        <button className="btn btn-danger" onClick={cerrarEvento}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default FormNewEvent;
