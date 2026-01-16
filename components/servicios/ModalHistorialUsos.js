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
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-warning text-dark">
            <h5 className="modal-title" id="exampleModalLabel">
              <i className="fa fa-history me-2"></i>
              Historial de Usos del Servicio
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="alert alert-info text-center">
                  <i className="fa fa-info-circle fa-2x mb-2"></i>
                  <p className="mb-0">
                    <strong>Listado histórico de usos</strong><br />
                    Registro de todas las utilizaciones del servicio realizadas por los integrantes de la ficha.
                  </p>
                </div>

                <div className="table-responsive mt-3">
                  <ReactTable
                    data={historialUsos}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                      row[filter.id] === filter.value
                    }
                    columns={[
                      {
                        Header: "Historial de Usos del Servicio",
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
                            accessor: (d) => d.IMPORTE,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["IMPORTE"],
                              }),
                            filterAll: true,
                            width: 100,
                            Cell: (row) => (
                              <span className="text-end d-block">${row.original.IMPORTE}</span>
                            ),
                          },

                          {
                            Header: "Sistema",
                            id: "SISTEMA",
                            accessor: (d) => d.SISTEMA,
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
                              <span className={`badge ${row.original.ANULADO === 0 || row.original.ANULADO === "" || row.original.ANULADO === "FALSO" ? 'bg-success' : 'bg-danger'}`}>
                                {row.original.ANULADO === 0 || row.original.ANULADO === "" || row.original.ANULADO === "FALSO" ? 'ACTIVA' : 'ANULADA'}
                              </span>
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

export default ModalHistorialUsos;
