import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarAusencias = ({ listado }) => {
  const dataSet1 = listado;

  let filename = `Listado de Ausencias - ${moment().format("DD/MM/YYYY")}`;

  return (
    <ExcelFile
      element={<button className="btn btn-success">Exportar Excel</button>}
      filename={filename}
    >
      <ExcelSheet data={dataSet1} name="Listado de Ausencias">
        <ExcelColumn label="Codigo Prestador" value="cod_pres" />
        <ExcelColumn label="Prestador" value="prestador" />
        <ExcelColumn label="Motivo" value="motivo" />
        <ExcelColumn
          label="Desde"
          value={(row) => moment(row.desde).format("DD/MM/YYYY")}
        />
        <ExcelColumn
          label="Hasta"
          value={(row) => moment(row.hasta).format("DD/MM/YYYY")}
        />
        <ExcelColumn label="Observacion" value="observacion" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarAusencias;
