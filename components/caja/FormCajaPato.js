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
  errores
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
            data-toggle="modal"
            data-target="#modalIngresos"
            onClick={() => tarerCuentas("I")}
          >
            Agregar Ingreso
          </button>

          {ingresos.length !== 0 ? (
            <div className="list">
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
            data-toggle="modal"
            data-target="#modalEgresos"
            onClick={() => tarerCuentas("E")}
          >
            Agregar Egresos
          </button>

          {egresos.length !== 0 ? (
            <div className="list">
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
