
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

exports.Prisma.AUT_PRACScalarFieldEnum = {
  ESP_PRAC: 'ESP_PRAC',
  CODIGOS: 'CODIGOS',
  DESCRIP: 'DESCRIP',
  FECHA_ALT: 'FECHA_ALT',
  ANULADO: 'ANULADO',
  COD_PRES01: 'COD_PRES01',
  PRECIO_01: 'PRECIO_01',
  SUC_01: 'SUC_01',
  COD_PRES02: 'COD_PRES02',
  PRECIO_02: 'PRECIO_02',
  SUC_02: 'SUC_02',
  COD_PRES03: 'COD_PRES03',
  PRECIO_03: 'PRECIO_03',
  SUC_03: 'SUC_03',
  COD_PRES04: 'COD_PRES04',
  PRECIO_04: 'PRECIO_04',
  SUC_04: 'SUC_04',
  COD_PRES05: 'COD_PRES05',
  PRECIO_05: 'PRECIO_05',
  SUC_05: 'SUC_05',
  COD_PRES06: 'COD_PRES06',
  PRECIO_06: 'PRECIO_06',
  SUC_06: 'SUC_06',
  COD_PRES07: 'COD_PRES07',
  PRECIO_07: 'PRECIO_07',
  SUC_07: 'SUC_07',
  COD_PRES08: 'COD_PRES08',
  PRECIO_08: 'PRECIO_08',
  SUC_08: 'SUC_08',
  COD_PRES09: 'COD_PRES09',
  PRECIO_09: 'PRECIO_09',
  SUC_09: 'SUC_09',
  COD_PRES10: 'COD_PRES10',
  PRECIO_10: 'PRECIO_10',
  SUC_10: 'SUC_10',
  COD_PRES11: 'COD_PRES11',
  PRECIO_11: 'PRECIO_11',
  SUC_11: 'SUC_11',
  COD_PRES12: 'COD_PRES12',
  PRECIO_12: 'PRECIO_12',
  SUC_12: 'SUC_12',
  COD_PRES13: 'COD_PRES13',
  PRECIO_13: 'PRECIO_13',
  SUC_13: 'SUC_13',
  COD_PRES14: 'COD_PRES14',
  PRECIO_14: 'PRECIO_14',
  SUC_14: 'SUC_14',
  COD_PRES15: 'COD_PRES15',
  PRECIO_15: 'PRECIO_15',
  SUC_15: 'SUC_15',
  COD_PRES16: 'COD_PRES16',
  PRECIO_16: 'PRECIO_16',
  SUC_16: 'SUC_16',
  COD_PRES17: 'COD_PRES17',
  PRECIO_17: 'PRECIO_17',
  SUC_17: 'SUC_17',
  COD_PRES18: 'COD_PRES18',
  PRECIO_18: 'PRECIO_18',
  SUC_18: 'SUC_18',
  COD_PRES19: 'COD_PRES19',
  PRECIO_19: 'PRECIO_19',
  SUC_19: 'SUC_19',
  COD_PRES20: 'COD_PRES20',
  PRECIO_20: 'PRECIO_20',
  SUC_20: 'SUC_20',
  idpractica: 'idpractica'
};

exports.Prisma.CAJAScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  PUESTO: 'PUESTO',
  CODIGO: 'CODIGO',
  MOVIM: 'MOVIM',
  CUENTA: 'CUENTA',
  IMPORTE: 'IMPORTE',
  TIPO: 'TIPO',
  SERIE: 'SERIE',
  NUMERO: 'NUMERO',
  CUIT: 'CUIT',
  DETALLE: 'DETALLE',
  DET_AUX: 'DET_AUX',
  FECHA: 'FECHA',
  FEC_COMP: 'FEC_COMP',
  HORA: 'HORA',
  ORIGEN: 'ORIGEN',
  OPERADOR: 'OPERADOR',
  ASIENTO: 'ASIENTO',
  EXENTO: 'EXENTO',
  CANT_AFIL: 'CANT_AFIL',
  CAE: 'CAE',
  VTO_CAE: 'VTO_CAE',
  iditem: 'iditem'
};

exports.Prisma.CONSULTAScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  FECHA: 'FECHA',
  HORA: 'HORA',
  NRO_ORDEN: 'NRO_ORDEN',
  DESTINO: 'DESTINO',
  COD_PRES: 'COD_PRES',
  IMPORTE: 'IMPORTE',
  ANULADO: 'ANULADO',
  OPERADOR: 'OPERADOR',
  OPE_ANU: 'OPE_ANU',
  DIAGNOSTIC: 'DIAGNOSTIC',
  ATENCION: 'ATENCION',
  NRO_DNI: 'NRO_DNI',
  idconsulta: 'idconsulta',
  SUC: 'SUC'
};

