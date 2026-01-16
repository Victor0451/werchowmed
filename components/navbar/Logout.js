import React from "react";
import jsCookies from "js-cookie";

const Logout = () => {
  const logout = () => {
    jsCookies.remove("token");
    jsCookies.remove("usuario");
    jsCookies.remove("sucur");
  };
  return (
    <>
      <a className="dropdown-item text-dark" onClick={logout} href="/">
        <i className="fa fa-sign-out-alt me-2"></i> Cerrar Sesión
      </a>
    </>
  );
};

export default Logout;
