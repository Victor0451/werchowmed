import React from "react";

const LoginUsuario = ({
  iniciarSesion,
  usuarioRef,
  contrasenaRef,
  errores,
  alertas,
}) => {
  return (
    <div className="container border border-dark mt-4  p-5 col-md-4 list">
      <h1 className="mb-4">
        <u>Login</u>
      </h1>
      <div className="row  ">
        <div className="form-group col-md-12">
          <label>Usuario</label>
          <input
            type="text"
            className="form-control"
            placeholder="Usuario"
            name="usuario"
            ref={usuarioRef}
          />
        </div>

        <div className="form-group col-md-12">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contrasena"
            name="contrasena"
            ref={contrasenaRef}
          />
        </div>

        <div className="col-md-12">
          <button
            onClick={iniciarSesion}
            className="btn btn-primary btn-block mt-4"
          >
            Ingresar
          </button>

          {errores && (
            <div className="mt-4 form-group text-center alert alert-danger border border-dark text-center text-uppercase">
              {errores}
            </div>
          )}

          {alertas && (
            <div className="mt-4 form-group text-center alert alert-info border border-dark text-center text-uppercase">
              {alertas}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default LoginUsuario;
