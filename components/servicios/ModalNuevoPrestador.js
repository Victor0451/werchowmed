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
            <div className="border border-dark p-4">
              <div className="row  ">
                <div className="col-md-12">
                  <div className="alert alert-info  text-center text-uppercase border border-dark">
                    Completa el formulario respetando los campos obligatorios
                    para poder dar de alta al nuevo prestador.
                  </div>{" "}
                </div>
              </div>

              <div className="mt-4 border border-dark p-4">
                <h4>
                  <strong>
                    <u>Datos del Prestador</u>
                  </strong>
                </h4>

                <div className="row mt-4">
                  <div className="col-md-2">
                    <label>Codigo</label>
                    <input
                      type="text"
                      className="form-control"
                      value={nuCodPres}
                      readOnly
                    />
                  </div>

                  <div className="col-md-3">
                    <label>Sucursal: </label>
                    <select className="custom-select" ref={nuSucRef}>
                      <option value="no">Selecciona una opcion</option>
                      <option value="S.S. DE JUJUY">Casa Central</option>
                      <option value="OTERO">Otero</option>
                      <option value="PALPALA">Palpala</option>
                      <option value="PERICO">Perico</option>
                      <option value="EL CARMEN">El Carmen</option>
                      <option value="SAN PEDRO">San Pedro</option>
                    </select>
                  </div>

                  <div className="col-md-3 ">
                    <label>Especialidades: </label>
                    <select className="custom-select" ref={nuEspRef}>
                      <option value="no">Selecciona una opcion</option>
                      {especialidades.map((m, index) => (
                        <option key={index} value={`${m.ESPECIAL}-${m.NOMBRE}`}>
                          {m.NOMBRE}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label>Apellido y Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={nuCodigoPrest}
                      ref={nuNombreRef}
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>Telefono</label>
                    <input
                      type="number"
                      className="form-control"
                      ref={nuTelefonoRef}
                    />
                  </div>

                  <div className="col-md-8 mt-4">
                    <label>Direccion</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuDireccionRef}
                    />
                  </div>

                  <div className="col-md-6 mt-4">
                    <label>Horario 1</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuHorario1Ref}
                    />
                  </div>

                  <div className="col-md-6 mt-4">
                    <label>Horario 2</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuHorario2Ref}
                    />
                  </div>

                  <div className="col-md-3 mt-4">
                    <label>Matricula</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nuMatriculaRef}
                    />
                  </div>

                  <div className="col-md-3 mt-4">
                    <label>Modalidad De Pago: </label>
                    <select className="custom-select" ref={nuModalidadRef}>
                      <option value="no">Selecciona una opcion</option>
                      <option value={"PAGA_EN_OFIC"}>En Oficina</option>
                      <option value={"PAGA_EN_PRES"}>Al Prestador</option>
                    </select>
                  </div>

                  <div className="col-md-3 mt-4">
                    <label>Promocion: </label>
                    <select
                      className="custom-select"
                      ref={promoRef}
                      onChange={() => {
                        handlePromo();
                      }}
                    >
                      <option value="no">Selecciona una opcion</option>
                      <option value={1}>Si</option>
                      <option value={0}>No</option>
                    </select>
                  </div>
                </div>
              </div>

              <hr className="border border-dark mt-4 mb-4" />

              <div className="mt-4 border border-dark p-4">
                <h4>
                  <strong>
                    <u>Valores del Prestador</u>
                  </strong>
                </h4>

                <div className="row mt-5 ">
                  {showProm === true ? (
                    <>
                      <div className="col-md-4">
                        <label>
                          <u>Promo N°1:</u>
                        </label>

                        <input
                          type="number"
                          className="form-control"
                          ref={nuPromo1Ref}
                        />
                      </div>

                      <div className="col-md-8 mt-4">
                        <div className="alert alert-info  border border-dark text-center text-uppercase">
                          Valor de la promocion N°1 que figura en la emision de
                          ordenes.
                        </div>
                      </div>

                      <div className="col-md-4">
                        <label>
                          <u>Promo N°2:</u>
                        </label>

                        <input
                          type="number"
                          className="form-control"
                          ref={nuPromo2Ref}
                        />
                      </div>

                      <div className="col-md-8 mt-4">
                        <div className="alert alert-info  border border-dark text-center text-uppercase">
                          Valor de la promocion N°2 que figura en la emision de
                          ordenes.
                        </div>
                      </div>
                    </>
                  ) : showProm === false ? null : null}

                  <div className="col-md-4">
                    <label>
                      <u>Coseguro:</u>
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      ref={nuCoseguroRef}
                    />
                  </div>

                  <div className="col-md-8 mt-4">
                    <div className="alert alert-info  border border-dark text-center text-uppercase">
                      Valor del coseguro que figura en la emision de ordenes, el
                      valor que debe abonar el afiliado en la Clinica Otero
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label>
                      <u>Honorario:</u>
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      ref={nuLiquidacionRef}
                    />
                  </div>

                  <div className="col-md-8 mt-4">
                    <div className="alert alert-info  border border-dark text-center text-uppercase">
                      Valor honorario con el cual se liquidan las consultas y
                      practicas del prestador.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {errores ? (
              <div className=" col-md-12 mt-4 alert alert-danger border border-dark text-center text-uppercase">
                {errores}
              </div>
            ) : null}

            {alertas ? (
              <div className=" col-md-12 mt-4 alert alert-info border border-dark text-center text-uppercase">
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
