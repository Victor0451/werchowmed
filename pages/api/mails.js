import { werchow, sgi, serv, sep, camp, arch, club } from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "mails recibidos") {
      const mailsRecibidos = await sgi.query(
        `
      SELECT *
      FROM mails
      WHERE recibe = '${req.query.usuario}'
    `
      );

      await sgi.end();

      res.status(200).json(mailsRecibidos);
    } else if (req.query.f && req.query.f === "mails enviados") {
      const mailsEnviados = await sgi.query(
        `
        SELECT *
        FROM mails
        WHERE envia = '${req.query.usuario}'

      `
      );

      await sgi.end();

      res.status(200).json(mailsEnviados);
    } else if (req.query.f && req.query.f === "cajas mails") {
      const mailsEnviados = await sgi.query(`
            
        SELECT 
                CONCAT(empresa, '-' , idcaja, '-', fecha_carga) 'label',                
                CONCAT('/gestion/sucursales/caja/caja?id=',idcaja) 'value'
        FROM caja_sucursales
        WHERE operador_carga = '${req.query.op}'
        ORDER BY idcaja DESC
     
  
  `);

      await sgi.end();

      res.status(200).json(mailsEnviados);
    } else if (req.query.f && req.query.f === "traer archivos") {
      const mailAdjuntos = await sgi.query(
        `
      SELECT *
      FROM mails_adjuntos
      WHERE codmail = '${req.query.codmail}'
    `
      );

      await sgi.end();

      res.status(200).json(mailAdjuntos);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "nuevo mail") {
      const nuevoMail = await sgi.query(
        `
          INSERT INTO mails
          (
            fecha,
            envia,
            recibe,
            descrip,
            codmail,
            asunto,
            leido,
            url_caja
          )
          
          VALUES
          (
             '${moment(req.body.fecha).format("YYYY-MM-DD")}',
             '${req.body.envia}',
             '${req.body.recibe}',
             '${req.body.descrip}',
             '${req.body.codmail}',
             '${req.body.asunto}',
             ${req.body.leido},
             '${req.body.url_caja}'
          )
        
        
        `
      );

      await sgi.end();

      res.status(200).json(nuevoMail);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "leer mail") {
      const nuevoMail = await sgi.query(
        `
            UPDATE mails
            SET leido= ${req.body.leido},
                fecha_leido= ${moment(req.body.fecha_leido).format(
                  "YYYY-MM-DD"
                )}
            WHERE idmail= ${parseInt(req.body.idmail)}
          `
      );

      await sgi.end();

      res.status(200).json(nuevoMail);
    }
  }
}
