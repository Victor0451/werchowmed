import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";
import ExportarPrestadores from "./ExportarPrestadores";

const ListadoPrestadores = ({ listado }) => {
  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0">
              <i className="fa fa-users me-2"></i>
              Listado de Prestadores
            </h2>
            {listado && listado.length > 0 && (
              <ExportarPrestadores listado={listado} />
            )}
          </div>
        </div>
        <div className="card-body">
          {listado && listado.length === 0 ? (
            <div className="alert alert-info text-center">
              <i className="fa fa-info-circle fa-2x mb-2"></i>
              <h5>No hay prestadores registrados</h5>
              <p className="mb-0">Los prestadores aparecerán aquí una vez que sean dados de alta en el sistema.</p>
            </div>
          ) : (
            <div className="card shadow-sm">
              <div className="card-header bg-light">
                <h6 className="mb-0">
                  <i className="fa fa-table me-2"></i>
                  Información de Prestadores
                </h6>
              </div>
              <div className="card-body p-0">
                <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Prestadores",
              columns: [
                {
                  Header: "Sucursal",
                  id: "SUC",
                  accessor: (d) => d.SUC,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["SUC"] }),
                  filterAll: true,
                  width: 150,
                },
                {
                  Header: "Fecha de Alta",
                  id: "ALTA",
                  accessor: (d) =>
                    moment(d.ALTA).utcOffset("+0300").format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ALTA"] }),
                  filterAll: true,
                  width: 150,
                },
                {
                  Header: "Nombre",
                  id: "NOMBRE",
                  accessor: (d) => d.NOMBRE,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NOMBRE"] }),
                  filterAll: true,
                  width: 500,
                },

                {
                  Header: "Promocion",
                  id: "PROMO",
                  accessor: (d) => d.PROMO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["PROMO"] }),
                  filterAll: true,
                  width: 80,
                },
                {
                  Header: "Promo 1",
                  id: "PROMO1",
                  accessor: (d) => d.PROMO1,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["PROMO1"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Promo 2",
                  id: "PROMO2",
                  accessor: (d) => d.PROMO2,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["PROMO2"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Coseguro",
                  id: "CON_PAGA",
                  accessor: (d) => d.CON_PAGA,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["CON_PAGA"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Honorario",
                  id: "LIQUIDACION",
                  accessor: (d) => d.LIQUIDACION,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["LIQUIDACION"] }),
                  filterAll: true,
                  width: 100,
                },
              ],
            },
          ]}
          defaultPageSize={15}
          className="-striped -highlight"
        />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListadoPrestadores;
