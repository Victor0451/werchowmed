import React from "react";

const Restringed = () => {
  return (
    <div className="container border border-dark p-4 list mt-4 ">
      <h1 className="text-center">
        <strong>AREA RESTRINGIDA</strong>
      </h1>

      <h3 className="mt-4 text-center">
        <strong>
          No tienes permiso para acceder a esta sección.{" "}
          <a href="/home" className="btn btn-primary">
            Volver Al Inicio
          </a>
        </strong>
      </h3>

      <div className="d-flex justify-content-center">
        <img
          src="/img/restringed.png"
          className="logerr mt-4 mb-4 border border-dark 
        "
        />
      </div>
    </div>
  );
};

export default Restringed;
