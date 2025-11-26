import React from "react";
import { ip } from "../../config/config";

const Adimn = ({ userData }) => {
  return (
    <ul className="navbar-nav me-lg-auto">
      <li className="nav-item">
        <a href="/servicios/emision" className="nav-link">
          <i className="fa fa-plus-circle me-1"></i>
          <span className="d-lg-inline d-none">Emisión de Órdenes</span>
          <span className="d-lg-none">Emisión</span>
        </a>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
        >
          <i className="fa fa-list me-1"></i>
          <span className="d-lg-inline d-none">Listados</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/servicios/listadoordenes">
              <i className="fa fa-file-text me-2"></i> Órdenes
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/servicios/listadoprestadores">
              <i className="fa fa-users me-2"></i> Prestadores
            </a>
          </li>
          {userData.perfil === 1 || userData.perfil === 3 ? (
            <>
              <li>
                <a className="dropdown-item" href="/servicios/control">
                  <i className="fa fa-check-circle me-2"></i> Control
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/servicios/listadocajas">
                  <i className="fa fa-archive me-2"></i> Cajas
                </a>
              </li>
            </>
          ) : null}
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
        >
          <i className="fa fa-cogs me-1"></i>
          <span className="d-lg-inline d-none">Gestión</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/servicios/gestionturnos">
              <i className="fa fa-clock me-2"></i> Turnos
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/servicios/seguimientoplan">
              <i className="fa fa-tooth me-2"></i> Plan Ortodoncia
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/servicios/ausencias">
              <i className="fa fa-calendar-times me-2"></i> Ausencias
            </a>
          </li>
        </ul>
      </li>

      <li className="nav-item d-lg-block d-none">
        <a href="/servicios/caja" className="nav-link">
          <i className="fa fa-usd me-1" aria-hidden="true"></i>
          Generar Caja
        </a>
      </li>

      <li className="nav-item d-lg-block d-none">
        <a href="/calendario/calendario" className="nav-link">
          <i className="fa fa-tasks me-1"></i> Registrar Tareas
        </a>
      </li>

      {userData.perfil === 1 || userData.perfil === 3 ? (
        <li className="nav-item d-lg-block d-none">
          <a href="/servicios/administracion" className="nav-link">
            <i className="fa fa-cogs me-1"></i> Administración
          </a>
        </li>
      ) : null}

      <li className="nav-item dropdown d-lg-none">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
        >
          <i className="fa fa-ellipsis-h me-1"></i> Más
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/servicios/caja">
              <i className="fa fa-money-bill me-2"></i> Generar Caja
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/calendario/calendario">
              <i className="fa fa-tasks me-2"></i> Registrar Tareas
            </a>
          </li>
          {userData.perfil === 1 || userData.perfil === 3 ? (
            <li>
              <a className="dropdown-item" href="/servicios/administracion">
                <i className="fa fa-user-shield me-2"></i> Administración
              </a>
            </li>
          ) : null}
        </ul>
      </li>
    </ul>
  );
};

export default Adimn;
