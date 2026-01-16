// ============================================
// CONFIGURACIÓN DE REGLAS DE NEGOCIO
// ============================================

/**
 * Reglas de ajuste de precios para prácticas médicas
 * Cada regla tiene:
 * - id: Identificador único
 * - descripcion: Descripción de la regla
 * - condicion: Función que evalúa si la regla aplica
 * - aplicar: Función que modifica el precio
 */

// Constantes de grupos especiales
const GRUPOS_FISIO_GRATIS = [66, 55];
const MAX_FISIO_GRATIS = 8;
const CODIGO_FISIO = "25.01.01";
const SERVICIO_FISIO = "FIS";

// Constantes de prestadores especiales
const PRESTADOR_CABRERA_OTERO = "C_OCB";
const PRESTADOR_BIOQUIMICO = "C_BIO";

// Constantes de códigos de prácticas
const CODIGO_OFTALMO = "30.05.05";

// Constantes de precios promocionales
const PRECIO_PROMO_ECOGRAFIA = 7000;
const PRECIO_PROMO_OFTALMO = 20000;

// Multiplicadores de precio por uso
const MULTIPLICADORES_BIO = {
    1: 1.15,
    2: 1.2,
    default: 1.25
};

/**
 * Define las reglas de ajuste de precios
 * @param {object} context - Contexto con datos del socio, práctica, etc.
 * @returns {Array} Array de reglas
 */
function obtenerReglasDeAjuste(context) {
    const { socio, detalleMed, pra, nFisio, priUsoBio, priUso } = context;

    return [
        // REGLA 1: Fisioterapia gratis para grupos 66 y 55
        {
            id: 'fisio-gratis-grupos-especiales',
            descripcion: `Fisioterapia gratis (primeras ${MAX_FISIO_GRATIS}) para grupos ${GRUPOS_FISIO_GRATIS.join(', ')}`,
            condicion: () =>
                GRUPOS_FISIO_GRATIS.includes(socio.GRUPO) &&
                detalleMed.SERVICIO === SERVICIO_FISIO &&
                pra.CODIGOS === CODIGO_FISIO &&
                nFisio >= 0 && nFisio <= MAX_FISIO_GRATIS,
            aplicar: (practica) => {
                practica.IMPORTE = 0;
                return practica;
            }
        },

        // REGLA 2: Aumento por cantidad de usos - Bioquímico
        {
            id: 'aumento-bioquimico-por-uso',
            descripcion: 'Aumento progresivo de precio por uso en bioquímico',
            condicion: () => detalleMed.COD_PRES === PRESTADOR_BIOQUIMICO,
            aplicar: (practica) => {
                const multiplicador = MULTIPLICADORES_BIO[priUsoBio] || MULTIPLICADORES_BIO.default;
                practica.IMPORTE = practica.IMPORTE * multiplicador;
                return practica;
            }
        },

        // REGLA 3: Promo ecografía - Cabrera Otero (primer uso)
        {
            id: 'promo-ecografia-cabrera-otero',
            descripcion: `Ecografía a $${PRECIO_PROMO_ECOGRAFIA} en Cabrera Otero (primer uso)`,
            condicion: () =>
                detalleMed.OTERO === 1 &&
                detalleMed.COD_PRES === PRESTADOR_CABRERA_OTERO &&
                /ECOGRAFIA.*/.test(pra.DESCRIP) &&
                priUso === 0,
            aplicar: (practica) => {
                practica.IMPORTE = PRECIO_PROMO_ECOGRAFIA;
                return practica;
            }
        },

        // REGLA 4: Promo oftalmología - Otero (primer uso)
        {
            id: 'promo-oftalmo-otero',
            descripcion: `Oftalmología a $${PRECIO_PROMO_OFTALMO} en Otero (primer uso)`,
            condicion: () =>
                detalleMed.OTERO === 1 &&
                pra.CODIGOS === CODIGO_OFTALMO &&
                priUso === 0,
            aplicar: (practica) => {
                practica.IMPORTE = PRECIO_PROMO_OFTALMO;
                return practica;
            }
        }
    ];
}

/**
 * Aplica todas las reglas de ajuste de precio a una práctica
 * @param {object} practica - Práctica a ajustar
 * @param {object} context - Contexto con datos necesarios
 * @returns {object} Práctica con precio ajustado
 */
