import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarPrestadores = ({ listado }) => {
  const dataSet1 = listado;

  let filename = `Listado de Prestadores - ${moment().format("DD/MM/YYYY")}.`;

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const tableHTML = generatePrintableTable();

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Listado de Prestadores</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #dee2e6; padding: 8px; text-align: left; }
            th { background-color: #f8f9fa; font-weight: bold; }
            .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #6c757d; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>Listado de Prestadores</h2>
            <p>Fecha de generación: ${moment().format("DD/MM/YYYY HH:mm")}</p>
          </div>
          ${tableHTML}
          <div class="footer">
            <p>Total de prestadores: ${listado.length}</p>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  const generatePrintableTable = () => {
    return `
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Sucursal</th>
            <th>Fecha Alta</th>
            <th>Nombre</th>
            <th>Promoción</th>
            <th>Promo 1</th>
            <th>Promo 2</th>
            <th>Coseguro</th>
            <th>Honorario</th>
          </tr>
        </thead>
        <tbody>
          ${listado.map(item => `
            <tr>
              <td>${item.SUC}</td>
              <td>${moment(item.ALTA).format("DD/MM/YYYY")}</td>
              <td>${item.NOMBRE}</td>
              <td>${item.PROMO}</td>
              <td>${item.PROMO1}</td>
              <td>${item.PROMO2}</td>
              <td>${item.CON_PAGA}</td>
              <td>${item.LIQUIDACION}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  };

  return (
    <div className="btn-group" role="group">
      <ExcelFile
        element={
          <button className="btn btn-success" title="Exportar a Excel">
            <i className="fa fa-file-excel me-1"></i>
            Excel
          </button>
        }
        filename={filename}
      >
        <ExcelSheet data={dataSet1} name="Prestadores">
          <ExcelColumn label="Sucursal" value="SUC" />
          <ExcelColumn
            label="Fecha Alta"
            value={(row) => `${moment(row.ALTA).format("DD/MM/YYYY")}`}
          />
          <ExcelColumn label="Nombre" value="NOMBRE" />
          <ExcelColumn label="Promocion" value="PROMO" />
          <ExcelColumn label="Promo 1" value="PROMO1" />
          <ExcelColumn label="Promo 2" value="PROMO2" />
          <ExcelColumn label="Coseguro" value="CON_PAGA" />
          <ExcelColumn label="Honorario" value="LIQUIDACION" />
        </ExcelSheet>
      </ExcelFile>

      <button
        className="btn btn-secondary"
        onClick={handlePrint}
        title="Imprimir listado"
      >
        <i className="fa fa-print me-1"></i>
        Imprimir
      </button>
    </div>
  );
};

export default ExportarPrestadores;
