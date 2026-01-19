import axios from "axios";
import { buscarSocioPorContrato, obtenerAdherentes, obtenerPagos, obtenerPagosBancarios } from "./sociosApi";

/**
 * Helper para buscar titular por contrato con lógica de empresa
 * Si se especifica tenantEspecifico, busca solo en ese tenant
 * Si no, intenta buscar en Werchow Maestro, luego Mutual, luego San Miguel
 * @param {string} contrato - Número de contrato
 * @param {string} [tenantEspecifico] - Tenant específico: 'werchow', 'sanvalentin', 'sanmiguel'
 * @returns {Promise<{ficha: object|null, empresa: string}>}
 */
export async function buscarTitularPorContrato(contrato, tenantEspecifico = null) {
    if (!contrato || !/^\d+$/.test(contrato)) {
        throw new Error("Debes ingresar un número de contrato válido");
    }

    try {
        // Si se especifica un tenant, buscar solo en ese tenant
        if (tenantEspecifico) {
            const resultado = await buscarSocioPorContrato(contrato, tenantEspecifico, "maestro");
            if (resultado) {
                let empresa = "";
                if (tenantEspecifico === "werchow") empresa = "W";
                else if (tenantEspecifico === "sanvalentin") empresa = "M";
                else if (tenantEspecifico === "sanmiguel") empresa = "SM";
                return { ficha: [resultado], empresa };
            }
            return { ficha: null, empresa: "" };
        }

        // Búsqueda secuencial en todos los tenants
        // 1. Intentar Werchow Maestro
        const werchowMaestro = await buscarSocioPorContrato(contrato, "werchow", "maestro");
        if (werchowMaestro) {
            return { ficha: [werchowMaestro], empresa: "W" };
        }

        // 2. Intentar San Valentín (Mutual)
        const sanValentin = await buscarSocioPorContrato(contrato, "sanvalentin", "maestro");
        if (sanValentin) {
            return { ficha: [sanValentin], empresa: "M" };
        }

        // 3. Intentar San Miguel
        const sanMiguel = await buscarSocioPorContrato(contrato, "sanmiguel", "maestro");
        if (sanMiguel) {
            return { ficha: [sanMiguel], empresa: "SM" };
        }

        return { ficha: null, empresa: "" };
    } catch (error) {
        console.error("Error al buscar titular por contrato:", error);
        throw error;
    }
}

/**
 * Helper para buscar titular por DNI con lógica de empresa
 * Si se especifica tenantEspecifico, busca solo en ese tenant
 * Si no, intenta buscar en todos los tenants secuencialmente
 * @param {string} dni - DNI a buscar
 * @param {string} [tenantEspecifico] - Tenant específico: 'werchow', 'sanvalentin', 'sanmiguel'
 * @returns {Promise<{ficha: object|null, empresa: string}>}
 */
export async function buscarTitularPorDni(dni, tenantEspecifico = null) {
    if (!dni || !/^\d{7,8}$/.test(dni)) {
        throw new Error("DNI inválido. Debe tener 7-8 dígitos.");
    }

    try {
        // Si se especifica un tenant, buscar solo en ese tenant
        if (tenantEspecifico) {
            let response;
            let empresa = "";

            if (tenantEspecifico === "werchow") {
                response = await axios.get("/api/socios", {
                    params: { f: "maestro", tenant: "werchow", dni },
                });
                empresa = "W";
            } else if (tenantEspecifico === "sanvalentin") {
                response = await axios.get("/api/socios", {
                    params: { f: "mutual", dni },
                });
                empresa = "M";
            } else if (tenantEspecifico === "sanmiguel") {
                response = await axios.get("/api/socios", {
                    params: { f: "maestro", tenant: "sanmiguel", dni },
                });
                empresa = "SM";
            }

            if (response && response.data && response.data.length > 0) {
                return { ficha: response.data, empresa };
            }
            return { ficha: null, empresa: "" };
        }

        // Búsqueda secuencial en todos los tenants
        // 1. Werchow Maestro
        const werchowMaestro = await axios.get("/api/socios", {
            params: { f: "maestro", tenant: "werchow", dni },
        });
        if (werchowMaestro.data && werchowMaestro.data.length > 0) {
            return { ficha: werchowMaestro.data, empresa: "W" };
        }

        // 2. San Valentín (Mutual)
        const sanValentin = await axios.get("/api/socios", {
            params: { f: "mutual", dni },
        });
        if (sanValentin.data && sanValentin.data.length > 0) {
            return { ficha: sanValentin.data, empresa: "M" };
        }

        // 3. San Miguel
        const sanMiguel = await axios.get("/api/socios", {
            params: { f: "maestro", tenant: "sanmiguel", dni },
        });
        if (sanMiguel.data && sanMiguel.data.length > 0) {
            return { ficha: sanMiguel.data, empresa: "SM" };
        }

        return { ficha: null, empresa: "" };
    } catch (error) {
        console.error("Error al buscar titular por DNI:", error);
        throw error;
    }
}

