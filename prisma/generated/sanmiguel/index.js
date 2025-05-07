
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/vlongo/Desarrollo/werchowmed/prisma/generated/sanmiguel",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "multiSchema"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.4.2",
  "engineVersion": "ac9d7041ed77bcc8a8dbd2ab6616b39013829574",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "SANMIGUEL_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4vZ2VuZXJhdGVkL3Nhbm1pZ3VlbCIKICBwcmV2aWV3RmVhdHVyZXMgPSBbIm11bHRpU2NoZW1hIl0KfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIlNBTk1JR1VFTF9VUkwiKQp9Cgptb2RlbCBhZGhlcmVudCB7CiAgU1VDVVJTQUwgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT05UUkFUTyAgIEludD8KICBOUk9fRE9DICAgIEludD8KICBBUEVMTElET1MgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgTk9NQlJFUyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTAwKQogIE5BQ0lNSUVOVE8gRGF0ZVRpbWU/IEBkYi5EYXRlCiAgU0VYTyAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBBTFRBICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEJBSkEgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgVklHRU5DSUEgICBEYXRlVGltZT8gQGRiLkRhdGUKICBQQVJFTlQgICAgIEludD8KICBPQlJBX1NPQyAgIEludD8KICBTRUdVUk8gICAgIEludD8gICAgICBAZGIuVGlueUludAogIFBST0RVQ1RPUiAgSW50PwogIFBMQU4gICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPUkRFTiAgICAgIEludD8KICBFREFEICAgICAgIEludD8KICBFU1RBRE8gICAgIEJvb2xlYW4/CiAgaWRhZGhlcmVudCBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKCiAgQEBpbmRleChbQ09OVFJBVE8sIEFMVEEsIEJBSkFdLCBtYXA6ICJpZHhjb25mZWMiKQp9Cgptb2RlbCBiYWphcyB7CiAgU1VDVVJTQUwgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT05UUkFUTyAgIEludAogIE5ST19ET0MgICAgSW50PwogIEFQRUxMSURPUyAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBOT01CUkVTICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgTkFDSU1JRU5UTyBEYXRlVGltZT8gQGRiLkRhdGUKICBDQUxMRSAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgTE9DQUxJREFEICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTAwKQogIE5ST19DQUxMRSAgSW50PwogIEJBUlJJTyAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBET01JX0NPQlIgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgRE9NX0xBQiAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTAwKQogIFpPTkEgICAgICAgSW50PwogIEFMVEEgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgVklHRU5DSUEgICBEYXRlVGltZT8gQGRiLkRhdGUKICBHUlVQTyAgICAgIEludD8KICBTRVhPICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIEFESEVSRU5URVMgSW50PwogIE9QRVJBRE9SICAgSW50PwogIE9CUkFfU09DICAgSW50PwogIFBST0RVQ1RPUiAgSW50PwogIFBMQU4gICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgU1VCX1BMQU4gICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBFTVBSRVNBICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIEVEQUQgICAgICAgSW50PwogIENPRF9QT1NUICAgSW50PwogIFRFTEVGT05PICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBNT1ZJTCAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgRURBRF9QUk9NICBGbG9hdD8KICBNQUlMICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgaWRiYWphICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBCQUpBICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQp9Cgptb2RlbCBjYWphIHsKICBTVUNVUlNBTCAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDEwKQogIFBVRVNUTyAgICAgIEludD8KICBDT0RJR08gICAgICBJbnQ/CiAgTU9WSU0gICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxKQogIENVRU5UQSAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIENVRU5UQV9ERVNDIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIElNUE9SVEUgICAgIEZsb2F0PyAgQGRiLkZsb2F0CiAgVElQTyAgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgU0VSSUUgICAgICAgSW50PwogIE5VTUVSTyAgICAgIEludD8KICBDVUlUICAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBERVRBTExFICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDEwMDApCiAgRkVDSEEgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgRkVDX0NPTVAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgSE9SQSAgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgT1BFUkFET1IgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgaWRtb3ZpbSAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQp9Cgptb2RlbCBjdW9fZmlqYSB7CiAgQ09OVFJBVE8gSW50PwogIElNUE9SVEUgIEZsb2F0PwogIENVT19BTlQgIEZsb2F0PwogIERFU0RFICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIFZFTkNJTSAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIE9QRVJBRE9SIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgaWRjdW90YSAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCn0KCm1vZGVsIGdlc3Rpb25jYXNvIHsKICBpZGdlc3Rpb24gICAgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGlkY2FzbyAgICAgICAgICAgICAgICAgIEludD8KICBjb250cmF0byAgICAgICAgICAgICAgICBJbnQ/CiAgb3BlcmFkb3IgICAgICAgICAgICAgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIoNDUpCiAgYWNjaW9uICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIoMjU1KQogIG9ic2VydmFjaW9uICAgICAgICAgICAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDEwMDApCiAgZmVjaGFhY2Npb24gICAgICAgICAgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIoMjU1KQogIG51ZXZhYWNjaW9uICAgICAgICAgICAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDEwMCkKICBmZWNoYW51ZXZhYWNjaW9uICAgICAgICBTdHJpbmc/ICBAZGIuVmFyQ2hhcigyNTUpCiAgcmVhbGl6YWRvICAgICAgICAgICAgICAgQm9vbGVhbj8gQGRlZmF1bHQodHJ1ZSkKICBvYnNlcnZhY2lvbl9udWV2YWFjY2lvbiBTdHJpbmc/ICBAZGIuVmFyQ2hhcigxMDAwKQp9Cgptb2RlbCBncnVwb3MgewogIENPRElHTyAgICBJbnQ/CiAgREVTQ1JJUCAgIFN0cmluZz8gQGRiLlZhckNoYXIoMzApCiAgSVZBICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMzApCiAgQ1VJVCAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMTMpCiAgRE9NSUNJTElPIFN0cmluZz8gQGRiLlZhckNoYXIoMzApCiAgT1JERU4gICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMSkKICBMSU5fQUxUQSAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMCkKICBMSU5fQkFKQSAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMCkKICBUT1RBTElaQSAgSW50PyAgICBAZGIuVGlueUludAogIFBBR0lOQSAgICBJbnQ/ICAgIEBkYi5UaW55SW50CiAgVElUVUxPMSAgIFN0cmluZz8gQGRiLlZhckNoYXIoODApCiAgVElUVUxPMiAgIFN0cmluZz8gQGRiLlZhckNoYXIoODApCiAgRElBICAgICAgIEludD8KICBNRVMgICAgICAgSW50PwogIEFOTyAgICAgICBJbnQ/CiAgU1VDVVJTQUwgIFN0cmluZz8gQGRiLlZhckNoYXIoMSkKICBNQVJDQSAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyKQogIENPTlZFTklPICBTdHJpbmc/IEBkYi5WYXJDaGFyKDUpCiAgaWQgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKfQoKbW9kZWwgaGlzdG9yaWEgewogIENPTlRSQVRPICAgSW50PwogIE9QRVJBRE9SICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgQUNDSU9OICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDEwMDApCiAgaWRoaXN0b3JpYSBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgRkVDSEEgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwgbG9jYWxpZGFkIHsKICBDT0RJR08gICAgICBJbnQ/CiAgREVUQUxMRSAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxNSkKICBpZGxvY2FsaWRhZCBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCn0KCm1vZGVsIG1hZXN0cm8gewogIFNVQ1VSU0FMICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09OVFJBVE8gICBJbnQKICBOUk9fRE9DICAgIEludD8KICBBUEVMTElET1MgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgTk9NQlJFUyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTAwKQogIE5BQ0lNSUVOVE8gRGF0ZVRpbWU/IEBkYi5EYXRlCiAgQ0FMTEUgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTAwKQogIExPQ0FMSURBRCAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBOUk9fQ0FMTEUgIEludD8KICBCQVJSSU8gICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgRE9NSV9DT0JSICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTAwKQogIERPTV9MQUIgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBaT05BICAgICAgIEludD8KICBBTFRBICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIFZJR0VOQ0lBICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgR1JVUE8gICAgICBJbnQ/CiAgU0VYTyAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBBREhFUkVOVEVTIEludD8KICBPUEVSQURPUiAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgT0JSQV9TT0MgICBJbnQ/CiAgUFJPRFVDVE9SICBJbnQ/CiAgUExBTiAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEVNUFJFU0EgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwKQogIEVEQUQgICAgICAgSW50PwogIENPRF9QT1NUICAgSW50PwogIFRFTEVGT05PICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBNT1ZJTCAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgRURBRF9QUk9NICBGbG9hdD8KICBNQUlMICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgaWRtYWVzdHJvICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKfQoKbW9kZWwgbWFlc3Ryb19jdWVudGFzIHsKICBpZGN1ZW50YSAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY29udHJhdG8gICAgSW50PwogIGRuaSAgICAgICAgIEludD8KICBncnVwbyAgICAgICBJbnQ/CiAgY3VlbnRhICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgb2JzZXJ2YWNpb24gU3RyaW5nPyBAZGIuVmFyQ2hhcigxMDAwKQp9Cgptb2RlbCBvYnJhX3NvYyB7CiAgQ09ESUdPICAgICBJbnQ/CiAgTk9NQlJFICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjApCiAgREVUQUxMRSAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNDUpCiAgRE9NSUNJTElPICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMzApCiAgRkVDSEFfU1VTUCBEYXRlVGltZT8gQGRiLkRhdGUKICBPUEVSQURPUiAgIEludD8KICBBQ1RVQUxJWkEgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMykKICBTVVNQRU5ESURPIEludD8gICAgICBAZGIuVGlueUludAogIGlkICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCn0KCm1vZGVsIG9wZXJhZG9yIHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5vbWJyZSAgICAgICAgIFN0cmluZyAgIEBkYi5WYXJDaGFyKDI1NSkKICBhcGVsbGlkbyAgICAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcigyNTUpCiAgdXN1YXJpbyAgICAgICAgU3RyaW5nICAgQGRiLlZhckNoYXIoMjU1KQogIGNvbnRyYXNlbmEgICAgIFN0cmluZyAgIEBkYi5WYXJDaGFyKDI1NSkKICBjcmVhdGVkQXQgICAgICBEYXRlVGltZSBAZGIuRGF0ZVRpbWUoMCkKICB1cGRhdGVkQXQgICAgICBEYXRlVGltZSBAZGIuRGF0ZVRpbWUoMCkKICBwZXJmaWwgICAgICAgICBJbnQ/CiAgZXN0YWRvICAgICAgICAgQm9vbGVhbj8KICBjb2RpZ28gICAgICAgICBJbnQ/CiAgbWVkaWNvcyAgICAgICAgQm9vbGVhbj8KICBzdWN1cnNhbCAgICAgICBTdHJpbmc/ICBAZGIuVmFyQ2hhcigyNTUpCiAgcHJlc3RhbW9zICAgICAgQm9vbGVhbj8KICBvcmRlbnBhZ28gICAgICBCb29sZWFuPwogIGNsdWJ3ZXJjaG93ICAgIEJvb2xlYW4/CiAgdmVudGFzICAgICAgICAgQm9vbGVhbj8KICBhZG1pbmlzdHJhY2lvbiBCb29sZWFuPwogIGNhbXBhbmFzICAgICAgIEJvb2xlYW4/CiAgc29jaW9zICAgICAgICAgQm9vbGVhbj8KICBzZXBlbGlvICAgICAgICBCb29sZWFuPwogIGdlc3Rpb24gICAgICAgIEJvb2xlYW4/CiAgY29udGFiaWxpZGFkICAgQm9vbGVhbj8KICBjb2JyYW56YSAgICAgICBCb29sZWFuPwp9Cgptb2RlbCBwYWdvX2JjbyB7CiAgTlJPX0RPQyAgSW50PwogIENPTlRSQVRPIEludD8KICBDT0RfU1VDICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMykKICBOUk9fQ1RBICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoOSkKICBGRUNfQUNSICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNikKICBJTVBPUlRFICBGbG9hdD8KICBNQVJDQSAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBNRVMgICAgICBJbnQ/CiAgQU5PICAgICAgSW50PwogIERJQV9QQUdPIERhdGVUaW1lPyBAZGIuRGF0ZQogIFNVQ1VSU0FMIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIFNFR1VSTyAgIEZsb2F0PwogIGlkICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQoKICBAQGluZGV4KFtDT05UUkFUT10sIG1hcDogIm9yZGVyIDEiKQogIEBAaW5kZXgoW05ST19ET0NdLCBtYXA6ICJvcmRlciAyIikKfQoKbW9kZWwgcGFnb3MgewogIENPTlRSQVRPICAgSW50PwogIE5ST19SRUNJQk8gSW50PwogIFNFUklFICAgICAgSW50PwogIERJQV9SRU4gICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgRElBX0NBUiAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBESUFfRU1JICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIERJQV9QQUcgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgSE9SQV9DQVIgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoOCkKICBNRVMgICAgICAgIEludD8KICBBTk8gICAgICAgIEludD8KICBJTVBPUlRFICAgIEZsb2F0PwogIE1BTl9DT00gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgTU9WSU0gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBPUEVSQURPUiAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDVVJTQUwgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBQVUVTVE8gICAgIEludD8KICBaT05BICAgICAgIEludD8KICBFTVBSRVNBICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgRE5JICAgICAgICBJbnQ/CiAgUkVORElETyAgICBJbnQ/CiAgRkVDSEFfQ0FKQSBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGlkICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgTUVEX1BBRyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQoKICBAQGluZGV4KFtDT05UUkFUTywgRElBX1BBRywgTUVTLCBBTk8sIE1PVklNLCBOUk9fUkVDSUJPXSwgbWFwOiAiaWR4IikKfQoKbW9kZWwgcGxhbmVzIHsKICBQTEFOICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMTApCiAgREVTQ1JJUCBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBpZHBsYW4gIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKfQoKbW9kZWwgc3ViY3RhIHsKICBDT0RJICBJbnQ/CiAgREVTQyAgU3RyaW5nPyBAZGIuVmFyQ2hhcigzNSkKICBDVUVOICBTdHJpbmc/IEBkYi5WYXJDaGFyKDE0KQogIE1PVklNIFN0cmluZz8gQGRiLlZhckNoYXIoMTQpCiAgaWQgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQp9Cgptb2RlbCB6b25hcyB7CiAgQ09ESUdPICAgSW50PwogIERFU0NSSVAgIFN0cmluZz8gQGRiLlZhckNoYXIoMzApCiAgQ09CUkFET1IgSW50PyAgICBAZGIuVGlueUludAogIENPTUlTSU9OIEZsb2F0PwogIFNVQ1VSU0FMIFN0cmluZz8gQGRiLlZhckNoYXIoMSkKICBSRUNJQk9TICBJbnQ/CiAgSU1QT1JURSAgRmxvYXQ/CiAgU0VSSUUgICAgSW50PwogIE9SREVOICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMSkKICBMSU5fQUxUQSBTdHJpbmc/IEBkYi5WYXJDaGFyKDEwKQogIExJTl9CQUpBIFN0cmluZz8gQGRiLlZhckNoYXIoMTApCiAgVE9UQUxJWkEgSW50PyAgICBAZGIuVGlueUludAogIFBBR0lOQSAgIEludD8gICAgQGRiLlRpbnlJbnQKICBUSVRVTE8xICBTdHJpbmc/IEBkYi5WYXJDaGFyKDgwKQogIFRJVFVMTzIgIFN0cmluZz8gQGRiLlZhckNoYXIoODApCiAgaWR6b25hICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQp9Cg==",
  "inlineSchemaHash": "d35fc6ad5a40cf2802e94f136b2cfa537992de049b9bcfa21b9c54321fd37be8",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/sanmiguel",
    "generated/sanmiguel",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"adherent\":{\"dbName\":null,\"fields\":[{\"name\":\"SUCURSAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"APELLIDOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOMBRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NACIMIENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEXO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ALTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VIGENCIA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PARENT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OBRA_SOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEGURO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRODUCTOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ESTADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idadherent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bajas\":{\"dbName\":null,\"fields\":[{\"name\":\"SUCURSAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"APELLIDOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOMBRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NACIMIENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CALLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_CALLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BARRIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOMI_COBR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOM_LAB\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ZONA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ALTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VIGENCIA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GRUPO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEXO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ADHERENTES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OBRA_SOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRODUCTOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUB_PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_POST\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TELEFONO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MOVIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EDAD_PROM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idbaja\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"caja\":{\"dbName\":null,\"fields\":[{\"name\":\"SUCURSAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PUESTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODIGO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MOVIM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUENTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUENTA_DESC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TIPO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERIE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUMERO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUIT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DETALLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_COMP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idmovim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cuo_fija\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUO_ANT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESDE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VENCIM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcuota\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"gestioncaso\":{\"dbName\":null,\"fields\":[{\"name\":\"idgestion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcaso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaaccion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nuevaaccion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechanuevaaccion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"realizado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacion_nuevaaccion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"grupos\":{\"dbName\":null,\"fields\":[{\"name\":\"CODIGO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IVA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUIT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOMICILIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LIN_ALTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LIN_BAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TOTALIZA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PAGINA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TITULO1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TITULO2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUCURSAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MARCA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONVENIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"historia\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ACCION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idhistoria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"localidad\":{\"dbName\":null,\"fields\":[{\"name\":\"CODIGO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DETALLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idlocalidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"maestro\":{\"dbName\":null,\"fields\":[{\"name\":\"SUCURSAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"APELLIDOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOMBRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NACIMIENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CALLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_CALLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BARRIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOMI_COBR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOM_LAB\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ZONA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ALTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VIGENCIA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GRUPO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEXO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ADHERENTES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OBRA_SOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRODUCTOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_POST\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TELEFONO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MOVIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EDAD_PROM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idmaestro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"maestro_cuentas\":{\"dbName\":null,\"fields\":[{\"name\":\"idcuenta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuenta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"obra_soc\":{\"dbName\":null,\"fields\":[{\"name\":\"CODIGO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOMBRE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DETALLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOMICILIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_SUSP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ACTUALIZA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUSPENDIDO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"operador\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apellido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrasena\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"perfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medicos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sucursal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prestamos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordenpago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clubwerchow\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ventas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"administracion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campanas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socios\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sepelio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gestion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contabilidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cobranza\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pago_bco\":{\"dbName\":null,\"fields\":[{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_CTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_ACR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MARCA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIA_PAGO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUCURSAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEGURO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pagos\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_RECIBO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERIE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIA_REN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIA_CAR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIA_EMI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIA_PAG\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA_CAR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAN_COM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MOVIM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUCURSAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PUESTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ZONA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DNI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RENDIDO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_CAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MED_PAG\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"planes\":{\"dbName\":null,\"fields\":[{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idplan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"subcta\":{\"dbName\":null,\"fields\":[{\"name\":\"CODI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MOVIM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"zonas\":{\"dbName\":null,\"fields\":[{\"name\":\"CODIGO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COBRADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMISION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUCURSAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RECIBOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERIE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LIN_ALTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LIN_BAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TOTALIZA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PAGINA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TITULO1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TITULO2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idzona\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "prisma/generated/sanmiguel/libquery_engine-debian-openssl-1.1.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/sanmiguel/schema.prisma")
