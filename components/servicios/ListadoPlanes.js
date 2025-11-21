import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";
import ExpotarTurnos from "./ExportarTurnos";

const ListadoPlanes = ({ listado, traerPlanVisi }) => {
  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-warning text-white d-flex justify-content-between align-items-center">
          <h3 className="mb-0">
            <i className="fa fa-tooth me-2"></i>
            Planes de Ortodoncia Activos
          </h3>
          <ExpotarTurnos listado={listado} />
        </div>
        <div className="card-body p-0">

          <div className="table-responsive">
            <ReactTable
              data={listado}
              filterable
              defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
              columns={[
                {
                  Header: "Planes de Ortodoncia",
                  columns: [
                    {
                      Header: "Plan",
                      id: "plan",
                      accessor: (d) => d.plan,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["plan"] }),
                      filterAll: true,
                      width: 80,
                    },
                    {
                      Header: "Fecha",
                      id: "fecha",
                      accessor: (d) =>
                        moment(d.fecha).utcOffset("+0300").format("DD/MM/YYYY"),
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                      filterAll: true,
                      width: 100,
                    },

                    {
                      Header: "Paciente",
                      id: "socio",
                      accessor: (d) => d.socio,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["socio"] }),
                      filterAll: true,
                      width: 250,
                    },
                    {
                      Header: "DNI",
                      id: "dni",
                      accessor: (d) => d.dni,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["dni"] }),
                      filterAll: true,
                      width: 100,
                    },

                    {
                      Header: "Prestador",
                      id: "prestador_nombre",
                      accessor: (d) => d.prestador_nombre,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, {
                          keys: ["prestador_nombre"],
                        }),
                      filterAll: true,
                      width: 250,
                    },
                    {
                      Header: "Estado",
                      id: "estado",
                      filterAll: true,
                      width: 80,
                      Cell: (row) => (
                        <span className={`badge ${row.original.estado === 1 ? 'bg-success' : 'bg-danger'}`}>
                          {row.original.estado === 0 ? 'Cancelado' : row.original.estado === 1 ? 'Activo' : 'N/A'}
                        </span>
                      ),
                    },

                    {
                      Header: "Acciones",
                      id: "acciones",
                      filterAll: true,
                      width: 100,
                      Cell: (row) => (
                        <button
                          className="btn btn-info btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#ModalPlanSeleccionado"
                          onClick={() => {
                            traerPlanVisi(
                              row.original.idplansocio,
                              row.original.plan,
                              row.original
                            );
                          }}
                          title="Ver detalles del plan"
                        >
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </button>
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

export default ListadoPlanes;
