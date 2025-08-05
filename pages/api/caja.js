import moment from "moment";
import { Werchow, SGI, Camp, Serv } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "operadores") {
      const operadores = await SGI.operador.findMany({
        where: {
          estado: true,
        },
      });
      res.status(200).json(operadores);
    } else if (req.query.f && req.query.f === "ordenes sin rendir") {
      const ordenesSinRendir = await Serv.$queryRaw`
         
         SELECT 
                SUC,
                FECHA, 
                COUNT(ORDEN) "CANTIDAD"  
         FROM USOS
         WHERE RENDIDO = 0
         AND ANULADO in (NULL, 0)
         AND SUC = ${req.query.suc}
         AND OPERADOR = ${req.query.user}
         GROUP BY SUC, FECHA
         ORDER BY FECHA DESC
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
         
            SERVICIO as "DETALLE", 
            COUNT(ORDEN) "CANTIDAD",
            SUM(IMPORTE)  "IMPORTE",
            "53"  as "CODIGO",  
            "0201020200"  as "CUENTA",
            "I" as "MOVIM",
            "0" as "TIPO", 
            "0" as "SERIE",
            "0" as "NUMERO",
            "0" as "CUIT"                    

        FROM USOS
        WHERE RENDIDO = 0
        AND FECHA = ${req.query.fecha}
        AND ANULADO in (NULL, 0)
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
                AND OPERADOR = ${req.query.operador}
                ) 'INGRESOS',
                
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C2
                WHERE C.FECHA = C2.FECHA
                AND MOVIM = 'E'
                AND DETALLE != 'VALORES A DEPOSITAR'
                AND OPERADOR = ${req.query.operador}
                ) 'EGRESOS',
                
                (
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C1
                WHERE C.FECHA = C1.FECHA
                AND MOVIM = 'I'
                AND DETALLE != 'SALDO INICIAL'
                AND OPERADOR = ${req.query.operador}
                )
                -
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C2
                WHERE C.FECHA = C2.FECHA
                AND MOVIM = 'E'
                AND DETALLE != 'VALORES A DEPOSITAR'     
                AND OPERADOR = ${req.query.operador}
                )
                )'VAL_DEPOSIT'
        
        FROM CAJA AS C
        WHERE OPERADOR = ${req.query.operador}
        
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
                CONCAT(DETALLE,"   -->   ", TIPO,"  N°:  " ,NUMERO ) as 'DETALLE',
                IMPORTE
                
            FROM CAJA 
            WHERE MOVIM = 'E'
            AND DETALLE != 'VALORES A DEPOSITAR'
            AND FECHA = ${new Date(req.query.fecha)}

            
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
            ANULADO in (NULL, 0)
      `;
      res
        .status(200)
        .json(
          JSON.stringify(checkCaja, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer cuentas") {
      const mae = await Serv.$queryRaw`
          SELECT 
               *                               
          FROM subcta
          WHERE MOVIM in (${req.query.movim}, 'A')
`;

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer tipo facturas") {
      const mae = await SGI.$queryRaw`
          SELECT 
               *                               
          FROM tipo_facturas          
`;

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
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
         AND OPERADOR = ${req.body.operador}   
         AND SUC = ${req.body.suc}   
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
