
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdherentScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  SEXO: 'SEXO',
  ALTA: 'ALTA',
  BAJA: 'BAJA',
  VIGENCIA: 'VIGENCIA',
  PARENT: 'PARENT',
  OBRA_SOC: 'OBRA_SOC',
  SEGURO: 'SEGURO',
  PRODUCTOR: 'PRODUCTOR',
  PLAN: 'PLAN',
  ORDEN: 'ORDEN',
  EDAD: 'EDAD',
  ESTADO: 'ESTADO',
  idadherent: 'idadherent'
};

exports.Prisma.BajasScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  CALLE: 'CALLE',
  LOCALIDAD: 'LOCALIDAD',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  DOMI_COBR: 'DOMI_COBR',
  DOM_LAB: 'DOM_LAB',
  ZONA: 'ZONA',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  GRUPO: 'GRUPO',
  SEXO: 'SEXO',
  ADHERENTES: 'ADHERENTES',
  OPERADOR: 'OPERADOR',
  OBRA_SOC: 'OBRA_SOC',
  PRODUCTOR: 'PRODUCTOR',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  EMPRESA: 'EMPRESA',
  EDAD: 'EDAD',
  COD_POST: 'COD_POST',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD_PROM: 'EDAD_PROM',
  MAIL: 'MAIL',
  idbaja: 'idbaja',
  BAJA: 'BAJA'
};

exports.Prisma.CajaScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  PUESTO: 'PUESTO',
  CODIGO: 'CODIGO',
  MOVIM: 'MOVIM',
  CUENTA: 'CUENTA',
  CUENTA_DESC: 'CUENTA_DESC',
  IMPORTE: 'IMPORTE',
  TIPO: 'TIPO',
  SERIE: 'SERIE',
  NUMERO: 'NUMERO',
  CUIT: 'CUIT',
  DETALLE: 'DETALLE',
  FECHA: 'FECHA',
  FEC_COMP: 'FEC_COMP',
  HORA: 'HORA',
  OPERADOR: 'OPERADOR',
  idmovim: 'idmovim'
};

exports.Prisma.Cuo_fijaScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  IMPORTE: 'IMPORTE',
  CUO_ANT: 'CUO_ANT',
  DESDE: 'DESDE',
  VENCIM: 'VENCIM',
  OPERADOR: 'OPERADOR',
  idcuota: 'idcuota'
};

exports.Prisma.GestioncasoScalarFieldEnum = {
  idgestion: 'idgestion',
  idcaso: 'idcaso',
  contrato: 'contrato',
  operador: 'operador',
  accion: 'accion',
  observacion: 'observacion',
  fechaaccion: 'fechaaccion',
  nuevaaccion: 'nuevaaccion',
  fechanuevaaccion: 'fechanuevaaccion',
  realizado: 'realizado',
  observacion_nuevaaccion: 'observacion_nuevaaccion'
};

exports.Prisma.GruposScalarFieldEnum = {
  CODIGO: 'CODIGO',
  DESCRIP: 'DESCRIP',
  IVA: 'IVA',
  CUIT: 'CUIT',
  DOMICILIO: 'DOMICILIO',
  ORDEN: 'ORDEN',
  LIN_ALTA: 'LIN_ALTA',
  LIN_BAJA: 'LIN_BAJA',
  TOTALIZA: 'TOTALIZA',
  PAGINA: 'PAGINA',
  TITULO1: 'TITULO1',
  TITULO2: 'TITULO2',
  DIA: 'DIA',
  MES: 'MES',
  ANO: 'ANO',
  SUCURSAL: 'SUCURSAL',
  MARCA: 'MARCA',
  CONVENIO: 'CONVENIO',
  id: 'id'
};

exports.Prisma.HistoriaScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  OPERADOR: 'OPERADOR',
  ACCION: 'ACCION',
  idhistoria: 'idhistoria',
  FECHA: 'FECHA'
};

exports.Prisma.LocalidadScalarFieldEnum = {
  CODIGO: 'CODIGO',
  DETALLE: 'DETALLE',
  idlocalidad: 'idlocalidad'
};

exports.Prisma.MaestroScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  CALLE: 'CALLE',
  LOCALIDAD: 'LOCALIDAD',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  DOMI_COBR: 'DOMI_COBR',
  DOM_LAB: 'DOM_LAB',
  ZONA: 'ZONA',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  GRUPO: 'GRUPO',
  SEXO: 'SEXO',
  ADHERENTES: 'ADHERENTES',
  OPERADOR: 'OPERADOR',
  OBRA_SOC: 'OBRA_SOC',
  PRODUCTOR: 'PRODUCTOR',
  PLAN: 'PLAN',
  EMPRESA: 'EMPRESA',
  EDAD: 'EDAD',
  COD_POST: 'COD_POST',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD_PROM: 'EDAD_PROM',
  MAIL: 'MAIL',
  idmaestro: 'idmaestro'
};

