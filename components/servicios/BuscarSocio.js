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
}) => {
  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary fw-bold mb-0">
          <i className="fa fa-file-medical me-2"></i>
          Emisión de {titulo}
        </h1>
        <div>
          {emp && emp === "W" ? (
            <img src="/img/logo.png" className="werchowlogo" alt="Werchow" />
          ) : emp && emp === "M" ? (
            <img src="/img/logom.jpg" className="mutuallogo" alt="Mutual" />
          ) : null}
        </div>
      </div>

      {/* Free Consultation Codes */}
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-info text-white">
          <h5 className="mb-0">
            <i className="fa fa-gift me-2"></i>
            Códigos de Consultas Gratuitas
          </h5>
        </div>
        <div className="card-body">
          <div className="row align-items-end">
            <div className="col-md-6">
              <label className="form-label fw-bold">Código de Consulta</label>
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Ingrese el código"
                ref={codNoSocioRef}
              />
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-info btn-lg w-100"
                onClick={consultarCodigo}
              >
                <i className="fa fa-plus-circle me-2"></i>
                Generar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Member Search */}
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">
            <i className="fa fa-search me-2"></i>
            Buscar Socio
          </h4>
        </div>
        <div className="card-body">
          {/* Search by Contract Number */}
          <div className="mb-4">
            <h5 className="text-primary mb-3">
              <i className="fa fa-id-card me-2"></i>
              Por Número de Socio
            </h5>
            <div className="row align-items-end">
              <div className="col-md-4">
                <label className="form-label fw-bold">Número de Ficha</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Ingrese ficha"
                  ref={contratoRef}
                />
              </div>
              <div className="col-md-8">
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-primary flex-fill"
                    onClick={(e) => {
                      e.preventDefault();
                      buscarTitular();
                    }}
                  >
                    <i className="fa fa-building me-1"></i>
                    Werchow
                  </button>
                  <button
                    className="btn btn-outline-success flex-fill"
                    onClick={(e) => {
                      e.preventDefault();
                      buscarTitularM();
                    }}
                  >
                    <i className="fa fa-users me-1"></i>
                    Mutual
                  </button>
                  <button
                    className="btn btn-outline-secondary flex-fill"
                    onClick={(e) => {
                      e.preventDefault();
                      buscarTitularSM();
                    }}
                  >
                    <i className="fa fa-shield me-1"></i>
                    San Miguel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* Search by DNI */}
          <div className="mb-4">
            <h5 className="text-primary mb-3">
              <i className="fa fa-address-card me-2"></i>
              Por Número de DNI
            </h5>
            <div className="row align-items-end">
              <div className="col-md-4">
                <label className="form-label fw-bold">DNI</label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Ingrese DNI"
                  ref={dniRef}
                />
              </div>
              <div className="col-md-8">
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-primary flex-fill"
                    onClick={buscarTitularDni}
                  >
                    <i className="fa fa-building me-1"></i>
                    Werchow
                  </button>
                  <button
                    className="btn btn-outline-success flex-fill"
                    onClick={buscarTitularDniM}
                  >
                    <i className="fa fa-users me-1"></i>
                    Mutual
                  </button>
                  <button
                    className="btn btn-outline-secondary flex-fill"
                    onClick={buscarTitularDniSM}
                  >
                    <i className="fa fa-shield me-1"></i>
                    San Miguel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* Search by Name */}
          <div className="mb-0">
            <h5 className="text-primary mb-3">
              <i className="fa fa-user-friends me-2"></i>
              Por Apellido y Nombre
            </h5>
            <div className="d-flex gap-3 justify-content-center">
              <button
                className="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#listSocio"
                onClick={() => listSocios()}
              >
                <i className="fa fa-building me-2"></i>
                Werchow
              </button>
              <button
                className="btn btn-success btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#listSocio"
                onClick={() => listSociosM()}
              >
                <i className="fa fa-users me-2"></i>
                Mutual
              </button>
              <button
                className="btn btn-secondary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#listSocio"
                onClick={() => listSociosSM()}
              >
                <i className="fa fa-shield me-2"></i>
                San Miguel
              </button>
            </div>
          </div>

          {/* Error Display */}
          {errores && (
            <div className="alert alert-danger mt-3 text-center">
              <i className="fa fa-exclamation-triangle me-2"></i>
              {errores}
            </div>
          )}
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
