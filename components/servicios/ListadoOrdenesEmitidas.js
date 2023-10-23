import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";

const ListadoOrdenesEmitidas = ({
  fechaRef,
  ordenesDelDia,
  errores,
  resu,
  listado,
  totalImporte,
  traerOrdenesEmitidas,
  guardarResu,
  generarImpresion,
  anularOrdenes,
  perfil,
  user,
}) => {
  if (!listado)
    return (
      <>
        <div className="container list border border-dark mt-4 p-4">
          <h2 className="mb-4">
            <strong>
              <u>Generando Listado De Ordenes</u>
            </strong>
          </h2>

          <Spinner />
        </div>
      </>
    );

  return (
    <div className="container list border border-dark mt-4 p-4">
      <h2 className=" mb-4">
        <strong>
          {perfil === 1 || perfil === 3 ? (
            <u>Listado de ordenes emitidas por todos los usuarios</u>
          ) : perfil !== 1 || perfil !== 3 ? (
            <>
              <u>Listado de ordenes emitidas por</u>: {user}
            </>
          ) : null}
        </strong>
      </h2>

      <div className="mt-4 mb-4 border border-dark p-4">
        <div className="row">
          <div className="col-md-4">
            <h4 className="mt-4">
              <strong>
                <u>Resumen de ordenes por dia</u>
              </strong>
            </h4>
          </div>
          <div className="col-md-4">
            <input type="date" className="mt-4 form-control" ref={fechaRef} />
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-primary btn-block mt-4 "
              onClick={ordenesDelDia}
            >
              Buscar
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-success btn-block mt-4 "
              onClick={() => {
                guardarResu(false);
                traerOrdenesEmitidas();
              }}
            >
              Cargar Todas las Ordenes
            </button>
          </div>
        </div>
        {errores ? (
          <div className="mt-4 mb-4 text-center text-uppercase border border-dark alert alert-danger">
            {errores}
          </div>
        ) : null}

        {resu === true ? (
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
            <p className="mb-0 mt-2">
              <strong>
                <u>Monto total</u>: $ {totalImporte(listado)}
              </strong>
            </p>
            <p className="mb-0 mt-4 text-uppercase text-center">
              <strong>
                En el listado de ordenes, se muestran las correspondientes al
                dia seleccionado.
              </strong>
            </p>
          </div>
        ) : resu === false ? null : null}
      </div>

      <div className="mt-5 border border-dark p-2">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado de Ordenes",
              columns: [
                {
                  Header: "Fecha",
                  id: "FECHA",
                  accessor: (d) => moment(d.FECHA).format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                  filterAll: true,
                },
                {
                  Header: "Orden",
                  id: "ORDEN",
                  accessor: (d) => d.ORDEN,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ORDEN"] }),
                  filterAll: true,
                },
                {
                  Header: "Socio",
                  id: "CONTRATO",
                  accessor: (d) => d.CONTRATO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                  filterAll: true,
                },

                {
                  Header: "DNI",
                  id: "NRO_DOC",
                  accessor: (d) => d.NRO_DOC,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NRO_DOC"] }),
                  filterAll: true,
                },
                {
                  Header: "Servicio",
                  id: "SERVICIO",
                  accessor: (d) => d.SERVICIO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["SERVICIO"] }),
                  filterAll: true,
                },
                {
                  Header: "Importe",
                  id: "IMPORTE",
                  accessor: (d) => `$ ${d.IMPORTE.toFixed(2)}`,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                  filterAll: true,
                },

                {
                  Header: "Acciones",
                  id: "acciones",
                  filterAll: true,

                  Cell: (row) => (
                    <div>
                      {row.original.SERVICIO === "ORDE" ? (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            generarImpresion(
                              row.original.iduso,
                              row.original.NRO_DOC,
                              row.original.ORDEN,
                              "O"
                            );
                          }}
                        >
                          Imprimir
                        </button>
                      ) : row.original.SERVICIO === "FARM" ? (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            generarImpresion(
                              row.original.iduso,
                              row.original.NRO_DOC,
                              row.original.ORDEN,
                              "F"
                            );
                          }}
                        >
                          Imprimir
                        </button>
                      ) : row.original.SERVICIO === "ENFE" ? (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            generarImpresion(
                              row.original.iduso,
                              row.original.NRO_DOC,
                              row.original.ORDEN,
                              "E"
                            );
                          }}
                        >
                          Imprimir
                        </button>
                      ) : (
                        <>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={(e) => {
                              e.preventDefault();
                              generarImpresion(
                                row.original.iduso,
                                row.original.NRO_DOC,
                                row.original.ORDEN,
                                "P"
                              );
                            }}
                          >
                            Imprimir
                          </button>
                        </>
                      )}

                      <button
                        className="btn btn-danger btn-sm ml-1"
                        onClick={(e) => {
                          e.preventDefault();
                          anularOrdenes(
                            row.original.ORDEN,
                            row.original.SERVICIO,
                            row.original.iduso
                          );
                        }}
                      >
                        Anular
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

export default ListadoOrdenesEmitidas;
