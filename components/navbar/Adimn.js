import React from "react";
import { ip } from "../../config/config";

const Adimn = ({ userData }) => {
  return (
    <ul className="navbar-nav">
      <li>
        <a href="/servicios/emision" className="nav-link dropdown-toggle">
          Emision de Ordenes
        </a>
      </li>
      <li>
        <a
          href="/servicios/listadoordenes"
          className="nav-link dropdown-toggle"
        >
          List. Ordenes
        </a>
      </li>
      <li>
        <a href="/servicios/gestionturnos" className="nav-link dropdown-toggle">
          Gestion Turnos
        </a>
      </li>
      <li>
        <a
          href="/servicios/seguimientoplan"
          className="nav-link dropdown-toggle"
        >
          Seg. Plan Ortodoncia
        </a>
      </li>
      {userData.perfil === 1 || userData.perfil === 3 ? (
        <>
          <li>
            <a href="/servicios/caja" className="nav-link dropdown-toggle">
              Gen. Caja Admin
            </a>
          </li>
          <li>
            <a href="/servicios/cajapato" className="nav-link dropdown-toggle">
              Gen. Caja
            </a>
          </li>
          <li>
            <a
              href="/servicios/administracion"
              className="nav-link dropdown-toggle"
            >
              Administracion
            </a>
          </li>
        </>
      ) : null}
    </ul>
  );
};

export default Adimn;
