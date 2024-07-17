import React from "react";

const FormEditPrestador = ({
  prestador,
  nombreRef,
  matriculaRef,
  direccionRef,
  horario1Ref,
  horario2Ref,
  updatePrestador,
  promoEditRef,
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
        <div className="col-md-3 mt-4">
          <label>Modalidad De Pago: </label>
          <select className="custom-select" defaultValue={prestador.MODALIDAD}>
            <option value="no">Selecciona una opcion</option>
            <option value={"PAGA_EN_OFIC"}>En Oficina</option>
            <option value={"PAGA_EN_PRES"}>Al Prestador</option>
          </select>
        </div>

        <div className="col-md-3 mt-4">
          <label>Promocion: </label>
          <select
            className="custom-select"
            ref={promoEditRef}
            defaultValue={prestador.PROMO}
          >
            <option value="no">Selecciona una opcion</option>
            <option value={1}>Si</option>
            <option value={0}>No</option>
          </select>
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
