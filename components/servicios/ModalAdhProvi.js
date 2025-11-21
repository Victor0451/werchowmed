import React from "react";

const ModalAdhProvi = ({
  nacimientoRef,
  nombreRef,
  apellidoRef,
  nroDocRef,
  sexoRef,
  edadRef,
  regAdhProvi,
  checkAdhProvi,
  habilita,
  infoAdh,
}) => {
  return (
    <div
      className="modal fade"
      id="ModalAdhProvi"
      tabIndex="-1"
      aria-labelledby="modalAdhProviLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-warning text-dark">
            <h5 className="modal-title" id="modalAdhProviLabel">
              <i className="fa fa-user-plus me-2"></i>
              Adherente Provisorio
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="alert alert-info shadow-sm mb-4">
              <i className="fa fa-info-circle me-2"></i>
              Podrás realizar la carga provisoria del adherente para poder
              emitir la orden médica. La misma se impactará en el sistema
              posteriormente.
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label fw-bold">DNI</label>
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="Ingrese DNI"
                      ref={nroDocRef}
                      onBlur={checkAdhProvi}
                    />
                  </div>

                  {habilita === false ? (
                    <div className="col-md-8">
                      {infoAdh.length === 0 ? (
                        <div className="alert alert-info text-center mt-4">
                          <i className="fa fa-search me-2"></i>
                          Ingresa el DNI y presiona la tecla "TAB" para
                          verificar si existe
                        </div>
                      ) : infoAdh.length > 0 ? (
                        <div className="alert alert-warning">
                          <i className="fa fa-user-check me-2"></i>
                          <strong>Adherente encontrado:</strong>{" "}
                          {infoAdh[0].APELLIDOS}, {infoAdh[0].NOMBRES}
                          <br />
                          <small>Ficha N° {infoAdh[0].CONTRATO}</small>
                        </div>
                      ) : null}
                    </div>
                  ) : habilita === true ? (
                    <>
                      <div className="col-md-12">
                        <hr className="my-4" />
                        <h6 className="text-primary mb-3">
                          <i className="fa fa-plus-circle me-2"></i>
                          Datos del Nuevo Adherente
                        </h6>
                      </div>

                      <div className="col-md-3">
                        <label className="form-label fw-bold">
                          Fecha de Nacimiento
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          ref={nacimientoRef}
                        />
                      </div>

                      <div className="col-md-3">
                        <label className="form-label fw-bold">Apellido</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Ingrese apellido"
                          ref={apellidoRef}
                        />
                      </div>

                      <div className="col-md-3">
                        <label className="form-label fw-bold">Nombre</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Ingrese nombre"
                          ref={nombreRef}
                        />
                      </div>

                      <div className="col-md-2">
                        <label className="form-label fw-bold">Edad</label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Edad"
                          ref={edadRef}
                        />
                      </div>

                      <div className="col-md-2">
                        <label className="form-label fw-bold">Sexo</label>
                        <select className="form-select" ref={sexoRef}>
                          <option value="no">Seleccionar...</option>
                          <option value="F">Femenino</option>
                          <option value="M">Masculino</option>
                        </select>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
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
              {habilita === true ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={regAdhProvi}
                >
                  <i className="fa fa-save me-1"></i>
                  Registrar Adherente
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdhProvi;
