import React from "react";
import Link from "next/link";

const FormControlOrdenes = ({
  traerListado,
  traerListadoConsultasMedicos,
  desdeRef,
  hastaRef,
  errores,
  medicos,
  medicoRef,
  desdeRef2,
  hastaRef2,
  sucursales,
  sucursalRef,
}) => {
  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">
            <i className="fa fa-chart-line me-2"></i>
            Reportes de Control
          </h2>
        </div>
        <div className="card-body">
          <div className="accordion mt-4" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className="fa fa-building me-2"></i>
                  Control de Órdenes por Sucursal
                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="alert alert-info shadow-sm">
                    <i className="fa fa-info-circle me-2"></i>
                    Control de órdenes emitidas por sucursal y rango de fechas.
                  </div>

                  <div className="card shadow-sm">
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
                            <label className="form-label fw-bold">
                              Sucursal
                            </label>
                            <select
                              className="form-select form-select-lg"
                              ref={sucursalRef}
                            >
                              <option value="no">
                                Seleccionar sucursal...
                              </option>
                              {sucursales.map((s, index) => (
                                <option key={index} value={s.codigo}>
                                  {s.sucursal}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        <div className="col-md-4">
                          <label className="form-label fw-bold">
                            Fecha Desde
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="date"
                            ref={desdeRef}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label fw-bold">
                            Fecha Hasta
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="date"
                            ref={hastaRef}
                          />
                        </div>

                        {errores && (
                          <div className="col-12">
                            <div className="alert alert-danger shadow-sm">
                              <i className="fa fa-exclamation-triangle me-2"></i>
                              <strong>Error:</strong> {errores}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="d-flex justify-content-end gap-2 mt-4">
                        <button
                          className="btn btn-primary"
                          onClick={traerListado}
                        >
                          <i className="fa fa-search me-1"></i>
                          Buscar Órdenes
                        </button>
                        <Link href="/">
                          <button className="btn btn-secondary">
                            <i className="fa fa-times me-1"></i>
                            Cancelar
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="fa fa-user-md me-2"></i>
                  Control de Consultas por Médico
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="alert alert-info shadow-sm">
                    <i className="fa fa-info-circle me-2"></i>
                    Selecciona un prestador médico y un rango de fechas para
                    visualizar las consultas y prácticas emitidas.
                  </div>

                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row g-3">
                        {medicos ? (
                          <div className="col-md-4">
                            <label className="form-label fw-bold">Médico</label>
                            <select
                              className="form-select form-select-lg"
                              ref={medicoRef}
                            >
                              <option value="no">Seleccionar médico...</option>
                              {medicos.map((m, index) => (
                                <option key={index} value={m.COD_PRES}>
                                  {m.NOMBRE} - {m.LIS_ESPE} - {m.SUC}
                                </option>
                              ))}
                            </select>
                          </div>
                        ) : (
                          <div className="col-md-4">
                            <div className="alert alert-warning text-center">
                              <i className="fa fa-exclamation-triangle me-2"></i>
                              No hay médicos registrados
                            </div>
                          </div>
                        )}

                        <div className="col-md-4">
                          <label className="form-label fw-bold">
                            Fecha Desde
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="date"
                            ref={desdeRef2}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label fw-bold">
                            Fecha Hasta
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="date"
                            ref={hastaRef2}
                          />
                        </div>

                        {errores && (
                          <div className="col-12">
                            <div className="alert alert-danger shadow-sm">
                              <i className="fa fa-exclamation-triangle me-2"></i>
                              <strong>Error:</strong> {errores}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="d-flex justify-content-end gap-2 mt-4">
                        <button
                          className="btn btn-primary"
                          onClick={traerListadoConsultasMedicos}
                        >
                          <i className="fa fa-search me-1"></i>
                          Buscar Consultas
                        </button>
                        <Link href="/">
                          <button className="btn btn-secondary">
                            <i className="fa fa-times me-1"></i>
                            Cancelar
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormControlOrdenes;
