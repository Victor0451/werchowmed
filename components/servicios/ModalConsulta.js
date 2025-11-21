import React from "react";

const ModalConsulta = ({
  socio,
  sucursales,
  espec,
  medicos,
  traerMedicosPorSuc,
  especialidadRef,
  sucursalRef,
  medicoRef,
  traerDetalleMedSelec,
  detalleMed,
  registrarOrdenUsos,
  priUso,
  selector,
  isj,
  importeOrden,
}) => {
  return (
    <div
      className="modal fade"
      id="modalConsulta"
      tabIndex="-1"
      aria-labelledby="modalConsultaLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title" id="modalConsultaLabel">
              <i className="fa fa-stethoscope me-2"></i>
              Orden de Consulta - {socio.APELLIDOS}, {socio.NOMBRES}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="alert alert-info shadow-sm mb-4">
              <i className="fa fa-info-circle me-2"></i>
              Esta es la orden de consulta <strong>n° {priUso + 1}</strong> del mes
            </div>

            <div className="card shadow-sm mb-4">
              <div className="card-header bg-light">
                <h6 className="mb-0">
                  <i className="fa fa-map-marker me-2"></i>
                  Seleccionar Ubicación y Especialidad
                </h6>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {!sucursales ? (
                    <div className="col-md-4">
                      <div className="alert alert-info text-center">
                        <i className="fa fa-spinner fa-spin me-2"></i>
                        Cargando sucursales...
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Sucursal</label>
                      <select className="form-select form-select-lg" ref={sucursalRef}>
                        <option value="no">Seleccionar sucursal...</option>
                        {sucursales.map((s, index) => (
                          <option key={index} value={s.codigo}>
                            {s.sucursal}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {!espec ? (
                    <div className="col-md-4">
                      <div className="alert alert-warning text-center">
                        <i className="fa fa-exclamation-triangle me-2"></i>
                        Seleccione una sucursal para ver especialidades
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Especialidad</label>
                      <select
                        className="form-select form-select-lg"
                        ref={especialidadRef}
                        onChange={() => traerMedicosPorSuc("C")}
                      >
                        <option value="no">Seleccionar especialidad...</option>
                        {espec.map((s, index) => (
                          <option key={index} value={s.ESPECIAL}>
                            {s.NOMBRE}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {!medicos ? (
                    <div className="col-md-4">
                      <div className="alert alert-warning text-center">
                        <i className="fa fa-user-md me-2"></i>
                        Seleccione una especialidad para ver médicos
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-4">
                      <label className="form-label fw-bold">
                        Médico
                        {detalleMed && (
                          <span className="badge bg-success ms-2">
                            ${detalleMed.CON_PAGA}
                          </span>
                        )}
                      </label>
                      <select
                        className="form-select form-select-lg"
                        ref={medicoRef}
                        onChange={() => traerDetalleMedSelec("C")}
                      >
                        <option value="no">Seleccionar médico...</option>
                        {medicos.map((s, index) => (
                          <option key={index} value={s.COD_PRES}>
                            {s.NOMBRE}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {detalleMed.COD_PRES && (
              <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                  <h6 className="mb-0">
                    <i className="fa fa-user-md me-2"></i>
                    Detalles del Médico
                  </h6>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Nombre del Médico</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        value={detalleMed.NOMBRE}
                        readOnly
                      />
                    </div>

                    <div className="col-md-8">
                      <label className="form-label fw-bold">Horarios de Atención</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        value={`${detalleMed.HORARIO1} - ${detalleMed.HORARIO2}`}
                        readOnly
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-bold">Teléfono</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        value={detalleMed.TELEFONOS}
                        readOnly
                      />
                    </div>

                    <div className="col-md-8">
                      <label className="form-label fw-bold">Dirección</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        value={detalleMed.DIRECCION}
                        readOnly
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-bold">¿Tiene I.S.J?</label>
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="isj-si"
                            name="isj"
                            onClick={() => selector("si")}
                          />
                          <label className="form-check-label" htmlFor="isj-si">
                            Sí
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="isj-no"
                            name="isj"
                            onClick={() => selector("no")}
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="isj-no">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alerts */}
                  <div className="mt-3">
                    {detalleMed.AUSENTE && detalleMed.AUSENTE === 1 && (
                      <div className="alert alert-danger">
                        <i className="fa fa-exclamation-triangle me-2"></i>
                        <strong>Atención:</strong> El prestador {detalleMed.NOMBRE} se encuentra de licencia
                        (Vacaciones/Carpeta Médica). No se pueden generar órdenes a su nombre.
                      </div>
                    )}

                    {isj === true && (
                      <div className="alert alert-info">
                        <i className="fa fa-info-circle me-2"></i>
                        Al presentar la orden de I.S.J. se le descontará $350 al monto total de esta orden de consulta.
                      </div>
                    )}

                    <div className="alert alert-success text-center">
                      <i className="fa fa-calculator me-2"></i>
                      <strong>Coseguro: $</strong>
                      {isj === true && priUso > 1 ? importeOrden() - 350 : importeOrden()}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer bg-light">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="fa fa-times me-1"></i>
              Cancelar
            </button>
            {detalleMed.AUSENTE && detalleMed.AUSENTE === 1 ? null : (
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => registrarOrdenUsos()}
              >
                <i className="fa fa-print me-1"></i>
                Imprimir Orden
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConsulta;