exports.Prisma.ENFERMERScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  FECHA: 'FECHA',
  HORA: 'HORA',
  NRO_ORDEN: 'NRO_ORDEN',
  DESTINO: 'DESTINO',
  IMPORTE: 'IMPORTE',
  ANULADO: 'ANULADO',
  PRACTICA: 'PRACTICA',
  OPERADOR: 'OPERADOR',
  OPE_ANU: 'OPE_ANU',
  NRO_DNI: 'NRO_DNI',
  idenfermer: 'idenfermer',
  CANTIDAD: 'CANTIDAD',
  SUC: 'SUC'
};

exports.Prisma.FARMACIAScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  FECHA: 'FECHA',
  HORA: 'HORA',
  NRO_DOC: 'NRO_DOC',
  NRO_ORDEN: 'NRO_ORDEN',
  DESTINO: 'DESTINO',
  MODO: 'MODO',
  IMPORTE: 'IMPORTE',
  ANULADO: 'ANULADO',
  OPERADOR: 'OPERADOR',
  OPE_ANU: 'OPE_ANU',
  FEC_USO: 'FEC_USO',
  CAN_MEDI: 'CAN_MEDI',
  MATRICULA: 'MATRICULA',
  HABILITA: 'HABILITA',
  idfarmacia: 'idfarmacia',
  SUC: 'SUC'
};

exports.Prisma.MEDICOS_TURNOSScalarFieldEnum = {
  idturno: 'idturno',
  turno: 'turno',
  fecha: 'fecha',
  hora: 'hora',
  doctor: 'doctor',
  paciente: 'paciente',
  obra_soc: 'obra_soc',
  telefono: 'telefono',
  estado: 'estado',
  operador: 'operador',
  domicilio: 'domicilio',
  mail: 'mail',
  dni: 'dni',
  motivo_turno: 'motivo_turno',
  norden: 'norden',
  observacion: 'observacion'
};

exports.Prisma.PRACTICAScalarFieldEnum = {
  SUC_PRA: 'SUC_PRA',
  CONTRATO: 'CONTRATO',
  NRO_DNI: 'NRO_DNI',
  FECHA: 'FECHA',
  HORA: 'HORA',
  NRO_ORDEN: 'NRO_ORDEN',
  PRAC_REA: 'PRAC_REA',
  CANT_PRA: 'CANT_PRA',
  IMPORTE: 'IMPORTE',
  ANULADO: 'ANULADO',
  OPERADOR: 'OPERADOR',
  OPE_ANU: 'OPE_ANU',
  COD_PRAC: 'COD_PRAC',
  idpractica: 'idpractica',
  DESCRIP: 'DESCRIP'
};

exports.Prisma.PRACT_ENFERScalarFieldEnum = {
  idpractica: 'idpractica',
  practica: 'practica',
  importe: 'importe'
};

exports.Prisma.PRESTADOScalarFieldEnum = {
  COD_PRES: 'COD_PRES',
  NOMBRE: 'NOMBRE',
  ESPEC: 'ESPEC',
  LIS_ESPE: 'LIS_ESPE',
  SUC: 'SUC',
  DIRECCION: 'DIRECCION',
  LOCALIDAD: 'LOCALIDAD',
  TELEFONOS: 'TELEFONOS',
  HORARIO1: 'HORARIO1',
  HORARIO2: 'HORARIO2',
  MODALIDAD: 'MODALIDAD',
  MATRICULA: 'MATRICULA',
  COD_POST: 'COD_POST',
  AUSENTE: 'AUSENTE',
  CUIT: 'CUIT',
  FEC_NAC: 'FEC_NAC',
  LUGAR: 'LUGAR',
  MALA_PRAXI: 'MALA_PRAXI',
  CON_PAGA: 'CON_PAGA',
  ALTA: 'ALTA',
  BAJA: 'BAJA',
  OTERO: 'OTERO',
  idprest: 'idprest',
  PROMO: 'PROMO'
};

exports.Prisma.USOSScalarFieldEnum = {
  SUC: 'SUC',
  ORDEN: 'ORDEN',
  CONTRATO: 'CONTRATO',
  NRO_ADH: 'NRO_ADH',
  NRO_DOC: 'NRO_DOC',
  PLAN: 'PLAN',
  EDAD: 'EDAD',
  SEXO: 'SEXO',
  OBRA_SOC: 'OBRA_SOC',
  FECHA: 'FECHA',
  FEC_CAJA: 'FEC_CAJA',
  HORA: 'HORA',
  SERVICIO: 'SERVICIO',
  NUSOS: 'NUSOS',
  MODALIDAD: 'MODALIDAD',
  VALOR: 'VALOR',
  IMPORTE: 'IMPORTE',
  PUESTO: 'PUESTO',
  PRESTADO: 'PRESTADO',
  ANULADO: 'ANULADO',
  OPERADOR: 'OPERADOR',
  RENDIDO: 'RENDIDO',
  FECHA_CIERRE: 'FECHA_CIERRE',
  EMPRESA: 'EMPRESA',
  iduso: 'iduso',
  CONTROL: 'CONTROL',
  NORDEN: 'NORDEN',
  FECHA_CONTROL: 'FECHA_CONTROL',
  IMP_LIQ: 'IMP_LIQ'
};

