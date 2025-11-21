import React from "react";
import Logout from './Logout'

const Opciones = ({
  userData,
  msj,
  events
}) => {
  return (
    <ul className="navbar-nav ">
      <li className="nav-item dropdown ">
        <a
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          className="nav-link dropdown-toggle d-flex align-items-center"
        >
          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: '32px', height: '32px'}}>
            {userData.usuario ? userData.usuario.charAt(0).toUpperCase() : 'U'}
          </div>
          <span className="d-none d-md-inline">{userData.usuario}</span>

          {msj > 0 ? (<span className="badge bg-danger ms-1">{msj}</span>) : null}

          {events > 0 ? (<span className="badge bg-info ms-1">{events}</span>) : null}

        </a>
        <ul className="dropdown-menu">
          <li>
            <a
              href="/mensajeria/nuevo"
              role="button"
              className="dropdown-item text-dark"
            >
              <i className="fa fa-envelope me-2"></i>
              {msj > 0 ? (
                <>
                  Mail Interno <span className="badge bg-danger">{msj}</span>
                </>
              ) : (
                <>
                  Mail Interno
                </>
              )}
            </a>
          </li>
          <li><hr className="dropdown-divider" /></li>
          <li>
            <a
              href="/gestion/sucursales/tareas/calendario"
              className="dropdown-item text-dark"
            >
              <i className="fa fa-calendar me-2"></i>
              {events > 0 ?
                (
                  <>
                    Calendario <span className="badge bg-info">{events}</span>
                  </>
                ) : (
                  <>
                    Calendario
                  </>
                )
              }
            </a>
          </li>
          <li><hr className="dropdown-divider" /></li>
          <li>
            <Logout />
          </li>
        </ul>
      </li >


    </ul >
  )
}

export default Opciones
