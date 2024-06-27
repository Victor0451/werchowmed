import React from "react";

const FormValPrestador = ({
  prestador,
  updateConsulta,
  consultaRef,
  liquidacionRef,
  promo1Ref,
  promo2Ref,
}) => {
  return (
    <div className="mt-4 border border-dark p-4">
      <h4>
        <strong>
          <u>Valores del Prestador</u>
        </strong>
      </h4>

      <div className="row mt-4 ">
        <div className="col-md-2">
          <label>
            <u>Promo N°1:</u>
          </label>

          <input
            type="number"
            className="form-control"
            value={prestador.PROMO1}
            readOnly
          />
        </div>

        <div className="col-md-2">
          <label>
            <u>Nueva Promo N°1:</u>
          </label>

          <input type="number" className="form-control" ref={promo1Ref} />
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-primary mt-4"
            onClick={() => updateConsulta("P1")}
          >
            Actualizar
          </button>
        </div>

        <div className="col-md-6">
          <div className="alert alert-info  border border-dark text-center text-uppercase">
            Valor de la promocion N°1 que figura en la emision de ordenes.
          </div>
        </div>

        <div className="col-md-2">
          <label>
            <u>Promo N°2:</u>
          </label>

          <input
            type="number"
            className="form-control"
            value={prestador.PROMO2}
            readOnly
          />
        </div>

        <div className="col-md-2">
          <label>
            <u>Nueva Promo N°2:</u>
          </label>

          <input type="number" className="form-control" ref={promo2Ref} />
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-primary mt-4"
            onClick={() => updateConsulta("P2")}
          >
            Actualizar
          </button>
        </div>

        <div className="col-md-6">
          <div className="alert alert-info  border border-dark text-center text-uppercase">
            Valor de la promocion N°2 que figura en la emision de ordenes.
          </div>
        </div>

        <div className="col-md-2">
          <label>
            <u>Coseguro:</u>
          </label>

          <input
            type="number"
            className="form-control"
            value={prestador.CON_PAGA}
            readOnly
          />
        </div>

        <div className="col-md-2">
          <label>
            <u>Nuevo Coseguro:</u>
          </label>

          <input type="number" className="form-control" ref={consultaRef} />
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-primary mt-4"
            onClick={() => updateConsulta("C")}
          >
            Actualizar
          </button>
        </div>

        <div className="col-md-6">
          <div className="alert alert-info  border border-dark text-center text-uppercase">
            Valor del coseguro que figura en la emision de ordenes, el valor que
            debe abonar el afiliado en la Clinica Otero
          </div>
        </div>

        <div className="col-md-2">
          <label>
            <u>Honorario:</u>
          </label>

          <input
            type="number"
            className="form-control"
            value={prestador.LIQUIDACION}
            readOnly
          />
        </div>

        <div className="col-md-2">
          <label>
            <u>Nuevo Honorario:</u>
          </label>

          <input type="number" className="form-control" ref={liquidacionRef} />
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-primary mt-4"
            onClick={() => updateConsulta("L")}
          >
            Actualizar
          </button>
        </div>
        <div className="col-md-6">
          <div className="alert alert-info  border border-dark text-center text-uppercase">
            Valor honorario con el cual se liquidan las consultas y practicas
            del prestador.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormValPrestador;
