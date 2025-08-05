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
    <div className="container list border border-dark mt-4 p-4">
      <div className="row">
        <div className="col-md-8">
          <h2>
            <strong>
              <u>Listado de Cajas Generadas</u>
            </strong>
          </h2>
        </div>
        <div className="col-md-3">
          <Select
            className=" text-sm rounded-xl mt-2"
            placeholder="Operador"
            options={operadores.map((i) => ({
              label: `${i.usuario}`,
              value: `${i.usuario}`,
            }))}
            onChange={(value) => {
              handleChange("operador", value.value);
            }}
          />
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary mt-2" onClick={traerCajas}>
            Buscar
          </button>
        </div>
      </div>

      <div className="border border-dark p-1 mt-4">
        {loading === 0 ? (
          <>
            <div className="col-md-12 mt-4 mb-4 alert alert-info  border border-dark text-center text-uppercase">
              Selecciona un operador para buscar sus cajas generadas
            </div>
          </>
        ) : loading === 1 ? (
          <Spinner />
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
                      moment(d.FECHA).utcOffset("+0300").format("DD/MM/YYYY"),
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["FECHA"] }),
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
                      matchSorter(rows, filter.value, { keys: ["OPERADOR"] }),
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
                            traerMovimientos(row.original.FECHA);
                            traerListadoControl(
                              row.original.FECHA,
                              row.original.OPERADOR
                            );
                          }}
                          data-toggle="modal"
                          data-target="#modalImprimirCaja"
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
          <>
            <div className="col-md-12 mt-4 mb-4 alert alert-info  border border-dark text-center text-uppercase">
              El operador Seleccionado no posee cajas registradas
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ListadoCajasGeneradas;
