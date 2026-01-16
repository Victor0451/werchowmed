import React from "react";

const ModalFarmacia = ({
  socio,
  farmacias,
  farmaciaRef,
  modalidadRef,
  descuentoRef,
  gestionDescuento,
  descFarma,
  registrarFarmaciaUso,
  usosFarm,
  selDescuento,
}) => {
  return (
    <div
      className="modal fade"
      id="modalFarmacia"
      tabIndex="-1"
      aria-labelledby="modalFarmaciaLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title" id="modalFarmaciaLabel">
              <i className="fa fa-pills me-2"></i>
              Orden de Farmacia - {socio.APELLIDOS}, {socio.NOMBRES}
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
              <i className="fa fa-hashtag me-2"></i>
              Este es el uso <strong>N°{usosFarm + 1}</strong> del socio para el prestador de farmacia seleccionado
            </div>

            <div className="card shadow-sm">
              <div className="card-header bg-light">
                <h6 className="mb-0">
                  <i className="fa fa-cog me-2"></i>
                  Configurar Orden de Farmacia
                </h6>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {farmacias ? (
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Farmacia</label>
                      <select
                        className="form-select form-select-lg"
                        ref={farmaciaRef}
                        onChange={(value) => gestionDescuento(value)}
                      >
                        <option value="no">Seleccionar farmacia...</option>
                        {farmacias.map((f, index) => (
                          <option key={index} value={`${f.CODIGO}-${f.DESC}`}>
                            {f.NOMBRE}
                          </option>
                        ))}
                      </select>
                      <div className="d-flex justify-content-end mt-2">
                        <button
                          className="btn btn-outline-primary btn-sm"
                          onClick={selDescuento}
                        >
                          <i className="fa fa-calculator me-1"></i>
                          Calcular Descuento
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-4">
                      <div className="alert alert-info text-center">
                        <i className="fa fa-spinner fa-spin me-2"></i>
                        Cargando farmacias...
                      </div>
                    </div>
                  )}

                  <div className="col-md-4">
                    <label className="form-label fw-bold">Modalidad</label>
                    <select className="form-select form-select-lg" ref={modalidadRef}>
                      <option value="no">Seleccionar modalidad...</option>
                      <option value="1">Particular</option>
                      <option value="2">Complemento</option>
                    </select>
                  </div>

                  {descFarma ? (
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Descuento Aplicado</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control form-control-lg bg-light"
                          value={`${descFarma}`}
                          ref={descuentoRef}
                          readOnly
                        />
                        <span className="input-group-text">
                          <i className="fa fa-percent"></i>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-4">
                      <div className="alert alert-warning">
                        <i className="fa fa-exclamation-triangle me-2"></i>
                        Haga clic en "Calcular Descuento" para ver el tipo de descuento que corresponde al afiliado con este prestador.
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
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="fa fa-times me-1"></i>
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={registrarFarmaciaUso}
              data-bs-dismiss="modal"
            >
              <i className="fa fa-print me-1"></i>
              Imprimir Orden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFarmacia;
