import React from "react";
import Adimn from "./Adimn";

import Opciones from "./Opciones";

const AuthLinks = ({ userData, msj, events }) => {
  return (
    <div className="d-flex w-100 justify-content-end">
      <Adimn userData={userData} />
      <Opciones userData={userData} msj={msj} events={events} />
    </div>
  );
};

export default AuthLinks;
