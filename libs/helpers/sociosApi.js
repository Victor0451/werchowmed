import axios from "axios";

/**
 * Helper para buscar un socio por DNI en todos los tenants y tipos
 * Busca en el siguiente orden:
 * 1. Werchow Maestro
 * 2. Werchow Mutual
 * 3. Werchow Adherentes Maestro
 * 4. Werchow Adherentes Mutual
 * 5. San Miguel Maestro
 * 6. San Miguel Adherentes
 * 7. San Valentín Maestro
 * 8. San Valentín Adherentes
 *
 * @param {string} dni - DNI del socio a buscar
 * @returns {Promise<object|null>} Datos del socio o null si no se encuentra
 */
export async function buscarSocioPorDni(dni) {
    if (!dni || !/^\d{7,8}$/.test(dni)) {
        throw new Error("DNI inválido. Debe tener 7-8 dígitos.");
    }

    try {
        // 1. Buscar en Werchow Maestro
        const werchowMaestro = await axios.get("/api/socios", {
            params: { f: "maestro", tenant: "werchow", dni },
        });
        if (werchowMaestro.data && werchowMaestro.data.length > 0) {
            return werchowMaestro.data[0];
        }

        // 2. Buscar en Werchow Mutual
        const werchowMutual = await axios.get("/api/socios", {
            params: { f: "mutual", dni },
        });
        if (werchowMutual.data && werchowMutual.data.length > 0) {
            return werchowMutual.data[0];
        }

        // 3. Buscar en Werchow Adherentes Maestro
        const werchowAdhMae = await axios.get("/api/socios", {
            params: { f: "mae adh", dni },
        });
        if (werchowAdhMae.data && werchowAdhMae.data.length > 0) {
            return werchowAdhMae.data[0];
        }

        // 4. Buscar en Werchow Adherentes Mutual
        const werchowAdhMut = await axios.get("/api/socios", {
            params: { f: "mut adh", dni },
        });
        if (werchowAdhMut.data && werchowAdhMut.data.length > 0) {
            return werchowAdhMut.data[0];
        }

        // 5. Buscar en San Miguel Maestro
        const sanMiguelMaestro = await axios.get("/api/socios", {
            params: { f: "maestro", tenant: "sanmiguel", dni },
        });
        if (sanMiguelMaestro.data && sanMiguelMaestro.data.length > 0) {
            return sanMiguelMaestro.data[0];
        }

        // 6. Buscar en San Miguel Adherentes
        const sanMiguelAdh = await axios.get("/api/socios", {
            params: { f: "adh san miguel dni", dni },
        });
        if (sanMiguelAdh.data && sanMiguelAdh.data.length > 0) {
            return sanMiguelAdh.data[0];
        }

        // 7. Buscar en San Valentín Maestro
        const sanValentinMaestro = await axios.get("/api/socios", {
            params: { f: "maestro", tenant: "sanvalentin", dni },
        });
        if (sanValentinMaestro.data && sanValentinMaestro.data.length > 0) {
            return sanValentinMaestro.data[0];
        }

        // 8. Buscar en San Valentín Adherentes
        const sanValentinAdh = await axios.get("/api/socios", {
            params: { f: "adh", tenant: "sanvalentin", dni },
        });
        if (sanValentinAdh.data && sanValentinAdh.data.length > 0) {
            return sanValentinAdh.data[0];
        }

        // No se encontró en ningún lado
        return null;
    } catch (error) {
        console.error("Error al buscar socio por DNI:", error);
        throw error;
    }
}

/**
 * Helper para buscar un socio por contrato
 * @param {string} contrato - Número de contrato
 * @param {string} tenant - Tenant (werchow, sanmiguel, sanvalentin)
 * @param {string} tipo - Tipo (maestro o mutual)
 * @returns {Promise<object|null>} Datos del socio o null si no se encuentra
 */
export async function buscarSocioPorContrato(contrato, tenant = "werchow", tipo = "maestro") {
    if (!contrato || !/^\d+$/.test(contrato)) {
        throw new Error("Contrato inválido. Debe ser numérico.");
    }

    try {
        const endpoint = tipo === "mutual" ? "mutual contrato" : "maestro contrato";

        const response = await axios.get("/api/socios", {
            params: {
                f: endpoint,
                tenant: tenant,
                ficha: contrato
            },
        });

        if (response.data && response.data.length > 0) {
            return response.data[0];
        }

        return null;
    } catch (error) {
        console.error("Error al buscar socio por contrato:", error);
        throw error;
    }
}

