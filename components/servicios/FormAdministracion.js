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
}) => {
  console.log(prestador);
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
            <div className="col-md-4 alert alert-info  border border-dark text-center text-uppercase">
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
              defaultValue={presImp}
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
            />
          </div>

          <div className="col-md-3">
            <label>Especialidad</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.LIS_ESPE}
            />
          </div>

          <div className="col-md-3">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.NOMBRE}
            />
          </div>

          <div className="col-md-3">
            <label>Matricula</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.MATRICULA}
            />
          </div>

          <div className="col-md-3 mt-4">
            <label>Direccion</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.DIRECCION}
            />
          </div>

          <div className="col-md-3 mt-4">
            <label>Horario 1</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.HORARIO1}
            />
          </div>

          <div className="col-md-3 mt-4">
            <label>Horario 2</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.HORARIO2}
            />
          </div>

          <div className="col-md-1 mt-4">
            <label>Sucursal</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.SUCURSAL}
            />
          </div>
          <div className="col-md-2 mt-4">
            <label>Localidad</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.LOCALIDAD}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <button className="btn btn-primary">Actualizar</button>
        </div>
      </div>

      <div className="mt-4 border border-dark p-4">
        <h4>
          <strong>
            <u>Listado de Practicas</u>
          </strong>
        </h4>

        <div id="list" className="border border-dark mt-4 p-4">
          <ReactTable
            data={practicasPres}
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id] === filter.value
            }
            columns={[
              {
                Header: "Servicios Medicas",
                columns: [
                  {
                    Header: "Sucursal",
                    id: "SUC",
                    accessor: (d) => d.SUC,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["SUC"] }),
                    filterAll: true,
                  },

                  {
                    Header: "Fecha",
                    id: "FECHA",
                    accessor: (d) => d.FECHA,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                    filterAll: true,
                  },

                  {
                    Header: "Servicio",
                    id: "SERVICIO",
                    accessor: (d) => d.SERVICIO,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["SERVICIO"] }),
                    filterAll: true,
                  },

                  {
                    Header: "N° Orden",
                    id: "ORDEN",
                    accessor: (d) => d.ORDEN,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["ORDEN"] }),
                    filterAll: true,
                  },

                  {
                    Header: "Medico",
                    id: "NOMBRE",
                    accessor: (d) => d.NOMBRE,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["NOMBRE"] }),
                    filterAll: true,
                  },

                  {
                    Header: "Valor Consulta",
                    id: "VALOR",
                    accessor: (d) => d.VALOR,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["VALOR"] }),
                    filterAll: true,
                  },

                  {
                    Header: "Coseguro",
                    id: "COSEGURO",
                    accessor: (d) => d.COSEGURO,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["COSEGURO"] }),
                    filterAll: true,
                  },

                  {
                    Header: "Werchow",
                    id: "WERCHOW",
                    accessor: (d) => d.WERCHOW,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["WERCHOW"] }),
                    filterAll: true,
                  },
                ],
              },
            ]}
            defaultPageSize={15}
            className="-striped -highlight"
          />
        </div>
      </div>
    </div>
  );
};

export default FormAdministracion;
