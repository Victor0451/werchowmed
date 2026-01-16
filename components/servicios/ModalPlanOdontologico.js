import React from "react";

const ModalPlanOdontologico = ({
  socio,
  sucursales,
  espec,
  medicos,
  especialidadRefPl,
  sucursalRefPl,
  medicoRefPl,
  traerMedicosPorSuc,
  traerDetalleMedSelec,
  detalleMed,
  planOrto,
  registrarPlanOrto,
  planImp,
  registrarPlanImp,
}) => {
  return (
    <div
      className="modal fade"
      id="modalPlanOrtodoncia"
      tabIndex="-1"
      aria-labelledby="modalPlanOrtodonciaLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-info text-white">
            <h5 className="modal-title" id="modalPlanOrtodonciaLabel">
              <i className="fa fa-tooth me-2"></i>
              Plan Odontológico - {socio.APELLIDOS}, {socio.NOMBRES}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-light">
                <h6 className="mb-0">
                  <i className="fa fa-map-marker me-2"></i>
                  Seleccionar Especialista
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
                      <select className="form-select form-select-lg" ref={sucursalRefPl}>
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
                        ref={especialidadRefPl}
                        onChange={() => traerMedicosPorSuc("Pl")}
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
                        Seleccione una especialidad para ver odontólogos
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Odontólogo</label>
                      <select
                        className="form-select form-select-lg"
                        ref={medicoRefPl}
                        onChange={() => traerDetalleMedSelec("Pl")}
                      >
                        <option value="no">Seleccionar odontólogo...</option>
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

            {detalleMed && (
              <>
                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-success text-white">
                    <h6 className="mb-0">
                      <i className="fa fa-user-md me-2"></i>
                      Información del Odontólogo
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Nombre del Profesional</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          value={detalleMed.NOMBRE}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Horarios de Atención</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          value={`${detalleMed.HORARIO1} - ${detalleMed.HORARIO2}`}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Teléfono</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          value={detalleMed.TELEFONOS}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Dirección</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          value={detalleMed.DIRECCION}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-primary text-white">
                    <h6 className="mb-0">
                      <i className="fa fa-tooth me-2"></i>
                      Planes de Ortodoncia Disponibles
                    </h6>
                  </div>
                  <div className="card-body">
                    {planOrto ? (
                      <div className="row g-3">
                        {planOrto.map((p, index) => (
                          <div className="col-12" key={index}>
                            <div className="card border-primary">
                              <div className="card-header bg-light">
                                <h6 className="mb-0 text-primary">
                                  <i className="fa fa-tooth me-2"></i>
                                  Plan de Ortodoncia N°{index + 1}
                                </h6>
                              </div>
                              <div className="card-body">
                                <div className="row g-3">
                                  <div className="col-md-6">
                                    <label className="form-label fw-bold">Paciente</label>
                                    <input
                                      type="text"
                                      className="form-control bg-light"
                                      value={`${socio.APELLIDOS}, ${socio.NOMBRES}`}
                                      readOnly
                                    />
                                  </div>

                                  <div className="col-md-6">
                                    <label className="form-label fw-bold">Plan</label>
                                    <input
                                      type="text"
                                      className="form-control bg-light"
                                      value={p.detalle}
                                      readOnly
                                    />
                                    <small className="text-muted">Sujeto a modificación del especialista</small>
                                  </div>

                                  <div className="col-md-4">
                                    <label className="form-label fw-bold">Pago Inicial</label>
                                    <input
                                      type="text"
                                      className="form-control bg-light"
                                      value={p.pago_inicial}
                                      readOnly
                                    />
                                  </div>

                                  <div className="col-md-8">
                                    <label className="form-label fw-bold">Detalle del Plan</label>
                                    <input
                                      type="text"
                                      className="form-control bg-light"
                                      value={p.detalle_plan}
                                      readOnly
                                    />
                                  </div>

                                  <div className="col-12 text-end">
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-dismiss="modal"
                                      onClick={() => registrarPlanOrto(index)}
                                    >
                                      <i className="fa fa-play me-1"></i>
                                      Iniciar Plan
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="alert alert-info text-center">
                        <i className="fa fa-info-circle fa-2x mb-2"></i>
                        <h6>No hay Planes de Ortodoncia Activos</h6>
                        <p className="mb-0">Consulte con el especialista para crear un plan personalizado</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-warning text-dark">
                    <h6 className="mb-0">
                      <i className="fa fa-shield-alt me-2"></i>
                      Aparato de Contención
                    </h6>
                  </div>
                  <div className="card-body">
                    {planImp ? (
                      <div className="card border-warning">
                        <div className="card-body">
                          <div className="row g-3">
                            <div className="col-md-6">
                              <label className="form-label fw-bold">Paciente</label>
                              <input
                                type="text"
                                className="form-control bg-light"
                                value={`${socio.APELLIDOS}, ${socio.NOMBRES}`}
                                readOnly
                              />
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-bold">Plan</label>
                              <input
                                type="text"
                                className="form-control bg-light"
                                value={planImp.detalle}
                                readOnly
                              />
                              <small className="text-muted">Sujeto a modificación del especialista</small>
                            </div>

                            <div className="col-md-4">
                              <label className="form-label fw-bold">Pago Inicial</label>
                              <input
                                type="text"
                                className="form-control bg-light"
                                value={planImp.pago_inicial}
                                readOnly
                              />
                            </div>

                            <div className="col-md-8">
                              <label className="form-label fw-bold">Detalle del Plan</label>
                              <input
                                type="text"
                                className="form-control bg-light"
                                value={planImp.detalle_plan}
                                readOnly
                              />
                            </div>

                            <div className="col-12 text-end">
                              <button
                                type="button"
                                className="btn btn-warning"
                                data-bs-dismiss="modal"
                                onClick={registrarPlanImp}
                              >
                                <i className="fa fa-play me-1"></i>
                                Iniciar Plan de Contención
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="alert alert-warning text-center">
                        <i className="fa fa-exclamation-triangle fa-2x mb-2"></i>
                        <h6>No hay Planes de Contención Activos</h6>
                        <p className="mb-0">Consulte con el odontólogo para tratamientos de retención</p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="modal-footer bg-light">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="fa fa-times me-1"></i>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPlanOdontologico;
