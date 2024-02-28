import React from "react";

const AccesosRapidos = ({ usu }) => {
  if (!usu) return null;

  return (
    <>
      <div className="container p-4 border border-dark list mt-4">
        <h4>
          <u>Accesos Directos</u>
        </h4>
        <div className="mt-5 row d-flex justify-content-center">
          <div className="card col-md-3 text-dark bg-ligth border border-dark   mb-3 ">
            <div className="card-header">Emision de Ordenes Medicas</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/servicios/emision"
              >
                Generar
              </a>
              <p className="card-text mt-2">
                Generar Ordenes de Enfermeria, Farmacia, Consulta y Practicas
                Medicas.
              </p>
            </div>
          </div>{" "}
          <div className="card col-md-3 text-dark bg-ligth border border-dark ml-2  mb-3 ">
            <div className="card-header">Listado Ordenes Emitidas.</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/servicios/listadoordenes"
              >
                Ver Listado
              </a>
              <p className="card-text mt-2">Listado de Ordenes Generadas</p>
            </div>
          </div>
          <div className="card col-md-3 text-dark bg-ligth border border-dark  ml-2 mb-3 ">
            <div className="card-header">Gestion Turnos Medicos</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/servicios/gestionturnos"
              >
                Gestionar
              </a>
              <p className="card-text mt-2">
                Gestionar turnos de prestadores medicos. (OTERO)
              </p>
            </div>
          </div>{" "}
          <div className="card col-md-3 text-dark bg-ligth border border-dark ml-2  mb-3 ">
            <div className="card-header">Seguimiento Planes Odontologicos</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/servicios/seguimientoplan"
              >
                Buscar
              </a>
              <p className="card-text mt-2">
                Gestion y seguimiento de planes Odontologicos.
              </p>
            </div>
          </div>
          <div className="card col-md-3 text-dark bg-ligth border border-dark ml-2  mb-3 ">
            <div className="card-header">
              Gestionar Ausencia (Vacaciones/Carpeta Medica)
            </div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/servicios/ausencias"
              >
                Gestionar
              </a>
              <p className="card-text mt-2">Gestionar Ausencias</p>
            </div>
          </div>
          <div className="card col-md-3 text-dark bg-ligth border border-dark ml-2  mb-3 ">
            <div className="card-header">Generar Caja</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/servicios/cajapato"
              >
                Generar
              </a>
              <p className="card-text mt-2">Generar Caja Diaria</p>
            </div>
          </div>
          {usu.perfil === 1 || usu.perfil === 3 ? (
            <>
              <div className="card col-md-3 text-dark bg-ligth border border-dark ml-2  mb-3 ">
                <div className="card-header">Generar Caja Admin.</div>
                <div className="card-body">
                  <a
                    className="btn btn-primary btn-block "
                    href="/servicios/caja"
                  >
                    Generar
                  </a>
                  <p className="card-text mt-2">Generar Caja Diaria</p>
                </div>
              </div>
              <div className="card col-md-3 text-dark bg-ligth border border-dark ml-2  mb-3 ">
                <div className="card-header">Listado Cajas Generadas.</div>
                <div className="card-body">
                  <a
                    className="btn btn-primary btn-block "
                    href="/servicios/listadocajas"
                  >
                    Ver Listado
                  </a>
                  <p className="card-text mt-2">Listado de Cajas generadas</p>
                </div>
              </div>
              <div className="card col-md-3 text-dark bg-ligth border border-dark ml-2  mb-3 ">
                <div className="card-header">Portal Prestador</div>
                <div className="card-body">
                  <a
                    className="btn btn-primary btn-block "
                    href="/servicios/portalprestador"
                  >
                    Ingresar
                  </a>
                  <p className="card-text mt-2">
                    Portar virtual para que el prestador gestione sus ordenes
                    medicas.
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AccesosRapidos;
