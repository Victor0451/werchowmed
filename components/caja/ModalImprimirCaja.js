import React from "react";
import moment from "moment";

const ModalImprimirCaja = ({
  ingresos,
  egresos,
  calcTotal,
  imprimir,
  listControl,
  fec,
}) => {
  return (
    <div
      className="modal fade"
      id="modalImprimirCaja"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title" id="staticBackdropLabel">
              <i className="fa fa-print me-2"></i>
              Imprimir Caja
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div id="caja" className="card shadow-sm p-4">
              <div className="card shadow-sm p-4">
                <div className="card-header bg-primary text-white">
                  <h2 className="mb-0">
                    <i className="fa fa-cash-register me-2"></i>
                    Caja Otero - {fec ? moment(fec).utcOffset("+0300").format("DD/MM/YYYY") : null}
                  </h2>
                </div>
                <div className="card-body">

                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="card shadow-sm h-100">
                        <div className="card-header bg-success text-white">
                          <h5 className="mb-0">
                            <i className="fa fa-arrow-up me-2"></i>
                            Ingresos
                          </h5>
                        </div>
                        <div className="card-body">
                          {!ingresos ? (
                            <div className="alert alert-info text-center">
                              <i className="fa fa-info-circle fa-2x mb-2"></i>
                              <p className="mb-0">No hay ingresos registrados</p>
                            </div>
                          ) : (
                            <>
                              <div className="table-responsive">
                                <table className="table table-striped">
                                  <thead className="table-dark">
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Detalle</th>
                                      <th scope="col">Importe</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {ingresos.map((i, index) => (
                                      <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{i.DETALLE}</td>
                                        <td className="text-end">${i.IMPORTE.toFixed(2)}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                              <div className="alert alert-success text-center mt-3">
                                <strong>Total Ingresos: ${calcTotal(ingresos)}</strong>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card shadow-sm h-100">
                        <div className="card-header bg-danger text-white">
                          <h5 className="mb-0">
                            <i className="fa fa-arrow-down me-2"></i>
                            Egresos
                          </h5>
                        </div>
                        <div className="card-body">
                          {!egresos ? (
                            <div className="alert alert-info text-center">
                              <i className="fa fa-info-circle fa-2x mb-2"></i>
                              <p className="mb-0">No hay egresos registrados</p>
                            </div>
                          ) : (
                            <>
                              <div className="table-responsive">
                                <table className="table table-striped">
                                  <thead className="table-dark">
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Detalle</th>
                                      <th scope="col">Importe</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {egresos.map((e, index) => (
                                      <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{e.DETALLE}</td>
                                        <td className="text-end">${e.IMPORTE.toFixed(2)}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                              <div className="alert alert-danger text-center mt-3">
                                <strong>Total Egresos: ${calcTotal(egresos)}</strong>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="alert alert-primary text-center shadow-sm">
                        <i className="fa fa-calculator fa-2x mb-2"></i>
                        <h5 className="mb-1">Valores a Depositar</h5>
                        <h3 className="mb-0 text-primary">
                          ${ingresos && egresos ? (calcTotal(ingresos) - calcTotal(egresos)).toFixed(2) : '0.00'}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm mt-4">
              <div className="card-header bg-info text-white">
                <h5 className="mb-0">
                  <i className="fa fa-list-check me-2"></i>
                  Listado de Control
                </h5>
              </div>
              <div className="card-body">
                {!listControl ? (
                  <div className="alert alert-warning text-center">
                    <i className="fa fa-exclamation-triangle fa-2x mb-2"></i>
                    <p className="mb-0">No hay listado de control disponible</p>
                  </div>
                ) : (
                  <>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead className="table-dark">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">N° Orden</th>
                            <th scope="col">Contrato</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Servicio</th>
                            <th scope="col">Importe</th>
                            <th scope="col">Operador</th>
                          </tr>
                        </thead>
                        <tbody>
                          {listControl.map((i, index) => (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>
                                {moment(i.FECHA)
                                  .utcOffset("+0300")
                                  .format("DD/MM/YYYY")}
                              </td>
                              <td>{i.ORDEN}</td>
                              <td>{i.CONTRATO}</td>
                              <td>{i.NRO_DOC}</td>
                              <td>{i.SERVICIO}</td>
                              <td className="text-end">${i.IMPORTE.toFixed(2)}</td>
                              <td>{i.OPERADOR}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="alert alert-info text-center mt-3">
                      <i className="fa fa-chart-bar fa-2x mb-2"></i>
                      <h5 className="mb-1">Total Generado</h5>
                      <h3 className="mb-0 text-info">${calcTotal(listControl)}</h3>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="card shadow-sm mt-4">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  <i className="fa fa-cogs me-2"></i>
                  Opciones
                </h5>
              </div>
              <div className="card-body text-center">
                <button className="btn btn-primary btn-lg" onClick={imprimir}>
                  <i className="fa fa-print me-2"></i>
                  Imprimir Caja
                </button>
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
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalImprimirCaja;
