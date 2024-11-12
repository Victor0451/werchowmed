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
    <div>
      <div id="list" className="container list mt-4 border border-dark p-4">
        <h2>
          <strong>
            <u>Ausencias Registradas</u>
          </strong>
        </h2>

        <div className="border border-dark mt-4 p-4">
          <ReactTable
            data={listado}
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id] === filter.value
            }
            columns={[
              {
                Header: "Listado de Ausencias",
                columns: [
                  // {
                  //   Header: "Cod. Prestador",
                  //   id: "cod_pres",
                  //   accessor: (d) => d.cod_pres,
                  //   filterMethod: (filter, rows) =>
                  //     matchSorter(rows, filter.value, { keys: ["cod_pres"] }),
                  //   filterAll: true,
                  // },
                  {
                    Header: "Prestador",
                    id: "prestador",
                    accessor: (d) => d.prestador,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["prestador"] }),
                    filterAll: true,
                    width: 200,
                  },

                  {
                    Header: "Motivo",
                    id: "motivo",
                    accessor: (d) => d.motivo,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["motivo"] }),
                    filterAll: true,
                    width: 150,
                  },

                  {
                    Header: "Desde",
                    id: "desde",
                    accessor: (d) =>
                      moment(d.desde).utcOffset("+0300").format("DD/MM/YYYY"),
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["desde"] }),
                    filterAll: true,
                    width: 120,
                  },

                  {
                    Header: "Hasta",
                    id: "hasta",
                    accessor: (d) =>
                      moment(d.hasta).utcOffset("+0300").format("DD/MM/YYYY"),
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["hasta"] }),
                    filterAll: true,
                    width: 120,
                  },

                  {
                    Header: "Observacion",
                    id: "observacion",
                    accessor: (d) => d.observacion,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["observacion"],
                      }),
                    filterAll: true,
                    width: 200,
                  },

                  {
                    Header: "Estado",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["estado"] }),
                    filterAll: true,
                    width: 120,
                    Cell: (row) => (
                      <div>
                        {row.original.estado === 1 ? (
                          <>Vigente</>
                        ) : row.original.estado === 0 ? (
                          <>Reincorporado</>
                        ) : null}
                      </div>
                    ),
                  },

                  {
                    Header: "Accion",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["accion"] }),
                    filterAll: true,
                    width: 80,
                    Cell: (row) => (
                      <div>
                        {row.original.estado === 1 ? (
                          <>
                            <i
                              className="fa fa-check-circle btn btn-success btn-sm"
                              aria-hidden="true"
                              onClick={() => reincorporarAusencia(row.original)}
                            ></i>
                            <i
                              className="fa fa-trash btn btn-danger btn-sm ml-1"
                              aria-hidden="true"
                              onClick={() => eliminarAusencia(row.original)}
                            ></i>
                          </>
                        ) : null}
                      </div>
                    ),
                  },
                ],
              },
            ]}
            defaultPageSize={15}
            className="-striped -highlight"
          />
        </div>
      </div>

      {f && f === "home" ? null : (
        <div className="border border-dark mt-4 mb-4 container list p-4">
          <h3>
            <u>Opciones</u>
          </h3>

          <div className="row mt-4 n border border-dark p-4 d-flex justify-content-center">
            <ExportarAusencias listado={listado} />

            <button className="ml-1 btn btn-primary" onClick={imprimir}>
              Imprimir
            </button>

            <a
              href="/gestion/werchow/servicios/control"
              className="ml-1 btn btn-danger"
            >
              Cancelar
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListadoAusencias;
