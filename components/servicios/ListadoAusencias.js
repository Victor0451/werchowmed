import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";
import ExportarAusencias from "./ExportarAusencias";

const ListadoAusencias = ({
  listado,
  imprimir,
  f,
  reincorporarAusencia,
  eliminarAusencia,
}) => {
  return (
    <div className="row g-4">
      <div className="col-12">
        <div id="list" className="card shadow-sm">
          <div className="card-header bg-info text-white">
            <h4 className="mb-0">
              <i className="fa fa-list me-2"></i>
              Ausencias Registradas
            </h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <ReactTable
                data={listado}
                filterable
                defaultFilterMethod={(filter, row) =>
                  row[filter.id] === filter.value
                }
                columns={[
                  {
                    Header: "Ausencias Registradas",
                    columns: [
                      {
                        Header: "Prestador",
                        id: "prestador",
                        accessor: (d) => d.prestador,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["prestador"] }),
                        filterAll: true,
                        Cell: (row) => (
                          <div className="text-truncate" style={{maxWidth: '200px'}} title={row.value}>
                            {row.value}
                          </div>
                        ),
                      },
                      {
                        Header: "Motivo",
                        id: "motivo",
                        accessor: (d) => d.motivo,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["motivo"] }),
                        filterAll: true,
                        Cell: (row) => (
                          <div className="text-center">
                            <span className="badge bg-secondary">{row.value}</span>
                          </div>
                        ),
                      },
                      {
                        Header: "Fecha Inicio",
                        id: "desde",
                        accessor: (d) =>
                          moment(d.desde).utcOffset("+0300").format("DD/MM/YYYY"),
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["desde"] }),
                        filterAll: true,
                        Cell: (row) => (
                          <div className="text-center">
                            <i className="fa fa-calendar me-1 text-primary"></i>
                            {row.value}
                          </div>
                        ),
                      },
                      {
                        Header: "Fecha Fin",
                        id: "hasta",
                        accessor: (d) =>
                          moment(d.hasta).utcOffset("+0300").format("DD/MM/YYYY"),
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["hasta"] }),
                        filterAll: true,
                        Cell: (row) => (
                          <div className="text-center">
                            <i className="fa fa-calendar-check me-1 text-success"></i>
                            {row.value}
                          </div>
                        ),
                      },
                      {
                        Header: "Observaciones",
                        id: "observacion",
                        accessor: (d) => d.observacion,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["observacion"],
                          }),
                        filterAll: true,
                        Cell: (row) => (
                          <div className="text-truncate" style={{maxWidth: '150px'}} title={row.value}>
                            {row.value || 'Sin observaciones'}
                          </div>
                        ),
                      },
                      {
                        Header: "Estado",
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["estado"] }),
                        filterAll: true,
                        Cell: (row) => (
                          <div className="text-center">
                            {row.original.estado === 1 ? (
                              <span className="badge bg-warning text-dark">Vigente</span>
                            ) : row.original.estado === 0 ? (
                              <span className="badge bg-success">Reincorporado</span>
                            ) : null}
                          </div>
                        ),
                      },
                      {
                        Header: "Acciones",
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["accion"] }),
                        filterAll: true,
                        width: 120,
                        Cell: (row) => (
                          <div className="text-center">
                            {row.original.estado === 1 ? (
                              <div className="btn-group" role="group">
                                <button
                                  className="btn btn-outline-success btn-sm"
                                  onClick={() => reincorporarAusencia(row.original)}
                                  title="Reincorporar"
                                >
                                  <i className="fa fa-check-circle"></i>
                                </button>
                                <button
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={() => eliminarAusencia(row.original)}
                                  title="Eliminar"
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </div>
                            ) : (
                              <span className="text-muted small">Sin acciones</span>
                            )}
                          </div>
                        ),
                      },
                    ],
                  },
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
              />
            </div>
          </div>
        </div>
      </div>

      {f && f === "home" ? null : (
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">
                <i className="fa fa-cogs me-2"></i>
                Opciones Disponibles
              </h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <ExportarAusencias listado={listado} />

                <button className="btn btn-primary px-4" onClick={imprimir}>
                  <i className="fa fa-print me-2"></i>
                  Imprimir
                </button>

                <a
                  href="/gestion/werchow/servicios/control"
                  className="btn btn-outline-secondary px-4"
                >
                  <i className="fa fa-arrow-left me-2"></i>
                  Volver
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListadoAusencias;
