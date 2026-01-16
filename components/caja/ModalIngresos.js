import React from "react";
import Select from "react-select";

const ModalIngresos = ({
  errores,
  descripcionIRef,
  serieIRef,
  nFacturaIRef,
  importeIRef,
  regIngreso,
  cuentas,
  tipoFac,
  cuitIRef,
  handleChange,
}) => {
  return (
    <div
      className="modal fade"
      id="modalIngresos"
      tabIndex="-1"
      aria-labelledby="ModalIngresosLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content shadow">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title fw-bold" id="ModalIngresosLabel">
              <i className="fa fa-arrow-up me-2"></i>
              Gestión de Ingresos
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-light">
                <h5 className="mb-0 text-success">
                  <i className="fa fa-plus-circle me-2"></i>
                  Registrar Nuevo Ingreso
                </h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Cuenta de Imputación</label>
                    <Select
                      className="form-select"
                      placeholder="Seleccionar cuenta"
                      options={cuentas.map((i) => ({
                        label: `${i.DESC}`,
                        value: `${i.CODI}-${i.CUEN}-${i.DESC}`,
                      }))}
                      onChange={(value) => {
                        handleChange("cuenta", value.value);
                      }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Tipo de Factura</label>
                    <Select
                      className="form-select"
                      placeholder="Seleccionar comprobante"
                      options={tipoFac.map((i) => ({
                        label: `${i.tipo_factura}`,
                        value: `${i.tipo_factura}`,
                      }))}
                      onChange={(value) => {
                        handleChange("comprobante", value.value);
                      }}
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Serie</label>
                    <input
                      type="number"
                      defaultValue={0}
                      className="form-control"
                      ref={serieIRef}
                      placeholder="000"
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-semibold">N° Factura</label>
                    <input
                      type="number"
                      defaultValue={0}
                      className="form-control"
                      ref={nFacturaIRef}
                      placeholder="00000000"
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-semibold">CUIT</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={cuitIRef}
                      placeholder="00-00000000-0"
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Importe</label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        className="form-control"
                        ref={importeIRef}
                        placeholder="0.00"
                        step="0.01"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label className="form-label fw-semibold">Descripción</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Describa detalladamente el ingreso..."
                      ref={descripcionIRef}
                    />
                  </div>
                </div>
              </div>
            </div>

            {errores ? (
              <div className="alert alert-danger border-0 shadow-sm mt-3">
                <i className="fa fa-exclamation-triangle me-2"></i>
                <strong>Error:</strong> {errores}
              </div>
            ) : null}
          </div>

          <div className="modal-footer bg-light">
            <button
              type="button"
              className="btn btn-success px-4"
              onClick={regIngreso}
            >
              <i className="fa fa-save me-2"></i>
              Registrar Ingreso
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary px-4"
              data-bs-dismiss="modal"
            >
              <i className="fa fa-times me-2"></i>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalIngresos;
