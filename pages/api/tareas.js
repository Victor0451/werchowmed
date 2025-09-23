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
    if (req.query.f && req.query.f === "traer tareas") {
      const autos = await serv.query(
        `
      SELECT *
      FROM tareas 
  `
      );

      await serv.end();

      res.status(200).json(autos);
    } else if (req.query.f && req.query.f === "traer operadores") {
      const prov = await sep.query(
        `
            SELECT operador
            FROM operadorsep
            
          `
      );

      await sep.end();

      res.status(200).json(prov);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva tarea") {
      const regTarea = await serv.query(
        `
          INSERT INTO tareas
          (
              title,
              start,
              end,
              allDay,
              user,
              priority
          )

          VALUES
          (
               '${req.body.title}',
               '${req.body.start}',
               '${req.body.end}',
               ${req.body.allDay},
               '${req.body.user}',
               ${parseInt(req.body.priority)},
          )
        
        `
      );

      await serv.end();

      res.status(200).json(regTarea);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "editar evento") {
      const regAuto = await serv.query(
        `
        UPDATE tareas
        SET title= ${req.body.title},
            start= ${req.body.start},
            end= ${req.body.end},
            allDay= ${req.body.allDay}
        WHERE idevents = ${parseInt(req.body.id)}
      `
      );

      await serv.end();

      res.status(200).json(regAuto);
    }
  }
  if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar tarea") {
;

      const delTarea = await serv.query(
        `
     DELETE FROM tareas
     WHERE idevents = ${parseInt(req.body.id)} 
  `
      );

      res.status(200).json(delTarea);
    }
  }
}
