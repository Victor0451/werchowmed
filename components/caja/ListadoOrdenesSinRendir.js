import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";

const ListadoOrdenesSinRendir = ({ listado, traerOrdenesPorDia }) => {
  return (
    <div className="table-responsive">
      <ReactTable
        data={listado}
        filterable
        defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
        columns={[
          {
            Header: "Órdenes Sin Rendir",
            columns: [
              {
                Header: "#",
                filterAll: false,
                width: 60,
                Cell: (row) => (
                  <div className="text-center fw-semibold">{row.index + 1}</div>
                ),
              },
              {
                Header: "Fecha Órdenes",
                id: "FECHA",
                accessor: (d) =>
                  moment(d.FECHA).utcOffset("+0300").format("DD/MM/YYYY"),
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                filterAll: true,
                Cell: (row) => (
                  <div className="text-center">
                    <i className="fa fa-calendar me-2 text-primary"></i>
                    {row.value}
                  </div>
                ),
              },
              {
                Header: "Cantidad",
                id: "CANTIDAD",
                accessor: (d) => d.CANTIDAD,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["CANTIDAD"] }),
                filterAll: true,
                Cell: (row) => (
                  <div className="text-center">
                    <span className="badge bg-info fs-6 px-3 py-2">
                      {row.value}
                    </span>
                  </div>
                ),
              },
              {
                Header: "Acciones",
                id: "acciones",
                filterAll: true,
                width: 200,
                Cell: (row) => (
                  <div className="text-center">
                    <button
                      className="btn btn-success btn-sm px-3"
                      onClick={() =>
                        traerOrdenesPorDia(row.original.FECHA, row.original.SUC)
                      }
                    >
                      <i className="fa fa-cash-register me-2"></i>
                      Generar Caja
                    </button>
                  </div>
                ),
              },
            ],
          },
        ]}
        defaultPageSize={5}
        className="-striped -highlight"
      />
    </div>
  );
};

export default ListadoOrdenesSinRendir;
