import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";
import ModalEgresos from "./ModalEgresos";
import ModalIngresos from "./ModalIngresos";

const FormCajaPato = ({
  ingresos,
  egresos,
  descripcionIRef,
  serieIRef,
  nFacturaIRef,
  importeIRef,
  descripcionERef,
  serieERef,
  nFacturaERef,
  importeERef,
  cuitIRef,
  cuitERef,
  regEgreso,
  regIngreso,
  calcTotalMovimientos,
  cuentas,
  tipoFac,
  tarerCuentas,
  handleChange,
  errores,
  eliminarImpuPrecargado,
}) => {
  return (
    <div className="mt-4 container border border-dark list p-4">
      <h4>
        <strong>
          <u>Caja Otero</u>: {moment().format("DD/MM/YYYY")}
        </strong>
      </h4>

      <div className="row mt-4 border border-dark p-2">
        <div className="col-md-6">
          <button
            className="mt-4 mb-4 btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalIngresos"
            onClick={() => tarerCuentas("I")}
          >
            Agregar Ingreso
          </button>

          {ingresos.length !== 0 ? (
            <div className="list">
              <ReactTable
                data={ingresos}
                filterable
                defaultFilterMethod={(filter, row) =>
                  row[filter.id] === filter.value
                }
                columns={[
                  {
                    Header: "Ingresos",
                    columns: [
                      {
                        Header: "#",
                        filterAll: false,
                        width: 50,
                        Cell: (row) => <div>{row.index + 1}</div>,
                      },
                      {
                        Header: "Servicio/Descripcion",
                        id: "DETALLE",
                        accessor: (d) => d.DETALLE,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["DETALLE"],
                          }),
                        filterAll: true,
                      },
                      {
                        Header: "Ordenes",
                        id: "CANTIDAD",
                        accessor: (d) => d.CANTIDAD,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["CANTIDAD"],
                          }),
                        filterAll: true,
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
                      },
                      {
                        Header: "Acciones",
                        id: "ACCIONES",
                        filterAll: true,

                        Cell: (row, index) => (
                          <div>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => eliminarImpuPrecargado(index, "I")}
                            >
                              <i className="fa fa-trash" aria-hidden="true"></i>{" "}
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

              <div className="mt-4 border border-dark alert alert-info text-center text-uppercase">
                Total de Ingresos: ${calcTotalMovimientos(ingresos, "I")}
              </div>
            </div>
          ) : (
            <div className="mt-4 border border-dark alert alert-info text-center text-uppercase">
              No hay ingresos registrados
            </div>
          )}
        </div>

        <div className="col-md-6">
          <button
            className="mt-4 mb-4 btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalEgresos"
            onClick={() => tarerCuentas("E")}
          >
            Agregar Egresos
          </button>

          {egresos.length !== 0 ? (
            <div className="list">
              <ReactTable
                data={egresos}
                filterable
                defaultFilterMethod={(filter, row) =>
                  row[filter.id] === filter.value
                }
                columns={[
                  {
                    Header: "Egresos",
                    columns: [
                      {
                        Header: "#",
                        filterAll: false,
                        width: 50,
                        Cell: (row) => <div>{row.index + 1}</div>,
                      },
                      {
                        Header: "Detalle",
                        id: "DETALLE",
                        accessor: (d) => d.DETALLE,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["DETALLE"],
                          }),
                        filterAll: true,
                      },
                      {
                        Header: "Factura",
                        id: "FACTURA",
                        filterAll: true,

                        Cell: (row) => (
                          <div>
                            {row.original.SERIE} - {row.original.NUMERO}
                          </div>
                        ),
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
                      },
                      {
                        Header: "Acciones",
                        id: "ACCIONES",
                        filterAll: true,

                        Cell: (row, index) => (
                          <div>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => eliminarImpuPrecargado(index, "E")}
                            >
                              <i className="fa fa-trash" aria-hidden="true"></i>{" "}
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

              <div className="mt-4 border border-dark alert alert-info text-center text-uppercase">
                Total de Egresos: ${calcTotalMovimientos(egresos, "E")}
              </div>
            </div>
          ) : (
            <div className="mt-4 border border-dark alert alert-info text-center text-uppercase">
              No hay Egresos registrados
            </div>
          )}
        </div>
        <div className="col-md-12 mt-4 border border-dark alert alert-info text-center text-uppercase">
          Valores a Depositar: $
          {calcTotalMovimientos(ingresos, "I") - calcTotalMovimientos(egresos, "E") }
        </div>
      </div>

      <ModalEgresos
        descripcionERef={descripcionERef}
        serieERef={serieERef}
        nFacturaERef={nFacturaERef}
        importeERef={importeERef}
        regEgreso={regEgreso}
        cuentas={cuentas}
        tipoFac={tipoFac}
        cuitERef={cuitERef}
        handleChange={handleChange}
        errores={errores}
      />

      <ModalIngresos
        descripcionIRef={descripcionIRef}
        serieIRef={serieIRef}
        nFacturaIRef={nFacturaIRef}
        importeIRef={importeIRef}
        regIngreso={regIngreso}
        cuentas={cuentas}
        tipoFac={tipoFac}
        cuitIRef={cuitIRef}
        handleChange={handleChange}
        errores={errores}
      />
    </div>
  );
};

export default FormCajaPato;
