import React from "react";
import ReactExport from "react-export-excel";
import moment from "moment-timezone";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportarPortal = ({ listado, dr }) => {
  const dataSet1 = listado;

  let filename = `Listado Ordenes DR/A: ${dr} - ${moment().format(
    "DD/MM/YYYY"
  )}`;

  return (
    <ExcelFile
      element={
        <button className="btn btn-success btn-block mt-4">
          Exportar Excel
        </button>
      }
      filename={filename}
    >
      <ExcelSheet data={dataSet1} name="PRACTICAS">
        <ExcelColumn
          label="FECHA"
          value={(row) =>
            `${moment(row.FECHA).utcOffset("+0300").format("DD/MM/YYYY")}`
          }
        />
        <ExcelColumn label="ORDEN" value="ORDEN" />
        <ExcelColumn label="CONTRATO" value="CONTRATO" />
        <ExcelColumn label="NRO_DOC" value="NRO_DOC" />
        <ExcelColumn label="TITULAR" value="tit" />
        <ExcelColumn label="ADHERENTE" value="adh" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportarPortal;
