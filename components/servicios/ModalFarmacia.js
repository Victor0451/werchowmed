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
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Orden de Farmacia para: {socio.APELLIDOS}, {socio.NOMBRES}
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
            <div className="alert alert-info border border-dark mt-4 mb-4 text-center text-uppercase">
              Este es el uso <strong>N°{usosFarm + 1}</strong> del socio para
              el prestador de farmacia seleccionado
            </div>

            <div className="row border border-dark list p-4">
              {farmacias ? (
                <>
                  <div className="col-md-4">
                    <label>Farmacias:</label>

                    <select
                      className="custom-select"
                      ref={farmaciaRef}
                      onChange={(value) => gestionDescuento(value)}
                    >
                      <option selected value="no">
                        Selecciona una opcion
                      </option>

                      {farmacias.map((f, index) => (
                        <option key={index} value={`${f.CODIGO}-${f.DESC}`}>
                          {f.NOMBRE}
                        </option>
                      ))}
                    </select>
                    <div className="d-flex justify-content-end">
                      <button
                        className="mt-2 btn btn-primary btn-sm "
                        onClick={selDescuento}
                      >
                        Calc. Descuento
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">
                  Cargando las farmacias..
                </div>
              )}

              <div className="col-md-4">
                <label>Modalidad:</label>

                <select className="custom-select" ref={modalidadRef}>
                  <option selected value="no">
                    Selecciona una opcion
                  </option>
                  <option value="1">Particular</option>
                  <option value="2">Complemento</option>
                </select>
              </div>

              {descFarma ? (
                <div className="col-md-4">
                  <label>Descuento:</label>

                  <input
                    type="text"
                    className="form-control"
                    value={`${descFarma}`}
                    ref={descuentoRef}
                    readOnly
                  />
                </div>
              ) : (
                <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">
                  Haz Click en "Dalc. Sescuento", para ver que tipo de descuento
                  le corresponde al afiliado con este prestador.
                </div>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={registrarFarmaciaUso}
              data-dismiss="modal"
            >
              Imprimir
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

export default ModalFarmacia;
