import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarPrestadores = ({ listado }) => {
  const dataSet1 = listado;

  let filename = `Listado de Prestadores - ${moment().format("DD/MM/YYYY")}.`;

  return (
    <ExcelFile
      element={<button className="btn btn-success">Exportar Excel</button>}
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
  );
};

export default ExportarPrestadores;
