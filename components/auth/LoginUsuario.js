import React from "react";

const LoginUsuario = ({
  iniciarSesion,
  usuarioRef,
  contrasenaRef,
  SucursalRef,
  errores,
  alertas,
}) => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row justify-content-center w-100">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h1 className="mb-0">
                <i className="fa fa-sign-in-alt me-2"></i>
                Iniciar Sesión
              </h1>
            </div>
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold">Usuario</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Ingrese su usuario"
                      name="usuario"
                      ref={usuarioRef}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Contraseña</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Ingrese su contraseña"
                      name="contrasena"
                      ref={contrasenaRef}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">Sucursal</label>
                  <select
                    className="form-select form-select-lg"
                    ref={SucursalRef}
                  >
                    <option value="no">Seleccione sucursal...</option>
                    <option value="W">🏢 Casa Central</option>
                    <option value="O">🏥 Clínica Otero</option>
                    <option value="L">🏙️ Palpala</option>
                    <option value="R">🌄 Perico</option>
                    <option value="C">🌳 El Carmen</option>
                    <option value="M">🏞️ Monterrico</option>
                    <option value="P">🌵 San Pedro</option>
                  </select>
                </div>

                <div className="alert alert-info">
                  <i className="fa fa-info-circle me-2"></i>
                  <small>
                    Para una mejor gestión de la producción y rotaciones de
                    personal, selecciona la sucursal donde te encuentras
                    trabajando.
                  </small>
                </div>

                <div className="d-grid">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      iniciarSesion();
                    }}
                    className="btn btn-primary btn-lg"
                  >
                    <i className="fa fa-sign-in-alt me-2"></i>
                    Ingresar al Sistema
                  </button>
                </div>

                {errores && (
                  <div className="alert alert-danger mt-3">
                    <i className="fa fa-exclamation-triangle me-2"></i>
                    <strong>Error:</strong> {errores}
                  </div>
                )}

                {alertas && (
                  <div className="alert alert-warning mt-3">
                    <i className="fa fa-exclamation-circle me-2"></i>
                    {alertas}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginUsuario;