exports.Prisma.USOSFAScalarFieldEnum = {
  SUC: 'SUC',
  ORDEN: 'ORDEN',
  CONTRATO: 'CONTRATO',
  NRO_ADH: 'NRO_ADH',
  NRO_DOC: 'NRO_DOC',
  PLAN: 'PLAN',
  EDAD: 'EDAD',
  SEXO: 'SEXO',
  OBRA_SOC: 'OBRA_SOC',
  FECHA: 'FECHA',
  FEC_CAJA: 'FEC_CAJA',
  HORA: 'HORA',
  SERVICIO: 'SERVICIO',
  COMPROBA: 'COMPROBA',
  MODALIDAD: 'MODALIDAD',
  VALOR: 'VALOR',
  IMPORTE: 'IMPORTE',
  PUESTO: 'PUESTO',
  PRESTADO: 'PRESTADO',
  ANULADO: 'ANULADO',
  OPERADOR: 'OPERADOR',
  OPE_AUTO: 'OPE_AUTO',
  FEC_USO: 'FEC_USO',
  PEDIDO: 'PEDIDO',
  NRO_RECETA: 'NRO_RECETA',
  COMP: 'COMP',
  EMPRESA: 'EMPRESA',
  N_SERIE: 'N_SERIE',
  N_RECIBO: 'N_RECIBO',
  IMP_NC: 'IMP_NC',
  CONTROL: 'CONTROL',
  NORDEN: 'NORDEN',
  FECHA_CONTROL: 'FECHA_CONTROL',
  iduso: 'iduso',
  IMP_LIQ: 'IMP_LIQ'
};

exports.Prisma.Adherent_proviScalarFieldEnum = {
  idadherent: 'idadherent',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  PLAN: 'PLAN',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  NACIMIENTO: 'NACIMIENTO',
  EMPRESA: 'EMPRESA',
  ESTADO: 'ESTADO'
};

exports.Prisma.NosociosScalarFieldEnum = {
  idnosocio: 'idnosocio',
  nosocio: 'nosocio',
  dni: 'dni',
  telefono: 'telefono',
  mail: 'mail',
  obra_soc: 'obra_soc',
  fecha: 'fecha',
  codigo: 'codigo',
  gremio: 'gremio',
  estado: 'estado',
  otra_os: 'otra_os'
};

exports.Prisma.Planes_odontologicosScalarFieldEnum = {
  idplan: 'idplan',
  plan: 'plan',
  pago_inicial: 'pago_inicial',
  pago_cuota: 'pago_cuota',
  pago_final: 'pago_final',
  cuotas: 'cuotas',
  detalle: 'detalle',
  visitas: 'visitas',
  fecha_plan: 'fecha_plan',
  total: 'total',
  estado: 'estado',
  detalle_plan: 'detalle_plan'
};

exports.Prisma.Planes_socioScalarFieldEnum = {
  idplansocio: 'idplansocio',
  contrato: 'contrato',
  dni: 'dni',
  socio: 'socio',
  fecha: 'fecha',
  total: 'total',
  pagado: 'pagado',
  saldo: 'saldo',
  estado: 'estado',
  prestador: 'prestador',
  prestador_nombre: 'prestador_nombre',
  operador: 'operador',
  sucursal: 'sucursal',
  plan: 'plan',
  contencion: 'contencion'
};

exports.Prisma.Planes_visitasScalarFieldEnum = {
  idvisita: 'idvisita',
  idplan: 'idplan',
  nvisita: 'nvisita',
  pago: 'pago',
  fecha: 'fecha',
  pagado: 'pagado',
  operador: 'operador',
  plan: 'plan'
};

exports.Prisma.PromocionesScalarFieldEnum = {
  idpromo: 'idpromo',
  pot1: 'pot1',
  pot2: 'pot2',
  pint1: 'pint1',
  pint2: 'pint2'
};

exports.Prisma.PacientesScalarFieldEnum = {
  idpaciente: 'idpaciente',
  paciente: 'paciente',
  dni: 'dni',
  obra_soc: 'obra_soc',
  telefono: 'telefono',
  domicilio: 'domicilio',
  mail: 'mail'
};

