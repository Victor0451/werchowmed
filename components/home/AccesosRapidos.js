import React from "react";

const AccesosRapidos = ({ usu }) => {
  if (!usu) return null;

  const accesos = [
    {
      titulo: "Emisión de Órdenes Médicas",
      icono: "fa-plus-circle",
      color: "primary",
      enlace: "/servicios/emision",
      boton: "Generar",
      descripcion: "Generar Órdenes de Enfermería, Farmacia, Consulta y Prácticas Médicas."
    },
    {
      titulo: "Listado Órdenes Emitidas",
      icono: "fa-list",
      color: "success",
      enlace: "/servicios/listadoordenes",
      boton: "Ver Listado",
      descripcion: "Listado de Órdenes Generadas"
    },
    {
      titulo: "Gestión Turnos Médicos",
      icono: "fa-clock",
      color: "info",
      enlace: "/servicios/gestionturnos",
      boton: "Gestionar",
      descripcion: "Gestionar turnos de prestadores médicos."
    },
    {
      titulo: "Seguimiento Planes Odontológicos",
      icono: "fa-tooth",
      color: "warning",
      enlace: "/servicios/seguimientoplan",
      boton: "Buscar",
      descripcion: "Gestión y seguimiento de planes Odontológicos."
    },
    {
      titulo: "Gestionar Ausencias",
      icono: "fa-calendar-times",
      color: "secondary",
      enlace: "/servicios/ausencias",
      boton: "Gestionar",
      descripcion: "Gestionar Ausencias (Vacaciones/Carpeta Médica)"
    },
    {
      titulo: "Generar Caja",
      icono: "fa-money-bill",
      color: "success",
      enlace: "/servicios/caja",
      boton: "Generar",
      descripcion: "Generar Caja Diaria"
    },
    {
      titulo: "Listado de Prestadores",
      icono: "fa-users",
      color: "primary",
      enlace: "/servicios/listadoprestadores",
      boton: "Ver Listado",
      descripcion: "Información de prestadores registrados"
    },
    {
      titulo: "Registro de Tareas",
      icono: "fa-tasks",
      color: "info",
      enlace: "/calendario/calendario",
      boton: "Registrar",
      descripcion: "Gestión de tareas diarias por parte del personal"
    }
  ];

  const accesosAdmin = [
    {
      titulo: "Listado de Control",
      icono: "fa-check-circle",
      color: "danger",
      enlace: "/servicios/control",
      boton: "Ver Listado",
      descripcion: "Generar Listados de Control"
    },
    {
      titulo: "Listado Cajas Generadas",
      icono: "fa-archive",
      color: "warning",
      enlace: "/servicios/listadocajas",
      boton: "Ver Listado",
      descripcion: "Listado de Cajas generadas"
    },
    {
      titulo: "Portal Prestador",
      icono: "fa-user-md",
      color: "dark",
      enlace: "/servicios/portalprestador",
      boton: "Ingresar",
      descripcion: "Portal virtual para que el prestador gestione sus órdenes médicas."
    }
  ];

  return (
    <div className="container-fluid p-4 bg-white">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="text-primary fw-bold text-center">
            <i className="fa fa-rocket me-2"></i>Accesos Directos
          </h2>
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        {accesos.map((acceso, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <div className={`card h-100 shadow-sm border-0 bg-${acceso.color} text-white`}>
              <div className="card-body text-center d-flex flex-column">
                <div className="mb-3">
                  <i className={`fa ${acceso.icono} fa-3x`}></i>
                </div>
                <h6 className="card-title fw-bold mb-3">{acceso.titulo}</h6>
                <p className="card-text flex-grow-1 small">{acceso.descripcion}</p>
                <a
                  href={acceso.enlace}
                  className="btn btn-light btn-sm mt-auto fw-bold"
                >
                  {acceso.boton}
                </a>
              </div>
            </div>
          </div>
        ))}

        {usu.perfil === 1 || usu.perfil === 3 ? (
          accesosAdmin.map((acceso, index) => (
            <div key={`admin-${index}`} className="col-lg-3 col-md-4 col-sm-6">
              <div className={`card h-100 shadow-sm border-0 bg-${acceso.color} text-white`}>
                <div className="card-body text-center d-flex flex-column">
                  <div className="mb-3">
                    <i className={`fa ${acceso.icono} fa-3x`}></i>
                  </div>
                  <h6 className="card-title fw-bold mb-3">{acceso.titulo}</h6>
                  <p className="card-text flex-grow-1 small">{acceso.descripcion}</p>
                  <a
                    href={acceso.enlace}
                    className="btn btn-light btn-sm mt-auto fw-bold"
                  >
                    {acceso.boton}
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default AccesosRapidos;
