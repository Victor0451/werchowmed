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
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Registro de Nuevos Prestadores
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-4">
            <div className="alert alert-info text-center text-uppercase">
              Completa el formulario respetando los campos obligatorios para
              poder dar de alta al nuevo prestador.
            </div>

            <div className="card mt-4">
              <div className="card-header">
                <h4>
                  <strong>Datos del Prestador</strong>
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="form-group col-md-2">
                    <label>Código</label>
                    <input
                      type="text"
                      className="form-control"
                      value={nuCodPres}
                      readOnly
                    />
                  </div>

                  <div className="form-group col-md-3">
                    <label>Sucursal</label>
                    <select className="custom-select" ref={nuSucRef}>
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

                  <div className="form-group col-md-3">
                    <label>Especialidades</label>
                    <select className="custom-select" ref={nuEspRef}>
                      <option value="no">Selecciona una opción</option>
                      {especialidades.map((m, index) => (
                        <option key={index} value={`${m.ESPECIAL}-${m.NOMBRE}`}>
                          {m.NOMBRE}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group col-md-4">
                    <label>Apellido y Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={nuCodigoPrest}
                      ref={nuNombreRef}
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label>Teléfono</label>
                    <input
                      type="number"
                      className="form-control"
                      ref={nuTelefonoRef}
                    />
                  </div>

                  <div className="form-group col-md-8">
                    <label>Dirección</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuDireccionRef}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>Horario 1</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuHorario1Ref}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>Horario 2</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuHorario2Ref}
                    />
                  </div>

                  <div className="form-group col-md-3">
                    <label>Matrícula</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuMatriculaRef}
                    />
                  </div>

                  <div className="form-group col-md-3">
                    <label>Modalidad De Pago</label>
                    <select className="custom-select" ref={nuModalidadRef}>
                      <option value="no">Selecciona una opción</option>
                      <option value={"PAGA_EN_OFIC"}>En Oficina</option>
                      <option value={"PAGA_EN_PRES"}>Al Prestador</option>
                    </select>
                  </div>

                  <div className="form-group col-md-3">
                    <label>Promoción</label>
                    <select
                      className="custom-select"
                      ref={promoRef}
                      onChange={handlePromo}
                    >
                      <option value="no">Selecciona una opción</option>
                      <option value={1}>Si</option>
                      <option value={0}>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-header">
                <h4>
                  <strong>Valores del Prestador</strong>
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  {showProm === true ? (
                    <>
                      <div className="form-group col-md-4">
                        <label>Promo N°1</label>
                        <input
                          type="number"
                          className="form-control"
                          ref={nuPromo1Ref}
                        />
                        <small className="form-text text-muted">
                          Valor de la promocion N°1 que figura en la emision de
                          ordenes.
                        </small>
                      </div>

                      <div className="form-group col-md-4">
                        <label>Promo N°2</label>
                        <input
                          type="number"
                          className="form-control"
                          ref={nuPromo2Ref}
                        />
                        <small className="form-text text-muted">
                          Valor de la promocion N°2 que figura en la emision de
                          ordenes.
                        </small>
                      </div>
                    </>
                  ) : showProm === false ? null : null}

                  <div className="form-group col-md-4">
                    <label>Coseguro</label>
                    <input
                      type="number"
                      className="form-control"
                      ref={nuCoseguroRef}
                    />
                    <small className="form-text text-muted">
                      Valor del coseguro que figura en la emision de ordenes, el
                      valor que debe abonar el afiliado en la Clinica Otero
                    </small>
                  </div>

                  <div className="form-group col-md-4">
                    <label>Honorario</label>
                    <input
                      type="number"
                      className="form-control"
                      ref={nuLiquidacionRef}
                    />
                    <small className="form-text text-muted">
                      Valor honorario con el cual se liquidan las consultas y
                      practicas del prestador.
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {errores ? (
              <div className="alert alert-danger text-center text-uppercase mt-4">
                {errores}
              </div>
            ) : null}

            {alertas ? (
              <div className="alert alert-warning text-center text-uppercase mt-4">
                {alertas}
              </div>
            ) : null}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={regPrest}
            >
              Registrar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNuevoPrestador;