exports.Prisma.AusenciasScalarFieldEnum = {
  idausencia: 'idausencia',
  cod_pres: 'cod_pres',
  prestador: 'prestador',
  motivo: 'motivo',
  desde: 'desde',
  hasta: 'hasta',
  observacion: 'observacion',
  estado: 'estado',
  operador: 'operador'
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
  AUT_PRAC: 'AUT_PRAC',
  CAJA: 'CAJA',
  CONSULTA: 'CONSULTA',
  ENFERMER: 'ENFERMER',
  FARMACIA: 'FARMACIA',
  MEDICOS_TURNOS: 'MEDICOS_TURNOS',
  PRACTICA: 'PRACTICA',
  PRACT_ENFER: 'PRACT_ENFER',
  PRESTADO: 'PRESTADO',
  USOS: 'USOS',
  USOSFA: 'USOSFA',
  adherent_provi: 'adherent_provi',
  nosocios: 'nosocios',
  planes_odontologicos: 'planes_odontologicos',
  planes_socio: 'planes_socio',
  planes_visitas: 'planes_visitas',
  promociones: 'promociones',
  pacientes: 'pacientes',
  ausencias: 'ausencias'
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
      "value": "/home/vlongo/Desarrollo/werchowmed/prisma/generated/werchowserv",
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
        "fromEnvVar": "WERCHOWSERV_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4vZ2VuZXJhdGVkL3dlcmNob3dzZXJ2IgogIHByZXZpZXdGZWF0dXJlcyA9IFsibXVsdGlTY2hlbWEiXQp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJteXNxbCIKICB1cmwgICAgICA9IGVudigiV0VSQ0hPV1NFUlZfVVJMIikKfQoKbW9kZWwgQVVUX1BSQUMgewogIEVTUF9QUkFDICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDMpCiAgQ09ESUdPUyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjApCiAgREVTQ1JJUCAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTUwMCkKICBGRUNIQV9BTFQgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEFOVUxBRE8gICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgQ09EX1BSRVMwMSBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMDEgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDXzAxICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT0RfUFJFUzAyIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgUFJFQ0lPXzAyICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFNVQ18wMiAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMwMyBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMDMgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDXzAzICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT0RfUFJFUzA0IFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIFBSRUNJT18wNCAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTVUNfMDQgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDUgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzA1ICBGbG9hdD8KICBTVUNfMDUgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDYgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzA2ICBGbG9hdD8KICBTVUNfMDYgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDcgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzA3ICBGbG9hdD8KICBTVUNfMDcgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDggU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzA4ICBGbG9hdD8KICBTVUNfMDggICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDkgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzA5ICBGbG9hdD8KICBTVUNfMDkgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzEwICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFNVQ18xMCAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMxMSBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMTEgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDXzExICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT0RfUFJFUzEyIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIFBSRUNJT18xMiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTVUNfMTIgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTMgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzEzICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFNVQ18xMyAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMxNCBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMTQgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDXzE0ICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT0RfUFJFUzE1IFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIFBSRUNJT18xNSAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTVUNfMTUgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTYgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzE2ICBGbG9hdD8KICBTVUNfMTYgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTcgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzE3ICBGbG9hdD8KICBTVUNfMTcgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTggU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzE4ICBGbG9hdD8KICBTVUNfMTggICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTkgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzE5ICBGbG9hdD8KICBTVUNfMTkgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMjAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzIwICBGbG9hdD8KICBTVUNfMjAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIGlkcHJhY3RpY2EgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCn0KCm1vZGVsIENBSkEgewogIFNVQ1VSU0FMICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBQVUVTVE8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDIpCiAgQ09ESUdPICAgIEludD8KICBNT1ZJTSAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ1VFTlRBICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgSU1QT1JURSAgIEZsb2F0PwogIFRJUE8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBTRVJJRSAgICAgSW50PwogIE5VTUVSTyAgICBJbnQ/CiAgQ1VJVCAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMykKICBERVRBTExFICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBERVRfQVVYICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQogIEZFQ0hBICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBGRUNfQ09NUCAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBIT1JBICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPUklHRU4gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgT1BFUkFET1IgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgQVNJRU5UTyAgIEludD8KICBFWEVOVE8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBDQU5UX0FGSUwgSW50PwogIENBRSAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTQpCiAgVlRPX0NBRSAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgaWRpdGVtICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQp9Cgptb2RlbCBDT05TVUxUQSB7CiAgQ09OVFJBVE8gICBJbnQ/CiAgRkVDSEEgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBIT1JBICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIE5ST19PUkRFTiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEyKQogIERFU1RJTk8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgQ09EX1BSRVMgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBJTVBPUlRFICAgIEZsb2F0PwogIEFOVUxBRE8gICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgT1BFUkFET1IgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE9QRV9BTlUgICAgSW50PwogIERJQUdOT1NUSUMgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDMwKQogIEFURU5DSU9OICAgSW50PwogIE5ST19ETkkgICAgSW50PwogIGlkY29uc3VsdGEgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgU1VDICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQp9Cgptb2RlbCBFTkZFUk1FUiB7CiAgQ09OVFJBVE8gICBJbnQ/CiAgRkVDSEEgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBIT1JBICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIE5ST19PUkRFTiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEyKQogIERFU1RJTk8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgSU1QT1JURSAgICBGbG9hdD8KICBBTlVMQURPICAgIEludD8gICAgICBAZGIuVGlueUludAogIFBSQUNUSUNBICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPUEVSQURPUiAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgT1BFX0FOVSAgICBJbnQ/CiAgTlJPX0ROSSAgICBJbnQ/CiAgaWRlbmZlcm1lciBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBDQU5USURBRCAgIEludD8KICBTVUMgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIEVORkVSTUVSRkEgewogIENPTlRSQVRPICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBGRUNIQSAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgSE9SQSAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIE5ST19PUkRFTiBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBERVNUSU5PICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgSU1QT1JURSAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIEFOVUxBRE8gICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBQUkFDVElDQSAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgT1BFUkFET1IgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIE9QRV9BTlUgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBOUk9fRE5JICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgRjEyICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIEYxMyAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBGMTQgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgRjE1ICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIFNVQyAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKCiAgQEBpZ25vcmUKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgRVNQRUNJQUwgewogIEVTUEVDSUFMICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigzKQogIE5PTUJSRSAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNSkKICBQUkFDVElDQSAgIEludD8gICAgQGRiLlRpbnlJbnQKICBDT05TVUxUQSAgIEludD8gICAgQGRiLlRpbnlJbnQKICBSRUlOVEVHUk9TIEludD8gICAgQGRiLlRpbnlJbnQKICBQTEFOX0EgICAgIEZsb2F0PwogIFBMQU5fQiAgICAgRmxvYXQ/CiAgUExBTl81MCAgICBGbG9hdD8KICBQTEFOXzcwICAgIEZsb2F0PwoKICBAQGlnbm9yZQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBGQVJNQSB7CiAgQ09ESUdPIFN0cmluZz8gQGRiLlZhckNoYXIoNSkKICBOT01CUkUgU3RyaW5nPyBAZGIuVmFyQ2hhcigyMCkKICBERVNDICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgREVTQzIgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQoKICBAQGlnbm9yZQp9Cgptb2RlbCBGQVJNQUNJQSB7CiAgQ09OVFJBVE8gICBJbnQ/CiAgRkVDSEEgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBIT1JBICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTlJPX0RPQyAgICBJbnQ/CiAgTlJPX09SREVOICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIERFU1RJTk8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBNT0RPICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgSU1QT1JURSAgICBGbG9hdD8KICBBTlVMQURPICAgIEludD8gICAgICBAZGIuVGlueUludAogIE9QRVJBRE9SICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPUEVfQU5VICAgIEludD8KICBGRUNfVVNPICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIENBTl9NRURJICAgSW50PwogIE1BVFJJQ1VMQSAgSW50PwogIEhBQklMSVRBICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgaWRmYXJtYWNpYSBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBTVUMgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIEhJU19TRVJWIHsKICBQUkVTVEFETyAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgT1BFUkFET1IgIEludD8KICBGRUNIQSAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgSE9SQSAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIENBTVBPICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjApCiAgQU5URVJJT1IgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1MCkKICBOVUVWTyAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQogIEFDVFVBTElaQSBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTMpCiAgU1VDVVJTQUwgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQoKICBAQGlnbm9yZQp9Cgptb2RlbCBNRURJQ09TX1RVUk5PUyB7CiAgaWR0dXJubyAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHR1cm5vICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGZlY2hhICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBob3JhICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBkb2N0b3IgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBwYWNpZW50ZSAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBvYnJhX3NvYyAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICB0ZWxlZm9ubyAgICAgQmlnSW50PwogIGVzdGFkbyAgICAgICBJbnQ/CiAgb3BlcmFkb3IgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgZG9taWNpbGlvICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDAwKQogIG1haWwgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTAwKQogIGRuaSAgICAgICAgICBJbnQ/CiAgbW90aXZvX3R1cm5vIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgbm9yZGVuICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgb2JzZXJ2YWNpb24gIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1MDAwKQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBPUFRJQ0EgewogIENPTlRSQVRPICBJbnQ/CiAgRkVDSEEgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEhPUkEgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBOUk9fT1JERU4gU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEyKQogIERFU1RJTk8gICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBJTVBPUlRFICAgRmxvYXQ/CiAgQU5VTEFETyAgIEludD8gICAgICBAZGIuVGlueUludAogIERFU0NVRU5UTyBJbnQ/CiAgT1BFUkFET1IgIEludD8KICBPUEVfQU5VICAgSW50PwogIFBVRVNUTyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMikKCiAgQEBpZ25vcmUKfQoKbW9kZWwgUFJBQ1RJQ0EgewogIFNVQ19QUkEgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09OVFJBVE8gICBJbnQ/CiAgTlJPX0ROSSAgICBJbnQ/CiAgRkVDSEEgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBIT1JBICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIE5ST19PUkRFTiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEyKQogIFBSQUNfUkVBICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDExKQogIENBTlRfUFJBICAgSW50PwogIElNUE9SVEUgICAgRmxvYXQ/CiAgQU5VTEFETyAgICBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBPUEVSQURPUiAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgT1BFX0FOVSAgICBJbnQ/CiAgQ09EX1BSQUMgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoOCkKICBpZHByYWN0aWNhIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIERFU0NSSVAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwgUFJBQ1RfRU5GRVIgewogIGlkcHJhY3RpY2EgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHByYWN0aWNhICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgaW1wb3J0ZSAgICBGbG9hdD8gIEBkYi5GbG9hdAp9Cgptb2RlbCBQUkVTVEFETyB7CiAgQ09EX1BSRVMgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNSkKICBOT01CUkUgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNSkKICBFU1BFQyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxNSkKICBMSVNfRVNQRSAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigzMCkKICBTVUMgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIERJUkVDQ0lPTiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBMT0NBTElEQUQgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxNSkKICBURUxFRk9OT1MgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxNSkKICBIT1JBUklPMSAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgSE9SQVJJTzIgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE1PREFMSURBRCAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDYwKQogIE1BVFJJQ1VMQSAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwKQogIENPRF9QT1NUICAgSW50PwogIEFVU0VOVEUgICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgQ1VJVCAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTMpCiAgRkVDX05BQyAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBMVUdBUiAgICAgIEludD8KICBNQUxBX1BSQVhJIEludD8gICAgICBAZGIuVGlueUludAogIENPTl9QQUdBICAgSW50PwogIEFMVEEgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgQkFKQSAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBPVEVSTyAgICAgIEludD8gICAgICBAZGIuVGlueUludAogIGlkcHJlc3QgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgUFJPTU8gICAgICBCb29sZWFuPwp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBTRVJWSUNJTyB7CiAgQ09ESUdPICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDQpCiAgREVTQ1JJUCAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDMwKQogIFBST0dSQU1BICAgU3RyaW5nPyBAZGIuVmFyQ2hhcig4KQogIEFSQ0hJVk8gICAgU3RyaW5nPyBAZGIuVmFyQ2hhcig4KQogIE5ST19PUkRFTiAgSW50PwogIElNUE9SVEUgICAgRmxvYXQ/CiAgTlJPX1JFQ0lCTyBJbnQ/CiAgTElNSVRFICAgICBJbnQ/CiAgRU5CQVNFXzEgICBGbG9hdD8KICBFTkJBU0VfMiAgIEZsb2F0PwogIFBMQU5fQSAgICAgRmxvYXQ/CiAgUExBTl9CICAgICBGbG9hdD8KICBQTEFOX0MgICAgIEZsb2F0PwogIFBMQU5fRCAgICAgRmxvYXQ/CiAgTU9EVV83ICAgICBGbG9hdD8KICBNT0RVXzggICAgIEZsb2F0PwogIE1PRFVfMSAgICAgRmxvYXQ/CiAgTU9EVV80ICAgICBGbG9hdD8KCiAgQEBpZ25vcmUKfQoKbW9kZWwgVVNPUyB7CiAgU1VDICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBPUkRFTiAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMikKICBDT05UUkFUTyAgICAgIEludD8KICBOUk9fQURIICAgICAgIEludD8KICBOUk9fRE9DICAgICAgIEludD8KICBQTEFOICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgRURBRCAgICAgICAgICBJbnQ/CiAgU0VYTyAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBPQlJBX1NPQyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgRkVDSEEgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBGRUNfQ0FKQSAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEhPUkEgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgU0VSVklDSU8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNCkKICBOVVNPUyAgICAgICAgIEludD8KICBNT0RBTElEQUQgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIFZBTE9SICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBJTVBPUlRFICAgICAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBQVUVTVE8gICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyKQogIFBSRVNUQURPICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgQU5VTEFETyAgICAgICBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBPUEVSQURPUiAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgUkVORElETyAgICAgICBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBGRUNIQV9DSUVSUkUgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEVNUFJFU0EgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgaWR1c28gICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBDT05UUk9MICAgICAgIEJvb2xlYW4/CiAgTk9SREVOICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEZFQ0hBX0NPTlRST0wgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgSU1QX0xJUSAgICAgICBGbG9hdD8gICAgQGRiLkZsb2F0Cn0KCm1vZGVsIFVTT1NGQSB7CiAgU1VDICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE9SREVOICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBDT05UUkFUTyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTlJPX0FESCAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE5ST19ET0MgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBQTEFOICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgRURBRCAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFNFWE8gICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPQlJBX1NPQyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgRkVDSEEgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEZFQ19DQUpBICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBIT1JBICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU0VSVklDSU8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIENPTVBST0JBICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBNT0RBTElEQUQgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgVkFMT1IgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIElNUE9SVEUgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBQVUVTVE8gICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgUFJFU1RBRE8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEFOVUxBRE8gICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPUEVSQURPUiAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgT1BFX0FVVE8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEZFQ19VU08gICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBQRURJRE8gICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTlJPX1JFQ0VUQSAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIENPTVAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBFTVBSRVNBICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTl9TRVJJRSAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE5fUkVDSUJPICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBJTVBfTkMgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgQ09OVFJPTCAgICAgICBCb29sZWFuPwogIE5PUkRFTiAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBGRUNIQV9DT05UUk9MIERhdGVUaW1lPyBAZGIuRGF0ZQogIGlkdXNvICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgSU1QX0xJUSAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQp9Cgptb2RlbCBhZGhlcmVudF9wcm92aSB7CiAgaWRhZGhlcmVudCBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBDT05UUkFUTyAgIEludD8KICBOUk9fRE9DICAgIEludD8KICBQTEFOICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgQVBFTExJRE9TICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE5PTUJSRVMgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBOQUNJTUlFTlRPIERhdGVUaW1lPyBAZGIuRGF0ZQogIEVNUFJFU0EgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBFU1RBRE8gICAgIEJvb2xlYW4/Cn0KCm1vZGVsIG5vc29jaW9zIHsKICBpZG5vc29jaW8gSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbm9zb2NpbyAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgZG5pICAgICAgIEJpZ0ludD8KICB0ZWxlZm9ubyAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBtYWlsICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBvYnJhX3NvYyAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBmZWNoYSAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgY29kaWdvICAgIEludD8KICBncmVtaW8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBlc3RhZG8gICAgQm9vbGVhbj8KICBvdHJhX29zICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwgcGxhbmVzX29kb250b2xvZ2ljb3MgewogIGlkcGxhbiAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwbGFuICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBwYWdvX2luaWNpYWwgRmxvYXQ/ICAgIEBkYi5GbG9hdAogIHBhZ29fY3VvdGEgICBGbG9hdD8gICAgQGRiLkZsb2F0CiAgcGFnb19maW5hbCAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBjdW90YXMgICAgICAgSW50PwogIGRldGFsbGUgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHZpc2l0YXMgICAgICBJbnQ/CiAgZmVjaGFfcGxhbiAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIHRvdGFsICAgICAgICBGbG9hdD8gICAgQGRiLkZsb2F0CiAgZXN0YWRvICAgICAgIEJvb2xlYW4/CiAgZGV0YWxsZV9wbGFuIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDAwKQp9Cgptb2RlbCBwbGFuZXNfc29jaW8gewogIGlkcGxhbnNvY2lvICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY29udHJhdG8gICAgICAgICBJbnQ/CiAgZG5pICAgICAgICAgICAgICBJbnQ/CiAgc29jaW8gICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGZlY2hhICAgICAgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgdG90YWwgICAgICAgICAgICBGbG9hdD8gICAgQGRiLkZsb2F0CiAgcGFnYWRvICAgICAgICAgICBGbG9hdD8gICAgQGRiLkZsb2F0CiAgc2FsZG8gICAgICAgICAgICBGbG9hdD8gICAgQGRiLkZsb2F0CiAgZXN0YWRvICAgICAgICAgICBCb29sZWFuPwogIHByZXN0YWRvciAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBwcmVzdGFkb3Jfbm9tYnJlIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgb3BlcmFkb3IgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHN1Y3Vyc2FsICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBwbGFuICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgY29udGVuY2lvbiAgICAgICBCb29sZWFuPwp9Cgptb2RlbCBwbGFuZXNfdmlzaXRhcyB7CiAgaWR2aXNpdGEgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgaWRwbGFuICAgSW50PwogIG52aXNpdGEgIEludD8KICBwYWdvICAgICBGbG9hdD8gICAgQGRiLkZsb2F0CiAgZmVjaGEgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgcGFnYWRvICAgQm9vbGVhbj8KICBvcGVyYWRvciBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHBsYW4gICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCn0KCm1vZGVsIHByb21vY2lvbmVzIHsKICBpZHByb21vIEludCAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwb3QxICAgIEludD8KICBwb3QyICAgIEludD8KICBwaW50MSAgIEludD8KICBwaW50MiAgIEludD8KfQoKbW9kZWwgcGFjaWVudGVzIHsKICBpZHBhY2llbnRlIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwYWNpZW50ZSAgIFN0cmluZz8gQGRiLlZhckNoYXIoNTAwKQogIGRuaSAgICAgICAgSW50PwogIG9icmFfc29jICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgdGVsZWZvbm8gICBCaWdJbnQ/CiAgZG9taWNpbGlvICBTdHJpbmc/IEBkYi5WYXJDaGFyKDEwMDApCiAgbWFpbCAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDUwMCkKfQoKbW9kZWwgYXVzZW5jaWFzIHsKICBpZGF1c2VuY2lhICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjb2RfcHJlcyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHByZXN0YWRvciAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgbW90aXZvICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBkZXNkZSAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBoYXN0YSAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBvYnNlcnZhY2lvbiBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTAwMCkKICBlc3RhZG8gICAgICBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBvcGVyYWRvciAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQp9Cg==",
  "inlineSchemaHash": "acc585d0d6c5fd1f43b3a440f7094d482bf587fa056a23bb585e6703e7e4d95e",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/werchowserv",
    "generated/werchowserv",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"AUT_PRAC\":{\"dbName\":null,\"fields\":[{\"name\":\"ESP_PRAC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODIGOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_ALT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES01\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_01\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_01\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES02\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_02\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_02\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES03\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_03\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_03\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES04\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_04\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_04\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES05\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_05\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_05\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES06\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_06\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_06\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES07\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_07\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_07\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES08\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_08\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_08\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES09\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_09\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_09\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES11\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_11\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_11\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES12\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_12\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_12\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES13\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_13\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_13\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES14\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_14\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_14\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES15\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_15\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_15\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES16\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_16\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_16\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES17\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_17\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_17\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES18\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_18\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_18\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES19\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_19\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_19\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES20\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_20\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_20\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpractica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CAJA\":{\"dbName\":null,\"fields\":[{\"name\":\"SUCURSAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PUESTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODIGO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MOVIM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUENTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TIPO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERIE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUMERO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUIT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DETALLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DET_AUX\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_COMP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORIGEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ASIENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EXENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CANT_AFIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CAE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VTO_CAE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iditem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CONSULTA\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESTINO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIAGNOSTIC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ATENCION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DNI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idconsulta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ENFERMER\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESTINO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRACTICA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DNI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idenfermer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CANTIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FARMACIA\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESTINO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_USO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CAN_MEDI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MATRICULA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HABILITA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idfarmacia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MEDICOS_TURNOS\":{\"dbName\":null,\"fields\":[{\"name\":\"idturno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hora\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doctor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paciente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obra_soc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domicilio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motivo_turno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"norden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PRACTICA\":{\"dbName\":null,\"fields\":[{\"name\":\"SUC_PRA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DNI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRAC_REA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CANT_PRA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRAC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpractica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PRACT_ENFER\":{\"dbName\":null,\"fields\":[{\"name\":\"idpractica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"practica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"importe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PRESTADO\":{\"dbName\":null,\"fields\":[{\"name\":\"COD_PRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOMBRE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ESPEC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LIS_ESPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIRECCION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TELEFONOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORARIO1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORARIO2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MATRICULA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_POST\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AUSENTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUIT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_NAC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LUGAR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MALA_PRAXI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CON_PAGA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ALTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OTERO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idprest\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PROMO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"USOS\":{\"dbName\":null,\"fields\":[{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ADH\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEXO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OBRA_SOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_CAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERVICIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUSOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PUESTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRESTADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RENDIDO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_CIERRE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMP_LIQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"USOSFA\":{\"dbName\":null,\"fields\":[{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ADH\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEXO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OBRA_SOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_CAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERVICIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMPROBA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PUESTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRESTADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_AUTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_USO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PEDIDO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_RECETA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"N_SERIE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"N_RECIBO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMP_NC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMP_LIQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"adherent_provi\":{\"dbName\":null,\"fields\":[{\"name\":\"idadherent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"APELLIDOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOMBRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NACIMIENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ESTADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"nosocios\":{\"dbName\":null,\"fields\":[{\"name\":\"idnosocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nosocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obra_soc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gremio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"otra_os\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"planes_odontologicos\":{\"dbName\":null,\"fields\":[{\"name\":\"idplan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago_inicial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago_cuota\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago_final\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuotas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visitas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalle_plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"planes_socio\":{\"dbName\":null,\"fields\":[{\"name\":\"idplansocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saldo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prestador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prestador_nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sucursal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contencion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"planes_visitas\":{\"dbName\":null,\"fields\":[{\"name\":\"idvisita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idplan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nvisita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"promociones\":{\"dbName\":null,\"fields\":[{\"name\":\"idpromo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pot1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pot2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pint1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pint2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pacientes\":{\"dbName\":null,\"fields\":[{\"name\":\"idpaciente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paciente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obra_soc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domicilio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ausencias\":{\"dbName\":null,\"fields\":[{\"name\":\"idausencia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_pres\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prestador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desde\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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
path.join(process.cwd(), "prisma/generated/werchowserv/libquery_engine-debian-openssl-1.1.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/werchowserv/schema.prisma")
