import React from "react";

const BuscarUsuario = ({ erroruser, userRef, buscarUserName }) => {
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-info text-white">
              <h2 className="mb-0">
                <i className="fa fa-search me-2"></i>
                Buscar Usuario
              </h2>
            </div>
            <div className="card-body">
              <div className="row g-3 align-items-end">
                <div className="col-md-8">
                  <label className="form-label fw-bold">Nombre de Usuario</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Ingrese nombre de usuario"
                    name="usuario"
                    ref={userRef}
                  />
                  {erroruser && (
                    <div className="alert alert-danger mt-2">
                      <i className="fa fa-exclamation-triangle me-2"></i>
                      {erroruser}
                    </div>
                  )}
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-primary w-100"
                    onClick={buscarUserName}
                  >
                    <i className="fa fa-search me-1"></i>
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscarUsuario;
