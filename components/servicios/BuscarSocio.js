import React from "react";
import ListadoSocios from "./ListadoSocios";

const BuscarSocio = ({
  contratoRef,
  dniRef,
  buscarTitularM,
  buscarTitularDniM,
  buscarTitular,
  buscarTitularDni,
  errores,
  titulo,
  listado,
  listSocios,
  listSociosM,
  Seleccionar,
  SeleccionarM,
  emp,
  codNoSocioRef,
  consultarCodigo,
  buscarTitularSM,
  buscarTitularDniSM,
  listSociosSM,
  SeleccionarSM,
  sucur,
}) => {
  return (
    <div className="container border border-dark list mt-4 p-4">
      <div className="row">
        <div className="col-md-8">
          <h2 className="mt-2 mb-4">
            <strong>
              <u>Emision de {titulo}</u>
            </strong>
          </h2>
          <h4 className="mt-2 mb-4">
            <strong>
              <u>Estas en Sucursal</u>:
              {sucur === "W" ? (
                <> Casa Central</>
              ) : sucur === "L" ? (
                <> Palpala</>
              ) : sucur === "R" ? (
                <> Perico</>
              ) : sucur === "C" ? (
                <> El Carmen</>
              ) : sucur === "P" ? (
                <> San Pedro</>
              ) : sucur === "O" ? (
                <> Clinica Otero</>
              ) : null}
            
            </strong>
          </h4>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          {emp && emp === "W" ? (
            <img src="/img/logo.png" className="mt-2 werchowlogo" />
          ) : emp && emp === "M" ? (
            <img src="/img/logom.jpg" className="mutuallogo" />
          ) : null}
        </div>
      </div>

      <div className="border border-dark mt-4 mb-4 p-2">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <h4>
              <u>Codigos de Consultas Gratuitas</u>
            </h4>
          </div>

          <div className="col-md-3">
            <label>
              <u>Ingresa el codigo</u>
            </label>

            <input
              type={"number"}
              className="form-control"
              ref={codNoSocioRef}
            />
          </div>

          <div className="col-md-3">
            <button
              className="btn btn-block btn-primary mt-4 "
              onClick={consultarCodigo}
            >
              Generar Consulta
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 border border-dark p-4 ">
        <form>
          <h2 className=" mb-4">
            <strong>
              <u>Buscar Socio</u>
            </strong>
          </h2>

          <div className="border border-dark p-4">
            <h4>
              <u>Buscar por N° de Socio</u>
            </h4>
            <div className="row mb-4 mt-4">
              <div className="form-group col-md-4">
                <label>
                  <strong>
                    {" "}
                    <u> N° de Ficha: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ficha"
                  name="contrato"
                  ref={contratoRef}
                />
              </div>

              <div className="form-group col-md-2 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    buscarTitular();
                  }}
                >
                  Werchow
                </button>
              </div>
              <div className="form-group col-md-2 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    buscarTitularM();
                  }}
                >
                  Mutual
                </button>
              </div>
              <div className="form-group col-md-2 mt-4">
                <button
                  className="btn btn-block btn-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    buscarTitularSM();
                  }}
                >
                  San Miguel
                </button>
              </div>
              {errores && (
                <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                  {errores}
                </div>
              )}
            </div>
          </div>
        </form>

        <hr className="mt-4 mb-4" />

        <form>
          <div className="border border-dark p-4">
            <h4>
              <u>Buscar por N° de DNI</u>
            </h4>
            <div className="row mb-4 mt-4">
              <div className="form-group col-md-4">
                <label>
                  <strong>
                    {" "}
                    <u> DNI: </u>
                  </strong>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="DNI"
                  name="contrato"
                  ref={dniRef}
                />
              </div>

              <div className="form-group col-md-2 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularDni}
                >
                  Werchow
                </button>
              </div>
              <div className="form-group col-md-2 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularDniM}
                >
                  Mutual
                </button>
              </div>
              <div className="form-group col-md-2 mt-4">
                <button
                  className="btn btn-block btn-secondary"
                  onClick={buscarTitularDniSM}
                >
                  San Miguel
                </button>
              </div>
              {errores && (
                <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                  {errores}
                </div>
              )}
            </div>
          </div>
        </form>

        <hr className="mt-4 mb-4" />

        <div className="">
          <div className="border border-dark p-4">
            <h4>
              <u>Buscar por Apellido y Nombre</u>
            </h4>

            <div className="row mt-4 mb-4 d-flex justify-content-center">
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  data-toggle="modal"
                  data-target="#listSocio"
                  onClick={() => listSocios()}
                >
                  Werchow
                </button>
              </div>
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  data-toggle="modal"
                  data-target="#listSocio"
                  onClick={() => listSociosM()}
                >
                  Mutual
                </button>
              </div>
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-secondary"
                  data-toggle="modal"
                  data-target="#listSocio"
                  onClick={() => listSociosSM()}
                >
                  San Miguel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ListadoSocios
        listado={listado}
        Seleccionar={Seleccionar}
        SeleccionarM={SeleccionarM}
        SeleccionarSM={SeleccionarSM}
      />
    </div>
  );
};

export default BuscarSocio;
