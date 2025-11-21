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
    <>
      <style jsx>{`
        @media print {
          @page {
            size: A4;
            margin: 3mm 1mm 3mm 1mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }

          /* Force column layout in print */
          .row {
            display: table !important;
            width: 100% !important;
            table-layout: fixed !important;
          }
          .col,
          .col-12,
          .col-md-6,
          .col-md-8,
          .col-md-4,
          .col-md-3,
          .col-4 {
            display: table-cell !important;
            float: none !important;
            vertical-align: top !important;
            padding: 0 !important;
            width: auto !important;
          }

          /* Maintain spacing in grid */
          .g-1 > * {
            padding: 0.25rem !important;
          }
          .g-2 > * {
            padding: 0.5rem !important;
          }

          /* Fix flexbox layouts for print */
          .d-flex {
            display: table !important;
          }
          .justify-content-between {
            width: 100% !important;
          }
          .justify-content-between > * {
            display: table-cell !important;
          }
          .align-items-center {
            vertical-align: middle !important;
          }
          .align-items-start {
            vertical-align: top !important;
          }

          /* Table layout fixes */
          .table-responsive {
            overflow: visible !important;
          }
          .table {
            margin-bottom: 0 !important;
            width: 100% !important;
          }
          .table th,
          .table td {
            padding: 0.25rem !important;
            border: 1px solid #dee2e6 !important;
          }

          /* Color preservation */
          .border-primary {
            border-color: #0d6efd !important;
          }
          .bg-light {
            background-color: #f8f9fa !important;
            -webkit-print-color-adjust: exact;
          }
          .text-primary {
            color: #0d6efd !important;
          }
          .text-success {
            color: #198754 !important;
          }
          .text-info {
            color: #0dcaf0 !important;
          }
          .text-warning {
            color: #ffc107 !important;
          }
        }
      `}</style>
      <div
        className="border border-2 border-primary rounded p-1 bg-white"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          fontSize: "0.7rem",
          lineHeight: "1.1",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start mb-1">
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
              <img
                src="/img/logoSM.png"
                style={{ width: "80px", height: "60px" }}
                alt="Logo SM"
              />
            ) : (
              <img
                src="/img/logo.png"
                style={{ width: "80px", height: "60px" }}
                alt="Logo Werchow"
              />
            )}
          </div>
        </div>

        {/* Beneficiary and Order Info */}
        <div className="row g-1 mb-1">
          <div className="col-md-8">
            <div className="bg-light px-2 py-1 rounded">
              <div>
                <strong>Beneficiario:</strong> {socio.APELLIDOS},{" "}
                {socio.NOMBRES}
              </div>
              <div>
                <strong>N° Socio:</strong> {socio.CONTRATO} |{" "}
                <strong>Edad:</strong>{" "}
                {moment().diff(socio.NACIMIENTO, "years")} años
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light px-2 py-1 rounded">
              <div>
                <strong>Fecha:</strong>{" "}
                {moment(orden.FECHA).utcOffset("+0300").format("DD/MM/YYYY")}
              </div>
              <div>
                <strong>N° Orden:</strong> {orden.ORDEN} |{" "}
                <strong>Arancel: $</strong>
                {practicas.length > 0
                  ? calcularTotalPracticas(practicas)
                  : enfermeria.length > 0
                  ? enfermeria[0].IMPORTE
                  : orden.IMPORTE}
              </div>
            </div>
          </div>
        </div>

        {/* Service-specific sections */}
        {flag && flag === "F" ? (
          <div className="mb-1">
            <div className="bg-light px-2 py-1 rounded">
              <strong>Farmacia:</strong>{" "}
              {farmaNom.length > 0 ? farmaNom[0].NOMBRE : ""} |
              <strong> Descuento:</strong>{" "}
              {farmacia.length > 0
                ? `${farmacia[0].MODO} - Hasta 2 medicamentos`
                : ""}
            </div>
          </div>
        ) : flag && flag === "E" ? (
          <div className="mb-1">
            <div className="bg-light px-2 py-1 rounded">
              <strong>Prestación:</strong>{" "}
              {enfermeria.length > 0
                ? `${enfermeria[0].PRACTICA} - ${enfermeria[0].CANTIDAD} unidades`
                : ""}{" "}
              |<strong> Prestador:</strong>{" "}
              {enfermeria.length > 0 ? enfermeria[0].NOMBRE : ""}
            </div>
          </div>
        ) : (
          <>
            {/* Provider Information */}
            <div className="mb-1">
              {!medico ? (
                <div className="bg-light p-1 rounded small text-muted">
                  Información del prestador no disponible
                </div>
              ) : (
                <div className="bg-light px-2 py-1 rounded">
                  <div className="row g-1">
                    <div className="col-12">
                      <div className="d-flex  mb-1">
                        <i className="fa fa-user-md text-primary me-2"></i>
                        <strong className="text-primary">Prestador:</strong>
                        <span className="ms-1">{medico.NOMBRE}</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex ">
                        <i className="fa fa-map-marker text-success me-2"></i>
                        <strong>Dirección:</strong>
                        <span className="ms-1">{medico.DIRECCION}</span>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex ">
                        <i className="fa fa-phone text-info me-2"></i>
                        
                        <strong>Tel:</strong>
                        <span className="ms-1">{medico.TELEFONOS}</span>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex ">
                       <i className="fa fa-clock-o text-warning me-2"></i>
                        <strong>Horario:</strong>
                        <span className="ms-1">
                          {medico.HORARIO1}-{medico.HORARIO2}
                        </span>
                      </div>
                    </div>
                  </div>
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
                        <th className="px-1 py-0">#</th>
                        <th className="px-1 py-0">Código</th>
                        <th className="px-1 py-0">Descripción</th>
                        <th className="px-1 py-0">Importe</th>
                        <th className="px-1 py-0">Cant.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {practicas.map((p, index) => (
                        <tr key={index}>
                          <td className="px-1 py-0">{index + 1}</td>
                          <td className="px-1 py-0">{p.COD_PRAC}</td>
                          <td className="px-1 py-0">{p.DESCRIP}</td>
                          <td className="px-1 py-0">${p.IMPORTE}</td>
                          <td className="px-1 py-0">{p.CANT_PRA}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="table-info fw-bold">
                        <td colSpan="4" className="text-end px-1 py-0">
                          Total:
                        </td>
                        <td className="px-1 py-0">
                          ${calcularTotalPracticas(practicas)}
                        </td>
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
            <strong>Fecha de Vencimiento:</strong>{" "}
            {moment(orden.FECHA)
              .utcOffset("+0300")
              .add(1, "M")
              .format("DD/MM/YYYY")}
          </div>
        </div>

        {/* Signatures */}
        <div className="border-top pt-1">
          <div className="row text-center small">
            <div className="col-4">
              <div
                className="border-bottom border-2 mt-2 mb-1"
                style={{ height: "25px" }}
              ></div>
              <div className="small">Firma Afiliado</div>
            </div>
            <div className="col-4">
              <div
                className="border-bottom border-2 mt-2 mb-1"
                style={{ height: "25px" }}
              ></div>
              <div className="small">Aclaración</div>
            </div>
            <div className="col-4">
              <div
                className="border-bottom border-2 mt-2 mb-1"
                style={{ height: "25px" }}
              ></div>
              <div className="small">
                {flag && flag === "F" ? "Firma Farmacia" : "Firma Médico"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImpOrdenConsulta;
