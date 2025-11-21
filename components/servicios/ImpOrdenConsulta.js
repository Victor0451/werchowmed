import moment from "moment";
import React from "react";
import Spinner from "../layout/Spinner";

const ImpOrdenConsulta = ({
  socio,
  orden,
  medico,
  practicas,
  farmacia,
  farmaNom,
  enfermeria,
  calcularTotalPracticas,
  flag,
}) => {
  if (!socio || !orden) return <Spinner />;

  return (
    <div className="border border-2 border-primary rounded p-2 bg-white" style={{maxWidth: '1000px', margin: '0 auto', fontSize: '0.75rem', lineHeight: '1.2'}}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start mb-2">
        <div>
          {flag && flag === "E" ? (
            <h4 className="text-primary mb-0 fw-bold">Subsidio Enfermería</h4>
          ) : flag && flag === "F" ? (
            <h4 className="text-primary mb-0 fw-bold">Subsidio Farmacia</h4>
          ) : (
            <h4 className="text-primary mb-0 fw-bold">Subsidio Médico</h4>
          )}
        </div>
        <div>
          {orden.EMPRESA === "SM" ? (
            <img src="/img/logoSM.png" style={{width: '80px', height: '60px'}} alt="Logo SM" />
          ) : (
            <img src="/img/logo.png" style={{width: '80px', height: '60px'}} alt="Logo Werchow" />
          )}
        </div>
      </div>

      {/* Beneficiary and Order Info */}
      <div className="row g-1 mb-2">
        <div className="col-md-8">
          <div className="bg-light p-1 rounded">
            <div><strong>Beneficiario:</strong> {socio.APELLIDOS}, {socio.NOMBRES}</div>
            <div><strong>N° Socio:</strong> {socio.CONTRATO} | <strong>Edad:</strong> {moment().diff(socio.NACIMIENTO, "years")} años</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-light p-1 rounded">
            <div><strong>Fecha:</strong> {moment(orden.FECHA).utcOffset("+0300").format("DD/MM/YYYY")}</div>
            <div><strong>N° Orden:</strong> {orden.ORDEN} | <strong>Arancel: $</strong>
              {practicas.length > 0 ? calcularTotalPracticas(practicas) :
               enfermeria.length > 0 ? enfermeria[0].IMPORTE : orden.IMPORTE}
            </div>
          </div>
        </div>
      </div>

      {/* Service-specific sections */}
      {flag && flag === "F" ? (
        <div className="mb-1">
          <div className="bg-light p-1 rounded">
            <strong>Farmacia:</strong> {farmaNom.length > 0 ? farmaNom[0].NOMBRE : ''} |
            <strong> Descuento:</strong> {farmacia.length > 0 ? `${farmacia[0].MODO} - Hasta 2 medicamentos` : ''}
          </div>
        </div>
      ) : flag && flag === "E" ? (
        <div className="mb-1">
          <div className="bg-light p-1 rounded">
            <strong>Prestación:</strong> {enfermeria.length > 0 ? `${enfermeria[0].PRACTICA} - ${enfermeria[0].CANTIDAD} unidades` : ''} |
            <strong> Prestador:</strong> {enfermeria.length > 0 ? enfermeria[0].NOMBRE : ''}
          </div>
        </div>
      ) : (
        <>
          {/* Provider Information */}
          <div className="mb-1">
            {!medico ? (
              <div className="bg-light p-1 rounded small text-muted">Información del prestador no disponible</div>
            ) : (
              <div className="bg-light p-1 rounded small">
                <strong>Prestador:</strong> {medico.NOMBRE} | <strong>Dirección:</strong> {medico.DIRECCION} | <strong>Tel:</strong> {medico.TELEFONOS} | <strong>Horario:</strong> {medico.HORARIO1}-{medico.HORARIO2}
              </div>
            )}
          </div>

          {/* Practices List */}
          {practicas.length > 0 && (
            <div className="mb-1">
              <div className="table-responsive">
                <table className="table table-sm table-bordered mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="p-1">#</th>
                      <th className="p-1">Código</th>
                      <th className="p-1">Descripción</th>
                      <th className="p-1">Importe</th>
                      <th className="p-1">Cant.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {practicas.map((p, index) => (
                      <tr key={index}>
                        <td className="p-1">{index + 1}</td>
                        <td className="p-1">{p.COD_PRAC}</td>
                        <td className="p-1">{p.DESCRIP}</td>
                        <td className="p-1">${p.IMPORTE}</td>
                        <td className="p-1">{p.CANT_PRA}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="table-info fw-bold">
                      <td colSpan="4" className="text-end p-1">Total:</td>
                      <td className="p-1">${calcularTotalPracticas(practicas)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {/* Dates and Validity */}
      <div className="mb-1">
        <div className="bg-light p-1 rounded small">
          <strong>Fecha de Atención:</strong> ____________________ |
          <strong>Fecha de Vencimiento:</strong> {moment(orden.FECHA)
            .utcOffset("+0300")
            .add(1, "M")
            .format("DD/MM/YYYY")}
        </div>
      </div>

      {/* Signatures */}
      <div className="border-top pt-1">
        <div className="row text-center small">
          <div className="col-4">
            <div className="border-bottom border-2 mt-3 mb-1" style={{height: '30px'}}></div>
            <div>Firma Afiliado</div>
          </div>
          <div className="col-4">
            <div className="border-bottom border-2 mt-3 mb-1" style={{height: '30px'}}></div>
            <div>Aclaración</div>
          </div>
          <div className="col-4">
            <div className="border-bottom border-2 mt-3 mb-1" style={{height: '30px'}}></div>
            <div>
              {flag && flag === "F" ? "Firma Farmacia" : "Firma Médico"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpOrdenConsulta;
