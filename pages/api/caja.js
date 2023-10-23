import moment from "moment";
import { Werchow, SGI, Camp, Serv } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "ordenes sin rendir") {
      const ordenesSinRendir = await Serv.$queryRaw`
         
         SELECT 
                SUC,
                FECHA, 
                COUNT(ORDEN) "CANTIDAD"  
         FROM USOS
         WHERE RENDIDO = 0
         AND ANULADO IS NULL
         AND SUC = ${req.query.suc}
         AND OPERADOR = ${req.query.user}
         GROUP BY SUC, FECHA
     `;
      res
        .status(200)
        .json(
          JSON.stringify(ordenesSinRendir, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "ordenes por dia") {
      const ordenesPorDia = await Serv.$queryRaw`
         
         SELECT 
            SERVICIO, 
            COUNT(ORDEN) "CANTIDAD",
            SUM(IMPORTE)  "IMPORTE"
        FROM USOS
        WHERE RENDIDO = 0
        AND FECHA = ${req.query.fecha}
        AND ANULADO IS NULL
        AND SUC = ${req.query.suc}
        AND OPERADOR = ${req.query.user}
        GROUP BY SERVICIO
    `;
      res
        .status(200)
        .json(
          JSON.stringify(ordenesPorDia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "check caja") {
      const checkCaja = await Serv.$queryRaw`
           
           SELECT 
                FECHA                
            FROM CAJA 
            WHERE FECHA = ${req.query.fecha}
            AND OPERADOR = ${req.query.user}
      `;
      res
        .status(200)
        .json(
          JSON.stringify(checkCaja, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "listado cajas") {
      const checkCaja = await Serv.$queryRaw`
           
           SELECT 
                FECHA,
                OPERADOR,      
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C1
                WHERE C.FECHA = C1.FECHA
                AND MOVIM = 'I'
                AND DETALLE != 'SALDO INICIAL'
                ) 'INGRESOS',
                
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C2
                WHERE C.FECHA = C2.FECHA
                AND MOVIM = 'E'
                AND DETALLE != 'VALORES A DEPOSITAR'
                ) 'EGRESOS',
                
                (
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C1
                WHERE C.FECHA = C1.FECHA
                AND MOVIM = 'I'
                AND DETALLE != 'SALDO INICIAL'
                )
                -
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C2
                WHERE C.FECHA = C2.FECHA
                AND MOVIM = 'E'
                AND DETALLE != 'VALORES A DEPOSITAR'
                )
                )'VAL_DEPOSIT'
        
        FROM CAJA AS C
        
        GROUP BY FECHA, OPERADOR
        ORDER BY FECHA DESC
      `;
      res
        .status(200)
        .json(
          JSON.stringify(checkCaja, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer ingresos") {
      const checkCaja = await Serv.$queryRaw`
           
           SELECT 
                DETALLE,
                SUM(IMPORTE) "IMPORTE",
                COUNT(DETALLE) "CANTIDAD"
            FROM CAJA 
            WHERE MOVIM = 'I'
            AND DETALLE != 'SALDO INICIAL'
            AND FECHA = ${new Date(req.query.fecha)}

            GROUP BY DETALLE
      `;
      res
        .status(200)
        .json(
          JSON.stringify(checkCaja, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer egresos") {
      const checkCaja = await Serv.$queryRaw`
           
           SELECT 
                DETALLE,
                SUM(IMPORTE) "IMPORTE",
                COUNT(*) "CANTIDAD"
            FROM CAJA 
            WHERE MOVIM = 'E'
            AND DETALLE != 'VALORES A DEPOSITAR'
            AND FECHA = ${new Date(req.query.fecha)}

            GROUP BY DETALLE
      `;
      res
        .status(200)
        .json(
          JSON.stringify(checkCaja, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer listado de control") {
      const checkCaja = await Serv.$queryRaw`
           
          SELECT
              FECHA,
              ORDEN,
              CONTRATO,
              NRO_DOC,
              SERVICIO,
              IMPORTE,
              OPERADOR
          FROM
            USOS
          WHERE
            FEC_CAJA = ${new Date(req.query.fecha)}
          AND
            OPERADOR = ${req.query.operador}
          AND 
            ANULADO IS NULL
      `;
      res
        .status(200)
        .json(
          JSON.stringify(checkCaja, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg caja") {
      const regCaja = await Serv.CAJA.create({
        data: {
          SUCURSAL: req.body.SUCURSAL,
          PUESTO: req.body.PUESTO,
          CODIGO: parseInt(req.body.CODIGO),
          MOVIM: req.body.MOVIM,
          CUENTA: req.body.CUENTA,
          IMPORTE: parseFloat(req.body.IMPORTE),
          TIPO: req.body.TIPO,
          SERIE: parseInt(req.body.SERIE),
          NUMERO: parseInt(req.body.NUMERO),
          CUIT: req.body.CUIT,
          DETALLE: req.body.DETALLE,
          DET_AUX: req.body.DET_AUX,
          FECHA: new Date(req.body.FECHA),
          FEC_COMP: req.body.FEC_COMP,
          HORA: req.body.HORA,
          ORIGEN: req.body.ORIGEN,
          OPERADOR: req.body.OPERADOR,
          ASIENTO: parseInt(req.body.ASIENTO),
          EXENTO: req.body.EXENTO,
          CANT_AFIL: parseInt(req.body.CANT_AFIL),
          CAE: req.body.CAE,
          VTO_CAE: req.body.VTO_CAE,
        },
      });

      res.status(200).json(regCaja);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "puntear rendido") {
      const puntearUsosRendidos = await Serv.$queryRaw`
         
         UPDATE USOS
         SET 
            RENDIDO = 1,
            FECHA_CIERRE = ${moment().format("YYYY-MM-DD")}
         WHERE FECHA = ${req.body.fecha}        
   `;
      res
        .status(200)
        .json(
          JSON.stringify(puntearUsosRendidos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  }
}