function aplicarReglasDeAjuste(practica, context) {
    const reglas = obtenerReglasDeAjuste(context);
    let practicaAjustada = { ...practica };

    // Aplicar cada regla que cumpla su condición
    for (const regla of reglas) {
        if (regla.condicion()) {
            console.log(`Aplicando regla: ${regla.descripcion}`);
            practicaAjustada = regla.aplicar(practicaAjustada);
        }
    }

    return practicaAjustada;
}

/**
 * Valida si una práctica ya existe en el listado
 * @param {Array} practicas - Array de prácticas existentes
 * @param {object} nuevaPractica - Práctica a validar
 * @returns {boolean} true si ya existe
 */
function practicaYaExiste(practicas, nuevaPractica) {
    return practicas.some(p => p.idpractica === nuevaPractica.idpractica);
}

/**
 * Obtiene mensajes de advertencia para promociones especiales
 * @param {object} practica - Práctica a verificar
 * @param {number} priUso - Indicador de primer uso
 * @returns {string|null} Mensaje de advertencia o null
 */
function obtenerMensajePromocion(practica, priUso) {
    if (/ECOGRAFIA.*/.test(practica.DESCRIP) && priUso === 0) {
        return "Es solo una ecografia en promocion por mes y por grupo familiar.";
    }

    if (practica.CODIGOS === CODIGO_OFTALMO && priUso === 0) {
        return "Es solo una consulta + MOD 81 en promocion por mes y por grupo familiar.";
    }

    return null;
}

// ============================================
// FUNCIÓN PRINCIPAL REFACTORIZADA
// ============================================

/**
 * Agrega una práctica médica al listado del socio
 * Aplica reglas de negocio y validaciones
 * @param {object} row - Datos de la práctica a agregar
 */
const agregarPracticaRefactorizada = async (row) => {
    // 1. Crear objeto de práctica base
    const cantidad = parseFloat(cantidadRefP.current.value);
    const importeBase = parseFloat(row.IMPORTE) * cantidad;

    let practica = {
        CODIGOS: row.CODIGOS,
        DESCRIP: row.DESCRIP,
        CANTIDAD: cantidadRefP.current.value,
        IMPORTE: importeBase,
        IMP_LIQ: importeBase,
        idpractica: row.idpractica,
    };

    // 2. Aplicar reglas de ajuste de precio
    const context = {
        socio,
        detalleMed,
        pra: practica,
        nFisio,
        priUsoBio,
        priUso
    };

    practica = aplicarReglasDeAjuste(practica, context);

    // 3. Validar si la práctica ya existe
    if (practicaYaExiste(pracSocio, practica)) {
        toastr.warning("El codigo ingresado ya existe", "ATENCION");
        return;
    }

    // 4. Verificar mensajes de promoción
    const mensajePromo = obtenerMensajePromocion(practica, priUso);
    if (mensajePromo) {
        toastr.warning(mensajePromo, "ATENCION");
    }

    // 5. Agregar práctica al listado
    toastr.success("Practica cargada exitosamente", "ATENCION");
    guardarPracSocio([...pracSocio, practica]);
};

// ============================================
// EJEMPLO: CÓMO AGREGAR NUEVAS REGLAS
// ============================================

/*
Para agregar una nueva regla, simplemente agrégala al array en obtenerReglasDeAjuste:

{
  id: 'nueva-regla-descuento-jubilados',
  descripcion: 'Descuento 20% para jubilados en rayos X',
  condicion: () => 
    socio.ES_JUBILADO === true &&
    pra.CODIGOS.startsWith('40.'), // Códigos de rayos X
  aplicar: (practica) => {
    practica.IMPORTE = practica.IMPORTE * 0.8; // 20% descuento
    return practica;
  }
}

O para un precio fijo en ciertas condiciones:

{
  id: 'precio-fijo-laboratorio-noche',
  descripcion: 'Precio fijo $5000 para laboratorio en horario nocturno',
  condicion: () => 
    detalleMed.COD_PRES === 'C_LAB' &&
    esHorarioNocturno(detalleMed.HORA),
  aplicar: (practica) => {
    practica.IMPORTE = 5000;
    return practica;
  }
}
*/
