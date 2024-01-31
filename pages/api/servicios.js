import moment from "moment";
import { Werchow, SGI, Camp, Serv } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "contar fisio") {
      const contarFisio = await Serv.$queryRaw`
            
      SELECT 
      
      CASE
          WHEN SUM(CANT_PRA) IS NULL
          THEN 0

          WHEN SUM(CANT_PRA) IS NOT NULL
          THEN SUM(CANT_PRA)

          END 'N'            
      
      FROM PRACTICA
      WHERE CONTRATO = ${req.query.contrato}
      AND PRAC_REA = 'FIS'

`;

      res
        .status(200)
        .json(
          JSON.stringify(contarFisio, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "verificar consultas") {
      const verificarConsultas = await Serv.$queryRaw`
              
        SELECT 
            COUNT(CONTRATO) 'orde'
        FROM USOS
        WHERE CONTRATO = ${req.query.contrato}
        AND SERVICIO = 'ORDE'
        AND YEAR(FECHA) = YEAR(CURDATE())
        AND MONTH(FECHA) = MONTH(CURDATE())
        AND ANULADO in (NULL, 0)
  
  `;

      res
        .status(200)
        .json(
          JSON.stringify(verificarConsultas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "verificar practicas") {
      const verificarPracticas = await Serv.$queryRaw`
                
        SELECT 
            COUNT(CONTRATO) 'orde'
        FROM USOS
        WHERE CONTRATO = ${req.query.contrato}
        AND SERVICIO = 'PBIO'
        AND YEAR(FECHA) = YEAR(CURDATE())
        AND MONTH(FECHA) = MONTH(CURDATE())
        AND ANULADO in (NULL, 0)
    
    `;

      res
        .status(200)
        .json(
          JSON.stringify(verificarPracticas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer adh provi") {
      const adhProvi = await Serv.adherent_provi.findMany({
        where: {
          CONTRATO: parseInt(req.query.contrato),
        },
      });

      res.status(200).json(adhProvi);
    } else if (req.query.f && req.query.f === "traer adh provi dni") {
      const adhProviDni = await Serv.adherent_provi.findMany({
        where: {
          NRO_DOC: parseInt(req.query.dni),
        },
      });

      res.status(200).json(adhProviDni);
    } else if (req.query.f && req.query.f === "traer prac prest") {
      let impo = `PRECIO_${req.query.lugar}`;
      let codPres = `COD_PRES${req.query.lugar}`;
      let id = `${req.query.id}`;

      const pracPrest = await Serv.$queryRawUnsafe(
        `                
        SELECT CODIGOS, DESCRIP, ${impo} 'IMPORTE', idpractica
        FROM AUT_PRAC
        WHERE ${codPres} = '${id}'
       `
      );
      res
        .status(200)
        .json(
          JSON.stringify(pracPrest, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer farmacias") {
      const verificarPracticas = await Serv.$queryRaw`
          SELECT
              *
          FROM FARMA
      `;
      res
        .status(200)
        .json(
          JSON.stringify(verificarPracticas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "usos farmacia") {
      const usosFarmacia = await Serv.$queryRaw`
         SELECT 
            COUNT(CONTRATO) 'usos'
          FROM USOS
          WHERE CONTRATO = ${req.query.contrato}
          AND PRESTADO = ${req.query.prestado}
          AND YEAR(FECHA) = YEAR(CURDATE())
          AND MONTH(FECHA) = MONTH(CURDATE())
          AND ANULADO in (NULL, 0)
      `;
      res
        .status(200)
        .json(
          JSON.stringify(usosFarmacia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer farma desc") {
      const usosFarmacia = await Serv.$queryRaw`
        SELECT 
          *
        FROM FARMA
        WHERE CODIGO = ${req.query.prestado}
      `;
      res
        .status(200)
        .json(
          JSON.stringify(usosFarmacia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer enfermeria") {
      const traerEnfermeria = await Serv.$queryRaw`
         
          SELECT COD_PRES, NOMBRE
          FROM PRESTADO
          WHERE SUC = ${req.query.suc}
          AND SUBSTR(LIS_ESPE,1,3) = 'ENF'    
      `;
      res
        .status(200)
        .json(
          JSON.stringify(traerEnfermeria, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer pract enfermeria") {
      const pracEnfer = await Serv.$queryRaw`
         
            SELECT 
                *
            FROM PRACT_ENFER 
      `;
      res
        .status(200)
        .json(
          JSON.stringify(pracEnfer, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer practicas") {
      const pracEnfer = await Serv.$queryRaw`
         
         SELECT *
         FROM PRACTICA
         WHERE NRO_ORDEN = ${req.query.orden}
      `;
      res
        .status(200)
        .json(
          JSON.stringify(pracEnfer, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer nombre farmacia") {
      const pracEnfer = await Serv.$queryRaw`
         
          SELECT *
          FROM FARMA
          WHERE CODIGO = ${req.query.farma}
      `;
      res
        .status(200)
        .json(
          JSON.stringify(pracEnfer, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer farmacia") {
      const pracEnfer = await Serv.$queryRaw`
         
         SELECT *
         FROM FARMACIA
         WHERE NRO_ORDEN = ${req.query.orden}
      `;
      res
        .status(200)
        .json(
          JSON.stringify(pracEnfer, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer enfermeria orden") {
      const pracEnfer = await Serv.$queryRaw`
         
          SELECT e.PRACTICA, a.NOMBRE, e.IMPORTE, e.CANTIDAD
          FROM ENFERMER as e
          INNER JOIN PRESTADO as a on a.COD_PRES = e.DESTINO          
          WHERE e.NRO_ORDEN = ${req.query.orden}
      `;
      res
        .status(200)
        .json(
          JSON.stringify(pracEnfer, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "arancel enfe domicilio") {
      const calcArancel = await Werchow.$queryRaw`
         
         SELECT
            CONTRATO
        FROM
            maestro
        WHERE
            CONTRATO = ${req.query.contrato}
        AND BARRIO REGEXP '25 de mayo|San martin|Belgrano|guemes|san cayetano|9 de julio|santa barbara|san ignacio|loyola' 
      `;
      res
        .status(200)
        .json(
          JSON.stringify(calcArancel, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer planes ortodoncia") {
      const planesOrto = await Serv.$queryRaw`
         
         SELECT 
           *
         FROM planes_odontologicos        
         WHERE estado = 1 
         AND plan = 'ORTO'
      `;
      res
        .status(200)
        .json(
          JSON.stringify(planesOrto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer planes implante") {
      const planesImp = await Serv.$queryRaw`
         
         SELECT 
           *
         FROM planes_odontologicos        
         WHERE estado = 1 
         AND plan = 'CONT'
      `;
      res
        .status(200)
        .json(
          JSON.stringify(planesImp, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer plan dni") {
      const planPorDNI = await Serv.$queryRaw`
         
         SELECT 
           *
         FROM planes_socio
         WHERE dni = ${req.query.dni}
      `;
      res
        .status(200)
        .json(
          JSON.stringify(planPorDNI, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer norden") {
      const nOrden = await Serv.$queryRaw`         
         SELECT iduso
         FROM USOS
         ORDER BY iduso DESC
      `;
      res
        .status(200)
        .json(
          JSON.stringify(nOrden, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer uso") {
      const nOrden = await Serv.$queryRaw`         
         SELECT *
         FROM USOS
         where iduso = ${req.query.iduso}
      `;
      res
        .status(200)
        .json(
          JSON.stringify(nOrden, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer sucursales") {
      const traeSucursales = await SGI.$queryRaw`         
          SELECT codigo, sucursal
          FROM sucursal 
      `;
      res
        .status(200)
        .json(
          JSON.stringify(traeSucursales, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer especialidades") {
      const traerEspecialidades = await Serv.$queryRaw`         
             SELECT ESPECIAL, NOMBRE
             FROM ESPECIAL 
             ORDER BY NOMBRE 
      `;
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
        const traerEspecialidades = await Serv.$queryRaw`         
          SELECT COD_PRES, NOMBRE
          FROM PRESTADO
          WHERE OTERO = 1
          AND SUBSTR(LIS_ESPE,1,3) = ${esp}
 `;
        res
          .status(200)
          .json(
            JSON.stringify(traerEspecialidades, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else {
        const traerEspecialidades = await Serv.$queryRaw`         
           SELECT COD_PRES, NOMBRE
           FROM PRESTADO
           WHERE SUC = ${suc} 
           AND SUBSTR(LIS_ESPE,1,3) = ${esp}
 `;
        res
          .status(200)
          .json(
            JSON.stringify(traerEspecialidades, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (req.query.f && req.query.f === "listado prestadores") {
      const listadoPrestadores = await Serv.$queryRaw`
         
          SELECT COD_PRES, NOMBRE, CON_PAGA
          FROM PRESTADO
          ORDER BY NOMBRE ASC
      `;
      res
        .status(200)
        .json(
          JSON.stringify(listadoPrestadores, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer detalle medico") {
      const detalleMedico = await Serv.$queryRaw`
         
        SELECT 
            COD_PRES, 
            NOMBRE, 
            DIRECCION, 
            TELEFONOS, 
            HORARIO1, 
            HORARIO2,      
            SUBSTR(LIS_ESPE,1,3) "SERVICIO", 
            CON_PAGA,
            LUGAR,
            OTERO,
            PROMO
        FROM PRESTADO
        WHERE COD_PRES = ${req.query.prestado}   
      `;
      res
        .status(200)
        .json(
          JSON.stringify(detalleMedico, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "codigo no socio") {
      const codNoSocio = await Serv.nosocios.findFirst({
        where: {
          codigo: parseInt(req.query.codNoSoc),
        },
      });

      res
        .status(200)
        .json(
          JSON.stringify(codNoSocio, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer no socio") {
      const codNoSocio = await Serv.nosocios.findFirst({
        where: {
          dni: parseInt(req.query.dni),
        },
      });

      res
        .status(200)
        .json(
          JSON.stringify(codNoSocio, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer promociones") {
      const traerPromociones = await Serv.$queryRaw`
         
         SELECT * 
         FROM promociones
    `;
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
        const listadoOrdenes = await Serv.$queryRaw`
         
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
    `;
        res
          .status(200)
          .json(
            JSON.stringify(listadoOrdenes, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else {
        const listadoOrdenes = await Serv.$queryRaw`
         
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
            AND OPERADOR = ${req.query.usu}
            ORDER BY iduso DESC
   `;
        res
          .status(200)
          .json(
            JSON.stringify(listadoOrdenes, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (req.query.f && req.query.f === "traer historial usos") {
      const usos = await Serv.$queryRaw`
         
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
              `;

      const usosFa = await Serv.$queryRaw`
         
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
`;

      let historial = usos.concat(usosFa);

      res
        .status(200)
        .json(
          JSON.stringify(historial, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "buscar plan") {
      const planOdonto = await Serv.$queryRaw`
         
         SELECT 
           *
        FROM planes_socio
        WHERE contrato = ${parseInt(req.query.contrato)}       
         `;

      res
        .status(200)
        .json(
          JSON.stringify(planOdonto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "buscar plan dni") {
      const planOdonto = await Serv.$queryRaw`
         
         SELECT 
           *
        FROM planes_socio
        WHERE dni = ${parseInt(req.query.dni)}       
         `;

      res
        .status(200)
        .json(
          JSON.stringify(planOdonto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer plan visitas") {
      const planOdonto = await Serv.$queryRaw`
         
         SELECT 
           *
        FROM planes_visitas
        WHERE idplan = ${parseInt(req.query.id)}       
         `;

      res
        .status(200)
        .json(
          JSON.stringify(planOdonto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer plan orto") {
      const planOdonto = await Serv.$queryRaw`
    
         SELECT 
           *
         FROM planes_socio
         WHERE idplansocio = ${parseInt(req.query.id)}
                  `;

      res
        .status(200)
        .json(
          JSON.stringify(planOdonto, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg adh provisorio") {
      const adhProvi = await Serv.adherent_provi.create({
        data: {
          CONTRATO: parseInt(req.body.CONTRATO),
          NRO_DOC: parseInt(req.body.NRO_DOC),
          PLAN: req.body.PLAN,
          APELLIDOS: req.body.APELLIDOS,
          NOMBRES: req.body.NOMBRES,
          NACIMIENTO: new Date(req.body.NACIMIENTO),
          EMPRESA: req.body.EMPRESA,
          ESTADO: req.body.ESTADO,
        },
      });

      res.status(200).json(adhProvi);
    } else if (req.body.f && req.body.f === "reg uso") {
      const regUso = await Serv.USOS.create({
        data: {
          SUC: req.body.SUC,
          ORDEN: req.body.ORDEN,
          CONTRATO: parseInt(req.body.CONTRATO),
          NRO_ADH: parseInt(req.body.NRO_ADH),
          NRO_DOC: parseInt(req.body.NRO_DOC),
          PLAN: req.body.PLAN,
          EDAD: parseInt(req.body.EDAD),
          SEXO: req.body.SEXO,
          OBRA_SOC: req.body.OBRA_SOC,
          FECHA: new Date(req.body.FECHA),
          FEC_CAJA: new Date(req.body.FEC_CAJA),
          HORA: req.body.HORA,
          SERVICIO: req.body.SERVICIO,
          IMPORTE: parseFloat(req.body.IMPORTE),
          IMP_LIQ: parseFloat(req.body.IMP_LIQ),
          VALOR: req.body.VALOR,
          PUESTO: req.body.PUESTO,
          PRESTADO: req.body.PRESTADO,
          OPERADOR: req.body.OPERADOR,
          EMPRESA: req.body.EMPRESA,
          RENDIDO: req.body.RENDIDO,
          ANULADO: req.body.ANULADO,
          NUSOS: parseInt(req.body.NUSOS),
          OPERADOR: req.body.OPERADOR,
        },
      });

      res.status(200).json(regUso);
    } else if (req.body.f && req.body.f === "reg consul") {
      const regConsul = await Serv.CONSULTA.create({
        data: {
          CONTRATO: parseInt(req.body.CONTRATO),
          FECHA: new Date(req.body.FECHA),
          HORA: req.body.HORA,
          NRO_ORDEN: req.body.NRO_ORDEN,
          DESTINO: req.body.DESTINO,
          COD_PRES: req.body.COD_PRES,
          IMPORTE: parseFloat(req.body.IMPORTE),
          ANULADO: parseInt(req.body.ANULADO),
          OPERADOR: req.body.OPERADOR,
          OPE_ANU: req.body.OPE_ANU,
          DIAGNOSTIC: req.body.DIAGNOSTIC,
          ATENCION: parseInt(req.body.ATENCION),
          NRO_DNI: parseInt(req.body.NRO_DNI),
          SUC: req.body.SUC,
        },
      });

      res.status(200).json(regConsul);
    } else if (req.body.f && req.body.f === "reg practica") {
      const regPrac = await Serv.PRACTICA.create({
        data: {
          SUC_PRA: req.body.SUC_PRA,
          CONTRATO: parseInt(req.body.CONTRATO),
          NRO_DNI: parseInt(req.body.NRO_DNI),
          FECHA: new Date(req.body.FECHA),
          HORA: req.body.HORA,
          NRO_ORDEN: req.body.NRO_ORDEN,
          PRAC_REA: req.body.PRAC_REA,
          CANT_PRA: parseInt(req.body.CANT_PRA),
          IMPORTE: parseFloat(req.body.IMPORTE),
          ANULADO: req.body.ANULADO,
          OPERADOR: req.body.OPERADOR,
          OPE_ANU: parseInt(req.body.OPE_ANU),
          COD_PRAC: req.body.COD_PRAC,
          DESCRIP: req.body.DESCRIP,
        },
      });

      res.status(200).json(regPrac);
    } else if (req.body.f && req.body.f === "reg farmacia") {
      const regPrac = await Serv.FARMACIA.create({
        data: {
          CONTRATO: parseInt(req.body.CONTRATO),
          FECHA: new Date(req.body.FECHA),
          HORA: req.body.HORA,
          NRO_DOC: parseInt(req.body.NRO_DOC),
          NRO_ORDEN: req.body.NRO_ORDEN,
          DESTINO: req.body.DESTINO,
          MODO: req.body.MODO,
          IMPORTE: parseFloat(req.body.IMPORTE),
          ANULADO: req.body.ANULADO,
          OPERADOR: req.body.OPERADOR,
          OPE_ANU: parseInt(req.body.OPE_ANU),
          FEC_USO: new Date(req.body.FEC_USO),
          CAN_MEDI: parseInt(req.body.CAN_MEDI),
          MATRICULA: parseInt(req.body.MATRICULA),
          HABILITA: req.body.HABILITA,
          SUC: req.body.SUC,
        },
      });

      res.status(200).json(regPrac);
    } else if (req.body.f && req.body.f === "reg enfermeria") {
      const regEfer = await Serv.ENFERMER.create({
        data: {
          SUC: req.body.SUC,
          CONTRATO: parseInt(req.body.CONTRATO),
          FECHA: new Date(req.body.FECHA),
          HORA: req.body.HORA,
          NRO_ORDEN: req.body.NRO_ORDEN,
          DESTINO: req.body.DESTINO,
          IMPORTE: parseFloat(req.body.IMPORTE),
          ANULADO: req.body.ANULADO,
          PRACTICA: req.body.PRACTICA,
          CANTIDAD: parseInt(req.body.CANTIDAD),
          OPERADOR: req.body.OPERADOR,
          OPE_ANU: parseInt(req.body.OPE_ANU),
          NRO_DNI: parseInt(req.body.NRO_DNI),
        },
      });

      res.status(200).json(regEfer);
    } else if (req.body.f && req.body.f === "reg plan odontologico") {
      const regPlanOdonto = await Serv.planes_socio.create({
        data: {
          contrato: parseInt(req.body.contrato),
          dni: parseInt(req.body.dni),
          socio: req.body.socio,
          fecha: new Date(req.body.fecha),
          total: parseFloat(req.body.total),
          pagado: parseFloat(req.body.pagado),
          saldo: parseFloat(req.body.saldo),
          estado: req.body.estado,
          prestador: req.body.prestador,
          prestador_nombre: req.body.prestador_nombre,
          operador: req.body.operador,
          sucursal: req.body.sucursal,
          plan: req.body.plan,
        },
      });

      res.status(200).json(regPlanOdonto);
    } else if (req.body.f && req.body.f === "reg plan visitas") {
      const regPlanVisitas = await Serv.planes_visitas.create({
        data: {
          idplan: parseInt(req.body.idplan),
          nvisita: parseInt(req.body.nvisita),
          pago: parseFloat(req.body.pago),
          fecha: new Date(req.body.fecha),
          pagado: req.body.pagado,
          operador: req.body.operador,
          plan: req.body.plan,
        },
      });

      res.status(200).json(regPlanVisitas);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "puntear codigo") {
      const puntearCodigo = await Serv.nosocios.update({
        data: {
          estado: false,
        },
        where: {
          idnosocio: parseInt(req.body.idnosocio),
        },
      });

      res.status(200);
    } else if (req.body.f && req.body.f === "anular orden") {
      const anularOrden = await Serv.USOS.update({
        data: {
          ANULADO: 1,
        },
        where: {
          iduso: parseInt(req.body.id),
        },
      });

      res.status(200);
    } else if (req.body.f && req.body.f === "anular practica") {
      if (req.body.servicio === "FARM") {
        const anularFarm = await Serv.$queryRaw`
         
          UPDATE FARMACIA
          SET 
              ANULADO = 1
          WHERE NRO_ORDEN = ${req.body.orden}      
  `;
        res
          .status(200)
          .json(
            JSON.stringify(anularFarm, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else if (req.body.servicio === "ENFE") {
        const anularEnfer = await Serv.$queryRaw`
         
          UPDATE ENFERMER
          SET 
              ANULADO = 1
          WHERE NRO_ORDEN = ${req.body.orden}      
`;
        res
          .status(200)
          .json(
            JSON.stringify(anularEnfer, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      } else {
        const anularPrac = await Serv.$queryRaw`
         
          UPDATE PRACTICA
          SET 
              ANULADO = 1
          WHERE NRO_ORDEN = ${req.body.orden}      
`;
        res
          .status(200)
          .json(
            JSON.stringify(anularPrac, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          );
      }
    } else if (req.body.f && req.body.f === "update conpaga") {
      const updateConPaga = await Serv.$queryRaw`
         
         UPDATE PRESTADO
         SET CON_PAGA = ${parseInt(req.body.CON_PAGA)}                
         WHERE COD_PRES = ${req.body.COD_PRES} 
`;
      res
        .status(200)
        .json(
          JSON.stringify(updateConPaga, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "update prestado") {
      const updatePrestado = await Serv.$queryRaw`
         
         UPDATE PRESTADO
          SET LIS_ESPE= ${req.body.LIS_ESPE},
              NOMBRE= ${req.body.NOMBRE},
              MATRICULA= ${req.body.MATRICULA},
              DIRECCION= ${req.body.DIRECCION},
              HORARIO1= ${req.body.HORARIO1},
              HORARIO2= ${req.body.HORARIO2},
              SUC= ${req.body.SUC},
              LOCALIDAD= ${req.body.LOCALIDAD},
              OTERO= ${req.body.OTERO}

        WHERE COD_PRES = ${req.body.COD_PRES}
`;
      res
        .status(200)
        .json(
          JSON.stringify(updatePrestado, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act pago visita") {
      const updatePrestado = await Serv.$queryRaw`
         
         UPDATE planes_visitas
         SET 
             pagado = 1,
             pago = ${parseFloat(req.body.pag)}
         WHERE idvisita = ${parseInt(req.body.id)} 
`;
      res
        .status(200)
        .json(
          JSON.stringify(updatePrestado, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "act plan") {
      const updatePrestado = await Serv.$queryRaw`
         
         UPDATE planes_socio
         SET 
            pagado = pagado + ${parseFloat(req.body.pag)},
            saldo = saldo - ${parseFloat(req.body.pag)}
         WHERE idplansocio = ${parseInt(req.body.id)} 
`;
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

      const updateAutPrac = await Serv.$queryRawUnsafe(
        `     
        UPDATE AUT_PRAC
        SET  ${impo} = '${req.body.importe}'
        WHERE ${codPres} = '${prestado}'
        AND idpractica = ${req.body.id}
       `
      );
      res
        .status(200)
        .json(
          JSON.stringify(updateAutPrac, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  }
}
