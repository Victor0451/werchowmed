import React from "react";

const FormAdministracion = ({
  medicos,
  medicoRef,
  handleChange,
  presImp,
  updateConsulta,
  consultaRef,
  prestador,
  practicasPres,
}) => {
  return (
    <div className="container border border-dark p-4 mt-4 list">
      <h2>
        <strong>
          <u>Administracion </u>
        </strong>
      </h2>

      <div className="mt-4 border border-dark p-4">
        <h4>
          <strong>
            <u>Modificar Valor de Consulta</u>
          </strong>
        </h4>

        <div className="row mt-4">
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
                  <option key={index} value={`${m.COD_PRES}-${m.CON_PAGA}`}>
                    {m.NOMBRE}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="col-md-4 alert alert-info  border border-dark text-center text-uppercase">
              No hay medicos registrados
            </div>
          )}

          <div className="col-md-3">
            <label>
              <u>Importe de Consulta:</u>
            </label>

            <input
              type="number"
              className="form-control"
              defaultValue={presImp}
              readOnly
            />
          </div>

          <div className="col-md-3">
            <label>
              <u>Nuevo Importe:</u>
            </label>

            <input type="number" className="form-control" ref={consultaRef} />
          </div>

          <div className="col-md-3">
            <button className="btn btn-primary mt-4" onClick={updateConsulta}>
              Actualizar
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 border border-dark p-4">
        <h4>
          <strong>
            <u>Datos del Prestador</u>
          </strong>
        </h4>

        <div></div>
      </div>
    </div>
  );
};

export default FormAdministracion;
