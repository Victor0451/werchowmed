import React from "react";

const FormLoginPortal = ({ codPresRef, logPortal, errores, alertas }) => {
  return (
    <div className="container border border-dark mt-4 p-4 ">
      <div className="d-flex justify-content-center">
        <div className="col-md-4   p-4">
          <h1 className="mb-4">
            <u>Portal Prestador</u>
          </h1>
          <div className="row  ">
            <div className="form-group col-md-12">
              <label>Codigo Prestador</label>
              <input
                type="text"
                className="form-control"
                placeholder="Codigo Prestador"
                name="usuario"
                ref={codPresRef}
              />
            </div>

            <div className="col-md-12">
              <button
                className="btn btn-primary btn-block mt-4"
                onClick={logPortal}
              >
                Ingresar
              </button>

              {errores && (
                <div className="mt-4 form-group text-center alert alert-danger border border-dark text-center text-uppercase">
                  {errores}
                </div>
              )}

              {alertas && (
                <div className="mt-4 form-group text-center alert alert-info border border-dark text-center text-uppercase">
                  {alertas}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLoginPortal;
