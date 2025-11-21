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
    <div className="p-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-success text-white">
          <h5 className="mb-0">
            <i className="fa fa-plus-circle me-2"></i>
            Nueva Tarea
          </h5>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-3">
              <label className="form-label fw-semibold">Inicio</label>
              <input
                className="form-control"
                type="text"
                value={moment(datosEv.start).format("DD/MM/YYYY HH:mm")}
                readOnly
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">Fin</label>
              <input
                className="form-control"
                type="text"
                value={moment(datosEv.end).format("DD/MM/YYYY HH:mm")}
                readOnly
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">Operador</label>
              <select className="form-select" ref={operadorRef}>
                <option value="no">Selecciona un operador</option>
                {operadores.map((f, index) => (
                  <option key={index} value={f.operador}>
                    {f.operador}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">Prioridad</label>
              <select className="form-select" ref={prioridadRef}>
                <option value="no">Selecciona una prioridad</option>
                <option value={1}>Normal</option>
                <option value={2}>Importante</option>
                <option value={3}>Urgente</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="form-label fw-semibold">Descripción de la Tarea</label>
              <textarea
                rows={6}
                ref={tareaRef}
                className="form-control"
                placeholder="Describe detalladamente la tarea a realizar..."
              />
            </div>
          </div>
        </div>
        <div className="card-footer bg-light">
          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-success px-4" onClick={postEvent}>
              <i className="fa fa-save me-2"></i>
              Registrar Tarea
            </button>
            <button className="btn btn-outline-secondary px-4" onClick={cerrarEvento}>
              <i className="fa fa-times me-2"></i>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormNewEvent;
