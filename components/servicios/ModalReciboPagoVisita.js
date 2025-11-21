import React from "react";
import moment from "moment";

const ModalReciboPagoVisita = ({
  plan,
  datVisi,
  imprimir
}) => {



  return (
    <div
      className="modal fade"
      id="modalReciboPagoVisita"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title" id="exampleModalLabel">
              <i className="fa fa-receipt me-2"></i>
              Recibo de Pago - Visita de Plan Ortodoncia
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">

            <div className='card shadow-sm p-4' id="orden">
              <div className="card-body p-4 border">
                <div className='row g-4'>
                  <div className='col-md-8'>
                    <div className="card bg-light">
                      <div className="card-header">
                        <h6 className="mb-0">
                          <i className="fa fa-user me-2"></i>
                          Información del Beneficiario
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="row g-2">
                          <div className="col-12">
                            <strong>Beneficiario:</strong> {plan.socio}
                          </div>
                          <div className="col-12">
                            <strong>N° Socio:</strong> {plan.contrato}
                          </div>
                          <div className="col-12">
                            <strong>Fecha:</strong> {moment(plan.fecha).format('DD/MM/YYYY')}
                          </div>
                          <div className="col-12">
                            <strong>Dr/a:</strong> {plan.prestador_nombre}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-4'>
                    <div className="card border-primary">
                      <div className="card-header bg-primary text-white">
                        <h6 className="mb-0">
                          <i className="fa fa-calculator me-2"></i>
                          Detalles del Pago
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="row g-2">
                          <div className="col-12">
                            <strong>Visita N°:</strong> {datVisi.nvisita}
                          </div>
                          <div className="col-12">
                            <strong>Importe Pagado:</strong>
                            <div className="h4 text-success mb-0">${datVisi.pago}</div>
                          </div>
                          <div className="col-12">
                            <strong>Total Plan:</strong> ${plan.total}
                          </div>
                          <div className="col-12">
                            <strong>Saldo Pendiente:</strong>
                            <div className="text-danger">${plan.saldo}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="row text-center">
                        <div className="col-6">
                          <div className="border-bottom border-dark pb-4 mb-2" style={{height: '60px'}}></div>
                          <label className="form-label">Firma del Afiliado</label>
                        </div>
                        <div className="col-6">
                          <div className="border-bottom border-dark pb-4 mb-2" style={{height: '60px'}}></div>
                          <label className="form-label">Aclaración</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer bg-light">
            <button
              type="button"
              className="btn btn-success"
              onClick={imprimir}
            >
              <i className="fa fa-print me-1"></i>
              Imprimir Recibo
            </button>
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

export default ModalReciboPagoVisita;
