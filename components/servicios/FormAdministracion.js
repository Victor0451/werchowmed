import ReactTable from "react-table";
import matchSorter from "match-sorter";
import React from "react";

const FormAdministracion = ({
  medicos,
  medicoRef,
  handleChange,
  presImp,
  updateConsulta,
  consultaRef,
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
}) => {
  return (
    <div className="container border border-dark p-4 mt-4 list">
      <h2>
        <strong>
          <u>Administracion </u>
        </strong>
      </h2>

      <div className="mt-4 border border-dark p-4">
        <h4>
          <strong>
            <u>Modificar Valor de Consulta</u>
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
            <div className="col-md-4 mt-4 alert alert-info  border border-dark text-center text-uppercase">
              No hay medicos registrados
            </div>
          )}

          <div className="col-md-3">
            <label>
              <u>Importe de Consulta:</u>
            </label>

            <input
              type="number"
              className="form-control"
              value={presImp}
              readOnly
            />
          </div>

          <div className="col-md-3">
            <label>
              <u>Nuevo Importe:</u>
            </label>

            <input type="number" className="form-control" ref={consultaRef} />
          </div>

          <div className="col-md-3">
            <button className="btn btn-primary mt-4" onClick={updateConsulta}>
              Actualizar
            </button>
          </div>
        </div>
      </div>

      {prestador.length !== 0 ? (
        <>
          <div className="mt-4 border border-dark p-4">
            <h4>
              <strong>
                <u>Datos del Prestador</u>
              </strong>
            </h4>

            <div className="row mt-4">
              <div className="col-md-3">
                <label>Codigo</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={prestador.COD_PRES}
                  readOnly
                />
              </div>

              <div className="col-md-3">
                <label>Especialidad</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={prestador.LIS_ESPE}
                  ref={especialidadRef}
                />
              </div>

              <div className="col-md-3">
                <label>Apellido y Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={prestador.NOMBRE}
                  ref={nombreRef}
                />
              </div>

              <div className="col-md-3">
                <label>Matricula</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={prestador.MATRICULA}
                  ref={matriculaRef}
                />
              </div>

              <div className="col-md-4 mt-4">
                <label>Direccion</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={prestador.DIRECCION}
                  ref={direccionRef}
                />
              </div>

              <div className="col-md-4 mt-4">
                <label>Horario 1</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={prestador.HORARIO1}
                  ref={horario1Ref}
                />
              </div>

              <div className="col-md-4 mt-4">
                <label>Horario 2</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={prestador.HORARIO2}
                  ref={horario2Ref}
                />
              </div>

              <div className="col-md-3 mt-4">
                <label>Sucursal</label>
                <select
                  className="custom-select"
                  defaultValue={prestador.LOCALIDAD}
                  ref={sucRef}
                >
                  <option value="no">Selecciona una opcion</option>
                  <option value="S.S. DE JUJUY">Casa Central</option>
                  <option value="OTERO">Otero</option>
                  <option value="PALPALA">Palpala</option>
                  <option value="PERICO">Perico</option>
                  <option value="EL CARMEN">El Carmen</option>
                  <option value="SAN PEDRO">San Pedro</option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-5">
              <button className="btn btn-primary" onClick={updatePrestador}>
                Actualizar
              </button>
            </div>
          </div>

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
