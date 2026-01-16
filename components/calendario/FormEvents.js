import React from "react";

import moment from "moment";

const FormEvents = ({ eventos, cerrarEvento }) => {
  const getPriorityText = (priority) => {
    switch (priority) {
      case 1: return "Normal";
      case 2: return "Importante";
      case 3: return "Urgente";
      default: return "Sin definir";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 1: return "success";
      case 2: return "warning";
      case 3: return "danger";
      default: return "secondary";
    }
  };

  return (
    <div className="p-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-info text-white">
          <h5 className="mb-0">
            <i className="fa fa-eye me-2"></i>
            Detalles de la Tarea #{eventos.extendedProps.idevents}
          </h5>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Fecha y Hora de Inicio</label>
              <div className="input-group">
                <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                <input
                  type="text"
                  className="form-control"
                  value={moment(eventos.start).format("DD/MM/YYYY HH:mm")}
                  readOnly
                />
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Fecha y Hora de Fin</label>
              <div className="input-group">
                <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                <input
                  type="text"
                  className="form-control"
                  value={moment(eventos.end).format("DD/MM/YYYY HH:mm")}
                  readOnly
                />
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Operador Asignado</label>
              <div className="input-group">
                <span className="input-group-text"><i className="fa fa-user"></i></span>
                <input
                  type="text"
                  className="form-control"
                  value={eventos.title.split(' - ')[1] || eventos.title}
                  readOnly
                />
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Nivel de Prioridad</label>
              <div className="input-group">
                <span className="input-group-text"><i className="fa fa-exclamation-triangle"></i></span>
                <input
                  type="text"
                  className={`form-control bg-${getPriorityColor(eventos.extendedProps.priority)} text-white`}
                  value={getPriorityText(eventos.extendedProps.priority)}
                  readOnly
                />
              </div>
            </div>

            <div className="col-md-12">
              <label className="form-label fw-semibold">Descripción de la Tarea</label>
              <div className="border rounded p-3 bg-light">
                <i className="fa fa-tasks me-2 text-primary"></i>
                {eventos.title.split(' - ')[0]}
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer bg-light">
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-primary px-4" onClick={cerrarEvento}>
              <i className="fa fa-arrow-left me-2"></i>
              Volver al Calendario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEvents;