exports.Prisma.Maestro_cuentasScalarFieldEnum = {
  idcuenta: 'idcuenta',
  contrato: 'contrato',
  dni: 'dni',
  grupo: 'grupo',
  cuenta: 'cuenta',
  observacion: 'observacion'
};

exports.Prisma.Obra_socScalarFieldEnum = {
  CODIGO: 'CODIGO',
  NOMBRE: 'NOMBRE',
  DETALLE: 'DETALLE',
  DOMICILIO: 'DOMICILIO',
  FECHA_SUSP: 'FECHA_SUSP',
  OPERADOR: 'OPERADOR',
  ACTUALIZA: 'ACTUALIZA',
  SUSPENDIDO: 'SUSPENDIDO',
  id: 'id'
};

exports.Prisma.OperadorScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  apellido: 'apellido',
  usuario: 'usuario',
  contrasena: 'contrasena',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  perfil: 'perfil',
  estado: 'estado',
  codigo: 'codigo',
  medicos: 'medicos',
  sucursal: 'sucursal',
  prestamos: 'prestamos',
  ordenpago: 'ordenpago',
  clubwerchow: 'clubwerchow',
  ventas: 'ventas',
  administracion: 'administracion',
  campanas: 'campanas',
  socios: 'socios',
  sepelio: 'sepelio',
  gestion: 'gestion',
  contabilidad: 'contabilidad',
  cobranza: 'cobranza'
};

exports.Prisma.Pago_bcoScalarFieldEnum = {
  NRO_DOC: 'NRO_DOC',
  CONTRATO: 'CONTRATO',
  COD_SUC: 'COD_SUC',
  NRO_CTA: 'NRO_CTA',
  FEC_ACR: 'FEC_ACR',
  IMPORTE: 'IMPORTE',
  MARCA: 'MARCA',
  MES: 'MES',
  ANO: 'ANO',
  DIA_PAGO: 'DIA_PAGO',
  SUCURSAL: 'SUCURSAL',
  SEGURO: 'SEGURO',
  id: 'id'
};

exports.Prisma.PagosScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  NRO_RECIBO: 'NRO_RECIBO',
  SERIE: 'SERIE',
  DIA_REN: 'DIA_REN',
  DIA_CAR: 'DIA_CAR',
  DIA_EMI: 'DIA_EMI',
  DIA_PAG: 'DIA_PAG',
  HORA_CAR: 'HORA_CAR',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  MAN_COM: 'MAN_COM',
  MOVIM: 'MOVIM',
  OPERADOR: 'OPERADOR',
  SUCURSAL: 'SUCURSAL',
  PUESTO: 'PUESTO',
  ZONA: 'ZONA',
  EMPRESA: 'EMPRESA',
  DNI: 'DNI',
  RENDIDO: 'RENDIDO',
  FECHA_CAJA: 'FECHA_CAJA',
  id: 'id',
  MED_PAG: 'MED_PAG'
};

exports.Prisma.PlanesScalarFieldEnum = {
  PLAN: 'PLAN',
  DESCRIP: 'DESCRIP',
  idplan: 'idplan'
};

exports.Prisma.SubctaScalarFieldEnum = {
  CODI: 'CODI',
  DESC: 'DESC',
  CUEN: 'CUEN',
  MOVIM: 'MOVIM',
  id: 'id'
};

exports.Prisma.ZonasScalarFieldEnum = {
  CODIGO: 'CODIGO',
  DESCRIP: 'DESCRIP',
  COBRADOR: 'COBRADOR',
  COMISION: 'COMISION',
  SUCURSAL: 'SUCURSAL',
  RECIBOS: 'RECIBOS',
  IMPORTE: 'IMPORTE',
  SERIE: 'SERIE',
  ORDEN: 'ORDEN',
  LIN_ALTA: 'LIN_ALTA',
  LIN_BAJA: 'LIN_BAJA',
  TOTALIZA: 'TOTALIZA',
  PAGINA: 'PAGINA',
  TITULO1: 'TITULO1',
  TITULO2: 'TITULO2',
  idzona: 'idzona'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  adherent: 'adherent',
  bajas: 'bajas',
  caja: 'caja',
  cuo_fija: 'cuo_fija',
  gestioncaso: 'gestioncaso',
  grupos: 'grupos',
  historia: 'historia',
  localidad: 'localidad',
  maestro: 'maestro',
  maestro_cuentas: 'maestro_cuentas',
  obra_soc: 'obra_soc',
  operador: 'operador',
  pago_bco: 'pago_bco',
  pagos: 'pagos',
  planes: 'planes',
  subcta: 'subcta',
  zonas: 'zonas'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
