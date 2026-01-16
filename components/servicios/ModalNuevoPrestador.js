import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";

const ModalNuevoPrestador = ({
  especialidades,
  showProm,
  promoRef,
  handlePromo,
  nuCodPres,
  nuCodigoPrest,
  nuNombreRef,
  nuEspRef,
  nuDireccionRef,
  nuHorario1Ref,
  nuHorario2Ref,
  nuMatriculaRef,
  nuPromo1Ref,
  nuPromo2Ref,
  nuCoseguroRef,
  nuLiquidacionRef,
  nuSucRef,
  nuTelefonoRef,
  regPrest,
  nuModalidadRef,
  errores,
  alertas,
}) => {
  return (
    <div
      className="modal fade"
      id="ModalNuevoPrestador"
      tabIndex="-1"
      aria-labelledby="ModalNuevoPrestadorLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content shadow">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title fw-bold" id="ModalNuevoPrestadorLabel">
              <i className="fa fa-user-plus me-2"></i>
              Registro de Nuevos Prestadores
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <div className="alert alert-info border-0 shadow-sm">
              <i className="fa fa-info-circle me-2"></i>
              <strong>Información:</strong> Completa el formulario respetando los campos obligatorios para
              poder dar de alta al nuevo prestador.
            </div>

            <div className="card shadow-sm mt-4 border-0">
              <div className="card-header bg-light">
                <h5 className="mb-0 text-primary">
                  <i className="fa fa-user me-2"></i>
                  Datos del Prestador
                </h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-2">
                    <label className="form-label fw-semibold">Código</label>
                    <input
                      type="text"
                      className="form-control"
                      value={nuCodPres}
                      readOnly
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Sucursal</label>
                    <select className="form-select" ref={nuSucRef}>
                      <option value="no">Selecciona una opción</option>
                      <option value="S.S. DE JUJUY">Casa Central</option>
                      <option value="OTERO">Otero</option>
                      <option value="PALPALA">Palpalá</option>
                      <option value="PERICO">Perico</option>
                      <option value="EL CARMEN">El Carmen</option>
                      <option value="SAN PEDRO">San Pedro</option>
                      <option value="SAN MIGUEL">San Miguel</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Especialidades</label>
                    <select className="form-select" ref={nuEspRef}>
                      <option value="no">Selecciona una opción</option>
                      {especialidades.map((m, index) => (
                        <option key={index} value={`${m.ESPECIAL}-${m.NOMBRE}`}>
                          {m.NOMBRE}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Apellido y Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={nuCodigoPrest}
                      ref={nuNombreRef}
                      placeholder="Ingrese apellido y nombre"
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Teléfono</label>
                    <input
                      type="tel"
                      className="form-control"
                      ref={nuTelefonoRef}
                      placeholder="Número de teléfono"
                    />
                  </div>

                  <div className="col-md-8">
                    <label className="form-label fw-semibold">Dirección</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuDireccionRef}
                      placeholder="Dirección completa"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Horario 1</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuHorario1Ref}
                      placeholder="Ej: 08:00 - 12:00"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Horario 2</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuHorario2Ref}
                      placeholder="Ej: 16:00 - 20:00"
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Matrícula</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuMatriculaRef}
                      placeholder="Número de matrícula"
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Modalidad De Pago</label>
                    <select className="form-select" ref={nuModalidadRef}>
                      <option value="no">Selecciona una opción</option>
                      <option value={"PAGA_EN_OFIC"}>En Oficina</option>
                      <option value={"PAGA_EN_PRES"}>Al Prestador</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Promoción</label>
                    <select
                      className="form-select"
                      ref={promoRef}
                      onChange={handlePromo}
                    >
                      <option value="no">Selecciona una opción</option>
                      <option value={1}>Sí</option>
                      <option value={0}>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm mt-4 border-0">
              <div className="card-header bg-light">
                <h5 className="mb-0 text-success">
                  <i className="fa fa-dollar-sign me-2"></i>
                  Valores del Prestador
                </h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {showProm === true ? (
                    <>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Promo N°1</label>
                        <input
                          type="number"
                          className="form-control"
                          ref={nuPromo1Ref}
                          placeholder="0.00"
                          step="0.01"
                        />
                        <div className="form-text">
                          Valor de la promoción N°1 que figura en la emisión de órdenes.
                        </div>
                      </div>

                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Promo N°2</label>
                        <input
                          type="number"
                          className="form-control"
                          ref={nuPromo2Ref}
                          placeholder="0.00"
                          step="0.01"
                        />
                        <div className="form-text">
                          Valor de la promoción N°2 que figura en la emisión de órdenes.
                        </div>
                      </div>
                    </>
                  ) : showProm === false ? null : null}

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Coseguro</label>
                    <input
                      type="number"
                      className="form-control"
                      ref={nuCoseguroRef}
                      placeholder="0.00"
                      step="0.01"
                    />
                    <div className="form-text">
                      Valor del coseguro que debe abonar el afiliado en la Clínica Otero.
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Honorario</label>
                    <input
                      type="number"
                      className="form-control"
                      ref={nuLiquidacionRef}
                      placeholder="0.00"
                      step="0.01"
                    />
                    <div className="form-text">
                      Valor honorario con el cual se liquidan las consultas y prácticas del prestador.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {errores ? (
              <div className="alert alert-danger border-0 shadow-sm mt-4">
                <i className="fa fa-exclamation-triangle me-2"></i>
                <strong>Error:</strong> {errores}
              </div>
            ) : null}

            {alertas ? (
              <div className="alert alert-warning border-0 shadow-sm mt-4">
                <i className="fa fa-exclamation-circle me-2"></i>
                <strong>Advertencia:</strong> {alertas}
              </div>
            ) : null}
          </div>

          <div className="modal-footer bg-light">
            <button
              type="button"
              className="btn btn-success px-4"
              onClick={regPrest}
            >
              <i className="fa fa-save me-2"></i>
              Registrar Prestador
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary px-4"
              data-bs-dismiss="modal"
            >
              <i className="fa fa-times me-2"></i>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNuevoPrestador;
