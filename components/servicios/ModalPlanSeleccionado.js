import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";
import DetallePlanSocio from "./DetallePlanSocio";

const ModalPlanSeleccionado = ({
  planSel,
  planVisit,
  checkPago,
  pagoRef,
  datosVisita,
}) => {
  return (
    <div
      className="modal fade"
      id="ModalPlanSeleccionado"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-info text-white">
            <h5 className="modal-title" id="exampleModalLabel">
              <i className="fa fa-tooth me-2"></i>
              Detalles del Plan Ortodoncia
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {planVisit ? (
              <DetallePlanSocio
                planSel={planSel}
                planVisit={planVisit}
                checkPago={checkPago}
                pagoRef={pagoRef}
                datosVisita={datosVisita}
              />
            ) : (
              <Spinner />
            )}
          </div>

          <div className="modal-footer bg-light">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="fa fa-times me-1"></i>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPlanSeleccionado;