/**
 * Helper para obtener adherentes de un contrato
 * @param {string} contrato - Número de contrato
 * @param {string} tenant - Tenant (werchow, sanmiguel, sanvalentin)
 * @param {string} tipo - Tipo (maestro o mutual)
 * @returns {Promise<array>} Lista de adherentes
 */
export async function obtenerAdherentes(contrato, tenant = "werchow", tipo = "maestro") {
    if (!contrato || !/^\d+$/.test(contrato)) {
        throw new Error("Contrato inválido. Debe ser numérico.");
    }

    try {
        let endpoint;

        if (tenant === "werchow" && tipo === "mutual") {
            endpoint = "mutual adh";
        } else if (tenant === "sanmiguel") {
            endpoint = "adh san miguel";
        } else {
            endpoint = "adh";
        }

        const response = await axios.get("/api/socios", {
            params: {
                f: endpoint,
                ...(endpoint === "adh" && { tenant }),
                ficha: contrato
            },
        });

        return response.data || [];
    } catch (error) {
        console.error("Error al obtener adherentes:", error);
        throw error;
    }
}

/**
 * Helper para obtener pagos de un contrato
 * @param {string} contrato - Número de contrato
 * @param {string} empresa - Empresa (WERCHOW, MUTUAL, SAN MIGUEL)
 * @returns {Promise<array>} Lista de pagos
 */
export async function obtenerPagos(contrato, empresa = "WERCHOW") {
    if (!contrato || !/^\d+$/.test(contrato)) {
        throw new Error("Contrato inválido. Debe ser numérico.");
    }

    try {
        const response = await axios.get("/api/socios", {
            params: {
                f: "traer pagos",
                ficha: contrato,
                empre: empresa
            },
        });

        return response.data || [];
    } catch (error) {
        console.error("Error al obtener pagos:", error);
        throw error;
    }
}

/**
 * Helper para obtener pagos bancarios de un contrato
 * @param {string} contrato - Número de contrato
 * @param {string} empresa - Empresa (WERCHOW, MUTUAL, SAN MIGUEL)
 * @returns {Promise<array>} Lista de pagos bancarios
 */
export async function obtenerPagosBancarios(contrato, empresa = "WERCHOW") {
    if (!contrato || !/^\d+$/.test(contrato)) {
        throw new Error("Contrato inválido. Debe ser numérico.");
    }

    try {
        const response = await axios.get("/api/socios", {
            params: {
                f: "traer pagosb",
                ficha: contrato,
                empre: empresa
            },
        });

        return response.data || [];
    } catch (error) {
        console.error("Error al obtener pagos bancarios:", error);
        throw error;
    }
}

/**
 * Helper para obtener información de un grupo
 * @param {string} codigo - Código del grupo
 * @returns {Promise<object|null>} Datos del grupo
 */
export async function obtenerGrupo(codigo) {
    if (!codigo) {
        throw new Error("Código de grupo requerido.");
    }

    try {
        const response = await axios.get("/api/socios", {
            params: {
                f: "traer grupo",
                grupo: codigo
            },
        });

        if (response.data && response.data.length > 0) {
            return response.data[0];
        }

        return null;
    } catch (error) {
        console.error("Error al obtener grupo:", error);
        throw error;
    }
}

/**
 * Helper para obtener historial de usos de servicios médicos
 * @param {string} contrato - Número de contrato
 * @returns {Promise<array>} Historial de usos
 */
export async function obtenerUsos(contrato) {
    if (!contrato || !/^\d+$/.test(contrato)) {
        throw new Error("Contrato inválido. Debe ser numérico.");
    }

    try {
        const response = await axios.get("/api/socios", {
            params: {
                f: "traer usos",
                contrato: contrato
            },
        });

        return response.data || [];
    } catch (error) {
        console.error("Error al obtener usos:", error);
        throw error;
    }
}
