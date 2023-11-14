import React from "react";
import toastr from "toastr";

const ModalEnfermeria = ({
  socio,
  sucursales,
  enfer,
  sucursalRefE,
  traerEnfer,
  detEnf,
  traerDetalleMedSelec,
  medicoRefE,
  practEnfer,
  prestacionRefE,
  cantidadRefE,
  registrarEnfermeriaUso,
  arancel,
  arancelEnfDomi,
  indexSel,
}) => {
  return (
    <div
      className="modal fade"
      id="modalEnfermeria"
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
            <div className="row border border-dark list p-4">
              {!sucursales ? (
                <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">
                  Cargando Sucursales...
                </div>
              ) : (
                <div className="col-md-4">
                  <label>Sucursal:</label>

                  <select
                    className="custom-select"
                    ref={sucursalRefE}
                    onChange={traerEnfer}
                  >
                    <option value="no">Selecciona una opcion</option>
                    {sucursales.map((s, index) => (
                      <option key={index} value={s.codigo}>
                        {s.sucursal}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {!enfer ? (
                <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">
                  Selecciona una Sucursal Para Traer los prestadores de
                  enfermeria
                </div>
              ) : (
                <div className="col-md-4">
                  <label>Prestador:</label>

                  <select
                    className="custom-select"
                    ref={medicoRefE}
                    onChange={() => traerDetalleMedSelec("E")}
                  >
                    <option selected value="no">
                      Selecciona una opcion
                    </option>
                    {enfer.map((s, index) => (
                      <option key={index} value={s.COD_PRES}>
                        {s.NOMBRE}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {detEnf ? (
              <>
                <hr className="mt-4 mb-4" />

                <div className="border border-dark p-4">
                  <h4>
                    <u>Detalle del Prestador</u>
                  </h4>

                  <div className="row border border-dark p-4 mt-4">
                    <div className="col-md-4">
                      <label>
                        <u>Dr</u>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={detEnf.NOMBRE}
                      />
                    </div>

                    <div className="col-md-8">
                      <label>
                        <u>Horarios</u>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={`${detEnf.HORARIO1} - ${detEnf.HORARIO2}`}
                      />
                    </div>

                    <div className="col-md-4 mt-4">
                      <label>
                        <u>Telefono</u>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={detEnf.TELEFONOS}
                      />
                    </div>

                    <div className="col-md-8 mt-4">
                      <label>
                        <u>Direccion</u>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={detEnf.DIRECCION}
                      />
                    </div>

                    {!practEnfer ? (
                      <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">
                        No hay prestacion registrada
                      </div>
                    ) : (
                      <div className="col-md-8 mt-4">
                        <h6>Listado de Prestaciones:</h6>

                        <table className="table table-sm mt-2 border">
                          <thead className="thead-dark">
                            <tr className="trSel">
                              <th scope="col">#</th>
                              <th scope="col">Practica</th>
                              <th scope="col">Importe</th>
                              <th scope="col">Accion</th>
                            </tr>
                          </thead>
                          <tbody>
                            {practEnfer.map((p, index) => (
                              <tr
                                key={index}
                                style={{
                                  backgroundColor:
                                    index === indexSel ? "gray" : "",
                                  color: index === indexSel ? "white" : "",
                                }}
                              >
                                <th scope="row">{index + 1}</th>
                                <td>{p.practica}</td>
                                <td>{p.importe}</td>
                                <td>
                                  <div
                                    className="butlist text-center"
                                    onClick={() => {
                                      arancelEnfDomi(p, index);
                                    }}
                                  >
                                    <i className="butfa fa fa-arrow-left"></i>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    <div className="col-md-4 mt-4">
                      <label>Cantidad:</label>

                      <input
                        type="number"
                        className="form-control"
                        defaultValue={1}
                        ref={cantidadRefE}
                        onChange={() =>
                          toastr.info(
                            "Cambiaste la cantidad, vuelve a seleccionar la practica para actualizar el valor final de la orden"
                          )
                        }
                      />
                    </div>
                    <div className="col-md-8 mt-4">
                      <div className="alert alert-info border border-dark mt-4 mb-4 text-center text-uppercase">
                        El valor final de la orden esta determinado por el
                        importe de la practica seleccionada, multiplicada por la
                        cantidad ingresada. En caso de ingresar una nueva
                        cantidad, para actualizar el valor final solo basta con
                        volver a seleccionar la practica.
                      </div>
                    </div>

                    <div className="col-md-4  mt-4">
                      <div className="mt-4 alert alert-info text-center text-uppercase border border-dark">
                        <>
                          <u>Coseguro</u>: ${arancel}
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={registrarEnfermeriaUso}
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

export default ModalEnfermeria;
