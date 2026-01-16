import { getTenantConfig } from "../tenants/config";
import {
    buildMaestroQuery,
    buildMutualQuery,
    buildAdherentQuery,
    buildMutualAdhQuery,
    buildAllMaestroQuery,
    buildGrupoQuery,
    buildPagosQuery,
    buildPagosBcoQuery,
} from "../queries/socios";

/**
 * Helper para ejecutar queries de forma segura
 * @param {object} db - Conexión de base de datos
 * @param {string} sql - Query SQL
 * @param {array} params - Parámetros para la query
 * @returns {Promise<array>} Resultados de la query
 */
async function safeQuery(db, sql, params = []) {
    try {
        const result = await db.query(sql, params);
        return result;
    } finally {
        // SIEMPRE cerrar la conexión, incluso si hay error
        await db.end();
    }
}

/**
 * Serializa BigInt a string para JSON
 * @param {array} data - Datos a serializar
 * @returns {string} JSON string
 */
function serializeBigInt(data) {
    return JSON.stringify(data, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
    );
}

// ==================== MAESTRO ====================

/**
 * Obtiene datos del maestro por DNI
 * @param {string} tenantName - Nombre del tenant
 * @param {string} dni - DNI a buscar
 * @returns {Promise<array>} Datos del maestro
 */
export async function getMaestroByDni(tenantName, dni) {
    const config = getTenantConfig(tenantName);
    const sql = buildMaestroQuery(tenantName, "dni");
    return await safeQuery(config.db, sql, [dni]);
}

/**
 * Obtiene datos del maestro por contrato
 * @param {string} tenantName - Nombre del tenant
 * @param {string} contrato - Número de contrato
 * @returns {Promise<array>} Datos del maestro
 */
export async function getMaestroByContrato(tenantName, contrato) {
    const config = getTenantConfig(tenantName);
    const sql = buildMaestroQuery(tenantName, "contrato");
    return await safeQuery(config.db, sql, [contrato]);
}

/**
 * Obtiene todos los titulares del maestro
 * @param {string} tenantName - Nombre del tenant
 * @returns {Promise<array>} Lista de titulares
 */
export async function getMaestroTitulares(tenantName) {
    const config = getTenantConfig(tenantName);
    const sql = buildAllMaestroQuery(tenantName, "maestro");
    return await safeQuery(config.db, sql, []);
}

// ==================== MUTUAL (SAN VALENTÍN) ====================

/**
 * Obtiene datos de mutual por DNI (San Valentín)
 * Mutual es un alias para San Valentín
 * @param {string} tenantName - Ignorado, siempre usa sanvalentin
 * @param {string} dni - DNI a buscar
 * @returns {Promise<array>} Datos de mutual
 */
export async function getMutualByDni(tenantName, dni) {
    // Mutual siempre usa San Valentín
    const config = getTenantConfig("sanvalentin");
    const sql = buildMutualQuery("sanvalentin", "dni");
    return await safeQuery(config.db, sql, [dni]);
}

/**
 * Obtiene datos de mutual por contrato (San Valentín)
 * Mutual es un alias para San Valentín
 * @param {string} tenantName - Ignorado, siempre usa sanvalentin
 * @param {string} contrato - Número de contrato
 * @returns {Promise<array>} Datos de mutual
 */
export async function getMutualByContrato(tenantName, contrato) {
    // Mutual siempre usa San Valentín
    const config = getTenantConfig("sanvalentin");
    const sql = buildMutualQuery("sanvalentin", "contrato");
    return await safeQuery(config.db, sql, [contrato]);
}

/**
 * Obtiene todos los titulares de mutual
 * @param {string} tenantName - Nombre del tenant
 * @returns {Promise<array>} Lista de titulares
 */
export async function getMutualTitulares(tenantName) {
    const config = getTenantConfig(tenantName);
    const sql = buildAllMaestroQuery(tenantName, "mutual");
    return await safeQuery(config.db, sql, []);
}

// ==================== ADHERENTES ====================

/**
 * Obtiene adherentes por contrato
 * @param {string} tenantName - Nombre del tenant
 * @param {string} contrato - Número de contrato
 * @returns {Promise<array>} Lista de adherentes
 */
