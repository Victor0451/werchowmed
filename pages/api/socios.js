import { isValidTenant } from "../../libs/tenants/config";
import {
  getMaestroByDni,
  getMaestroByContrato,
  getMaestroTitulares,
  getMutualByDni,
  getMutualByContrato,
  getMutualTitulares,
  getAdherentesByContrato,
  getAdherentesByDni,
  getMutualAdhByContrato,
  getMutualAdhByDni,
  getGrupo,
  getPagos,
  getPagosBco,
  getUsos,
} from "../../libs/controllers/sociosController";

/**
 * Serializa BigInt a string para JSON
 */
function serializeBigInt(data) {
  return JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
}

/**
 * Valida que un parámetro sea un DNI válido
 */
function isValidDni(dni) {
  return dni && /^\d{7,8}$/.test(dni);
}

/**
 * Valida que un parámetro sea un contrato válido
 */
function isValidContrato(contrato) {
  return contrato && /^\d+$/.test(contrato);
}

/**
 * API Handler para endpoints de socios
 * Soporta múltiples tenants: werchow, sanmiguel, sanvalentin
 */
export default async function handler(req, res) {
  // Solo permitir GET
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { f, tenant, dni, ficha, contrato, grupo, empre } = req.query;

  // Validar que se especifique una función
  if (!f) {
    return res.status(400).json({ error: "Parámetro 'f' (función) requerido" });
  }

  try {
    // ==================== MAESTRO ====================
    if (f === "maestro") {
      if (!tenant) return res.status(400).json({ error: "Parámetro 'tenant' requerido" });
      if (!isValidTenant(tenant)) return res.status(400).json({ error: `Tenant '${tenant}' no válido` });
      if (!isValidDni(dni)) return res.status(400).json({ error: "DNI inválido" });

      const data = await getMaestroByDni(tenant, dni);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    if (f === "maestro contrato") {
      if (!tenant) return res.status(400).json({ error: "Parámetro 'tenant' requerido" });
      if (!isValidTenant(tenant)) return res.status(400).json({ error: `Tenant '${tenant}' no válido` });
      if (!isValidContrato(ficha)) return res.status(400).json({ error: "Contrato inválido" });

      const data = await getMaestroByContrato(tenant, ficha);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    if (f === "werchow titulares" || f === "san miguel titulares") {
      const tenantName = f === "werchow titulares" ? "werchow" : "sanmiguel";
      const data = await getMaestroTitulares(tenantName);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    // ==================== MUTUAL ====================
    if (f === "mutual") {
      if (!isValidDni(dni)) return res.status(400).json({ error: "DNI inválido" });

      // Mutual siempre usa San Valentín
      const data = await getMutualByDni("sanvalentin", dni);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    if (f === "mutual contrato") {
      if (!isValidContrato(ficha)) return res.status(400).json({ error: "Contrato inválido" });

      // Mutual siempre usa San Valentín
      const data = await getMutualByContrato("sanvalentin", ficha);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    if (f === "mutual titulares") {
      // Mutual siempre usa San Valentín
      const data = await getMutualTitulares("sanvalentin");
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    // ==================== ADHERENTES ====================
    if (f === "adh") {
      if (!isValidContrato(ficha)) return res.status(400).json({ error: "Contrato inválido" });

      const tenantToUse = tenant || "werchow";
      if (!isValidTenant(tenantToUse)) return res.status(400).json({ error: `Tenant '${tenantToUse}' no válido` });

      const data = await getAdherentesByContrato(tenantToUse, ficha);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    if (f === "mae adh") {
      if (!isValidDni(dni)) return res.status(400).json({ error: "DNI inválido" });

      const tenantToUse = tenant || "werchow";
      if (!isValidTenant(tenantToUse)) return res.status(400).json({ error: `Tenant '${tenantToUse}' no válido` });

      const data = await getAdherentesByDni(tenantToUse, dni);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    if (f === "mutual adh") {
      if (!isValidContrato(contrato)) return res.status(400).json({ error: "Contrato inválido" });

      // Mutual siempre usa San Valentín
      const data = await getMutualAdhByContrato("sanvalentin", contrato);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    if (f === "mut adh") {
      if (!isValidDni(dni)) return res.status(400).json({ error: "DNI inválido" });

      // Mutual siempre usa San Valentín
      const data = await getMutualAdhByDni("sanvalentin", dni);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    // ==================== SAN MIGUEL ====================
    if (f === "san miguel") {
      if (!isValidDni(dni)) return res.status(400).json({ error: "DNI inválido" });

      const data = await getMaestroByDni("sanmiguel", dni);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    if (f === "san miguel contrato") {
      if (!isValidContrato(ficha)) return res.status(400).json({ error: "Contrato inválido" });

      const data = await getMaestroByContrato("sanmiguel", ficha);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    if (f === "adh san miguel") {
      if (!isValidContrato(ficha)) return res.status(400).json({ error: "Contrato inválido" });

      const data = await getAdherentesByContrato("sanmiguel", ficha);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    if (f === "adh san miguel dni") {
      if (!isValidDni(dni)) return res.status(400).json({ error: "DNI inválido" });

      const data = await getAdherentesByDni("sanmiguel", dni);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    // ==================== GRUPOS ====================
    if (f === "traer grupo") {
      if (!grupo) return res.status(400).json({ error: "Parámetro 'grupo' requerido" });

      const tenantToUse = tenant || "werchow";
      if (!isValidTenant(tenantToUse)) return res.status(400).json({ error: `Tenant '${tenantToUse}' no válido` });

      const data = await getGrupo(tenantToUse, grupo);
      return res.status(200).json(data);
    }

    // ==================== PAGOS ====================
    if (f === "traer pagos") {
      if (!isValidContrato(ficha)) return res.status(400).json({ error: "Contrato inválido" });
      if (!empre) return res.status(400).json({ error: "Parámetro 'empre' requerido" });

      let tenantName, tipo;

      if (empre === "WERCHOW") {
        tenantName = "werchow";
        tipo = "maestro";
      } else if (empre === "MUTUAL") {
        // Mutual = San Valentín
        tenantName = "sanvalentin";
        tipo = "maestro";
      } else if (empre === "SAN MIGUEL") {
        tenantName = "sanmiguel";
        tipo = "maestro";
      } else {
        return res.status(400).json({ error: "Empresa no válida" });
      }

      const data = await getPagos(tenantName, ficha, tipo);
      return res.status(200).json(data);
    }

    if (f === "traer pagosb") {
      if (!isValidContrato(ficha)) return res.status(400).json({ error: "Contrato inválido" });
      if (!empre) return res.status(400).json({ error: "Parámetro 'empre' requerido" });

      let tenantName, tipo;

      if (empre === "WERCHOW") {
        tenantName = "werchow";
        tipo = "maestro";
      } else if (empre === "MUTUAL") {
        // Mutual = San Valentín
        tenantName = "sanvalentin";
        tipo = "maestro";
      } else if (empre === "SAN MIGUEL") {
        tenantName = "sanmiguel";
        tipo = "maestro";
      } else {
        return res.status(400).json({ error: "Empresa no válida" });
      }

      const data = await getPagosBco(tenantName, ficha, tipo);
      return res.status(200).json(data);
    }

    // ==================== USOS ====================
    if (f === "traer usos") {
      if (!isValidContrato(contrato)) return res.status(400).json({ error: "Contrato inválido" });

      const data = await getUsos(contrato);
      return res.status(200).json(JSON.parse(serializeBigInt(data)));
    }

    // Función no reconocida
    return res.status(400).json({ error: `Función '${f}' no válida` });
  } catch (error) {
    console.error("Error en /api/socios:", error);
    return res.status(500).json({
      error: "Error interno del servidor",
      message: error.message,
    });
  }
}
