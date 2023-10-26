import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";

const ModalHistorialUsos = ({ historialUsos }) => {
  return (
    <div
      className="modal fade"
      id="ModalHistorialUsos"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Historial de Usos
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
            <div className="border border-dark p-4">
              <div className="row  ">
                <div className="col-md-12">
                  <div className="alert alert-info  text-center text-uppercase border border-dark">
                    Listado historico de usos, realizado por todos los
                    integrantes de la ficha.
                  </div>{" "}
                </div>
              </div>

              <div className=" mt-4">
                <ReactTable
                  data={historialUsos}
                  filterable
                  defaultFilterMethod={(filter, row) =>
                    row[filter.id] === filter.value
                  }
                  columns={[
                    {
                      Header: "Historial de Usos",
                      columns: [
                        {
                          Header: "Ficha",
                          id: "CONTRATO",
                          accessor: (d) => d.CONTRATO,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["CONTRATO"],
                            }),
                          filterAll: true,
                          width: 80,
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
                          width: 100,
                        },
                        {
                          Header: "Hora",
                          id: "HORA",
                          accessor: (d) => d.HORA,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, { keys: ["HORA"] }),
                          filterAll: true,
                          width: 100,
                        },

                        {
                          Header: "DNI Benef.",
                          id: "NRO_DOC",
                          accessor: (d) => d.NRO_DOC,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["NRO_DOC"],
                            }),
                          filterAll: true,
                          width: 100,
                        },
                        {
                          Header: "Prestador",
                          id: "NOMBRE",
                          accessor: (d) => d.NOMBRE,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["NOMBRE"],
                            }),
                          filterAll: true,
                          width: 250,
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
                          width: 100,
                        },

                        {
                          Header: "Importe",
                          id: "IMPORTE",
                          accessor: (d) => `$ ${d.IMPORTE}`,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["IMPORTE"],
                            }),
                          filterAll: true,
                          width: 100,
                        },

                        {
                          Header: "Sistema de Emision",
                          id: "SISTEMA",
                          accessor: (d) => `${d.SISTEMA}`,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["SISTEMA"],
                            }),
                          filterAll: true,
                          width: 100,
                        },

                        {
                          Header: "Estado",
                          id: "estado",
                          filterAll: true,
                          width: 100,
                          Cell: (row) => (
                            <>
                              {row.original.ANULADO === 0 ||
                              row.original.ANULADO === "" ||
                              row.original.ANULADO === "FALSO" ? (
                                <div>ACTIVA</div>
                              ) : row.original.ANULADO === 1 ||
                                row.original.ANULADO === "VERDADERO" ? (
                                <div>ANULADA</div>
                              ) : null}
                            </>
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

          <div className="modal-footer">
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

export default ModalHistorialUsos;
