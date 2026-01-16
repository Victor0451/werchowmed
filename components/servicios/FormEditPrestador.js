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
    <div className="card shadow-sm">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">
          <i className="fa fa-edit me-2"></i>
          Editar Datos del Prestador
        </h5>
      </div>
      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-2">
            <label className="form-label fw-bold">Código</label>
            <input
              type="text"
              className="form-control bg-light"
              defaultValue={prestador.COD_PRES}
              readOnly
            />
          </div>

          <div className="col-md-5">
            <label className="form-label fw-bold">Apellido y Nombre</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.NOMBRE}
              ref={nombreRef}
              placeholder="Ingrese nombre completo"
            />
          </div>

          <div className="col-md-5">
            <label className="form-label fw-bold">Dirección</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.DIRECCION}
              ref={direccionRef}
              placeholder="Ingrese dirección"
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Horario 1</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.HORARIO1}
              ref={horario1Ref}
              placeholder="Ej: 08:00"
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Horario 2</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.HORARIO2}
              ref={horario2Ref}
              placeholder="Ej: 18:00"
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Matrícula</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prestador.MATRICULA}
              ref={matriculaRef}
              placeholder="Número de matrícula"
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Modalidad de Pago</label>
            <select className="form-select" defaultValue={prestador.MODALIDAD}>
              <option value="no">Seleccionar...</option>
              <option value="PAGA_EN_OFIC">En Oficina</option>
              <option value="PAGA_EN_PRES">Al Prestador</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Promoción</label>
            <select
              className="form-select"
              ref={promoEditRef}
              defaultValue={prestador.PROMO}
            >
              <option value="no">Seleccionar...</option>
              <option value={1}>Sí</option>
              <option value={0}>No</option>
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-success btn-lg" onClick={updatePrestador}>
            <i className="fa fa-save me-2"></i>
            Actualizar Prestador
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormEditPrestador;
