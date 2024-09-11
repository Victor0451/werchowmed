import { Werchow, SGI, Camp, Sep, Serv } from "../../libs/config";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer tareas") {
      const autos = await Serv.tareas.findMany();

      res.status(200).json(autos);
    } else if (req.query.f && req.query.f === "traer operadores") {
      const prov = await Sep.operadorsep.findMany({
        select: {
          operador: true,
        },
      });

      res.status(200).json(prov);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva tarea") {
      const regTarea = await Serv.tareas.create({
        data: {
          title: req.body.title,
          start: req.body.start,
          end: req.body.end,
          allDay: req.body.allDay,
          user: req.body.user,
          priority: parseInt(req.body.priority),
        },
      });

      res.status(200).json(regTarea);
    }
  }
  if (req.method === "PUT") {
    if (req.body.f && req.body.f === "editar evento") {
      const regAuto = await Serv.tareas.update({
        data: {
          title: req.body.title,
          start: req.body.start,
          end: req.body.end,
          allDay: req.body.allDay,
        },
        where: {
          idevents: parseInt(req.body.id),
        },
      });

      res.status(200).json(regAuto);
    }
  }
  if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar tarea") {
      const delTarea = await Serv.tareas.delete({
        where: {
          idevents: parseInt(req.query.id),
        },
      });

      res.status(200).json(delTarea);
    }
  }
}
