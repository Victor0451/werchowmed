import React from "react";
import ListadoPracticas from "./ListadoPracticas";
import ListadoPracticasAgregadas from "./ListadoPracticasAgregadas";

const ModalPractica = ({
  socio,
  sucursales,
  espec,
  medicos,
  especialidadRefP,
  sucursalRefP,
  medicoRefP,
  traerMedicosPorSuc,
  traerDetalleMedSelec,
  detalleMed,
  practicas,
  agregarPractica,
  pracSocio,
  eliminarPracticaPrecargado,
  calcularTotalPracticas,
  registrarPracticaUso,
  cantidadRefP,
  nFisio,
  priUso,
  priUsoBio,
}) => {
  return (
    <div
      className="modal fade"
      id="modalPractica"
      tabIndex="-1"
      aria-labelledby="modalPracticaLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title" id="modalPracticaLabel">
              <i className="fa fa-flask me-2"></i>
              Prácticas Médicas - {socio.APELLIDOS}, {socio.NOMBRES}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="alert alert-info shadow-sm mb-3">
              <i className="fa fa-vial me-2"></i>
              <strong>Prácticas Bioquímicas del mes:</strong> {priUsoBio}
            </div>

            <div className="alert alert-primary shadow-sm mb-4">
              <i className="fa fa-clipboard-list me-2"></i>
              <strong>Prácticas generales del mes:</strong> {priUso}
            </div>

            <div className="card shadow-sm mb-4">
              <div className="card-header bg-light">
                <h6 className="mb-0">
                  <i className="fa fa-map-marker me-2"></i>
                  Seleccionar Ubicación y Especialidad
                </h6>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {!sucursales ? (
                    <div className="col-md-4">
                      <div className="alert alert-info text-center">
                        <i className="fa fa-spinner fa-spin me-2"></i>
                        Cargando sucursales...
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Sucursal</label>
                      <select className="form-select form-select-lg" ref={sucursalRefP}>
                        <option value="no">Seleccionar sucursal...</option>
                        {sucursales.map((s, index) => (
                          <option key={index} value={s.codigo}>
                            {s.sucursal}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {!espec ? (
                    <div className="col-md-4">
                      <div className="alert alert-warning text-center">
                        <i className="fa fa-exclamation-triangle me-2"></i>
                        Seleccione una sucursal para ver especialidades
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Especialidad</label>
                      <select
                        className="form-select form-select-lg"
                        ref={especialidadRefP}
                        onChange={() => traerMedicosPorSuc("P")}
                      >
                        <option value="no">Seleccionar especialidad...</option>
                        {espec.map((s, index) => (
                          <option key={index} value={s.ESPECIAL}>
                            {s.NOMBRE}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {!medicos ? (
                    <div className="col-md-4">
                      <div className="alert alert-warning text-center">
                        <i className="fa fa-user-md me-2"></i>
                        Seleccione una especialidad para ver médicos
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-4">
                      <label className="form-label fw-bold">
                        Médico
                        {detalleMed && (
                          <span className="badge bg-success ms-2">
                            ${detalleMed.CON_PAGA}
                          </span>
                        )}
                      </label>
                      <select
                        className="form-select form-select-lg"
                        ref={medicoRefP}
                        onChange={() => traerDetalleMedSelec("P")}
                      >
                        <option value="no">Seleccionar médico...</option>
                        {medicos.map((s, index) => (
                          <option key={index} value={s.COD_PRES}>
                            {s.NOMBRE}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {detalleMed && detalleMed.COD_PRES &&(
              <>
                <div className="card shadow-sm mb-4">
                  <div className="card-header bg-info text-white">
                    <h6 className="mb-0">
                      <i className="fa fa-user-md me-2"></i>
                      Detalles del Médico
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Nombre del Médico</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          value={detalleMed.NOMBRE}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Horarios de Atención</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          value={`${detalleMed.HORARIO1} - ${detalleMed.HORARIO2}`}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Teléfono</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          value={detalleMed.TELEFONOS}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold">Dirección</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          value={detalleMed.DIRECCION}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {socio.GRUPO === 66 || socio.GRUPO === 55 ? (
                  <div className="alert alert-success shadow-sm mb-4">
                    <i className="fa fa-heartbeat me-2"></i>
                    <strong>Beneficio Especial:</strong> Este socio dispone de {8 - nFisio} sesiones de fisioterapia bonificadas al 100%
                  </div>
                ) : null}

                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="card shadow-sm">
                      <div className="card-header bg-light">
                        <h6 className="mb-0">
                          <i className="fa fa-list me-2"></i>
                          Prácticas Disponibles
                        </h6>
                      </div>
                      <div className="card-body p-0">
                        <ListadoPracticas
                          listado={practicas}
                          agregarPractica={agregarPractica}
                          cantidadRefP={cantidadRefP}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="card shadow-sm">
                      <div className="card-header bg-warning text-dark">
                        <h6 className="mb-0">
                          <i className="fa fa-shopping-cart me-2"></i>
                          Prácticas Seleccionadas
                        </h6>
                      </div>
                      <div className="card-body p-0">
                        <ListadoPracticasAgregadas
                          listado={pracSocio}
                          eliminarPracticaPrecargado={eliminarPracticaPrecargado}
                          cantidadRefP={cantidadRefP}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card shadow-sm mt-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="alert alert-primary text-center mb-0">
                          <i className="fa fa-calculator fa-2x mb-2"></i>
                          <h5 className="mb-1">Total Prácticas</h5>
                          <strong className="fs-4">${calcularTotalPracticas(pracSocio, "I")}</strong>
                        </div>
                      </div>
                      {(socio.GRUPO === 66 || socio.GRUPO === 55) && nFisio >= 0 && nFisio < 8 && (
                        <div className="col-md-12">
                          <div className="alert alert-success text-center mb-0">
                            <i className="fa fa-star fa-2x mb-2"></i>
                            <h5 className="mb-1">Sesiones Bonificadas</h5>
                            <strong className="fs-4">{8 - nFisio} restantes</strong>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="modal-footer bg-light">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="fa fa-times me-1"></i>
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
              onClick={registrarPracticaUso}
            >
              <i className="fa fa-print me-1"></i>
              Imprimir Orden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPractica;
