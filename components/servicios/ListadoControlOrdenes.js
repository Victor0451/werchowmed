import React, { useState } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";
import ExportarListadoControl from "./ExportarListadoControl";

const ListadoControlOrdenes = ({
  listado,
  rango,
  imprimir,
  titulo,
  calcTotales,
  sucur,
}) => {
  const [openPopover, setOpenPopover] = useState(null);

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">
            <i className="fa fa-chart-line me-2"></i>
            <u>{titulo}</u>
          </h2>
        </div>
        <div className="card-body">
          <div className="accordion mt-4" id="accordionExample">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  <i className="fa fa-table me-2"></i>
                  Listado de Control de Órdenes
                </h5>
              </div>
              <div className="card-body p-0">
                <div id="list">
                  <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                      row[filter.id] === filter.value
                    }
                    columns={[
                      {
                        Header: "Listado de Control de Ordenes",
                        columns: [
                          {
                            Header: "Sucursal",
                            id: "SUC",
                            accessor: (d) => d.SUC,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["SUC"],
                              }),
                            filterAll: true,
                            width: "120",
                          },
                          {
                            Header: "Fecha",
                            id: "FECHA",
                            accessor: (d) =>
                              moment(d.FECHA)
                                .utcOffset("+0300")
                                .format("DD/MM/YYYY"),
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["FECHA"],
                              }),
                            filterAll: true,
                            width: "150",
                          },
                          {
                            Header: "Hora",
                            id: "HORA",
                            accessor: (d) => d.HORA,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["HORA"],
                              }),
                            filterAll: true,
                            width: "80",
                          },
                          {
                            Header: "N° Orden",
                            id: "ORDEN",
                            accessor: (d) => d.ORDEN,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["ORDEN"],
                              }),
                            filterAll: true,
                            width: "100",
                          },

                          {
                            Header: "Servicio",
                            id: "SERVICIO",
                            accessor: (d) => d.SERVICIO,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["SERVICIO"],
                              }),
                            filterAll: true,
                            width: "80",
                          },
                          {
                            Header: "Prestador",
                            id: "PRESTADO",
                            accessor: (d) => d.PRESTADO,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["PRESTADO"],
                              }),
                            filterAll: true,
                            width: "500",
                          },

                          {
                            Header: "HC",
                            id: "CONTRATO",
                            accessor: (d) => d.CONTRATO,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["CONTRATO"],
                              }),
                            filterAll: true,
                            width: "80",
                          },

                          {
                            Header: "DNI",
                            id: "NRO_DOC",
                            accessor: (d) => d.NRO_DOC,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["NRO_DOC"],
                              }),
                            filterAll: true,
                            width: "100",
                          },

                          {
                            Header: "Importe",
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                            filterAll: true,
                            width: 100,
                            Cell: (row) => (
                              <div className="text-center position-relative">
                                <button
                                  className="btn btn-link btn-sm p-0 text-decoration-none font-weight-bold"
                                  onClick={() =>
                                    setOpenPopover(
                                      openPopover === row.index ? null : row.index
                                    )
                                  }
                                >
                                  {`$${row.original.IMPORTE}`}
                                </button>
                                {openPopover === row.index && (
                                  <div
                                    className="position-relative bg-dark text-white p-2 rounded shadow"
                                    style={{
                                      top: "100%",
                                      left: "50%",
                                      transform: "translateX(-50%)",
                                      marginTop: "8px",
                                      zIndex: 1050,
                                      whiteSpace: "nowrap",
                                      fontSize: "0.85rem",
                                    }}
                                  >
                                    <span>${row.original.IMP_LIQ}</span>
                                    <div
                                      className="position-absolute"
                                      style={{
                                        bottom: "100%",
                                        left: "50%",
                                        marginLeft: "-5px",
                                        borderWidth: "5px",
                                        borderStyle: "solid",
                                        borderColor: "transparent transparent #212529 transparent",
                                      }}
                                    ></div>
                                  </div>
                                )
                                }
                              </div>
                            ),
                          },

                          {
                            Header: "Estado",
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["ANULADO"],
                              }),
                            filterAll: true,
                            width: "100",
                            Cell: (row) => (
                              <div>
                                {row.original.ANULADO === 0 ? (
                                  <>ACTIVA</>
                                ) : row.original.ANULADO === 1 ? (
                                  <>ANULADA</>
                                ) : null}
                              </div>
                            ),
                          },
                          {
                            Header: "Operador",
                            id: "OPERADOR",
                            accessor: (d) => `${d.OPERADOR}`,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["OPERADOR"],
                              }),
                            filterAll: true,
                            width: "100",
                          },
                        ],
                      },
                    ]}
                    defaultPageSize={15}
                    className="-striped -highlight"
                  />

                  {listado && (
                    <div className="row g-3 mt-3 mb-3">
                      <div className="col-md-6">
                        <div className="alert alert-success shadow-sm text-center">
                          <i className="fa fa-file-text fa-2x mb-2"></i>
                          <h5 className="mb-1">Total Órdenes</h5>
                          <h3 className="mb-0 text-success">
                            {listado.length}
                          </h3>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="alert alert-primary shadow-sm text-center">
                          <i className="fa fa-dollar-sign fa-2x mb-2"></i>
                          <h5 className="mb-1">Total Importe</h5>
                          <h3 className="mb-0 text-primary">
                            ${parseFloat(calcTotales(listado, "VALOR"))}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="card shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="mb-0">
                    <i className="fa fa-cogs me-2"></i>
                    Opciones
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row g-3 justify-content-center">
                    <div className="col-md-4 text-center">
                      <ExportarListadoControl
                        listado={listado}
                        rango={rango}
                        sucur={sucur}
                      />
                    </div>
                    <div className="col-md-4 text-center">
                      <button
                        className="btn btn-primary w-100"
                        onClick={imprimir}
                      >
                        <i className="fa fa-print me-1"></i>
                        Imprimir
                      </button>
                    </div>
                    <div className="col-md-4 text-center">
                      <a
                        href="/gestion/werchow/servicios/control"
                        className="btn btn-secondary w-100"
                      >
                        <i className="fa fa-times me-1"></i>
                        Cancelar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ListadoControlOrdenes;
