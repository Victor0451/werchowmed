import {
    werchow,
    sanmiguel,
    sanvalentin,
} from "../db/index";

/**
 * Configuración centralizada de tenants (empresas)
 * Cada tenant tiene su propia base de datos y estructura de tablas
 */
export const TENANTS = {
    werchow: {
        db: werchow,
        name: "Werchow",
        tables: {
            maestro: "maestro",
            adherent: "adherent",
            cuoFija: "cuo_fija",
            pagos: "pagos",
            pagoBco: "pago_bco",
            obraSoc: "obra_soc",
            grupos: "grupos",
        },
        empresaCodes: {
            W: "WERCHOW",
            M: "MUTUAL",
        },
    },
    sanmiguel: {
        db: sanmiguel,
        name: "San Miguel",
        tables: {
            maestro: "maestro",
            adherent: "adherent",
            cuoFija: "cuo_fija",
            pagos: "pagos",
            pagoBco: "pago_bco",
            obraSoc: "obra_soc",
            grupos: "grupos",
        },
        empresaCodes: {
            SM: "SAN MIGUEL",
        },
    },
    sanvalentin: {
        db: sanvalentin,
        name: "San Valentín",
        tables: {
            maestro: "maestro",
            adherent: "adherent",
            cuoFija: "cuo_fija",
            pagos: "pagos",
            pagoBco: "pago_bco",
            obraSoc: "obra_soc",
            grupos: "grupos",
        },
        empresaCodes: {
            SV: "SAN VALENTIN",
        },
    },
};

/**
 * Obtiene la configuración de un tenant por su nombre
 * @param {string} tenantName - Nombre del tenant (werchow, sanmiguel, sanvalentin)
 * @returns {object} Configuración del tenant
 */
export function getTenantConfig(tenantName) {
    const config = TENANTS[tenantName.toLowerCase()];
    if (!config) {
        throw new Error(`Tenant '${tenantName}' no encontrado`);
    }
    return config;
}

/**
 * Verifica si un tenant es válido
 * @param {string} tenantName - Nombre del tenant
 * @returns {boolean}
 */
export function isValidTenant(tenantName) {
    return tenantName && TENANTS.hasOwnProperty(tenantName.toLowerCase());
}
