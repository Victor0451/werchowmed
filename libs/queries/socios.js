import { getTenantConfig } from "../tenants/config";

/**
 * Construye la cláusula CASE para el campo EMPRESA
 * @param {object} empresaCodes - Objeto con códigos de empresa
 * @returns {string} Cláusula CASE SQL
 */
function buildEmpresaCase(empresaCodes) {
    const cases = Object.entries(empresaCodes)
        .map(([code, name]) => `WHEN m.EMPRESA = "${code}" THEN "${name}"`)
        .join("\n                ");

    return `CASE 
                ${cases}
                ELSE null
            END AS EMPRESA`;
}

/**
 * Construye query para obtener datos del maestro (titular)
 * @param {string} tenantName - Nombre del tenant
 * @param {string} searchBy - Tipo de búsqueda: 'dni' o 'contrato'
 * @returns {object} { sql, params }
 */
export function buildMaestroQuery(tenantName, searchBy = "dni") {
    const config = getTenantConfig(tenantName);
    const { maestro, cuoFija, obraSoc } = config.tables;

    const baseFields = `
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
        m.SEXO,
        m.ADHERENTES,
        TIMESTAMPDIFF(YEAR, m.NACIMIENTO, CURDATE()) AS EDAD,
        o.NOMBRE AS OBRA_SOC,
        o.CODIGO AS COD_OBRA,
        "T" AS perfil`;

    const empresaCase = buildEmpresaCase(config.empresaCodes);
    const whereClause = searchBy === "dni" ? "WHERE m.NRO_DOC = ?" : "WHERE m.CONTRATO = ?";

    const sql = `
        SELECT 
            ${baseFields},
            ${empresaCase}
        FROM ${maestro} AS m
        LEFT JOIN ${cuoFija} AS c ON c.CONTRATO = m.CONTRATO
        LEFT JOIN ${obraSoc} AS o ON o.CODIGO = m.OBRA_SOC
        ${whereClause}
    `;

    return sql;
}

/**
 * Query para obtener datos de mutual (San Valentín)
 * Mutual es un alias para San Valentín - usa la base de datos sanvalentin
 * @param {string} tenantName - Nombre del tenant (debe ser 'sanvalentin' para mutual)
 * @param {string} searchBy - 'dni' o 'contrato'
 * @returns {string} SQL query
 */
export function buildMutualQuery(tenantName, searchBy = "dni") {
    // Mutual siempre usa San Valentín
    const config = getTenantConfig("sanvalentin");
    const { maestro, cuoFija, obraSoc } = config.tables;

    const baseFields = `
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
        m.SEXO,
        m.ADHERENTES,
        TIMESTAMPDIFF(YEAR, m.NACIMIENTO, CURDATE()) AS EDAD,
        o.NOMBRE AS OBRA_SOC,
        o.CODIGO AS COD_OBRA,
        "T" AS perfil`;

    const empresaCase = buildEmpresaCase(config.empresaCodes);
    const whereClause = searchBy === "dni" ? "WHERE m.NRO_DOC = ?" : "WHERE m.CONTRATO = ?";

    const sql = `
        SELECT 
            ${baseFields},
            ${empresaCase}
        FROM ${maestro} AS m
        LEFT JOIN ${cuoFija} AS c ON c.CONTRATO = m.CONTRATO
        LEFT JOIN ${obraSoc} AS o ON o.CODIGO = m.OBRA_SOC
        ${whereClause}
    `;

    return sql;
}

/**
 * Construye query para obtener adherentes
 * @param {string} tenantName - Nombre del tenant
 * @param {string} searchBy - Tipo de búsqueda: 'contrato' o 'dni'
 * @returns {string} SQL query
 */
export function buildAdherentQuery(tenantName, searchBy = "contrato") {
    const config = getTenantConfig(tenantName);
    const { adherent, maestro, obraSoc } = config.tables;

    const empresaCase = buildEmpresaCase(config.empresaCodes);
    const whereClause = searchBy === "dni"
        ? "WHERE a.NRO_DOC = ? AND a.BAJA IS NULL"
        : "WHERE a.CONTRATO = ? AND a.BAJA IS NULL";

    const sql = `
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
            m.GRUPO,
            o.NOMBRE AS OBRA_SOC,
            o.CODIGO AS COD_OBRA,                 
            TIMESTAMPDIFF(YEAR, a.NACIMIENTO, CURDATE()) AS EDAD,
            ${empresaCase},
            "A" AS perfil,
            a.BAJA,
            a.EDAD AS FALLE,
            a.PLAN
        FROM ${adherent} AS a
        LEFT JOIN ${maestro} AS m ON a.CONTRATO = m.CONTRATO                  
        LEFT JOIN ${obraSoc} AS o ON o.CODIGO = m.OBRA_SOC
        ${whereClause}
    `;

    return sql;
}

