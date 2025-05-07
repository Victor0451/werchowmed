import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";
import ExportarPortal from "./ExportarPortal";

const FormPortalPrestador = ({
  errores,
  alertas,
  prestado,
  cerrarSesion,
  fechaRef,
  listado,
  traerOrdenesDia,
  imprimir,
}) => {
  return (
    <div className=" mt-4 container border border-dark p-4">
      <div className="row">
        <div className="col-md-8"></div>
      </div>

      <div className="mt-4 mb-4 border border-dark p-4">
        <h4>
          <strong>Bienvenido DR/A</strong>: {prestado.NOMBRE}
        </h4>
        <div className="row">
          <div className="col-md-4">
            <h4 className="mt-4">
              <strong>
                <u>Resumen de ordenes por dia</u>
              </strong>
            </h4>
          </div>
          <div className="col-md-3">
            <input type="date" className="mt-4 form-control" ref={fechaRef} />
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-primary btn-block mt-4 "
              onClick={traerOrdenesDia}
            >
              Buscar
            </button>
          </div>

          <div className="col-md-2">
            <button
              className="btn btn-danger btn-block mt-4"
              onClick={cerrarSesion}
            >
              Cerrar Sesion
            </button>
          </div>
        </div>
        {errores ? (
          <div className="mt-4 mb-4 text-center text-uppercase border border-dark alert alert-danger">
            {errores}
          </div>
        ) : null}

        <div
          className="border border-dark alert alert-success mt-4 mb-4"
          role="alert"
        >
          <h4 className="alert-heading">Resumen del dia</h4>

          <hr />
          <p className="mb-0 mt-2">
            <strong>
              <u>Total de ordenes</u>: {listado.length}
            </strong>
          </p>

          <p className="mb-0 mt-4 text-uppercase text-center">
            <strong>
              En el listado de ordenes, se muestran las correspondientes al dia
              seleccionado.
            </strong>
          </p>
        </div>
        <div className="d-flex justify-content-end">
          <ExportarPortal listado={listado} dr={prestado.NOMBRE} />

          <button className="ml-1 btn btn-primary  mt-4" onClick={imprimir}>
            Imprimir Listado
          </button>
        </div>
      </div>

      <div className="mt-5 border border-dark p-2" id="list">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado de Ordenes",
              columns: [
                {
                  Header: "#",
                  filterAll: true,

                  Cell: (row) => <div>{row.index + 1}</div>,
                  width: 80,
                },
                {
                  Header: "Fecha",
                  id: "FECHA",
                  accessor: (d) =>
                    moment(d.FECHA).utcOffset("+0300").format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Orden",
                  id: "ORDEN",
                  accessor: (d) => d.ORDEN,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ORDEN"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Ficha",
                  id: "CONTRATO",
                  accessor: (d) => d.CONTRATO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "DNI",
                  id: "NRO_DOC",
                  accessor: (d) => d.NRO_DOC,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NRO_DOC"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Paciente",
                  id: "paciente",
                  filterAll: true,
                  width: 300,
                  Cell: (row) => (
                    <div>
                      {row.original.tit && !row.original.adh ? (
                        <>{row.original.tit}</>
                      ) : !row.original.tit && row.original.adh ? (
                        <>{row.original.adh}</>
                      ) : null}
                    </div>
                  ),
                },

                {
                  Header: "Acciones",
                  id: "acciones",
                  filterAll: true,

                  Cell: (row) => (
                    <div>
                      <button className="btn btn-success btn-sm mr-1">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </button>
                    </div>
                  ),
                },
              ],
            },
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </div>
    </div>
  );
};

export default FormPortalPrestador;
