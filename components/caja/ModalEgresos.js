import React from "react";
import Select from "react-select";

const ModalEgresos = ({
  errores,
  descripcionERef,
  serieERef,
  nFacturaERef,
  importeERef,
  regEgreso,
  cuentas,
  tipoFac,
  cuitERef,
  handleChange,
}) => {
  return (
    <div
      className="modal fade"
      id="modalEgresos"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              <u>Gestion de Egresos</u>
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="border border-dark p-4 ">
              <div className=" border border-dark p-4 mt-4">
                <h2>
                  <strong>
                    <u>Registrar Egresos</u>
                  </strong>
                </h2>

                <div className="row mt-4 border border-dark p-4">
                  <div className="col-md-4">
                    <label>Cuenta</label>
                    <Select
                      className=" text-sm rounded-xl"
                      placeholder="Cuenta"
                      options={cuentas.map((i) => ({
                        label: `${i.DESC}`,
                        value: `${i.CODI}-${i.CUEN}-${i.DESC}`,
                      }))}
                      onChange={(value) => {
                        handleChange("cuenta", value.value);
                      }}
                    />
                  </div>

                  <div className="col-md-4">
                    <label>Tipo Factura</label>
                    <Select
                      className=" text-sm rounded-xl"
                      placeholder="Comprobante"
                      options={tipoFac.map((i) => ({
                        label: `${i.tipo_factura}`,
                        value: `${i.tipo_factura}`,
                      }))}
                      onChange={(value) => {
                        handleChange("comprobante", value.value);
                      }}
                    />
                  </div>

                  <div className="col-md-4 ">
                    <label>Serie</label>

                    <input
                      type="number"
                      defaultValue={0}
                      className="form-control"
                      ref={serieERef}
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>N° Factura</label>

                    <input
                      type="number"
                      defaultValue={0}
                      className="form-control"
                      ref={nFacturaERef}
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>CUIT</label>

                    <input
                      type="text"
                      className="form-control"
                      ref={cuitERef}
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>Importe</label>

                    <input
                      type="number"
                      className="form-control"
                      ref={importeERef}
                    />
                  </div>

                  <div className="col-md-12 mt-4">
                    <label>Descripcion</label>

                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Descripcion"
                      ref={descripcionERef}
                    />
                  </div>
                </div>
                {errores ? (
                  <div className="mt-4 border border-dark alert alert-danger text-center text-uppercase">
                    {errores}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={regEgreso}
            >
              Registrar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEgresos;
