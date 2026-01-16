import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "operadores") {
      const operadores = await sgi.query(
        `
        SELECT *
        FROM operador
        WHERE estado = true
      `
      );

      await sgi.end();

      res.status(200).json(operadores);
    } else if (req.query.f && req.query.f === "ordenes sin rendir") {
      const ordenesSinRendir = await serv.query(`
         
         SELECT 
                SUC,
                FECHA, 
                COUNT(ORDEN) "CANTIDAD"  
         FROM USOS
         WHERE RENDIDO = 0
         AND ANULADO in (NULL, 0)
         AND SUC = '${req.query.suc}'
         AND OPERADOR = '${req.query.user}'
         GROUP BY SUC, FECHA
         ORDER BY FECHA DESC
     `);

      await serv.end();
      res
        .status(200)
        .json(
          JSON.stringify(ordenesSinRendir, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "ordenes por dia") {
      const ordenesPorDia = await serv.query(`
         
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
        AND FECHA = '${moment(req.query.fecha).format("YYYY-MM-DD")}'
        AND ANULADO in (NULL, 0)
        AND SUC = '${req.query.suc}'
        AND OPERADOR = '${req.query.user}'
        GROUP BY SERVICIO
    `);

      await serv.end();
      res
        .status(200)
        .json(
          JSON.stringify(ordenesPorDia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "check caja") {
      const checkCaja = await serv.query(`
           
           SELECT 
                FECHA                
            FROM CAJA 
            WHERE FECHA = '${moment(req.query.fecha).format("YYYY-MM-DD")}'
            AND OPERADOR = '${req.query.user}'
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(checkCaja, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "listado cajas") {
      const checkCaja = await serv.query(`
           
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
                AND OPERADOR = '${req.query.operador}'
                ) 'INGRESOS',
                
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C2
                WHERE C.FECHA = C2.FECHA
                AND MOVIM = 'E'
                AND DETALLE != 'VALORES A DEPOSITAR'
                AND OPERADOR = '${req.query.operador}'
                ) 'EGRESOS',
                
                (
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C1
                WHERE C.FECHA = C1.FECHA
                AND MOVIM = 'I'
                AND DETALLE != 'SALDO INICIAL'
                AND OPERADOR = '${req.query.operador}'
                )
                -
                (
                SELECT 
                SUM(IMPORTE)
                FROM CAJA as C2
                WHERE C.FECHA = C2.FECHA
                AND MOVIM = 'E'
                AND DETALLE != 'VALORES A DEPOSITAR'     
                AND OPERADOR = '${req.query.operador}'
                )
                )'VAL_DEPOSIT'
        
        FROM CAJA AS C
        WHERE OPERADOR = '${req.query.operador}'
        
        GROUP BY FECHA, OPERADOR
        ORDER BY FECHA DESC
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(checkCaja, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer ingresos") {
      const checkCaja = await serv.query(`
           
           SELECT 
                DETALLE,
                SUM(IMPORTE) "IMPORTE",
                COUNT(DETALLE) "CANTIDAD"
            FROM CAJA 
            WHERE MOVIM = 'I'
            AND DETALLE != 'SALDO INICIAL'
            AND FECHA = '${moment(req.query.fecha).format("YYYY-MM-DD")}'
            AND OPERADOR = '${req.query.operador}'
            GROUP BY DETALLE
      `);

      await serv.end();
      res
        .status(200)
        .json(
          JSON.stringify(checkCaja, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer egresos") {
      const checkCaja = await serv.query(`
           
           SELECT 
                CONCAT(DETALLE,"   -->   ", TIPO,"  N°:  " ,NUMERO ) as 'DETALLE',
                IMPORTE
                
            FROM CAJA 
            WHERE MOVIM = 'E'
            AND DETALLE != 'VALORES A DEPOSITAR'
            AND FECHA = '${moment(req.query.fecha).format("YYYY-MM-DD")}'
            AND OPERADOR = '${req.query.operador}'
            
            
      `);

      await serv.end();
      res
        .status(200)
        .json(
          JSON.stringify(checkCaja, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer listado de control") {
      const checkCaja = await serv.query(`
           
          SELECT
              FECHA,
              ORDEN,
              CONTRATO,
              NRO_DOC,
              SERVICIO,
              IMPORTE,
              ANULADO,
              OPERADOR
          FROM
            USOS
          WHERE
            FEC_CAJA = '${moment(req.query.fecha).format("YYYY-MM-DD")}'
          AND
            OPERADOR = '${req.query.operador}'
          AND 
            ANULADO in (NULL, 0)
      `);

      await serv.end();
      res
        .status(200)
        .json(
          JSON.stringify(checkCaja, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer cuentas") {
      const mae = await serv.query(`
          SELECT 
               *                               
          FROM subcta
          WHERE MOVIM in ('${req.query.movim}', 'A')
`);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer tipo facturas") {
      const mae = await sgi.query(`
          SELECT 
               *                               
          FROM tipo_facturas          
`);

      await sgi.end();

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
      const regCaja = await serv.query(
        `
              INSERT INTO CAJA
              (
                SUCURSAL,
                PUESTO,
                CODIGO,
                MOVIM,
                CUENTA,
                IMPORTE,
                TIPO,
                SERIE,
                NUMERO,
                CUIT,
                DETALLE,
                DET_AUX,
                FECHA,
                FEC_COMP,
                HORA,
                ORIGEN,
                OPERADOR,
                ASIENTO,
                EXENTO,
                CANT_AFIL,
                CAE,
                VTO_CAE
              
              )

              VALUES
              (
                 '${req.body.SUCURSAL}',
                 '${req.body.PUESTO}',
                 ${parseInt(req.body.CODIGO)},
                 '${req.body.MOVIM}',
                 '${req.body.CUENTA}',
                 ${parseFloat(req.body.IMPORTE)},
                 '${req.body.TIPO}',
                 ${parseInt(req.body.SERIE)},
                 ${parseInt(req.body.NUMERO)},
                 '${req.body.CUIT}',
                 '${req.body.DETALLE}',
                 '${req.body.DET_AUX}',
                 '${moment(req.body.FECHA).format("YYYY-MM-DD")}',
                 '${req.body.FEC_COMP}',
                 '${req.body.HORA}',
                 '${req.body.ORIGEN}',
                 '${req.body.OPERADOR}',
                 ${parseInt(req.body.ASIENTO)},
                 '${req.body.EXENTO}',
                 ${parseInt(req.body.CANT_AFIL)},
                 '${req.body.CAE}',
                 '${req.body.VTO_CAE}'

              )
          
          `
      );

      await serv.end();

      res.status(200).json(regCaja);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "puntear rendido") {
      const puntearUsosRendidos = await serv.query(`
         
         UPDATE USOS
         SET 
            RENDIDO = 1,
            FECHA_CIERRE = '${moment().format("YYYY-MM-DD")}'
         WHERE FECHA = '${moment(req.body.fecha).format("YYYY-MM-DD")}'
         AND OPERADOR = '${req.body.operador}'   
         AND SUC = '${req.body.suc}'
           `);

      await serv.end();
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
