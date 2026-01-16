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
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-primary fw-bold">
          <i className="fa fa-cogs me-2"></i>
          Panel de Administración
        </h1>
        <p className="text-muted">Gestiona prestadores médicos, valores y prácticas</p>
      </div>

      {/* Provider Selection */}
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">
            <i className="fa fa-user-md me-2"></i>
            Seleccionar Prestador
          </h5>
        </div>
        <div className="card-body">
          <div className="row align-items-end">
            {medicos ? (
              <div className="col-md-4">
                <label className="form-label fw-bold">Prestador Médico</label>
                <select
                  className="form-select form-select-lg"
                  ref={medicoRef}
                  onChange={() => {
                    handleChange();
                  }}
                >
                  <option value="no">Seleccionar prestador...</option>
                  {medicos.map((m, index) => (
                    <option key={index} value={`${m.COD_PRES}-${m.CON_PAGA}`}>
                      {m.NOMBRE} - {m.LOCALIDAD}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="col-12">
                <div className="alert alert-warning text-center">
                  <i className="fa fa-exclamation-triangle me-2"></i>
                  No hay médicos registrados en el sistema
                </div>
              </div>
            )}

            <div className="col-md-8">
              <div className="alert alert-info">
                <i className="fa fa-info-circle me-2"></i>
                <strong>Instrucciones:</strong> Selecciona un prestador del listado para gestionar sus valores,
                información personal y prácticas médicas.
                <div className="mt-2">
                  <button
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalNuevoPrestador"
                  >
                    <i className="fa fa-plus me-1"></i>
                    Nuevo Prestador
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {prestador.length !== 0 && (
        <div className="row g-4">
          <div className="col-12">
            <FormValPrestador
              prestador={prestador}
              updateConsulta={updateConsulta}
              consultaRef={consultaRef}
              liquidacionRef={liquidacionRef}
              promo1Ref={promo1Ref}
              promo2Ref={promo2Ref}
            />
          </div>
          <div className="col-12">
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
          </div>
          <div className="col-12">
            <ListadoActPracticas
              practicasPres={practicasPres}
              guardarRow={guardarRow}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormAdministracion;
