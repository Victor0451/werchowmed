import React from "react";
import TurnosMedicosDelDia from "../../components/servicios/TurnosMedicosDelDia";

const FormGestionTurno = ({
  medicos,
  medicoRef,
  diaRef,
  turnoRef,
  errores,
  buscarListadoTurnos,
  listTurno,
}) => {
  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary fw-bold mb-0">
          <i className="fa fa-calendar-check me-2"></i>
          Gestión de Turnos Médicos
        </h1>
        <button
          className="btn btn-primary"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTurnosMedicos"
        >
          <i className="fa fa-clock me-1"></i>
          Ver Turnos del Día
        </button>
      </div>

      {/* Today's Appointments */}
      <TurnosMedicosDelDia listTurno={listTurno} />

      {/* Search Form */}
      <div className="card shadow-sm">
        <div className="card-header bg-info text-white">
          <h5 className="mb-0">
            <i className="fa fa-search me-2"></i>
            Buscar Turnos Disponibles
          </h5>
        </div>
        <div className="card-body">
          <div className="row align-items-end">
            {medicos ? (
              <div className="col-md-4">
                <label className="form-label fw-bold">Prestador Médico</label>
                <select className="form-select form-select-lg" ref={medicoRef}>
                  <option value="no">Seleccionar médico...</option>
                  {medicos.map((m, index) => (
                    <option key={index} value={m.COD_PRES}>
                      {m.NOMBRE}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="col-12">
                <div className="alert alert-info text-center">
                  <i className="fa fa-info-circle me-2"></i>
                  No hay médicos registrados en el sistema
                </div>
              </div>
            )}

            <div className="col-md-3">
              <label className="form-label fw-bold">Fecha</label>
              <input type="date" className="form-control form-control-lg" ref={diaRef} />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-bold">Turno</label>
              <select className="form-select form-select-lg" ref={turnoRef}>
                <option value="no">Seleccionar turno...</option>
                <option value="Mañana">Mañana</option>
                <option value="Tarde">Tarde</option>
              </select>
            </div>

            <div className="col-md-2">
              <button
                className="btn btn-info btn-lg w-100"
                onClick={buscarListadoTurnos}
              >
                <i className="fa fa-search me-1"></i>
                Buscar
              </button>
            </div>
          </div>

          {/* Error Display */}
          {errores && (
            <div className="alert alert-danger mt-3 text-center">
              <i className="fa fa-exclamation-triangle me-2"></i>
              {errores}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormGestionTurno;
