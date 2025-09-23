import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "nuevos casos") {
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "sistema") {
      const historial = await sgi.query(
        `
            INSERT INTO historial_acciones
            (
              operador,
              fecha,
              accion
            )

            VALUES
            (
              '${req.body.operador}',
              '${moment(req.body.fecha).format("YYYY-MM-DD")}',
              '${req.body.accion}'

            )
          `
      );

      await sgi.end();

      res.status(200).json(historial);
    }
  }
}
