import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";
import ExportarListadoControl from "./ExportarListadoControl";

const ListadoControlOrdenes = ({
  listado,
  rango,
  imprimir,
  titulo,
  calcTotales,
  sucur,
}) => {
  console.log(listado);
  return (
    <div className="container list mt-4 border border-dark p-4">
      <h3>
        <u>{titulo}</u>
      </h3>

      <div id="list" className=" border border-dark mt-4 p-4">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado de Control de Ordenes",
              columns: [
                {
                  Header: "Sucursal",
                  id: "SUC",
                  accessor: (d) => d.SUC,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["SUC"] }),
                  filterAll: true,
                  width: "120",
                },
                {
                  Header: "Fecha",
                  id: "FECHA",
                  accessor: (d) =>
                    moment(d.FECHA).utcOffset("+0300").format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                  filterAll: true,
                  width: "100",
                },
                {
                  Header: "Hora",
                  id: "HORA",
                  accessor: (d) => d.HORA,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["HORA"] }),
                  filterAll: true,
                  width: "80",
                },
                {
                  Header: "N° Orden",
                  id: "ORDEN",
                  accessor: (d) => d.ORDEN,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ORDEN"] }),
                  filterAll: true,
                  width: "100",
                },

                {
                  Header: "Servicio",
                  id: "SERVICIO",
                  accessor: (d) => d.SERVICIO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["SERVICIO"] }),
                  filterAll: true,
                  width: "80",
                },
                {
                  Header: "Prestador",
                  id: "PRESTADO",
                  accessor: (d) => d.PRESTADO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["PRESTADO"] }),
                  filterAll: true,
                  width: "110",
                },

                {
                  Header: "HC",
                  id: "CONTRATO",
                  accessor: (d) => d.CONTRATO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                  filterAll: true,
                  width: "80",
                },

                {
                  Header: "DNI",
                  id: "NRO_DOC",
                  accessor: (d) => d.NRO_DOC,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NRO_DOC"] }),
                  filterAll: true,
                  width: "100",
                },

                {
                  Header: "Importe",
                  id: "IMPORTE",
                  accessor: (d) => `$${d.IMPORTE}`,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                  filterAll: true,
                  width: "100",
                },

                {
                  Header: "Estado",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ANULADO"] }),
                  filterAll: true,
                  width: "100",
                  Cell: (row) => (
                    <div>
                      {row.original.ANULADO === 0 ? (
                        <>ACTIVA</>
                      ) : row.original.ANULADO === 1 ? (
                        <>ANULADA</>
                      ) : null}
                    </div>
                  ),
                },
                {
                  Header: "Operador",
                  id: "OPERADOR",
                  accessor: (d) => `${d.OPERADOR}`,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["OPERADOR"] }),
                  filterAll: true,
                  width: "100",
                },
              ],
            },
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />

        {listado ? (
          <div className="row">
            <div className="col-md-6">
              <div className="container alert alert-info mt-4 mb-4 border border-dark text-uppercase text-center">
                <strong>
                  <u>Total Ordenes</u>:{""} {listado.length}
                </strong>
              </div>
            </div>
            <div className="col-md-6">
              <div className="container alert alert-info mt-4 mb-4 border border-dark text-uppercase text-center">
                <strong>
                  <u>Total Importe</u>:{""} $
                  {parseFloat(calcTotales(listado, "VALOR"))}
                </strong>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="border border-dark mt-4 mb-4 container list p-4">
        <h2>
          <u>Opciones</u>
        </h2>

        <div className="row mt-4 n border border-dark p-4 d-flex justify-content-center">
          <ExportarListadoControl
            listado={listado}
            rango={rango}
            sucur={sucur}
          />

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
    </div>
  );
};

export default ListadoControlOrdenes;
