import React from "react";

const Restringed = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-danger">
            <div className="card-body text-center p-5">
              <div className="mb-4">
                <i className="fa fa-exclamation-triangle fa-4x text-danger mb-3"></i>
                <h1 className="card-title text-danger fw-bold">
                  Área Restringida
                </h1>
                <p className="card-text text-muted fs-5">
                  No tienes permiso para acceder a esta sección del sistema.
                </p>
              </div>

              <div className="mb-4">
                <img
                  src="/img/restringed.png"
                  className="img-fluid rounded shadow-sm"
                  alt="Acceso restringido"
                  style={{ maxWidth: '250px' }}
                />
              </div>

              <div>
                <a href="/home" className="btn btn-primary btn-lg px-4">
                  <i className="fa fa-home me-2"></i>
                  Volver al Inicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restringed;
