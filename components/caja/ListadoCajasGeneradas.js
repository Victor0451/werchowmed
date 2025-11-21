import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";
import Select from "react-select";

const ListadoCajasGeneradas = ({
  listado,
  traerMovimientos,
  traerListadoControl,
  operadores,
  handleChange,
  traerCajas,
  loading,
}) => {
  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0">
              <i className="fa fa-cash-register me-2"></i>
              Listado de Cajas Generadas
            </h2>
            <div className="d-flex gap-3 align-items-center">
              <div style={{ minWidth: "200px", color: "#000" }}>
                <Select
                  className="text-sm"
                  placeholder="Seleccionar operador..."
                  options={operadores.map((i) => ({
                    label: `${i.usuario}`,
                    value: `${i.usuario}`,
                  }))}
                  onChange={(value) => {
                    handleChange("operador", value.value);
                  }}
                />
              </div>
              <button className="btn btn-light" onClick={traerCajas}>
                <i className="fa fa-search me-1"></i>
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h5 className="mb-0">
                <i className="fa fa-table me-2"></i>
                Cajas Registradas
              </h5>
            </div>
            <div className="card-body p-0">
              {loading === 0 ? (
                <div className="alert alert-info shadow-sm text-center m-4">
                  <i className="fa fa-info-circle fa-2x mb-2"></i>
                  <h5>Selecciona un operador</h5>
                  <p className="mb-0">
                    Elige un operador para buscar sus cajas generadas.
                  </p>
                </div>
              ) : loading === 1 ? (
                <div className="text-center py-5">
                  <Spinner />
                  <p className="text-muted mt-3">Cargando cajas...</p>
                </div>
              ) : loading === 2 ? (
                <ReactTable
                  data={listado}
                  filterable
                  defaultFilterMethod={(filter, row) =>
                    row[filter.id] === filter.value
                  }
                  columns={[
                    {
                      Header: "Cajas",
                      columns: [
                        {
                          Header: "#",
                          filterAll: false,
                          width: 50,
                          Cell: (row) => <div>{row.index + 1}</div>,
                        },
                        {
                          Header: "Fecha Caja",
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
                        },
                        {
                          Header: "Ingresos",
                          id: "Ingresos",
                          filterAll: true,

                          Cell: (row) => (
                            <div>
                              {row.original.INGRESOS === null ? (
                                <>0</>
                              ) : (
                                <>{row.original.INGRESOS.toFixed(2)}</>
                              )}
                            </div>
                          ),
                        },

                        {
                          Header: "Egresos",
                          id: "Egresos",
                          filterAll: true,

                          Cell: (row) => (
                            <div>
                              {row.original.EGRESOS === null ? (
                                <>0</>
                              ) : (
                                <>{row.original.EGRESOS.toFixed(2)}</>
                              )}
                            </div>
                          ),
                        },

                        {
                          Header: "Valores a Depositar",
                          id: "Valores a Depositar",
                          filterAll: true,

                          Cell: (row) => (
                            <div>
                              {row.original.VAL_DEPOSIT === null ? (
                                <>{row.original.INGRESOS.toFixed(2)}</>
                              ) : (
                                <>{row.original.VAL_DEPOSIT.toFixed(2)}</>
                              )}
                            </div>
                          ),
                        },

                        {
                          Header: "OPERADOR",
                          id: "OPERADOR",
                          accessor: (d) => d.OPERADOR,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["OPERADOR"],
                            }),
                          filterAll: true,
                        },

                        {
                          Header: "Acciones",
                          id: "acciones",
                          filterAll: true,

                          Cell: (row) => (
                            <div>
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => {
                                  traerMovimientos(
                                    row.original.FECHA,
                                    row.original.OPERADOR
                                  );
                                  traerListadoControl(
                                    row.original.FECHA,
                                    row.original.OPERADOR
                                  );
                                }}
                                data-bs-toggle="modal"
                                data-bs-target="#modalImprimirCaja"
                              >
                                <i
                                  className="fa fa-arrow-left"
                                  aria-hidden="true"
                                ></i>{" "}
                                Imprimir
                              </button>
                            </div>
                          ),
                        },
                      ],
                    },
                  ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                />
              ) : loading === 3 ? (
                <div className="alert alert-warning shadow-sm text-center m-4">
                  <i className="fa fa-exclamation-triangle fa-2x mb-2"></i>
                  <h5>Sin cajas registradas</h5>
                  <p className="mb-0">
                    El operador seleccionado no posee cajas registradas en el
                    sistema.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoCajasGeneradas;
