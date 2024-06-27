import React from "react";

const FormEditPrestador = ({
  prestador,
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
    <div className="mt-4 border border-dark p-4">
      <h4>
        <strong>
          <u>Datos del Prestador</u>
        </strong>
      </h4>

      <div className="row mt-4">
        <div className="col-md-2">
          <label>Codigo</label>
          <input
            type="text"
            className="form-control"
            defaultValue={prestador.COD_PRES}
            readOnly
          />
        </div>

        {/* <div className="col-md-3 mt-4">
            <label>Sucursal: {prestador.LOCALIDAD}</label>
            <select className="custom-select" ref={sucRef}>
              <option value="no">Selecciona una opcion</option>
              <option value="S.S. DE JUJUY">Casa Central</option>
              <option value="OTERO">Otero</option>
              <option value="PALPALA">Palpala</option>
              <option value="PERICO">Perico</option>
              <option value="EL CARMEN">El Carmen</option>
              <option value="SAN PEDRO">San Pedro</option>
            </select>
          </div> */}

        {/* <div className="col-md-3">
            <label>Especialidad</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.LIS_ESPE}
              ref={especialidadRef}
              
            />
          </div> */}

        <div className="col-md-4">
          <label>Apellido y Nombre</label>
          <input
            type="text"
            className="form-control"
            defaultValue={prestador.NOMBRE}
            ref={nombreRef}
          />
        </div>

        <div className="col-md-6 ">
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
          <label>Matricula</label>
          <input
            type="text"
            className="form-control"
            defaultValue={prestador.MATRICULA}
            ref={matriculaRef}
          />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-5">
        <button className="btn btn-primary" onClick={updatePrestador}>
          Actualizar
        </button>
      </div>
    </div>
  );
};

export default FormEditPrestador;
