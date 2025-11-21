import React from "react";
import Link from "next/link";

const FormRegAusencias = ({
  medicos,
  medicoRef,
  motivoRef,
  desdeRef,
  hastaRef,
  observacionRef,
  handleChange,
  errores,
  regAusencia,
}) => {
  return (
    <div className="row g-4 mb-4">
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-header bg-warning text-dark">
            <h4 className="mb-0">
              <i className="fa fa-user-times me-2"></i>
              Registro de Ausencias - Prestadores
            </h4>
          </div>
          <div className="card-body">
            <div className="row g-3">
              {medicos ? (
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Seleccionar Prestador</label>
                  <select
                    className="form-select"
                    ref={medicoRef}
                    onChange={() => {
                      handleChange();
                    }}
                  >
                    <option value="no">Selecciona un prestador</option>
                    {medicos.map((m, index) => (
                      <option key={index} value={`${m.COD_PRES}-${m.NOMBRE}`}>
                        {m.COD_PRES} - {m.NOMBRE}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="col-12">
                  <div className="alert alert-info border-0 shadow-sm text-center">
                    <i className="fa fa-info-circle me-2"></i>
                    No hay prestadores registrados
                  </div>
                </div>
              )}

              <div className="col-md-6">
                <label className="form-label fw-semibold">Motivo de Ausencia</label>
                <select className="form-select" ref={motivoRef}>
                  <option value="no">Selecciona un motivo</option>
                  <option value="Vacaciones">Vacaciones</option>
                  <option value="Carpeta Medica">Carpeta Médica</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Fecha de Inicio</label>
                <input type="date" className="form-control" ref={desdeRef} />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Fecha de Fin</label>
                <input type="date" className="form-control" ref={hastaRef} />
              </div>

              <div className="col-md-12">
                <label className="form-label fw-semibold">Observaciones</label>
                <textarea
                  rows={4}
                  className="form-control"
                  ref={observacionRef}
                  placeholder="Describa las observaciones adicionales..."
                />
              </div>
            </div>

            {errores ? (
              <div className="alert alert-danger border-0 shadow-sm mt-3">
                <i className="fa fa-exclamation-triangle me-2"></i>
                <strong>Error:</strong> {errores}
              </div>
            ) : null}
          </div>
          <div className="card-footer bg-light">
            <div className="d-flex justify-content-end gap-3">
              <button
                className="btn btn-success px-4"
                onClick={regAusencia}
              >
                <i className="fa fa-save me-2"></i>
                Registrar Ausencia
              </button>
              <Link href="/">
                <button className="btn btn-outline-secondary px-4">
                  <i className="fa fa-times me-2"></i>
                  Cancelar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegAusencias;
