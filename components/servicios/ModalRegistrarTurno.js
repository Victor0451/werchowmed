import React from "react";

const ModalRegistrarTurno = ({
  horaRef,
  pacienteRef,
  obraSocRef,
  otraOSRef,
  telefonoRef,
  domicilioRef,
  mailRef,
  registrarTurno,
  motivoTurnoRef,
  nOrdenRef,
  errores,
  usaWerchow,
  handleChange,
  otroCamp,
  dniRef,
  descripRef,
  buscarPaciente,
  paciente,
}) => {
  return (
    <div
      className="modal fade"
      id="modalRegistro"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title" id="exampleModalLabel">
              <i className="fa fa-calendar-plus me-2"></i>
              Registrar Nuevo Turno
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
                  <i className="fa fa-search me-2"></i>
                  Búsqueda de Paciente
                </h6>
              </div>
              <div className="card-body">
                <div className="row g-3 align-items-end">
                  <div className="col-md-4">
                    <label className="form-label fw-bold">
                      DNI del Paciente
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      ref={dniRef}
                    />
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-primary w-100"
                      onClick={buscarPaciente}
                    >
                      <i className="fa fa-search me-1"></i>
                      Buscar Paciente
                    </button>
                  </div>
                  <div className="col-md-5">
                    {paciente.dni ? (
                      <div className="alert alert-success text-center">
                        <i className="fa fa-check-circle fa-2x mb-2"></i>
                        <p className="mb-0">Paciente registrado encontrado</p>
                      </div>
                    ) : paciente.dni === false ? (
                      <div className="alert alert-info text-center">
                        <i className="fa fa-info-circle fa-2x mb-2"></i>
                        <p className="mb-0">
                          Paciente no registrado. Se registrará automáticamente.
                        </p>
                      </div>
                    ) : (
                      <div className="alert alert-light text-center">
                        <i className="fa fa-user me-2"></i>
                        Ingresa el DNI para buscar al paciente
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {paciente.dni ? (
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-success text-white">
                  <h6 className="mb-0">
                    <i className="fa fa-user-check me-2"></i>
                    Paciente Registrado
                  </h6>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        Nombre del Paciente
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={paciente.paciente}
                        readOnly
                        ref={pacienteRef}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-bold">Domicilio</label>
                      <input
                        type="text"
                        className="form-control"
                        value={paciente.domicilio}
                        readOnly
                        ref={domicilioRef}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-bold">Teléfono</label>
                      <input
                        type="text"
                        className="form-control"
                        ref={telefonoRef}
                        value={paciente.telefono}
                        readOnly
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-bold">Obra Social</label>
                      <input
                        type="text"
                        className="form-control"
                        ref={obraSocRef}
                        value={paciente.obra_soc}
                        readOnly
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-bold">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        ref={mailRef}
                        value={paciente.mail}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-success text-white">
                  <h6 className="mb-0">
                    <i className="fa fa-user-check me-2"></i>
                    Registrar Paciente
                  </h6>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label>Paciente:</label>

                      <input
                        type="text"
                        className="form-control"
                        ref={pacienteRef}
                        id="paciente"
                      />
                    </div>

                    <div className="col-md-8 ">
                      <label>Domicilio:</label>

                      <input
                        type="text"
                        className="form-control"
                        ref={domicilioRef}
                        id="domicilio"
                      />
                    </div>

                    <div className="col-md-4 mt-4">
                      <label>Telefono:</label>

                      <input
                        type="text"
                        className="form-control"
                        ref={telefonoRef}
                        id="telefono"
                      />
                    </div>

                    <div className="col-md-4 mt-4">
                      <label>
                        <u>Obra Social</u>
                      </label>

                      <select
                        className="form-select"
                        defaultValue={"no"}
                        ref={obraSocRef}
                        onChange={handleChange}
                      >
                        <option value="no">Elige una Opcion</option>

                        <option value="ISJ">ISJ</option>
                        <option value="OSDE">OSDE</option>
                        <option value="PAMI">PAMI</option>
                        <option value="IOSFA">IOSFA</option>
                        <option value="AYE">A Y E ( agua y energía)</option>
                        <option value="SANCOR">SANCOR</option>
                        <option value="SWISS MEDICAL">SWISS MEDICAL</option>
                        <option value="BRAMED">BRAMED</option>
                        <option value="OSPE">OSPE</option>
                        <option value="OSPEDYC">OSPEDYC</option>
                        <option value="OSAM">OSAM</option>
                        <option value="OSECAC">OSECAC </option>
                        <option value="SALUD JUJUY">SALUD JUJUY</option>
                        <option value="PODER JUDICIAL">PODER JUDICIAL</option>
                        <option value="OTRA">OTRA</option>
                        <option value="NO TENGO">NO TENGO</option>
                      </select>

                      {otroCamp === true ? (
                        <input
                          type="text"
                          className="form-control mt-4"
                          placeholder="Ingresa tu obra social"
                          ref={otraOSRef}
                        />
                      ) : null}
                    </div>

                    <div className="col-md-4 mt-4">
                      <label>Mail:</label>

                      <input
                        type="text"
                        className="form-control"
                        ref={mailRef}
                        id="mail"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="card shadow-sm mb-4">
              <div className="card-header bg-info text-white">
                <h6 className="mb-0">
                  <i className="fa fa-calendar-check me-2"></i>
                  Detalles del Turno
                </h6>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-3">
                    <label className="form-label fw-bold">Hora del Turno</label>
                    <input type="time" className="form-control" ref={horaRef} />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-bold">
                      ¿Tiene Werchow/San Valentín?
                    </label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="werchow-si"
                          name="werchow"
                          onClick={() => usaWerchow("si")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="werchow-si"
                        >
                          Sí
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="werchow-no"
                          name="werchow"
                          onClick={() => usaWerchow("no")}
                          defaultChecked={true}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="werchow-no"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-bold">
                      Motivo del Turno
                    </label>
                    <select
                      className="form-select"
                      defaultValue={"no"}
                      ref={motivoTurnoRef}
                      onChange={handleChange}
                    >
                      <option value="no">Seleccionar motivo...</option>
                      <option value="Consulta">Consulta</option>
                      <option value="Practica">Práctica</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-bold">N° de Orden</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nOrdenRef}
                      placeholder="Número de orden emitida"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-bold">Observaciones</label>
                    <textarea
                      rows={4}
                      className="form-control"
                      ref={descripRef}
                      placeholder="Ingrese observaciones adicionales..."
                    />
                  </div>

                  {errores && (
                    <div className="col-12">
                      <div className="alert alert-danger shadow-sm">
                        <i className="fa fa-exclamation-triangle me-2"></i>
                        <strong>Error:</strong> {errores}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer bg-light">
            <button
              type="button"
              className="btn btn-success"
              onClick={registrarTurno}
            >
              <i className="fa fa-save me-1"></i>
              Registrar Turno
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="fa fa-times me-1"></i>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRegistrarTurno;
