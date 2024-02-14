import React from "react";
import Link from "next/link";

const FormRegAusencias = ({
  medicos,
  medicoRef,
  motivoRef,
  desdeRef,
  hastaRef,
  observacionRef,
  handleChange,
  errores,
  regAusencia,
}) => {
  return (
    <div>
      <div className="container border border-dark p-4 mt-4 list">
        <h2>
          <strong>
            <u>Prestadores - Registro de Ausencias</u>
          </strong>
        </h2>

        <div className="row mt-4 border border-dark p-4">
          {medicos ? (
            <div className="col-md-3">
              <label>
                <u>Doctor</u>:
              </label>

              <select
                className="custom-select"
                ref={medicoRef}
                onChange={() => {
                  handleChange();
                }}
              >
                <option value="no">Selecciona una opcion</option>
                {medicos.map((m, index) => (
                  <option key={index} value={`${m.COD_PRES}-${m.NOMBRE}`}>
                    {m.NOMBRE}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="col-md-4 mt-4 alert alert-info  border border-dark text-center text-uppercase">
              No hay medicos registrados
            </div>
          )}

          <div className="col-md-3">
            <label>
              <u>Motivo</u>:
            </label>

            <select className="custom-select" ref={motivoRef}>
              <option value="no">Selecciona una opcion</option>
              <option value={`Vacaciones`}>Vacaciones</option>
              <option value={`Carpeta Medica`}>Carpeta Medica</option>
            </select>
          </div>

          <div className="col-md-3">
            <label>
              <u>Desde</u>:
            </label>
            <input type="date" className="form-control" ref={desdeRef} />
          </div>

          <div className="col-md-3">
            <label>
              <u>Hasta</u>:
            </label>
            <input type="date" className="form-control" ref={hastaRef} />
          </div>

          <div className="col-md-12 mt-4">
            <label>
              <u>Observacion</u>:
            </label>
            <textarea rows={5} className="form-control" ref={observacionRef} />
          </div>
        </div>

        {errores ? (
          <div className="border border-dark alert alert-danger mt-4 mb-4 rounded text-center text-uppercase">
            {errores}
          </div>
        ) : null}

        <div className="row dflex justify-content-end">
          <div className="mt-4 col-md-3">
            <button
              className="btn btn-primary btn-block mt-4"
              onClick={regAusencia}
            >
              Registrar
            </button>
          </div>
          <div className="mt-4 col-md-3">
            <Link href={"/"}>
              <button className="btn btn-danger btn-block mt-4">Canelar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegAusencias;
