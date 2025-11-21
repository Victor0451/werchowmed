import React from "react";

const RedirectToLogin = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-body text-center p-5">
              <div className="mb-4">
                <i className="fa fa-lock fa-4x text-danger mb-3"></i>
                <h2 className="card-title text-danger fw-bold">
                  Acceso Denegado
                </h2>
                <p className="card-text text-muted fs-5">
                  No estás logueado. Debes iniciar sesión para acceder al sistema.
                </p>
              </div>

              <div className="mb-4">
                <img
                  src="/img/logerr.jpg"
                  className="img-fluid rounded shadow-sm"
                  alt="Acceso restringido"
                  style={{ maxWidth: '300px' }}
                />
              </div>

              <div>
                <a href="/" className="btn btn-primary btn-lg px-4">
                  <i className="fa fa-sign-in-alt me-2"></i>
                  Iniciar Sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectToLogin;
