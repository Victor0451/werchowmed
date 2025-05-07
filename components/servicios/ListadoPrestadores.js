import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";
import ExportarPrestadores from "./ExportarPrestadores";

const ListadoPrestadores = ({ listado }) => {
  return (
    <div className="container list mt-4 border border-dark  p-4">
      {listado.length === 0 ? (
        <div className="col-md-12 mt-4 border border-dark text-center text-uppercase alert alert-info">
          No hay prestadores registrados, {""}
        </div>
      ) : (
        <div className="border border-dark mt-4 p-4 mb-4 ">
          <div className="row ">
            <div className="col-md-6">
              <h2 className="mt-4 mb-4">
                <u>Listado de Prestadores</u>
              </h2>
            </div>

            <div className="col-md-6">
              <div className="mt-4 mb-4 d-flex justify-content-end">
                <ExportarPrestadores listado={listado} />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="border border-dark p-2">
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
                  width: 300,
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
  );
};

export default ListadoPrestadores;
