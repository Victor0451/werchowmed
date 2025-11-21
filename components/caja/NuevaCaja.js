import React from "react";
import ListadoOrdenesSinRendir from "./ListadoOrdenesSinRendir";
import Spinner from "../layout/Spinner";

const NuevaCaja = ({ listado, traerOrdenesPorDia, flag }) => {
  return (
    <div className="row g-4 mb-4">
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">
              <i className="fa fa-plus-circle me-2"></i>
              Generar Nueva Caja - Consultorios Otero
            </h4>
          </div>
          <div className="card-body">
            {flag === true ? (
              <div className="alert alert-warning border-0 shadow-sm mb-4">
                <i className="fa fa-exclamation-triangle me-2"></i>
                <strong>Atención:</strong> Ya se generó una caja con la fecha de hoy
              </div>
            ) : null}

            {!listado ? (
              <div className="text-center py-5">
                <Spinner />
                <p className="text-muted mt-3">Cargando órdenes sin rendir...</p>
              </div>
            ) : (
              <>
                <h5 className="text-secondary mb-3">
                  <i className="fa fa-list me-2"></i>
                  Órdenes Sin Rendir
                </h5>

                <ListadoOrdenesSinRendir
                  listado={listado}
                  traerOrdenesPorDia={traerOrdenesPorDia}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevaCaja;
