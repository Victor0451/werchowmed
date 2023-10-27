import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../layout/Spinner";
import moment from "moment";

const ModalActPractica = ({ row, nuevoImportePrac, actValorPractica }) => {
  return (
    <div
      className="modal fade"
      id="ModalActPractica"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Actualizar Valor Practicas
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
            <div className="border border-dark p-4">
              <div className="row  ">
                <div className="col-md-12">
                  <div className="alert alert-info  text-center text-uppercase border border-dark">
                    En este modulo, puedes actualizar el valor de la practica
                    seleccionada.
                  </div>{" "}
                </div>
              </div>

              <div className="row  ">
                <div className="col-md-2">
                  <label>
                    <u>ID</u>
                  </label>

                  <input
                    className="form-control"
                    type="text"
                    readOnly
                    defaultValue={row.idpractica}
                  />
                </div>
                <div className="col-md-2">
                  <label>
                    <u>Codigo Sistema</u>
                  </label>

                  <input
                    className="form-control"
                    type="text"
                    readOnly
                    defaultValue={row.CODIGOS}
                  />
                </div>

                <div className="col-md-8">
                  <label>
                    <u>Practica</u>
                  </label>

                  <input
                    className="form-control"
                    type="text"
                    readOnly
                    defaultValue={row.DESCRIP}
                  />
                </div>

                <div className="col-md-3 mt-4">
                  <label>
                    <u>Importe</u>
                  </label>

                  <input
                    className="form-control"
                    type="text"
                    readOnly
                    defaultValue={row.IMPORTE}
                  />
                </div>

                <div className="col-md-3 mt-4">
                  <label>
                    <u>Nuevo Importe</u>
                  </label>

                  <input
                    className="form-control"
                    type="number"
                    ref={nuevoImportePrac}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={actValorPractica}
              data-dismiss="modal"
            >
              Actualizar
            </button>
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

export default ModalActPractica;
