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
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Detalles del Plan
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-4">
            <DetallePlanSocio
              planSel={planSel}
              planVisit={planVisit}
              checkPago={checkPago}
              pagoRef={pagoRef}
              datosVisita={datosVisita}
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPlanSeleccionado;
