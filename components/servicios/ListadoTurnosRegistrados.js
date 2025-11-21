import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";
import ExpotarTurnos from "./ExportarTurnos";

const ListadoTurnosRegistrados = ({ listado, estadoTurno }) => {
  return (
    <div className="container-fluid p-4 mt-4  ">
      <div className="card shadow-sm">
        <div className="card-header bg-info text-white">
          <h5 className="mb-0">
            <i className="fa fa-search me-2"></i>
            Registro de Turnos Médicos
          </h5>
        </div>
        <div className="card-body">
          {listado.length === 0 ? (
            <div className="col-md-12 mt-4 border border-dark text-center text-uppercase alert alert-info">
              No hay turnos registrados, {""}
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalRegistro"
              >
                Registar Turno
              </button>
            </div>
          ) : (
            <div className="border border-dark mt-4 p-4 mb-4 ">
              <div className="row">
                <div className="col-md-4">
                  <label>Doctor:</label>

                  <input
                    type="text"
                    className="form-control"
                    value={listado[0].doctor}
                  />
                </div>

                <div className="col-md-4">
                  <label>Turno:</label>

                  <input
                    type="text"
                    className="form-control"
                    value={listado[0].turno}
                  />
                </div>

                <div className="col-md-4 mt-2">
                  <button
                    className="btn btn-info mt-4"
                    data-bs-toggle="modal"
                    data-bs-target="#modalRegistro"
                  >
                    Registar Turno
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="border border-dark p-2">
            <div className="mt-4 mb-4 d-flex justify-content-end">
              <ExpotarTurnos listado={listado} />
            </div>

            <ReactTable
              data={listado}
              filterable
              defaultFilterMethod={(filter, row) =>
                row[filter.id] === filter.value
              }
              columns={[
                {
                  Header: "Turnos",
                  columns: [
                    {
                      Header: "Turno",
                      id: "turno",
                      accessor: (d) => d.turno,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["turno"] }),
                      filterAll: true,
                      width: 150,
                    },
                    {
                      Header: "Fecha",
                      id: "fecha",
                      accessor: (d) =>
                        moment(d.fecha).utcOffset("+0300").format("DD/MM/YYYY"),
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                      filterAll: true,
                      width: 150,
                    },
                    {
                      Header: "Hora",
                      id: "hora",
                      accessor: (d) => d.hora,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["hora"] }),
                      filterAll: true,
                      width: 150,
                    },

                    {
                      Header: "Paciente",
                      id: "paciente",
                      accessor: (d) => d.paciente,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["paciente"] }),
                      filterAll: true,
                      width: 200,
                    },
                    {
                      Header: "Motivo",
                      id: "motivo_turno",
                      accessor: (d) => d.motivo_turno,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, {
                          keys: ["motivo_turno"],
                        }),
                      filterAll: true,
                      width: 100,
                    },
                    {
                      Header: "N° Orden",
                      id: "norden",
                      accessor: (d) => d.norden,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["norden"] }),
                      filterAll: true,
                      width: 100,
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
                      Header: "Telefono",
                      id: "telefono",
                      accessor: (d) => d.telefono,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["telefono"] }),
                      filterAll: true,
                      width: 100,
                    },

                    {
                      Header: "Obra Social",
                      id: "obra_soc",
                      accessor: (d) => d.obra_soc,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["obra_soc"] }),
                      filterAll: true,
                      width: 100,
                    },

                    {
                      Header: "Estado",
                      id: "estadp",
                      filterAll: true,
                      width: 100,
                      Cell: (row) => (
                        <>
                          {row.original.estado === 0 ? (
                            <div>Registrado</div>
                          ) : row.original.estado === 1 ? (
                            <div>Atendido</div>
                          ) : row.original.estado === 2 ? (
                            <div>Cancelado</div>
                          ) : null}
                        </>
                      ),
                    },

                    {
                      Header: "Acciones",
                      id: "acciones",
                      filterAll: true,
                      width: 100,
                      Cell: (row) => (
                        <div>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => {
                              estadoTurno("si", row.original.idturno);
                            }}
                          >
                            <i className="fa fa-check" aria-hidden="true"></i>
                          </button>

                          <button
                            className="ml-1 btn btn-danger btn-sm"
                            onClick={() => {
                              estadoTurno("no", row.original.idturno);
                            }}
                          >
                            <i className="fa fa-times" aria-hidden="true"></i>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoTurnosRegistrados;
