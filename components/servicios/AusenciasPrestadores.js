import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";
import ExpotarTurnos from "./ExportarTurnos";
import ExportarAusencias from "./ExportarAusencias";
import ListadoAusencias from "./ListadoAusencias";

const AusenciasPrestadores = ({ listado }) => {
  return (
    <div className=" col-md-12 mt-4 ">
      <div className="collapse width" id="collapseAusenciasPrestadores">
        <div className="card card-body">
          <div className="border border-dark p-2">
            {listado.length === 0 ? (
              <div className="col-md-12 mt-4 border border-dark text-center text-uppercase alert alert-info">
                No hay turnos registrados para hoy.
              </div>
            ) : (
              <div className="">
                <div className="mt-4 mb-4 d-flex justify-content-end">
                  <ExportarAusencias listado={listado} />
                </div>

                <ListadoAusencias listado={listado} f={"home"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AusenciasPrestadores;
