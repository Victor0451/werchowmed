import {
  werchow,
  sgi,
  serv,
  sep,
  camp,
  arch,
  club,
  sanmiguel,
} from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "turnos del dia") {
      const turnosDia = await serv.query(
        `
        SELECT *
        FROM MEDICOS_TURNOS
        WHERE fecha= ${moment().format("YYYY-MM-DD")}
      `
      );

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(turnosDia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer visitas planes") {
      const visitaPlan = await serv.query(`
            
      SELECT  
       CONCAT('Socio: ', contrato, '-', socio, '. ', 'DR/A: ', prestador_nombre) as 'title',
       p.fecha 'start',
       p.fecha 'end',
       0 'allDay',
       p.nvisita 'nvisita',
       p.pago 'pago'

      FROM planes_visitas as p
      INNER JOIN planes_socio as u on u.idplansocio = p.idplan
     
  
  `);

      await serv.end();
      res
        .status(200)
        .json(
          JSON.stringify(visitaPlan, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer medicos otero") {
      const traerMedicos = await serv.query(`
            
            SELECT COD_PRES, NOMBRE
            FROM PRESTADO
            WHERE OTERO = 1
     
  
  `);
      await serv.end();
      res
        .status(200)
        .json(
          JSON.stringify(traerMedicos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "buscar turno medico") {
      const turnoMedico = await serv.query(`
            
            SELECT *
            FROM MEDICOS_TURNOS
            WHERE doctor = '${req.query.medico}'
            AND fecha = '${moment(req.query.dia).format("YYYY-MM-DD")}'
            AND turno = '${req.query.turno}'
               
  
  `);

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(turnoMedico, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "buscar paciente") {
      const paciente = await serv.query(
        `
      SELECT *
      FROM pacientes
      WHERE dni = ${parseInt(req.query.dni)}
      LIMIT 1
    `
      );

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(paciente, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg turno") {
      const regTurno = await serv.query(
        `
          INSERT INTO MEDICOS_TURNOS
          (
            turno,
            fecha,
            hora,
            doctor,
            paciente,
            obra_soc,
            telefono,
            domicilio,
            mail,
            operador,
            estado,
            dni,
            motivo_turno,
            norden,
            observacion
          )

          VALUES
          (
              '${req.body.turno}',
              '${moment(req.body.fecha).format("YYYY-MM-DD")}',
              '${req.body.hora}',
              '${req.body.doctor}',
              '${req.body.paciente}',
              '${req.body.obra_soc}',
              ${parseInt(req.body.telefono)},
             '${req.body.domicilio}',
              '${req.body.mail}',
              '${req.body.operador}',
              ${parseInt(req.body.estado)},
              ${parseInt(req.body.dni)},
              '${req.body.motivo_turno}',
              '${req.body.norden}',
              '${req.body.observacion}'
          )
          `
      );

      await serv.end();
      res
        .status(200)
        .json(
          JSON.stringify(regTurno, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.body.f && req.body.f === "reg paciente") {
      const regTurno = await serv.query(
        `
          INSERT INTO pacientes
          (
              paciente,
              dni,
              obra_soc,
              telefono,
              domicilio,
              mail
          )      

          VALUES
          (
               '${req.body.paciente},'
               ${parseInt(req.body.dni)},
               '${req.body.obra_soc}',
               ${parseInt(req.body.telefono)},
               '${req.body.domicilio}',
               '${req.body.mail}'
          )
        `
      );

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(regTurno, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "cambiar estado turno") {
      const updateEstadoTurno = await serv.query(
        `
          UPDATE MEDICOS_TURNOS
          SET estado= ${parseInt(req.body.estado)}
          WHERE idturno = ${parseInt(req.body.idturno)}
        `
      );

      await serv.end();

      res
        .status(200)
        .json(
          JSON.stringify(updateEstadoTurno, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  }
}
