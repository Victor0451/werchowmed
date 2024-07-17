import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";

const ListadoActPracticas = ({ practicasPres, guardarRow }) => {
  return (
    <div className="mt-4 border border-dark p-4">
      <h4>
        <strong>
          <u>Listado de Practicas</u>
        </strong>
      </h4>

      {practicasPres.length === 0 ? (
        <div className="alert alert-info border border-dark mt-4 mb-4 text-center text-uppercase">
          El prestador seleccionado no posee practicas registradas.
        </div>
      ) : (
        <div id="list" className="border border-dark mt-4 p-4">
          <ReactTable
            data={practicasPres}
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id] === filter.value
            }
            columns={[
              {
                Header: "Listado de Practicas",
                columns: [
                  {
                    Header: "Codigo",
                    id: "CODIGOS",
                    accessor: (d) => d.CODIGOS,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["CODIGOS"],
                      }),
                    filterAll: true,
                    width: 80,
                  },

                  {
                    Header: "Descripcion",
                    id: "DESCRIP",
                    accessor: (d) => d.DESCRIP,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["DESCRIP"],
                      }),
                    filterAll: true,
                    width: 600,
                  },

                  {
                    Header: "Importe",
                    id: "IMPORTE",
                    accessor: (d) => d.IMPORTE,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["IMPORTE"],
                      }),
                    filterAll: true,
                  },
                ],
              },
              {
                Header: "Acciones",
                id: "acciones",
                filterAll: true,

                Cell: (row) => (
                  <div>
                    <button
                      className="btn btn-warning btn-sm"
                      data-toggle="modal"
                      data-target="#ModalActPractica"
                      onClick={() => {
                        guardarRow(row.original);
                      }}
                    >
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                  </div>
                ),
              },
            ]}
            defaultPageSize={15}
            className="-striped -highlight"
          />
        </div>
      )}
    </div>
  );
};

export default ListadoActPracticas;
