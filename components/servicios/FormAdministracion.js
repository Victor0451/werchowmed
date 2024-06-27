import ReactTable from "react-table";
import matchSorter from "match-sorter";
import React from "react";
import FormEditPrestador from "./FormEditPrestador";
import FormValPrestador from "./FormValPrestador";

const FormAdministracion = ({
  medicos,
  medicoRef,
  handleChange,
  updateConsulta,
  consultaRef,
  liquidacionRef,
  promo1Ref,
  promo2Ref,
  prestador,
  practicasPres,
  especialidadRef,
  nombreRef,
  matriculaRef,
  direccionRef,
  horario1Ref,
  horario2Ref,
  sucRef,
  updatePrestador,
  guardarRow,
}) => {
  return (
    <div className="container border border-dark p-4 mt-4 list">
      <h2>
        <strong>
          <u>Panel de Administracion</u>
        </strong>
      </h2>

      <div className="mt-4 border border-dark p-4">
        <h4>
          <strong>
            <u>Selecciona al Prestador</u>
          </strong>
        </h4>

        <div className="row mt-4">
          {medicos ? (
            <div className="col-md-3">
              <label>
                <u>Doctor</u>:
              </label>

              <select
                className="custom-select"
                ref={medicoRef}
                onChange={() => {
                  handleChange();
                }}
              >
                <option value="no">Selecciona una opcion</option>
                {medicos.map((m, index) => (
                  <option key={index} value={`${m.COD_PRES}-${m.CON_PAGA}`}>
                    {m.NOMBRE}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="col-md-4 mt-4 alert alert-warning  border border-dark text-center text-uppercase">
              No hay medicos registrados
            </div>
          )}

          <div className="col-md-9">
            <div className="col-md-12 mt-4 alert alert-info  border border-dark text-center text-uppercase">
              Selecciona un prestador del listado para gestionar sus valores,
              informacion personal y practicas. Para incorporar un nuevo
              prestador, haz click aqui{" "}
              <button className="btn btn-success mt-2">Nuevo Prestador</button>
            </div>
          </div>
        </div>
      </div>

      {prestador.length !== 0 ? (
        <>
          <FormValPrestador
            prestador={prestador}
            updateConsulta={updateConsulta}
            consultaRef={consultaRef}
            liquidacionRef={liquidacionRef}
            promo1Ref={promo1Ref}
            promo2Ref={promo2Ref}
          />

          <FormEditPrestador
            prestador={prestador}
            especialidadRef={especialidadRef}
            nombreRef={nombreRef}
            matriculaRef={matriculaRef}
            direccionRef={direccionRef}
            horario1Ref={horario1Ref}
            horario2Ref={horario2Ref}
            sucRef={sucRef}
            updatePrestador={updatePrestador}
          />

          <div className="mt-4 border border-dark p-4">
            <h4>
              <strong>
                <u>Listado de Practicas</u>
              </strong>
            </h4>

            {practicasPres.length === 0 ? (
              <div className="alert alert-info border border-dark mt-4 mb-4 text-center text-uppercase">
                El prestador seleccionado no posee practicas registradas.
              </div>
            ) : (
              <div id="list" className="border border-dark mt-4 p-4">
                <ReactTable
                  data={practicasPres}
                  filterable
                  defaultFilterMethod={(filter, row) =>
                    row[filter.id] === filter.value
                  }
                  columns={[
                    {
                      Header: "Listado de Practicas",
                      columns: [
                        {
                          Header: "Codigo",
                          id: "CODIGOS",
                          accessor: (d) => d.CODIGOS,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["CODIGOS"],
                            }),
                          filterAll: true,
                          width: 80,
                        },

                        {
                          Header: "Descripcion",
                          id: "DESCRIP",
                          accessor: (d) => d.DESCRIP,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["DESCRIP"],
                            }),
                          filterAll: true,
                          width: 600,
                        },

                        {
                          Header: "Importe",
                          id: "IMPORTE",
                          accessor: (d) => d.IMPORTE,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["IMPORTE"],
                            }),
                          filterAll: true,
                        },
                      ],
                    },
                    {
                      Header: "Acciones",
                      id: "acciones",
                      filterAll: true,

                      Cell: (row) => (
                        <div>
                          <button
                            className="btn btn-warning btn-sm"
                            data-toggle="modal"
                            data-target="#ModalActPractica"
                            onClick={() => {
                              guardarRow(row.original);
                            }}
                          >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                          </button>
                        </div>
                      ),
                    },
                  ]}
                  defaultPageSize={15}
                  className="-striped -highlight"
                />
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default FormAdministracion;