export async function getAdherentesByContrato(tenantName, contrato) {
    const config = getTenantConfig(tenantName);
    const sql = buildAdherentQuery(tenantName, "contrato");
    return await safeQuery(config.db, sql, [contrato]);
}

/**
 * Obtiene adherentes por DNI
 * @param {string} tenantName - Nombre del tenant
 * @param {string} dni - DNI a buscar
 * @returns {Promise<array>} Lista de adherentes
 */
export async function getAdherentesByDni(tenantName, dni) {
    const config = getTenantConfig(tenantName);
    const sql = buildAdherentQuery(tenantName, "dni");
    return await safeQuery(config.db, sql, [dni]);
}

/**
 * Obtiene adherentes de mutual por contrato
 * @param {string} tenantName - Nombre del tenant
 * @param {string} contrato - Número de contrato
 * @returns {Promise<array>} Lista de adherentes
 */
export async function getMutualAdhByContrato(tenantName, contrato) {
    const config = getTenantConfig(tenantName);
    const sql = buildMutualAdhQuery(tenantName, "contrato");
    return await safeQuery(config.db, sql, [contrato]);
}

/**
 * Obtiene adherentes de mutual por DNI
 * @param {string} tenantName - Nombre del tenant
 * @param {string} dni - DNI a buscar
 * @returns {Promise<array>} Lista de adherentes
 */
export async function getMutualAdhByDni(tenantName, dni) {
    const config = getTenantConfig(tenantName);
    const sql = buildMutualAdhQuery(tenantName, "dni");
    return await safeQuery(config.db, sql, [dni]);
}

// ==================== GRUPOS ====================

/**
 * Obtiene información de un grupo
 * @param {string} tenantName - Nombre del tenant
 * @param {string} codigo - Código del grupo
 * @returns {Promise<array>} Datos del grupo
 */
export async function getGrupo(tenantName, codigo) {
    const config = getTenantConfig(tenantName);
    const sql = buildGrupoQuery(tenantName);
    return await safeQuery(config.db, sql, [codigo]);
}

// ==================== PAGOS ====================

/**
 * Obtiene pagos por contrato
 * @param {string} tenantName - Nombre del tenant
 * @param {string} contrato - Número de contrato
 * @param {string} tipo - 'maestro' o 'mutual'
 * @returns {Promise<array>} Lista de pagos
 */
export async function getPagos(tenantName, contrato, tipo = "maestro") {
    const config = getTenantConfig(tenantName);
    const sql = buildPagosQuery(tenantName, tipo);
    return await safeQuery(config.db, sql, [parseInt(contrato)]);
}

/**
 * Obtiene pagos bancarios por contrato
 * @param {string} tenantName - Nombre del tenant
 * @param {string} contrato - Número de contrato
 * @param {string} tipo - 'maestro' o 'mutual'
 * @returns {Promise<array>} Lista de pagos bancarios
 */
export async function getPagosBco(tenantName, contrato, tipo = "maestro") {
    const config = getTenantConfig(tenantName);
    const sql = buildPagosBcoQuery(tenantName, tipo);
    return await safeQuery(config.db, sql, [parseInt(contrato)]);
}

// ==================== USOS (SERVICIOS) ====================

/**
 * Obtiene historial de usos de servicios médicos
 * @param {string} contrato - Número de contrato
 * @returns {Promise<array>} Historial de usos
 */
export async function getUsos(contrato) {
    const { serv } = require("../db/index");

    try {
        // Usos del sistema WEB
        const usos = await serv.query(
            `
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
        FROM USOS AS u
        INNER JOIN PRESTADO AS p ON p.COD_PRES = u.PRESTADO
        WHERE u.CONTRATO = ?
        ORDER BY u.FECHA DESC
      `,
            [parseInt(contrato)]
        );

        // Usos del sistema FOX (legacy)
        const usosFa = await serv.query(
            `
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
        FROM USOSFA AS u
        INNER JOIN PRESTADO AS p ON p.COD_PRES = u.PRESTADO
        WHERE u.CONTRATO = ?
        ORDER BY u.FECHA DESC
      `,
            [parseInt(contrato)]
        );

        // Combinar ambos resultados
        return usos.concat(usosFa);
    } finally {
        await serv.end();
    }
}
