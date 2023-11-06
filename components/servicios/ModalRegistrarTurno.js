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
  errores,
  usaWerchow,
  handleChange,
  otroCamp,
  dniRef,
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
      <div className="modal-dialog  modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Turno
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-4">
            <div className="row">
              <div className="col-md-4">
                <label>DNI:</label>
                <input type="number" className="form-control" ref={dniRef} />
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-primary btn-block mt-4"
                  onClick={buscarPaciente}
                >
                  Buscar
                </button>
              </div>
              <div className="col-md-6">
                {paciente.dni ? (
                  <div className="alert alert-success border border-dark text-center text-uppercase mt-4">
                    El DNI ingresado pertenece a un paciente registrado.
                  </div>
                ) : !paciente.dni ? (
                  <div className="alert alert-info border border-dark text-center text-uppercase mt-4">
                    El paciente no esta registrado. Este sera registrado
                    automaticamente al generar el turno.
                  </div>
                ) : (
                  <div className="alert alert-info border border-dark text-center text-uppercase mt-4">
                    Ingresa el DNI del paciente para ver si esta registrado en
                    el sistema.
                  </div>
                )}
              </div>

              {paciente.dni ? (
                <>
                  <div className="col-md-4">
                    <label>Paciente:</label>

                    <input
                      type="text"
                      className="form-control"
                      value={paciente.paciente}
                      readOnly
                      ref={pacienteRef}
                    />
                  </div>

                  <div className="col-md-8 ">
                    <label>Domicilio:</label>

                    <input
                      type="text"
                      className="form-control"
                      value={paciente.domicilio}
                      readOnly
                      ref={domicilioRef}
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>Telefono:</label>

                    <input
                      type="text"
                      className="form-control"
                      ref={telefonoRef}
                      value={paciente.telefono}
                      readOnly
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>Obra Social:</label>

                    <input
                      type="text"
                      className="form-control"
                      ref={obraSocRef}
                      value={paciente.obra_soc}
                      readOnly
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>Mail:</label>

                    <input
                      type="text"
                      className="form-control"
                      ref={mailRef}
                      value={paciente.mail}
                      readOnly
                    />
                  </div>
                </>
              ) : !paciente.dni ? (
                <>
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
                      className="custom-select"
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
                </>
              ) : null}

              <div className="col-md-4 mt-4">
                <label>Hora:</label>

                <input type="time" className="form-control" ref={horaRef} />
              </div>

              <div className="col-md-4 mt-4">
                <label>
                  <strong>
                    <u>Tiene Werchow o San Valentin</u>
                  </strong>
                </label>
                <br />
                <div className="form-check ">
                  <input
                    className="form-check-input "
                    type="radio"
                    id="obrasoc"
                    name="motivo"
                    value="option1"
                    onClick={() => usaWerchow("si")}
                  />
                  <label className="form-check-label" for="obrasoc">
                    Si
                  </label>
                </div>

                <div className="form-check ">
                  <input
                    className="form-check-input "
                    type="radio"
                    id="obrasoc"
                    name="motivo"
                    value="option1"
                    onClick={() => usaWerchow("no")}
                    defaultChecked={true}
                  />
                  <label className="form-check-label" for="obrasoc">
                    No
                  </label>
                </div>
              </div>
            </div>

            {errores ? (
              <div className="col-md-12 mt-4 border border-dark text-center text-uppercase alert alert-danger">
                {errores}
              </div>
            ) : null}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              // data-dismiss="modal"
              onClick={registrarTurno}
            >
              Registrar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRegistrarTurno;
