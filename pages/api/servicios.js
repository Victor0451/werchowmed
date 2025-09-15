import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "contar fisio") {
      const contarFisio = await serv.query(`
            
      SELECT 
      
      CASE
          WHEN SUM(CANT_PRA) IS NULL
          THEN 0

          WHEN SUM(CANT_PRA) IS NOT NULL
          THEN SUM(CANT_PRA)

          END 'N'            
      
      FROM PRACTICA
      WHERE CONTRATO = ${parseInt(req.query.contrato)}
      AND PRAC_REA = 'FIS'

`);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(contarFisio, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "verificar consultas") {
      const verificarConsultas = await serv.query(`
              
        SELECT 
            COUNT(CONTRATO) 'orde'
        FROM USOS
        WHERE CONTRATO = ${parseInt(req.query.contrato)}
        AND SERVICIO = 'ORDE'
        AND YEAR(FECHA) = YEAR(CURDATE())
        AND MONTH(FECHA) = MONTH(CURDATE())
        AND ANULADO  = 0
  
  `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(verificarConsultas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "verificar practicas") {
      const verificarPracticas = await serv.query(`
                
        SELECT 
            COUNT(CONTRATO) 'orde'
        FROM USOS
        WHERE CONTRATO = ${parseInt(req.query.contrato)}
        AND SERVICIO NOT IN ('ORDE','FARM','ENF', 'PBIO')
        AND YEAR(FECHA) = YEAR(CURDATE())
        AND MONTH(FECHA) = MONTH(CURDATE())
        AND ANULADO  = 0
    
    `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(verificarPracticas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "verificar cbio") {
      const verificarPracticas = await serv.query(`
                
        SELECT 
            COUNT(CONTRATO) 'orde'
        FROM USOS
        WHERE CONTRATO = ${parseInt(req.query.contrato)}
        AND SERVICIO = 'PBIO'
        AND PRESTADO = 'C_BIO'
        AND YEAR(FECHA) = YEAR(CURDATE())
        AND MONTH(FECHA) = MONTH(CURDATE())
        AND ANULADO  = 0
    
    `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(verificarPracticas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer adh provi") {
      const adhProvi = await serv.query(
        `
            SELECT *
            FROM adherent_provi
            WHERE CONTRATO= ${parseInt(req.query.contrato)}

          `
      );

      await serv.end();

      res.status(200).json(adhProvi);
    } else if (req.query.f && req.query.f === "traer adh provi dni") {
      const adhProviDni = await serv.query(
        `
        SELECT *
        FROM adherent_provi
        WHERE NRO_DOC= ${parseInt(req.query.dni)}
      `
      );

      await serv.end();

      res.status(200).json(adhProviDni);
    } else if (req.query.f && req.query.f === "traer prac prest") {
      let impo = `PRECIO_${req.query.lugar}`;
      let codPres = `COD_PRES${req.query.lugar}`;
      let id = `${req.query.id}`;

      const pracPrest = await serv.query(
        `                
        SELECT CODIGOS, DESCRIP, ${impo} 'IMPORTE', idpractica
        FROM AUT_PRAC
        WHERE ${codPres} = '${id}'
       `
      );

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(pracPrest, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer farmacias") {
      const verificarPracticas = await serv.query(`
          SELECT
              *
          FROM FARMA
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(verificarPracticas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "usos farmacia") {
      const usosFarmacia = await serv.query(`
         SELECT 
            COUNT(CONTRATO) 'usos'
          FROM USOS
          WHERE CONTRATO = ${parseInt(req.query.contrato)}
          AND PRESTADO = '${req.query.prestado}'
          AND YEAR(FECHA) = YEAR(CURDATE())
          AND MONTH(FECHA) = MONTH(CURDATE())
          AND ANULADO in (NULL, 0)
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(usosFarmacia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer farma desc") {
      const usosFarmacia = await serv.query(`
        SELECT 
          *
        FROM FARMA
        WHERE CODIGO = '${req.query.prestado}'
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(usosFarmacia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer enfermeria") {
      const traerEnfermeria = await serv.query(`
         
          SELECT COD_PRES, NOMBRE
          FROM PRESTADO
          WHERE SUC = '${req.query.suc}'
          AND SUBSTR(LIS_ESPE,1,3) = 'ENF'    
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(traerEnfermeria, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer pract enfermeria") {
      const pracEnfer = await serv.query(`
         
            SELECT 
                *
            FROM PRACT_ENFER 
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(pracEnfer, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer practicas") {
      const pracEnfer = await serv.query(`
         
         SELECT *
         FROM PRACTICA
         WHERE NRO_ORDEN = '${req.query.orden}'
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(pracEnfer, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer nombre farmacia") {
      const pracEnfer = await serv.query(`
         
          SELECT *
          FROM FARMA
          WHERE CODIGO = '${req.query.farma}'
      `);
      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(pracEnfer, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer farmacia") {
      const pracEnfer = await serv.query(`
         
         SELECT *
         FROM FARMACIA
         WHERE NRO_ORDEN = '${req.query.orden}'
      `);
      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(pracEnfer, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer enfermeria orden") {
      const pracEnfer = await serv.query(`
         
          SELECT e.PRACTICA, a.NOMBRE, e.IMPORTE, e.CANTIDAD
          FROM ENFERMER as e
          INNER JOIN PRESTADO as a on a.COD_PRES = e.DESTINO          
          WHERE e.NRO_ORDEN = '${req.query.orden}'
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(pracEnfer, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "arancel enfe domicilio") {
      const calcArancel = await werchow.query(`
         
         SELECT
            CONTRATO
        FROM
            maestro
        WHERE
            CONTRATO = ${parseInt(req.query.contrato)}
        AND BARRIO REGEXP '25 de mayo|San martin|Belgrano|guemes|san cayetano|9 de julio|santa barbara|san ignacio|loyola' 
      `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(calcArancel, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer planes ortodoncia") {
      const planesOrto = await serv.query(`
         
         SELECT 
           *
         FROM planes_odontologicos        
         WHERE estado = 1 
         AND plan = 'ORTO'
         
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(planesOrto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer planes implante") {
      const planesImp = await serv.query(`
         
         SELECT 
           *
         FROM planes_odontologicos        
         WHERE estado = 1 
         AND plan = 'CONT'
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(planesImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer plan dni") {
      const planPorDNI = await serv.query(`
         
         SELECT 
           *
         FROM planes_socio
         WHERE dni = ${parseInt(req.query.dni)}
      `);
      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(planPorDNI, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer norden") {
      const nOrden = await serv.query(`         
         SELECT iduso
         FROM USOS
         ORDER BY iduso DESC
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(nOrden, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer uso") {
      const nOrden = await serv.query(`         
         SELECT *
         FROM USOS
         WHERE iduso = ${parseInt(req.query.iduso)}
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(nOrden, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer sucursales") {
      const traeSucursales = await serv.query(`         
          SELECT codigo, sucursal
          FROM sucursal 
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(traeSucursales, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer especialidades") {
      const traerEspecialidades = await serv.query(`         
             SELECT ESPECIAL, NOMBRE
             FROM ESPECIAL 
             ORDER BY NOMBRE 
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(traerEspecialidades, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer medicos por suc") {
      let suc = req.query.suc;
      let esp = req.query.esp;

      if (suc === "O") {
        const traerEspecialidades = await serv.query(`         
          SELECT COD_PRES, NOMBRE
          FROM PRESTADO
          WHERE OTERO = 1
          AND SUBSTR(LIS_ESPE,1,3) = '${esp}'
 `);

        await serv.end();

        res
          .status(200)
          .json(
            JSON.stringify(traerEspecialidades, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else {
        const traerEspecialidades = await serv.query(`         
           SELECT COD_PRES, NOMBRE
           FROM PRESTADO
           WHERE SUC = '${suc}' 
           AND SUBSTR(LIS_ESPE,1,3) = '${esp}'
 `);

        await serv.end();

        res
          .status(200)
          .json(
            JSON.stringify(traerEspecialidades, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (req.query.f && req.query.f === "listado prestadores") {
      const listadoPrestadores = await serv.query(`
         
          SELECT COD_PRES, NOMBRE, CON_PAGA, LOCALIDAD, SUC
          FROM PRESTADO
          WHERE SUC IS NOT NULL
          ORDER BY NOMBRE ASC
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(listadoPrestadores, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer detalle medico") {
      const detalleMedico = await serv.query(`
         
        SELECT 
            COD_PRES, 
            NOMBRE, 
            DIRECCION, 
            TELEFONOS, 
            HORARIO1, 
            HORARIO2,      
            SUBSTR(LIS_ESPE,1,3) "SERVICIO", 
            CON_PAGA,
            LIQUIDACION,
            LUGAR,
            OTERO,
            PROMO, 
            AUSENTE, 
            SUC,
            LOCALIDAD,
            PROMO1,
            PROMO2,
            LIS_ESPE,
            MODALIDAD
            
        FROM PRESTADO
        WHERE COD_PRES = '${req.query.prestado}'   
      `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(detalleMedico, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "codigo no socio") {
      const codNoSocio = await serv.query(
        `
              SELECT *
              FROM nosocios
              WHERE codigo= ${parseInt(req.query.codNoSoc)}
        `
      );

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(codNoSocio, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer no socio") {
      const codNoSocio = await serv.query(
        `
        SELECT *
        FROM nosocios
        WHERE dni= ${parseInt(req.query.dni)}
      `
      );

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(codNoSocio, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer promociones") {
      const traerPromociones = await serv.query(`
         
         SELECT * 
         FROM promociones
    `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(traerPromociones, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "listar ordenes") {
      if (
        parseInt(req.query.perfil) === 1 ||
        parseInt(req.query.perfil) === 3
      ) {
        const listadoOrdenes = await serv.query(`
         
         SELECT 
                iduso,
                FECHA, 
                ORDEN, 
                CONTRATO,
                NRO_DOC,
                SERVICIO,
                IMPORTE
            FROM USOS
            WHERE ANULADO in (NULL, 0) 
            ORDER BY iduso DESC
    `);

        await serv.end();

        res
          .status(200)
          .json(
            JSON.stringify(listadoOrdenes, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else {
        const listadoOrdenes = await serv.query(`
         
         SELECT 
                iduso,
                FECHA, 
                ORDEN, 
                CONTRATO,
                NRO_DOC,
                SERVICIO,
                IMPORTE
            FROM USOS
            WHERE ANULADO in (NULL, 0) 
            AND OPERADOR = '${req.query.usu}'
            ORDER BY iduso DESC
   `);

        await serv.end();

        res
          .status(200)
          .json(
            JSON.stringify(listadoOrdenes, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (req.query.f && req.query.f === "traer historial usos") {
      const usos = await serv.query(`
         
         SELECT
          u.CONTRATO,
          u.FECHA,
          u.HORA,
          u.NRO_DOC,
          p.NOMBRE,
          u.SERVICIO,
          u.IMPORTE,
          u.ANULADO,
          'WEB' AS SISTEMA
        FROM
          USOS AS u
        INNER JOIN PRESTADO AS p ON p.COD_PRES = u.PRESTADO
        WHERE
          u.CONTRATO = ${parseInt(req.query.contrato)}
        ORDER BY u.FECHA DESC
              `);

      const usosFa = await serv.query(`
         
         SELECT
          u.CONTRATO,
          u.FECHA,
          u.HORA,
          u.NRO_DOC,
          p.NOMBRE,
          u.SERVICIO,
          u.IMPORTE,
          u.ANULADO,
          'FOX' AS SISTEMA
        FROM
          USOSFA AS u
        INNER JOIN PRESTADO AS p ON p.COD_PRES = u.PRESTADO
        WHERE
          u.CONTRATO = ${parseInt(req.query.contrato)}
        ORDER BY u.FECHA DESC
`);

      await serv.end();

      let historial = usos.concat(usosFa);

      res
        .status(200)
        .json(
          JSON.stringify(historial, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "buscar plan") {
      const planOdonto = await serv.query(`
         
         SELECT 
           *
        FROM planes_socio
        WHERE contrato = ${parseInt(req.query.contrato)}     
          
         `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(planOdonto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "buscar plan dni") {
      const planOdonto = await serv.query(`
         
         SELECT 
           *
        FROM planes_socio
        WHERE dni = ${parseInt(req.query.dni)}       
         `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(planOdonto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer plan visitas") {
      const planOdonto = await serv.query(`
         
         SELECT 
           *
        FROM planes_visitas
        WHERE idplan = ${parseInt(req.query.id)}       
         `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(planOdonto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer plan orto") {
      const planOdonto = await serv.query(`
    
         SELECT 
           *
         FROM planes_socio
         WHERE idplansocio = ${parseInt(req.query.id)}
                  `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(planOdonto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "listado ausencias") {
      const listAusencias = await serv.query(`
    
         SELECT 
           *
         FROM ausencias

                  `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(listAusencias, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "listado ausencias vigentes") {
      const listAusencias = await serv.query(`
    
         SELECT 
           *
         FROM ausencias
         WHERE estado = 1

                  `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(listAusencias, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer ordenes dia prestador") {
      const nOrden = await serv.query(`         
         
         SELECT
          CONTRATO,
          FECHA,
          ORDEN,
          NRO_DOC,         
          (
            SELECT
              CONCAT(APELLIDOS, ', ', NOMBRES)
            FROM
              werchow.maestro AS m
            WHERE
              u.NRO_DOC = m.NRO_DOC
            LIMIT 1
          ) AS 'tit',
          (
            SELECT
              CONCAT(APELLIDOS, ', ', NOMBRES)
            FROM
              werchow.adherent AS m
            WHERE
              u.NRO_DOC = m.NRO_DOC
            LIMIT 1
          ) AS 'adh'
        FROM
          USOS AS u
        WHERE
          u.PRESTADO = '${req.query.codpres}'
        AND u.FECHA = '${moment(req.query.fecha).format("YYYY-MM-DD")}'


       
      `);
      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(nOrden, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "list info prestadores") {
      const listPrest = await serv.query(`         
         
         SELECT 
              (
              CASE
              WHEN SUC = 'W' and OTERO = 0
              THEN 'Casa Central'
              WHEN SUC = 'W' and OTERO = 1
              THEN 'Otero'
              WHEN SUC = 'L' 
              THEN 'Palpala'
              WHEN SUC = 'R' 
              THEN 'Perico'
              WHEN SUC = 'C' 
              THEN 'El Carmen'
              WHEN SUC = 'P' 
              THEN 'San Pedro'
              END
              )'SUC',
              NOMBRE,
              LIS_ESPE,
              ALTA,
              (
              CASE
              when PROMO = 1
              THEN 'SI'
              when PROMO = 0
              THEN 'NO'
              end
              )'PROMO',
              PROMO1,
              PROMO2,
              CON_PAGA,
              LIQUIDACION,
              COD_PRES

        FROM PRESTADO
        WHERE SUC is not null
        AND LIS_ESPE not in ('FAR-', 'ENF-','OPT-','ECO-', 'RAD-','RAD-ECO', 'RAD')

        ORDER BY NOMBRE

       
      `);
      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(listPrest, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "check nu prest") {
      const checkPrest = await serv.query(
        `
          SELECT * 
          FROM PRESTADO
          WHERE COD_PRES= '${req.query.codPres}'
        `
      );

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(checkPrest, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "listado por sucursal") {
      const usos = await serv.query(`
         
         SELECT
            (
              CASE
              WHEN u.SUC = 'W' 
              THEN 'Casa Central'
              WHEN u.SUC = 'O' 
              THEN 'Otero'
              WHEN u.SUC = 'L' 
              THEN 'Palpala'
              WHEN u.SUC = 'R' 
              THEN 'Perico'
              WHEN u.SUC = 'C' 
              THEN 'El Carmen'
              WHEN u.SUC = 'P' 
              THEN 'San Pedro'
              END
              )'SUC',
          u.ORDEN,
          u.CONTRATO,
          u.FECHA,
          u.HORA,
          u.NRO_DOC,
          u.PRESTADO,
          u.SERVICIO,
          u.IMPORTE,         
          u.OPERADOR,
          u.ANULADO           
        
        FROM
          USOS AS u
        
        WHERE
          u.SUC = '${req.query.sucur}'
        AND u.FECHA BETWEEN '${moment(req.query.desde).format(
          "YYYY-MM-DD"
        )}' AND '${moment(req.query.hasta).format("YYYY-MM-DD")}'
        
        ORDER BY u.HORA DESC
              `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(usos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "listado por prestador") {
      const usos = await serv.query(`
         
         SELECT
            (
              CASE
              WHEN u.SUC = 'W' 
              THEN 'Casa Central'
              WHEN u.SUC = 'O' 
              THEN 'Otero'
              WHEN u.SUC = 'L' 
              THEN 'Palpala'
              WHEN u.SUC = 'R' 
              THEN 'Perico'
              WHEN u.SUC = 'C' 
              THEN 'El Carmen'
              WHEN u.SUC = 'P' 
              THEN 'San Pedro'
              END
              )'SUC',
          u.ORDEN,
          u.CONTRATO,
          u.FECHA,
          u.HORA,
          u.NRO_DOC,
          p.NOMBRE,
          u.SERVICIO,
          u.IMPORTE,         
          u.OPERADOR,
          u.ANULADO           
        
        FROM
          USOS AS u
        INNER JOIN PRESTADO AS p ON p.COD_PRES = u.PRESTADO
        WHERE
          u.PRESTADO = '${req.query.medico}'
        AND u.FECHA BETWEEN '${moment(req.query.desde).format(
          "YYYY-MM-DD"
        )}' AND '${moment(req.query.hasta).format("YYYY-MM-DD")}'
        AND u.ANULADO = 0
        ORDER BY u.HORA DESC
              `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(usos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg adh provisorio") {
      const adhProvi = await serv.query(
        `
              INSERT INTO adherent_provi
              (
                CONTRATO,
                NRO_DOC,
                PLAN,
                APELLIDOS,
                NOMBRES,
                NACIMIENTO,
                EMPRESA,
                ESTADO
              )

              VALUES
              (
                 ${parseInt(req.body.CONTRATO)},
                 ${parseInt(req.body.NRO_DOC)},
                 '${req.body.PLAN}',
                 '${req.body.APELLIDOS}',
                 '${req.body.NOMBRES}',
                 '${moment(req.body.NACIMIENTO).format("YYYY-MM-DD")}',
                 '${req.body.EMPRESA}',
                 ${req.body.ESTADO}
              )
            `
      );

      await serv.end();
      res.status(200).json(adhProvi);
    } else if (req.body.f && req.body.f === "reg uso") {
      const regUso = await serv.query(
        `
        INSERT INTO USOS
        (
            SUC,
            ORDEN,
            CONTRATO,            
            NRO_DOC,
            PLAN,
            EDAD,
            SEXO,
            OBRA_SOC,
            FECHA,
            FEC_CAJA,
            HORA,
            SERVICIO,
            IMPORTE,
            IMP_LIQ,
            VALOR,
            PUESTO,
            PRESTADO,
            OPERADOR,
            EMPRESA,
            RENDIDO,
            ANULADO,
            NUSOS
            
        )

        VALUES
        (
           '${req.body.SUC}',
           '${req.body.ORDEN}',
           ${parseInt(req.body.CONTRATO)},           
           ${parseInt(req.body.NRO_DOC)},
           '${req.body.PLAN}',
           ${parseInt(req.body.EDAD)},
           '${req.body.SEXO}',
           '${req.body.OBRA_SOC}',
           '${moment(req.body.FECHA).format("YYYY-MM-DD")}',
           '${moment(req.body.FEC_CAJA).format("YYYY-MM-DD")}',
           '${req.body.HORA}',
           '${req.body.SERVICIO}',
           ${parseFloat(req.body.IMPORTE)},
           ${parseFloat(req.body.IMP_LIQ)},
           '${req.body.VALOR}',
           '${req.body.PUESTO}',
           '${req.body.PRESTADO}',
           '${req.body.OPERADOR}',
           '${req.body.EMPRESA}',
           ${req.body.RENDIDO},
           ${req.body.ANULADO},
           ${parseInt(req.body.NUSOS)}
           
        )
           
      `
      );

      await serv.end();

      res.status(200).json(regUso);
    } else if (req.body.f && req.body.f === "reg consul") {
      const regConsul = await serv.query(
        `
         INSERT INTO CONSULTA
         (
            CONTRATO,
            FECHA,
            HORA,
            NRO_ORDEN,
            DESTINO,
            COD_PRES,
            IMPORTE,
            ANULADO,
            OPERADOR,
            OPE_ANU,
            DIAGNOSTIC,
            ATENCION,
            NRO_DNI,
            SUC
        )
            
        VALUES  
        (
           ${parseInt(req.body.CONTRATO)},
           '${moment(req.body.FECHA).format("YYYY-MM-DD")}',
           '${req.body.HORA}',
           '${req.body.NRO_ORDEN}',
           '${req.body.DESTINO}',
           '${req.body.COD_PRES}',
           ${parseFloat(req.body.IMPORTE)},
           ${parseInt(req.body.ANULADO)},
           '${req.body.OPERADOR}',
           '${req.body.OPE_ANU}',
           '${req.body.DIAGNOSTIC}',
           ${parseInt(req.body.ATENCION)},
           ${parseInt(req.body.NRO_DNI)},
           '${req.body.SUC}'

        )
         `
      );

      await serv.end();

      res.status(200).json(regConsul);
    } else if (req.body.f && req.body.f === "reg practica") {
      const regPrac = await serv.query(
        `
              INSERT INTO PRACTICA
              (
                 SUC_PRA,
                CONTRATO,
                NRO_DNI,
                FECHA,
                HORA,
                NRO_ORDEN,
                PRAC_REA,
                CANT_PRA,
                IMPORTE,
                IMP_LIQ,
                ANULADO,
                OPERADOR,
                OPE_ANU,
                COD_PRAC,
                DESCRIP
              )

              VALUES
              (
                 '${req.body.SUC_PRA}',
                 ${parseInt(req.body.CONTRATO)},
                 ${parseInt(req.body.NRO_DNI)},
                 '${moment(req.body.FECHA).format("YYYY-MM-DD")}',
                 '${req.body.HORA}',
                 '${req.body.NRO_ORDEN}',
                 '${req.body.PRAC_REA}',
                 ${parseInt(req.body.CANT_PRA)},
                 ${parseFloat(req.body.IMPORTE)},
                 ${parseFloat(req.body.IMP_LIQ)},
                 ${req.body.ANULADO},
                 '${req.body.OPERADOR}',
                 ${parseInt(req.body.OPE_ANU)},
                 '${req.body.COD_PRAC}',
                 '${req.body.DESCRIP}'
          )
            `
      );

      await serv.end();

      res.status(200).json(regPrac);
    } else if (req.body.f && req.body.f === "reg farmacia") {
      const regPrac = await serv.query(
        `
            INSERT INTO FARMACIA
            (
              CONTRATO,
              FECHA,
              HORA,
              NRO_DOC,
              NRO_ORDEN,
              DESTINO,
              MODO,
              IMPORTE,
              ANULADO,
              OPERADOR,
              OPE_ANU,
              FEC_USO,
              CAN_MEDI,
              MATRICULA,
              HABILITA,
              SUC
            )

            VALUES
            (
                ${parseInt(req.body.CONTRATO)},
                '${moment(req.body.FECHA).format("YYYY-MM-DD")}',
                '${req.body.HORA}',
                ${parseInt(req.body.NRO_DOC)},
                '${req.body.NRO_ORDEN}',
                '${req.body.DESTINO}',
                '${req.body.MODO}',
                ${parseFloat(req.body.IMPORTE)},
                ${req.body.ANULADO},
                '${req.body.OPERADOR}',
                ${parseInt(req.body.OPE_ANU)},
                '${moment(req.body.FEC_USO).format("YYYY-MM-DD")}',
                ${parseInt(req.body.CAN_MEDI)},
                ${parseInt(req.body.MATRICULA)},
                ${req.body.HABILITA},
                '${req.body.SUC}'
            )
        `
      );

      await serv.end();

      res.status(200).json(regPrac);
    } else if (req.body.f && req.body.f === "reg enfermeria") {
      const regEfer = await serv.query(
        `
            INSERT INTO ENFERMER
            (
              SUC,
              CONTRATO,
              FECHA,
              HORA,
              NRO_ORDEN,
              DESTINO,
              IMPORTE,
              ANULADO,
              PRACTICA,
              CANTIDAD,
              OPERADOR,
              OPE_ANU,
              NRO_DNI
            )

            VALUES
            (
              '${req.body.SUC}',
              ${parseInt(req.body.CONTRATO)},
              '${moment(req.body.FECHA).format("YYYY-MM-DD")}',
              '${req.body.HORA}',
              '${req.body.NRO_ORDEN}',
              '${req.body.DESTINO}',
              ${parseFloat(req.body.IMPORTE)},
              ${req.body.ANULADO},
              '${req.body.PRACTICA}',
              ${parseInt(req.body.CANTIDAD)},
              '${req.body.OPERADOR}',
              ${parseInt(req.body.OPE_ANU)},
              ${parseInt(req.body.NRO_DNI)}
            )
          `
      );

      await serv.end();

      res.status(200).json(regEfer);
    } else if (req.body.f && req.body.f === "reg plan odontologico") {
      const regPlanOdonto = await serv.query(
        `
              INSERT INTO planes_socio
              (
                contrato,
                dni,
                socio,
                fecha,
                total,
                pagado,
                saldo,
                estado,
                prestador,
                prestador_nombre,
                operador,
                sucursal,
                plan,
                contencion,
                empresa
              )

              VALUES 
              (
                   ${parseInt(req.body.contrato)},
                   ${parseInt(req.body.dni)},
                   '${req.body.socio}',
                   '${moment(req.body.fecha).format("YYYY-MM-DD")}',
                   ${parseFloat(req.body.total)},
                   ${parseFloat(req.body.pagado)},
                   ${parseFloat(req.body.saldo)},
                   ${req.body.estado},
                   '${req.body.prestador}',
                   '${req.body.prestador_nombre}',
                   '${req.body.operador}',
                   '${req.body.sucursal}',
                   '${req.body.plan}',
                   ${req.body.contencion},
                   '${req.body.empresa}'
              )
            
            `
      );
      await serv.end();

      res.status(200).json(regPlanOdonto);
    } else if (req.body.f && req.body.f === "reg plan visitas") {
      const regPlanVisitas = await serv.query(
        `
              INSERT INTO planes_visitas
              (
                idplan,
                nvisita,
                pago,
                fecha,
                pagado,
                operador,
                plan
              )

              VALUES
              (
                  ${parseInt(req.body.idplan)},
                  ${parseInt(req.body.nvisita)},
                  ${parseFloat(req.body.pago)},
                  '${moment(req.body.fecha).format("YYYY-MM-DD")}',
                  ${req.body.pagado},
                  '${req.body.operador}',
                  '${req.body.plan}'
              )
            `
      );

      await serv.end();

      res.status(200).json(regPlanVisitas);
    } else if (req.body.f && req.body.f === "reg ausencia") {
      const regAusen = await serv.query(
        `
        INSERT INTO ausencias
        (
          prestador,
          cod_pres,
          motivo,
          desde,
          hasta,
          observacion,
          estado,
          operador
        )

        VALUES
        (
            '${req.body.prestador}',
            '${req.body.cod_pres}',
            '${req.body.motivo}',
            '${moment(req.body.desde).format("YYYY-MM-DD")}',
            '${moment(req.body.hasta).format("YYYY-MM-DD")}',
            '${req.body.observacion}',
            ${req.body.estado},
            '${req.body.operador}'
          )
      `
      );
      await serv.end();

      res.status(200).json(regAusen);
    } else if (req.body.f && req.body.f === "reg prestador") {
      const regPrestado = await serv.query(
        `
          INSERT INTO PRESTADO
          (
            COD_PRES,
            NOMBRE,
            ESPEC,
            LIS_ESPE,
            SUC,
            DIRECCION,
            LOCALIDAD,
            TELEFONOS,
            HORARIO1,
            HORARIO2,
            MODALIDAD,
            AUSENTE,
            CON_PAGA,
            ALTA,
            OTERO,
            PROMO,
            LIQUIDACION,
            PROMO1,
            PROMO2,
          )

          VALUES
          (
             '${req.body.COD_PRES}',
             '${req.body.NOMBRE}',
             '${req.body.ESPEC}',
             '${req.body.LIS_ESPE}',
             '${req.body.SUC}',
             '${req.body.DIRECCION}',
             '${req.body.LOCALIDAD}',
             ${req.body.TELEFONO}',
             '${req.body.HORARIO1}',
             '${req.body.HORARIO2}',
             '${req.body.MODALIDAD}',
             ${req.body.AUSENTE},
             ${parseInt(req.body.CON_PAGA)},
             '${moment(req.body.ALTA).format("YYYY-MM-DD")}',
             ${req.body.OTERO},
             ${req.body.PROMO},
             ${parseFloat(req.body.LIQUIDACION)},
             ${parseFloat(req.body.PROMO1)},
             ${parseFloat(req.body.PROMO2)}
          )
        `
      );

      await serv.end();

      res.status(200).json(regPrestado);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "puntear codigo") {
      const puntearCodigo = await serv.query(
        `
            UPDATE nosocios 
            SET estado = false
            WHERE idnosocio= ${parseInt(req.body.idnosocio)}
        `
      );

      await serv.end();

      res.status(200).json(puntearCodigo);
    } else if (req.body.f && req.body.f === "anular orden") {
      const anularOrden = await serv.query(
        `
        UPDATE USOS
        SET ANULADO = 1
        WHERE iduso= ${parseInt(req.body.id)}
      `
      );

      await serv.end();

      res.status(200).json(anularOrden);
    } else if (req.body.f && req.body.f === "anular practica") {
      if (req.body.servicio === "FARM") {
        const anularFarm = await serv.query(`
         
          UPDATE FARMACIA
          SET ANULADO = 1
          WHERE NRO_ORDEN = '${req.body.orden}'      
  `);

        await serv.end();

        res
          .status(200)
          .json(
            JSON.stringify(anularFarm, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else if (req.body.servicio === "ENFE") {
        const anularEnfer = await serv.query(`
         
          UPDATE ENFERMER
          SET ANULADO = 1
          WHERE NRO_ORDEN = '${req.body.orden}'
`);

        await serv.end();

        res
          .status(200)
          .json(
            JSON.stringify(anularEnfer, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else {
        const anularPrac = await serv.query(`
         
          UPDATE PRACTICA
          SET ANULADO = 1
          WHERE NRO_ORDEN = '${req.body.orden}'      
`);

        await serv.end();

        res
          .status(200)
          .json(
            JSON.stringify(anularPrac, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (req.body.f && req.body.f === "update conpaga") {
      const updateConPaga = await serv.query(`
         
         UPDATE PRESTADO
         SET CON_PAGA = ${parseInt(req.body.CON_PAGA)}                
         WHERE COD_PRES = '${req.body.COD_PRES}' 
`);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(updateConPaga, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "update liquidacion") {
      const updateConPaga = await serv.query(`
         
         UPDATE PRESTADO
         SET LIQUIDACION = ${parseFloat(req.body.LIQUIDACION)}                
         WHERE COD_PRES = '${req.body.COD_PRES}' 
`);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(updateConPaga, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "update promo1") {
      const updateConPaga = await serv.query(`
         
         UPDATE PRESTADO
         SET PROMO1 = ${parseFloat(req.body.PROMO1)}                
         WHERE COD_PRES = '${req.body.COD_PRES}' 
`);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(updateConPaga, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "update promo2") {
      const updateConPaga = await serv.query(`
         
         UPDATE PRESTADO
         SET PROMO2 = ${parseFloat(req.body.PROMO2)}                
         WHERE COD_PRES = '${req.body.COD_PRES}' 
`);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(updateConPaga, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "update prestado") {
      const updatePrestado = await serv.query(`
         
         UPDATE PRESTADO
          SET              
              MATRICULA= ${req.body.MATRICULA},
              DIRECCION= '${req.body.DIRECCION}',
              HORARIO1= '${req.body.HORARIO1}',
              HORARIO2= '${req.body.HORARIO2}',                  
              PROMO= ${req.body.PROMO},
              PROMO1= ${parseInt(req.body.PROMO1)},
              PROMO2= ${parseInt(req.body.PROMO2)}

        WHERE COD_PRES = '${req.body.COD_PRES}'
`);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(updatePrestado, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act pago visita") {
      const updatePrestado = await serv.query(`
         
         UPDATE planes_visitas
         SET 
             pagado = 1,
             pago = ${parseFloat(req.body.pag)}
         WHERE idvisita = ${parseInt(req.body.id)} 
`);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(updatePrestado, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act plan") {
      const updatePrestado = await serv.query(`
         
         UPDATE planes_socio
         SET 
            pagado = pagado + ${parseFloat(req.body.pag)},
            saldo = saldo - ${parseFloat(req.body.pag)}
         WHERE idplansocio = ${parseInt(req.body.id)} 
`);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(updatePrestado, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act valor practica") {
      let impo = `PRECIO_${req.body.lugar}`;
      let codPres = `COD_PRES${req.body.lugar}`;
      let prestado = `${req.body.prestado}`;

      const updateAutPrac = await serv.query(
        `     
        UPDATE AUT_PRAC
        SET  ${impo} = '${req.body.importe}'
        WHERE ${codPres} = '${prestado}'
        AND idpractica = ${req.body.id}
       `
      );
      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(updateAutPrac, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act ausencia") {
      const updateAusente = await serv.query(`
         
         UPDATE PRESTADO
         SET 
            AUSENTE = ${req.body.AUSENTE}            
         WHERE COD_PRES='${req.body.codPres}'
`);

      await serv.end();

      res.status(200).json(updateAusente);
    } else if (req.body.f && req.body.f === "rein ausencia") {
      const reinPrest = await serv.query(`
         
         UPDATE ausencias
         SET 
            estado = ${req.body.estado}            
         WHERE idausencia=${parseInt(req.body.idausencia)}
`);
      await serv.end();

      res.status(200).json(reinPrest);
    }
  } else if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "dele ausencia") {
      const delAusencia = await serv.query(
        `
              DELETE FROM ausencias
              WHERE idausencia = ${parseInt(req.query.idausencia)}
            
            `
      );
      await serv.end();

      res.status(200).json(delAusencia);
    }
  }
}
