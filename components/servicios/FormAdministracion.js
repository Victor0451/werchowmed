import React from "react";
import FormEditPrestador from "./FormEditPrestador";
import FormValPrestador from "./FormValPrestador";
import ListadoActPracticas from "./ListadoActPracticas";

const FormAdministracion = ({
  medicos,
  medicoRef,
  handleChange,
  updateConsulta,
  consultaRef,
  liquidacionRef,
  promo1Ref,
  promo2Ref,
  prestador,
  practicasPres,
  nombreRef,
  matriculaRef,
  direccionRef,
  horario1Ref,
  horario2Ref,
  updatePrestador,
  guardarRow,
  promoEditRef,
}) => {
  return (
    <div className="container border border-dark p-4 mt-4 list">
      <h2>
        <strong>
          <u>Panel de Administracion</u>
        </strong>
      </h2>

      <div className="mt-4 border border-dark p-4">
        <h4>
          <strong>
            <u>Selecciona al Prestador</u>
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
                    {m.NOMBRE} - {m.LOCALIDAD}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="col-md-4 mt-4 alert alert-warning  border border-dark text-center text-uppercase">
              No hay medicos registrados
            </div>
          )}

          <div className="col-md-9">
            <div className="col-md-12 mt-4 alert alert-info  border border-dark text-center text-uppercase">
              Selecciona un prestador del listado para gestionar sus valores,
              informacion personal y practicas. Para incorporar un nuevo
              prestador, haz click aqui{" "}
              <button
                className="btn btn-success mt-2"
                data-toggle="modal"
                data-target="#ModalNuevoPrestador"
              >
                Nuevo Prestador
              </button>
            </div>
          </div>
        </div>
      </div>

      {prestador.length !== 0 ? (
        <>
          <FormValPrestador
            prestador={prestador}
            updateConsulta={updateConsulta}
            consultaRef={consultaRef}
            liquidacionRef={liquidacionRef}
            promo1Ref={promo1Ref}
            promo2Ref={promo2Ref}
          />

          <FormEditPrestador
            prestador={prestador}
            nombreRef={nombreRef}
            matriculaRef={matriculaRef}
            direccionRef={direccionRef}
            horario1Ref={horario1Ref}
            horario2Ref={horario2Ref}
            updatePrestador={updatePrestador}
            promoEditRef={promoEditRef}
          />

          <ListadoActPracticas
            practicasPres={practicasPres}
            guardarRow={guardarRow}
          />
        </>
      ) : null}
    </div>
  );
};

export default FormAdministracion;
