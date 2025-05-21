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
        Cerrar Sesion
      </a>
    </>
  );
};

export default Logout;
