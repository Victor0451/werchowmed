import moment from "moment";
import { Werchow, SGI, Camp, Serv } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "turnos del dia") {
      const turnosDia = await Serv.MEDICOS_TURNOS.findMany({
        where: {
          fecha: new Date(moment().format("YYYY-MM-DD")),
        },
      });

      res
        .status(200)
        .json(
          JSON.stringify(turnosDia, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer visitas planes") {
      const visitaPlan = await Serv.$queryRaw`
            
      SELECT  
       CONCAT('Socio: ', contrato, '-', socio, '. ', 'DR/A: ', prestador_nombre) as 'title',
       p.fecha 'start',
       p.fecha 'end',
       0 'allDay',
       p.nvisita 'nvisita',
       p.pago 'pago'

      FROM planes_visitas as p
      INNER JOIN planes_socio as u on u.idplansocio = p.idplan
     
  
  `;
      res
        .status(200)
        .json(
          JSON.stringify(visitaPlan, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer medicos otero") {
      const traerMedicos = await Serv.$queryRaw`
            
            SELECT COD_PRES, NOMBRE
            FROM PRESTADO
            WHERE OTERO = 1
     
  
  `;
      res
        .status(200)
        .json(
          JSON.stringify(traerMedicos, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "buscar turno medico") {
      const turnoMedico = await Serv.$queryRaw`
            
            SELECT *
            FROM MEDICOS_TURNOS
            WHERE doctor = ${req.query.medico}
            AND fecha = ${req.query.dia}
            AND turno = ${req.query.turno}
            AND estado != 2
     
  
  `;
      res
        .status(200)
        .json(
          JSON.stringify(turnoMedico, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg turno") {
      const regTurno = await Serv.MEDICOS_TURNOS.create({
        data: {
          turno: req.body.turno,
          fecha: new Date(req.body.fecha),
          hora: req.body.hora,
          doctor: req.body.doctor,
          paciente: req.body.paciente,
          obra_soc: req.body.obra_soc,
          telefono: parseInt(req.body.telefono),
          domicilio: req.body.domicilio,
          mail: req.body.mail,
          operador: req.body.operador,
          estado: parseInt(req.body.estado),
        },
      });

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
      const updateEstadoTurno = await Serv.MEDICOS_TURNOS.update({
        data: {
          estado: parseInt(req.body.estado),
        },
        where: {
          idturno: parseInt(req.body.idturno),
        },
      });
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
