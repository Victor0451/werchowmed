import React from "react";
import Adimn from "./Adimn";

import Opciones from "./Opciones";

const AuthLinks = ({ userData, msj, events }) => {
  return (
    <>
      <div className=" d-flex justify-content-start">
        <Adimn userData={userData} />
      </div>
      <div className=" d-flex justify-content-end">
        <Opciones userData={userData} msj={msj} events={events} />
      </div>
    </>
  );
};

export default AuthLinks;
