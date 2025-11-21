import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";

const ListadoOrdenesEmitidas = ({
  fechaRef,
  ordenesDelDia,
  errores,
  resu,
  listado,
  totalImporte,
  traerOrdenesEmitidas,
  guardarResu,
  generarImpresion,
  anularOrdenes,
  perfil,
  user,
}) => {
  if (!listado)
    return (
      <div className="container-fluid mt-4">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h2 className="mb-0">
              <i className="fa fa-spinner fa-spin me-2"></i>
              Generando Listado de Órdenes
            </h2>
          </div>
          <div className="card-body text-center py-5">
            <Spinner />
            <p className="text-muted mt-3">Cargando órdenes emitidas...</p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">
            <i className="fa fa-file-text me-2"></i>
            {perfil === 1 || perfil === 3 ? (
              <>Listado de Órdenes Emitidas - Todos los Usuarios</>
            ) : (
              <>Listado de Órdenes Emitidas - {user}</>
            )}
          </h2>
        </div>
        <div className="card-body">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-light">
              <h5 className="mb-0">
                <i className="fa fa-calendar-day me-2"></i>
                Resumen de Órdenes por Día
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3 align-items-end">
                <div className="col-md-4">
                  <label className="form-label fw-bold">
                    Seleccionar Fecha
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    ref={fechaRef}
                  />
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary w-100"
                    onClick={ordenesDelDia}
                  >
                    <i className="fa fa-search me-1"></i>
                    Buscar
                  </button>
                </div>
                <div className="col-md-3">
                  <button
                    className="btn btn-success w-100"
                    onClick={() => {
                      guardarResu(false);
                      traerOrdenesEmitidas();
                    }}
                  >
                    <i className="fa fa-list me-1"></i>
                    Todas las Órdenes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {errores && (
            <div className="alert alert-danger shadow-sm">
              <i className="fa fa-exclamation-triangle me-2"></i>
              <strong>Error:</strong> {errores}
            </div>
          )}

          {resu === true && (
            <div className="alert alert-success shadow-sm">
              <h5 className="alert-heading mb-3">
                <i className="fa fa-chart-bar me-2"></i>
                Resumen del Día
              </h5>
              <hr />
              <div className="row text-center">
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <h4 className="text-primary mb-1">{listado.length}</h4>
                    <small className="text-muted">Total de Órdenes</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <h4 className="text-success mb-1">
                      ${totalImporte(listado)}
                    </h4>
                    <small className="text-muted">Monto Total</small>
                  </div>
                </div>
              </div>
              <p className="mb-0 mt-3 text-center">
                <em>
                  En el listado se muestran las órdenes correspondientes al día
                  seleccionado.
                </em>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="card shadow-sm mt-5 ">
        <div className="card-header bg-light">
          <h5 className="mb-0">
            <i className="fa fa-table me-2"></i>
            Listado de Órdenes Emitidas
          </h5>
        </div>
        <div className="card-body p-0">
          <ReactTable
            data={listado}
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id] === filter.value
            }
            columns={[
              {
                Header: "Listado de Ordenes",
                columns: [
                  {
                    Header: "Fecha",
                    id: "FECHA",
                    accessor: (d) =>
                      moment(d.FECHA).utcOffset("+0300").format("DD/MM/YYYY"),
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                    filterAll: true,
                    width: 120,
                  },

                  {
                    Header: "Orden",
                    id: "ORDEN",
                    accessor: (d) => d.ORDEN,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["ORDEN"] }),
                    filterAll: true,
                    width: 120,
                  },
                  {
                    Header: "Socio",
                    id: "CONTRATO",
                    accessor: (d) => d.CONTRATO,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                    filterAll: true,
                    width: 90,
                  },

                  {
                    Header: "DNI",
                    id: "NRO_DOC",
                    accessor: (d) => d.NRO_DOC,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["NRO_DOC"] }),
                    filterAll: true,
                    width: 100,
                  },
                  {
                    Header: "Servicio",
                    id: "SERVICIO",
                    accessor: (d) => d.SERVICIO,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["SERVICIO"] }),
                    filterAll: true,
                    width: 90,
                  },
                  {
                    Header: "Prestador",
                    id: "PRESTADO",
                    accessor: (d) => d.PRESTADO,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["PRESTADO"] }),
                    filterAll: true,
                    width: 500,
                  },
                  {
                    Header: "Importe",
                    id: "IMPORTE",
                    accessor: (d) => `$ ${d.IMPORTE.toFixed(2)}`,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                    filterAll: true,
                    width: 200,
                  },
                  {
                    Header: "Operador",
                    id: "OPERADOR",
                    accessor: (d) => `${d.OPERADOR}`,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["OPERADOR"] }),
                    filterAll: true,
                    width: 120,
                  },
                  {
                    Header: "Acciones",
                    id: "acciones",
                    filterAll: true,
                    width: 120,

                    Cell: (row) => (
                      <div>
                        {perfil === 1 || perfil === 3 ? (
                          <>
                            <div className="btn-group" role="group">
                              <button
                                className="btn btn-outline-primary btn-sm"
                                onClick={(e) => {
                                  e.preventDefault();
                                  generarImpresion(
                                    row.original.iduso,
                                    row.original.NRO_DOC,
                                    row.original.ORDEN,
                                    row.original.SERVICIO === "ORDE"
                                      ? "O"
                                      : row.original.SERVICIO === "FARM"
                                      ? "F"
                                      : row.original.SERVICIO === "ENFE"
                                      ? "E"
                                      : "P"
                                  );
                                }}
                                title="Imprimir orden"
                              >
                                <i className="fa fa-print"></i>
                              </button>

                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={(e) => {
                                  e.preventDefault();
                                  anularOrdenes(
                                    row.original.ORDEN,
                                    row.original.SERVICIO,
                                    row.original.iduso
                                  );
                                }}
                                title="Anular orden"
                              >
                                <i className="fa fa-ban"></i>
                              </button>
                            </div>
                          </>
                        ) : (
                          <>"Sin Acciones."</>
                        )}
                      </div>
                    ),
                  },
                ],
              },
            ]}
            defaultPageSize={20}
            className="-striped -highlight"
          />
        </div>
      </div>
    </div>
  );
};

export default ListadoOrdenesEmitidas;
