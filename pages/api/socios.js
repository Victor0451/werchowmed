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
    if (req.query.f && req.query.f === "maestro") {
      const mae = await werchow.query(`
            SELECT
                m.CONTRATO, 
                m.GRUPO, 
                m.SUCURSAL, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.DOM_LAB, 
                m.PLAN,
                m.SUB_PLAN, 
                m.CALLE, 
                m.NRO_CALLE,
                m.BARRIO, 
                m.NACIMIENTO, 
                m.TELEFONO, 
                m.MOVIL, 
                m.MAIL, 
                c.IMPORTE, 
                m.PRODUCTOR, 
                m.LOCALIDAD, 
                m.DOM_LAB , 
                m.TSEG , 
                "T" as "perfil", 
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA", 
                m.ADHERENTES, 
                TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                m.SEXO,
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'                        
                FROM maestro as m
                INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE m.NRO_DOC = ${req.query.dni}

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "maestro contrato") {
      const mae = await werchow.query(`
            SELECT
                m.CONTRATO, 
                m.GRUPO, 
                m.SUCURSAL, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.DOM_LAB, 
                m.PLAN,
                m.SUB_PLAN, 
                m.CALLE, 
                m.NRO_CALLE,
                m.BARRIO, 
                m.NACIMIENTO, 
                m.TELEFONO, 
                m.MOVIL, 
                m.MAIL, 
                c.IMPORTE, 
                m.PRODUCTOR, 
                m.LOCALIDAD, 
                m.DOM_LAB , 
                m.TSEG , 
                "T" as "perfil", 
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA", 
                m.ADHERENTES, 
                TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                m.SEXO,
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'                        
                FROM maestro as m
                INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE m.CONTRATO = ${req.query.ficha}

    `);

      await werchow.end();
      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "adh") {
      const adh = await werchow.query(`
          SELECT
                a.CONTRATO, 
                a.SUCURSAL, 
                a.NRO_DOC, 
                a.NACIMIENTO,             
                a.SEXO,
                a.APELLIDOS, 
                a.NOMBRES, 
                a.ALTA, 
                a.VIGENCIA, 
                a.NACIMIENTO,
                m.GRUPO,
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA",                 
                TIMESTAMPDIFF(YEAR,a.NACIMIENTO,CURDATE()) "EDAD",                
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'    ,
                "A" as "perfil",
                a.BAJA,
                a.EDAD 'FALLE',
                a.PLAN
                FROM adherent as a
                INNER JOIN maestro as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.CONTRATO = ${req.query.ficha}
                AND a.BAJA IS NULL
                

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(adh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual") {
      const mut = await werchow.query(`
                    SELECT
                        m.CONTRATO, 
                        m.GRUPO, 
                        m.SUCURSAL, 
                        m.NRO_DOC, 
                        m.APELLIDOS,
                        m.NOMBRES, 
                        m.ALTA, 
                        m.VIGENCIA, 
                        m.DOM_LAB, 
                        m.PLAN,
                        m.SUB_PLAN, 
                        m.CALLE, 
                        m.NRO_CALLE,
                        m.BARRIO, 
                        m.NACIMIENTO, 
                        m.TELEFONO, 
                        m.MOVIL, 
                        m.MAIL, 
                        c.IMPORTE, 
                        m.PRODUCTOR, 
                        m.LOCALIDAD, 
                        m.DOM_LAB , 
                        m.TSEG , 
                        "T" as "perfil", 
                        o.NOMBRE "OBRA_SOC",
                        o.CODIGO "COD_OBRA", 
                        m.ADHERENTES, 
                        TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                        m.SEXO,
                        CASE 
                            WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                            WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                            ELSE  null
                        END 'EMPRESA'                        
                        FROM mutual as m
                        INNER JOIN cuo_mutual as c on c.CONTRATO = m.CONTRATO
                        INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                        WHERE m.NRO_DOC = ${req.query.dni}

            `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mut, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual contrato") {
      const mut = await werchow.query(`
                    SELECT
                        m.CONTRATO, 
                        m.GRUPO, 
                        m.SUCURSAL, 
                        m.NRO_DOC, 
                        m.APELLIDOS,
                        m.NOMBRES, 
                        m.ALTA, 
                        m.VIGENCIA, 
                        m.DOM_LAB, 
                        m.PLAN,
                        m.SUB_PLAN, 
                        m.CALLE, 
                        m.NRO_CALLE,
                        m.BARRIO, 
                        m.NACIMIENTO, 
                        m.TELEFONO, 
                        m.MOVIL, 
                        m.MAIL, 
                        c.IMPORTE, 
                        m.PRODUCTOR, 
                        m.LOCALIDAD, 
                        m.DOM_LAB , 
                        m.TSEG , 
                        "T" as "perfil", 
                        o.NOMBRE "OBRA_SOC",
                        o.CODIGO "COD_OBRA", 
                        m.ADHERENTES, 
                        TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                        m.SEXO,
                        CASE 
                            WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                            WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                            ELSE  null
                        END 'EMPRESA'                        
                        FROM mutual as m
                        INNER JOIN cuo_mutual as c on c.CONTRATO = m.CONTRATO
                        INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                        WHERE m.CONTRATO = ${req.query.ficha}

            `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mut, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "werchow titulares") {
      const mut = await werchow.query(`
                      SELECT
                          m.CONTRATO, 
                          m.GRUPO, 
                          m.SUCURSAL, 
                          m.NRO_DOC, 
                          m.APELLIDOS,
                          m.NOMBRES, 
                          m.ALTA, 
                          m.VIGENCIA, 
                          m.DOM_LAB, 
                          m.PLAN,
                          m.SUB_PLAN, 
                          m.CALLE, 
                          m.NRO_CALLE,
                          m.BARRIO, 
                          m.NACIMIENTO, 
                          m.TELEFONO, 
                          m.MOVIL, 
                          m.MAIL, 
                          c.IMPORTE, 
                          m.PRODUCTOR, 
                          m.LOCALIDAD, 
                          m.DOM_LAB , 
                          m.TSEG , 
                          "T" as "perfil", 
                          o.NOMBRE "OBRA_SOC",
                          o.CODIGO "COD_OBRA", 
                          m.ADHERENTES, 
                          TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                          m.SEXO,
                          CASE 
                              WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                              WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                              ELSE  null
                          END 'EMPRESA'                        
                          FROM maestro as m
                          INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
                          INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC                         
  
              `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mut, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual titulares") {
      const mut = await werchow.query(`
                      SELECT
                          m.CONTRATO, 
                          m.GRUPO, 
                          m.SUCURSAL, 
                          m.NRO_DOC, 
                          m.APELLIDOS,
                          m.NOMBRES, 
                          m.ALTA, 
                          m.VIGENCIA, 
                          m.DOM_LAB, 
                          m.PLAN,
                          m.SUB_PLAN, 
                          m.CALLE, 
                          m.NRO_CALLE,
                          m.BARRIO, 
                          m.NACIMIENTO, 
                          m.TELEFONO, 
                          m.MOVIL, 
                          m.MAIL, 
                          c.IMPORTE, 
                          m.PRODUCTOR, 
                          m.LOCALIDAD, 
                          m.DOM_LAB , 
                          m.TSEG , 
                          "T" as "perfil", 
                          o.NOMBRE "OBRA_SOC",
                          o.CODIGO "COD_OBRA", 
                          m.ADHERENTES, 
                          TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                          m.SEXO,
                          CASE 
                              WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                              WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                              ELSE  null
                          END 'EMPRESA'                        
                          FROM mutual as m
                          INNER JOIN cuo_mutual as c on c.CONTRATO = m.CONTRATO
                          INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC                         
  
              `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mut, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "san miguel titulares") {
      const mut = await sanmiguel.query(`
                      SELECT
                          m.CONTRATO, 
                          m.GRUPO, 
                          m.SUCURSAL, 
                          m.NRO_DOC, 
                          m.APELLIDOS,
                          m.NOMBRES, 
                          m.ALTA, 
                          m.VIGENCIA, 
                          m.DOM_LAB, 
                          m.PLAN,                          
                          m.CALLE, 
                          m.NRO_CALLE,
                          m.BARRIO, 
                          m.NACIMIENTO, 
                          m.TELEFONO, 
                          m.MOVIL, 
                          m.MAIL, 
                          c.IMPORTE, 
                          m.PRODUCTOR, 
                          m.LOCALIDAD, 
                          m.DOM_LAB ,                           
                          "T" as "perfil", 
                          o.NOMBRE "OBRA_SOC",
                          o.CODIGO "COD_OBRA", 
                          m.ADHERENTES, 
                          TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                          m.SEXO,
                          CASE 
                              WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                              WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                              WHEN m.EMPRESA = "SM" THEN  "SAN MIGUEL"
                              ELSE  null
                          END 'EMPRESA'                        
                          FROM maestro as m
                          INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
                          INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC                         
  
              `);

      await sanmiguel.end();

      res
        .status(200)
        .json(
          JSON.stringify(mut, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mutual adh") {
      const mutAdh = await werchow.query(`
        SELECT
                a.CONTRATO, 
                a.SUCURSAL, 
                a.NRO_DOC, 
                a.NACIMIENTO,             
                a.SEXO,
                a.APELLIDOS, 
                a.NOMBRES, 
                a.ALTA, 
                a.VIGENCIA, 
                a.NACIMIENTO,
                m.GRUPO,
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA",                 
                TIMESTAMPDIFF(YEAR,a.NACIMIENTO,CURDATE()) "EDAD",                
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'    ,
                "A" as "perfil",
                a.BAJA,
                a.EDAD 'FALLE',
                a.PLAN
                FROM mutual_adh as a
                INNER JOIN mutual as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.CONTRATO = ${req.query.contrato}
                AND BAJA IS NULL

    `);

      await werchow.end();
      res
        .status(200)
        .json(
          JSON.stringify(mutAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mae adh") {
      const maeAdh = await werchow.query(`
            SELECT
                a.CONTRATO, 
                a.SUCURSAL, 
                a.NRO_DOC, 
                a.NACIMIENTO,             
                a.SEXO,
                a.APELLIDOS, 
                a.NOMBRES, 
                a.ALTA, 
                a.VIGENCIA, 
                a.NACIMIENTO,
                m.GRUPO,
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA",                 
                TIMESTAMPDIFF(YEAR,a.NACIMIENTO,CURDATE()) "EDAD",                
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'    ,
                "A" as "perfil",
                a.EDAD 'FALLE',
                a.PLAN
                FROM adherent as a
                INNER JOIN maestro as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.NRO_DOC = ${req.query.dni}
                AND BAJA IS NULL

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(maeAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "mut adh") {
      const mutAdh = await werchow.query(`
            SELECT
                a.CONTRATO, 
                a.SUCURSAL, 
                a.NRO_DOC, 
                a.NACIMIENTO,             
                a.SEXO,
                a.APELLIDOS, 
                a.NOMBRES, 
                a.ALTA, 
                a.VIGENCIA, 
                a.NACIMIENTO,
                m.GRUPO,
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA",                 
                TIMESTAMPDIFF(YEAR,a.NACIMIENTO,CURDATE()) "EDAD",                
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'    ,
                "A" as "perfil",
                a.EDAD 'FALLE',
                a.PLAN
                FROM mutual_adh as a
                INNER JOIN mutual as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.NRO_DOC = ${req.query.dni}
                AND BAJA IS NULL

    `);

      await werchow.end();

      res
        .status(200)
        .json(
          JSON.stringify(mutAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "san miguel contrato") {
      const mae = await sanmiguel.query(`
            SELECT
                m.CONTRATO, 
                m.GRUPO, 
                m.SUCURSAL, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.DOM_LAB, 
                m.PLAN,
                m.CALLE, 
                m.NRO_CALLE,
                m.BARRIO, 
                m.NACIMIENTO, 
                m.TELEFONO, 
                m.MOVIL, 
                m.MAIL, 
                c.IMPORTE, 
                m.PRODUCTOR, 
                m.LOCALIDAD, 
                m.DOM_LAB ,               
                "T" as "perfil", 
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA", 
                m.ADHERENTES, 
                TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                m.SEXO,
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    WHEN m.EMPRESA = "SM" THEN  "SAN MIGUEL"
                    ELSE  null
                END 'EMPRESA'                        
                FROM maestro as m
                INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE m.CONTRATO = ${req.query.ficha}

    `);

      await sanmiguel.end();
      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
    if (req.query.f && req.query.f === "san miguel") {
      const mae = await sanmiguel.query(`
            SELECT
                m.CONTRATO, 
                m.GRUPO, 
                m.SUCURSAL, 
                m.NRO_DOC, 
                m.APELLIDOS,
                m.NOMBRES, 
                m.ALTA, 
                m.VIGENCIA, 
                m.DOM_LAB, 
                m.PLAN,               
                m.CALLE, 
                m.NRO_CALLE,
                m.BARRIO, 
                m.NACIMIENTO, 
                m.TELEFONO, 
                m.MOVIL, 
                m.MAIL, 
                c.IMPORTE, 
                m.PRODUCTOR, 
                m.LOCALIDAD, 
                m.DOM_LAB ,                 
                "T" as "perfil", 
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA", 
                m.ADHERENTES, 
                TIMESTAMPDIFF(YEAR,m.NACIMIENTO,CURDATE()) "EDAD",  
                m.SEXO,
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    WHEN m.EMPRESA = "SM" THEN  "SAN MIGUEL"
                    ELSE  null
                END 'EMPRESA'                        
                FROM maestro as m
                INNER JOIN cuo_fija as c on c.CONTRATO = m.CONTRATO
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE m.NRO_DOC = ${req.query.dni}

    `);

      await sanmiguel.end();

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "adh san miguel") {
      const adh = await sanmiguel.query(`
          SELECT
                a.CONTRATO, 
                a.SUCURSAL, 
                a.NRO_DOC, 
                a.NACIMIENTO,             
                a.SEXO,
                a.APELLIDOS, 
                a.NOMBRES, 
                a.ALTA, 
                a.VIGENCIA, 
                a.NACIMIENTO,
                m.GRUPO,
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA",                 
                TIMESTAMPDIFF(YEAR,a.NACIMIENTO,CURDATE()) "EDAD",                
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'    ,
                "A" as "perfil",
                a.BAJA,
                a.EDAD 'FALLE',
                a.PLAN
                FROM adherent as a
                INNER JOIN maestro as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.CONTRATO = ${req.query.ficha}
                AND BAJA IS NULL

    `);

      await sanmiguel.end();

      res
        .status(200)
        .json(
          JSON.stringify(adh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "adh san miguel dni") {
      const mutAdh = await sanmiguel.query(`
            SELECT
                a.CONTRATO, 
                a.SUCURSAL, 
                a.NRO_DOC, 
                a.NACIMIENTO,             
                a.SEXO,
                a.APELLIDOS, 
                a.NOMBRES, 
                a.ALTA, 
                a.VIGENCIA, 
                a.NACIMIENTO,
                m.GRUPO,
                o.NOMBRE "OBRA_SOC",
                o.CODIGO "COD_OBRA",                 
                TIMESTAMPDIFF(YEAR,a.NACIMIENTO,CURDATE()) "EDAD",                
                CASE 
                    WHEN m.EMPRESA = "W" THEN  "WERCHOW"
                    WHEN m.EMPRESA = "M" THEN  "MUTUAL"
                    ELSE  null
                END 'EMPRESA'    ,
                "A" as "perfil",
                a.EDAD 'FALLE',
                a.PLAN
                FROM adherent as a
                INNER JOIN maestro as m on a.CONTRATO = m.CONTRATO                  
                INNER JOIN obra_soc as o on o.CODIGO = m.OBRA_SOC
                WHERE a.NRO_DOC = ${req.query.dni}
                AND BAJA IS NULL

    `);

      await sanmiguel.end();
      res
        .status(200)
        .json(
          JSON.stringify(mutAdh, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer grupo") {
      const grup = await werchow.query(`
            SELECT
                CODIGO,
                DESCRIP                
            FROM grupos 
            WHERE CODIGO = ${req.query.grupo}
                

    `);

      await werchow.end();

      res.status(200).json(grup);
    } else if (req.query.f && req.query.f === "traer pagos") {
      if (req.query.empre === "WERCHOW") {
        const pagos = await werchow.query(
          `
                SELECT *
                FROM pagos
                WHERE CONTRATO = ${parseInt(req.query.ficha)}
                AND MOVIM = 'P'
                ORDER BY DIA_PAG DESC
          `
        );

        await werchow.end();

        res.status(200).json(pagos);
      } else if (req.query.empre === "MUTUAL") {
        const pagos = await werchow.query(
          `
                SELECT *
                FROM pagos_mutual
                WHERE CONTRATO = ${parseInt(req.query.ficha)}
                AND MOVIM = 'P'
                ORDER BY DIA_PAG DESC
          `
        );

        await werchow.end();

        res.status(200).json(pagos);
      } else if (req.query.empre === "SAN MIGUEL") {
        const pagos = await sanmiguel.query(
          `
                SELECT *
                FROM pagos
                WHERE CONTRATO = ${parseInt(req.query.ficha)}
                AND MOVIM = 'P'
                ORDER BY DIA_PAG DESC
          `
        );

        await sanmiguel.end();

        res.status(200).json(pagos);
      }
    } else if (req.query.f && req.query.f === "traer pagosb") {
      if (req.query.empre === "WERCHOW") {
        const pagos = await werchow.query(
          `
          SELECT *
          FROM pago_bco
          WHERE CONTRATO = ${parseInt(req.query.ficha)}  
          ORDER BY DIA_PAGO DESC
          `
        );
        await werchow.end();
        res.status(200).json(pagos);
      } else if (req.query.empre === "MUTUAL") {
        const pagos = await werchow.query(
          `
                SELECT *
                FROM pago_bcom
                WHERE CONTRATO = ${parseInt(req.query.ficha)}                
                ORDER BY DIA_PAGO DESC
          `
        );

        await werchow.end();
        res.status(200).json(pagos);
      } else if (req.query.empre === "SAN MIGUEL") {
        const pagos = await sanmiguel.query(
          `
                SELECT *
                FROM pago_bco
                WHERE CONTRATO = ${parseInt(req.query.ficha)}                
                ORDER BY DIA_PAGO DESC
          `
        );

        await sanmiguel.end();
        res.status(200).json(pagos);
      }
    } else if (req.query.f && req.query.f === "traer usos") {
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
          'WEB' AS SISTEMA,
          u.ORDEN
        FROM
          USOS AS u
        INNER JOIN PRESTADO AS p ON p.COD_PRES = u.PRESTADO
        WHERE
          u.CONTRATO = ${parseInt(req.query.contrato)}
        ORDER BY u.FECHA DESC
              `);

      await serv.end();

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
          'FOX' AS SISTEMA,
          u.ORDEN
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
    }
  }
}
