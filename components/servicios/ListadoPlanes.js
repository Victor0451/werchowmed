import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";
import ExpotarTurnos from "./ExportarTurnos";

const ListadoPlanes = ({ listado, traerPlanVisi }) => {
  return (
    <div className="container list mt-4 border border-dark  p-4">
      <div className="border border-dark p-2">
        <div className="row ">
          <div className="col-md-6">
            <h3 className="mt-4 mb-4">
              <u>Planes Activos</u>
            </h3>
          </div>

          <div className="col-md-6">
            <div className="mt-4 mb-4 d-flex justify-content-end">
              <ExpotarTurnos listado={listado} />
            </div>
          </div>
        </div>

        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Planes",
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
                    <>
                      {row.original.estado === 0 ? (
                        <div>Cancelado</div>
                      ) : row.original.estado === 1 ? (
                        <div>Activo</div>
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
                        data-toggle="modal"
                        data-target="#ModalPlanSeleccionado"
                        onClick={() => {
                          traerPlanVisi(
                            row.original.idplansocio,
                            row.original.plan,
                            row.original
                          );
                        }}
                      >
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
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
  );
};

export default ListadoPlanes;