/**
 * Helper para obtener adherentes según empresa
 * @param {string} contrato - Número de contrato
 * @param {string} empresa - Código de empresa (W, M, SM, SV)
 * @returns {Promise<array>}
 */
export async function obtenerAdherentesPorEmpresa(contrato, empresa) {
    try {
        if (empresa === "W") {
            return await obtenerAdherentes(contrato, "werchow", "maestro");
        } else if (empresa === "M") {
            // Mutual = San Valentín
            return await obtenerAdherentes(contrato, "sanvalentin", "maestro");
        } else if (empresa === "SM") {
            return await obtenerAdherentes(contrato, "sanmiguel", "maestro");
        }
        return [];
    } catch (error) {
        console.error("Error al obtener adherentes:", error);
        throw error;
    }
}

/**
 * Helper para obtener pagos según empresa
 * @param {string} contrato - Número de contrato
 * @param {string} empresa - Código de empresa (W, M, SM, SV)
 * @returns {Promise<array>}
 */
export async function obtenerPagosPorEmpresa(contrato, empresa) {
    try {
        let empresaNombre;

        if (empresa === "W") {
            empresaNombre = "WERCHOW";
        } else if (empresa === "M") {
            empresaNombre = "MUTUAL"; // San Valentín
        } else if (empresa === "SM") {
            empresaNombre = "SAN MIGUEL";
        } else {
            throw new Error("Empresa no válida");
        }

        return await obtenerPagos(contrato, empresaNombre);
    } catch (error) {
        console.error("Error al obtener pagos:", error);
        throw error;
    }
}

/**
 * Helper para obtener pagos bancarios según empresa
 * @param {string} contrato - Número de contrato
 * @param {string} empresa - Código de empresa (W, M, SM, SV)
 * @returns {Promise<array>}
 */
export async function obtenerPagosBancariosPorEmpresa(contrato, empresa) {
    try {
        let empresaNombre;

        if (empresa === "W") {
            empresaNombre = "WERCHOW";
        } else if (empresa === "M") {
            empresaNombre = "MUTUAL"; // San Valentín
        } else if (empresa === "SM") {
            empresaNombre = "SAN MIGUEL";
        } else {
            throw new Error("Empresa no válida");
        }

        return await obtenerPagosBancarios(contrato, empresaNombre);
    } catch (error) {
        console.error("Error al obtener pagos bancarios:", error);
        throw error;
    }
}

/**
 * Verifica si un socio pertenece a un grupo moroso
 * @param {number} grupo - Código del grupo
 * @returns {boolean}
 */
export function esGrupoMoroso(grupo) {
    const gruposMorosos = [666, 1001, 1005, 1006, 3444, 3666, 3777, 3888, 3999, 4004, 7777, 8500];
    return gruposMorosos.includes(grupo);
}

/**
 * Verifica si un socio usa tarjeta como medio de pago
 * @param {number} grupo - Código del grupo
 * @returns {boolean}
 */
export function esGrupoTarjeta(grupo) {
    return grupo === 3400 || grupo === 3600 || grupo === 3700 ||
        grupo === 3800 || grupo === 3900 || grupo === 4000 || grupo > 5000;
}

/**
 * Verifica si un socio es policía
 * @param {number} grupo - Código del grupo
 * @returns {boolean}
 */
export function esGrupoPolicia(grupo) {
    return grupo === 6;
}

/**
 * Determina qué tipo de pagos traer según el grupo
 * @param {number} grupo - Código del grupo
 * @returns {string} - 'normal', 'bancario', o 'ninguno'
 */
export function determinarTipoPago(grupo) {
    if (esGrupoMoroso(grupo)) {
        return "ninguno";
    } else if (esGrupoTarjeta(grupo) || esGrupoPolicia(grupo)) {
        return "bancario";
    } else if (grupo === 1000) {
        return "normal";
    }
    return "ninguno";
}
