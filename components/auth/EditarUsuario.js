import React from "react";
import Spinner from "../layout/Spinner";

const EditarUsuario = ({
  username,
  nombreRef,
  apellidoRef,
  usuarioRef,
  contrasenaRef,
  codigoRef,
  perfilRef,
  editUsuario,
}) => {
  if (!username) return <Spinner />;

  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h1 className="mb-0">
                <i className="fa fa-user-edit me-2"></i>
                Edición de Usuarios
              </h1>
            </div>
            <div className="card-body">
              <form onSubmit={editUsuario}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Usuario</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Usuario"
                      name="usuario"
                      defaultValue={username.usuario}
                      ref={usuarioRef}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Contraseña</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Contraseña"
                      name="contrasena"
                      defaultValue={username.contrasena}
                      ref={contrasenaRef}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Nombre</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Nombre"
                      name="nombre"
                      defaultValue={username.nombre}
                      ref={nombreRef}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Apellido</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Apellido"
                      name="apellido"
                      defaultValue={username.apellido}
                      ref={apellidoRef}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Perfil</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Perfil"
                      name="perfil"
                      defaultValue={username.perfil}
                      ref={perfilRef}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Código</label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Código"
                      name="codigo"
                      defaultValue={username.codigo}
                      ref={codigoRef}
                    />
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-success btn-lg px-5">
                      <i className="fa fa-save me-2"></i>
                      Actualizar Usuario
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarUsuario;
