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
    <div className="row g-4">
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-header bg-info text-white">
            <h4 className="mb-0">
              <i className="fa fa-cash-register me-2"></i>
              Caja Otero - {moment().format("DD/MM/YYYY")}
            </h4>
          </div>
          <div className="card-body">
            <div className="row g-4">
        <div className="col-md-6">
          <div className="d-flex justify-content-center mb-4">
            <button
              className="btn btn-success px-4 py-3"
              data-bs-toggle="modal"
              data-bs-target="#modalIngresos"
              onClick={() => tarerCuentas("I")}
            >
              <i className="fa fa-plus-circle me-2"></i>
              Agregar Ingreso
            </button>
          </div>

          {ingresos.length !== 0 ? (
            <div className="table-responsive">
              <ReactTable
                data={ingresos}
                filterable
                defaultFilterMethod={(filter, row) =>
                  row[filter.id] === filter.value
                }
                columns={[
                  {
                    Header: "Ingresos Registrados",
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
                        Header: "Servicio/Descripción",
                        id: "DETALLE",
                        accessor: (d) => d.DETALLE,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["DETALLE"],
                          }),
                        filterAll: true,
                        Cell: (row) => (
                          <div className="text-truncate" style={{maxWidth: '200px'}} title={row.value}>
                            {row.value}
                          </div>
                        ),
                      },
                      {
                        Header: "Órdenes",
                        id: "CANTIDAD",
                        accessor: (d) => d.CANTIDAD,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["CANTIDAD"],
                          }),
                        filterAll: true,
                        Cell: (row) => (
                          <div className="text-center">
                            <span className="badge bg-primary">{row.value}</span>
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
                        Cell: (row) => (
                          <div className="text-end fw-semibold text-success">
                            ${parseFloat(row.value).toFixed(2)}
                          </div>
                        ),
                      },
                      {
                        Header: "Acciones",
                        id: "ACCIONES",
                        filterAll: true,
                        width: 100,
                        Cell: (row, index) => (
                          <div className="text-center">
                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => eliminarImpuPrecargado(index, "I")}
                              title="Eliminar ingreso"
                            >
                              <i className="fa fa-trash"></i>
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

              <div className="alert alert-success border-0 shadow-sm text-center mt-3">
                <h6 className="mb-0">
                  <i className="fa fa-arrow-up me-2"></i>
                  Total de Ingresos: <strong>${calcTotalMovimientos(ingresos, "I")}</strong>
                </h6>
              </div>
            </div>
          ) : (
            <div className="alert alert-secondary border-0 shadow-sm text-center">
              <i className="fa fa-info-circle me-2"></i>
              No hay ingresos registrados
            </div>
          )}
        </div>

        <div className="col-md-6">
          <div className="d-flex justify-content-center mb-4">
            <button
              className="btn btn-danger px-4 py-3"
              data-bs-toggle="modal"
              data-bs-target="#modalEgresos"
              onClick={() => tarerCuentas("E")}
            >
              <i className="fa fa-minus-circle me-2"></i>
              Agregar Egreso
            </button>
          </div>

          {egresos.length !== 0 ? (
            <div className="table-responsive">
              <ReactTable
                data={egresos}
                filterable
                defaultFilterMethod={(filter, row) =>
                  row[filter.id] === filter.value
                }
                columns={[
                  {
                    Header: "Egresos Registrados",
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
                        Header: "Detalle",
                        id: "DETALLE",
                        accessor: (d) => d.DETALLE,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["DETALLE"],
                          }),
                        filterAll: true,
                        Cell: (row) => (
                          <div className="text-truncate" style={{maxWidth: '150px'}} title={row.value}>
                            {row.value}
                          </div>
                        ),
                      },
                      {
                        Header: "Factura",
                        id: "FACTURA",
                        filterAll: true,
                        width: 120,
                        Cell: (row) => (
                          <div className="text-center">
                            <small className="text-muted">
                              {row.original.SERIE}-{row.original.NUMERO}
                            </small>
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
                        Cell: (row) => (
                          <div className="text-end fw-semibold text-danger">
                            ${parseFloat(row.value).toFixed(2)}
                          </div>
                        ),
                      },
                      {
                        Header: "Acciones",
                        id: "ACCIONES",
                        filterAll: true,
                        width: 100,
                        Cell: (row, index) => (
                          <div className="text-center">
                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => eliminarImpuPrecargado(index, "E")}
                              title="Eliminar egreso"
                            >
                              <i className="fa fa-trash"></i>
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

              <div className="alert alert-danger border-0 shadow-sm text-center mt-3">
                <h6 className="mb-0">
                  <i className="fa fa-arrow-down me-2"></i>
                  Total de Egresos: <strong>${calcTotalMovimientos(egresos, "E")}</strong>
                </h6>
              </div>
            </div>
          ) : (
            <div className="alert alert-secondary border-0 shadow-sm text-center">
              <i className="fa fa-info-circle me-2"></i>
              No hay egresos registrados
            </div>
          )}
        </div>
              <div className="col-12">
                <div className="alert alert-success border-0 shadow-sm text-center">
                  <h5 className="mb-0">
                    <i className="fa fa-coins me-2"></i>
                    Valores a Depositar: $
                    <strong className="fs-4">
                      {calcTotalMovimientos(ingresos, "I") - calcTotalMovimientos(egresos, "E")}
                    </strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
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
