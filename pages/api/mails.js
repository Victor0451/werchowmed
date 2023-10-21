import moment from "moment";
import { Werchow, SGI, Camp, Serv } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "mails recibidos") {
      const mailsRecibidos = await SGI.mails.findMany({
        where: {
          recibe: req.query.usuario,
        },
      });

      res.status(200).json(mailsRecibidos);
    } else if (req.query.f && req.query.f === "mails enviados") {
      const mailsEnviados = await SGI.mails.findMany({
        where: {
          envia: req.query.usuario,
        },
      });

      res.status(200).json(mailsEnviados);
    } else if (req.query.f && req.query.f === "cajas mails") {
      const mailsEnviados = await SGI.$queryRaw`
            
        SELECT 
                CONCAT(empresa, '-' , idcaja, '-', fecha_carga) 'label',                
                CONCAT('/gestion/sucursales/caja/caja?id=',idcaja) 'value'
        FROM caja_sucursales
        WHERE operador_carga = ${req.query.op}
        ORDER BY idcaja DESC
     
  
  `;

      res.status(200).json(mailsEnviados);
    } else if (req.query.f && req.query.f === "traer archivos") {
      const mailAdjuntos = await SGI.mails_adjuntos.findMany({
        where: {
          codmail: req.query.codmail,
        },
      });

      res.status(200).json(mailAdjuntos);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "nuevo mail") {
      const nuevoMail = await SGI.mails.create({
        data: {
          fecha: new Date(req.body.fecha),
          envia: req.body.envia,
          recibe: req.body.recibe,
          descrip: req.body.descrip,
          codmail: req.body.codmail,
          asunto: req.body.asunto,
          leido: req.body.leido,
          url_caja: req.body.url_caja,
        },
      });
      res.status(200).json(nuevoMail);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "leer mail") {
      const nuevoMail = await SGI.mails.update({
        data: {
          leido: req.body.leido,
          fecha_leido: new Date(req.body.fecha_leido),
        },
        where: {
          idmail: parseInt(req.body.idmail),
        },
      });
      res.status(200).json(nuevoMail);
    }
  }
}