/**
 * Construye query para obtener adherentes de mutual (San Valentín)
 * @param {string} tenantName - Nombre del tenant (ignorado, siempre usa sanvalentin)
 * @param {string} searchBy - Tipo de búsqueda: 'contrato' o 'dni'
 * @returns {string} SQL query
 */
export function buildMutualAdhQuery(tenantName, searchBy = "contrato") {
    // Mutual siempre usa San Valentín
    const config = getTenantConfig("sanvalentin");
    const { adherent, maestro, obraSoc } = config.tables;

    const empresaCase = buildEmpresaCase(config.empresaCodes);
    const whereClause = searchBy === "dni"
        ? "WHERE a.NRO_DOC = ? AND a.BAJA IS NULL"
        : "WHERE a.CONTRATO = ? AND a.BAJA IS NULL";

    const sql = `
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
            m.GRUPO,
            o.NOMBRE AS OBRA_SOC,
            o.CODIGO AS COD_OBRA,                 
            TIMESTAMPDIFF(YEAR, a.NACIMIENTO, CURDATE()) AS EDAD,
            ${empresaCase},
            "A" AS perfil,
            a.BAJA,
            a.EDAD AS FALLE,
            a.PLAN
        FROM ${adherent} AS a
        LEFT JOIN ${maestro} AS m ON a.CONTRATO = m.CONTRATO                  
        LEFT JOIN ${obraSoc} AS o ON o.CODIGO = m.OBRA_SOC
        ${whereClause}
    `;

    return sql;
}

/**
 * Construye query para obtener todos los titulares (maestro o mutual)
 * @param {string} tenantName - Nombre del tenant
 * @param {string} tipo - 'maestro' o 'mutual'
 * @returns {string} SQL query
 */
export function buildAllMaestroQuery(tenantName) {
    const config = getTenantConfig(tenantName);
    const { maestro, cuoFija, obraSoc } = config.tables;
    const table = maestro;
    const cuoTable = cuoFija;

    const baseFields = `
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
        m.SEXO,
        m.ADHERENTES,
        TIMESTAMPDIFF(YEAR, m.NACIMIENTO, CURDATE()) AS EDAD,
        o.NOMBRE AS OBRA_SOC,
        o.CODIGO AS COD_OBRA,
        "T" AS perfil`;

    const empresaCase = buildEmpresaCase(config.empresaCodes);

    const sql = `
        SELECT 
            ${baseFields},
            ${empresaCase}
        FROM ${table} AS m
        LEFT JOIN ${cuoTable} AS c ON c.CONTRATO = m.CONTRATO
        LEFT JOIN ${obraSoc} AS o ON o.CODIGO = m.OBRA_SOC
    `;

    return sql;
}

/**
 * Construye query para obtener grupo
 * @param {string} tenantName - Nombre del tenant
 * @returns {string} SQL query
 */
export function buildGrupoQuery(tenantName) {
    const config = getTenantConfig(tenantName);
    const { grupos } = config.tables;

    const sql = `
        SELECT
            CODIGO,
            DESCRIP                
        FROM ${grupos}
        WHERE CODIGO = ?
    `;

    return sql;
}

/**
 * Construye query para obtener pagos
 * @param {string} tenantName - Nombre del tenant
 * @param {string} tipo - 'maestro' o 'mutual'
 * @returns {string} SQL query
 */
export function buildPagosQuery(tenantName, tipo = "maestro") {
    const config = getTenantConfig(tenantName);
    const { pagos } = config.tables;

    const sql = `
        SELECT *
        FROM ${pagos}
        WHERE CONTRATO = ?
        AND MOVIM = 'P'
        ORDER BY DIA_PAG DESC
    `;

    return sql;
}

/**
 * Construye query para obtener pagos bancarios
 * @param {string} tenantName - Nombre del tenant
 * @param {string} tipo - 'maestro' o 'mutual'
 * @returns {string} SQL query
 */
export function buildPagosBcoQuery(tenantName, tipo = "maestro") {
    const config = getTenantConfig(tenantName);
    const { pagoBco } = config.tables;

    const sql = `
        SELECT *
        FROM ${pagoBco}
        WHERE CONTRATO = ?
        ORDER BY DIA_PAGO DESC
    `;

    return sql;
}
