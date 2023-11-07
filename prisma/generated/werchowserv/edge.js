
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
} = require('./runtime/edge')


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
  dni: 'dni'
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
  DESDE: 'DESDE',
  HASTA: 'HASTA',
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
  total: 'total',
  pago_inicial: 'pago_inicial',
  detalle: 'detalle',
  estado: 'estado',
  visitas: 'visitas',
  fecha_plan: 'fecha_plan',
  cuotas: 'cuotas',
  plan: 'plan'
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
  plan: 'plan'
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
  pacientes: 'pacientes'
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4vZ2VuZXJhdGVkL3dlcmNob3dzZXJ2IgogIHByZXZpZXdGZWF0dXJlcyA9IFsibXVsdGlTY2hlbWEiXQp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJteXNxbCIKICB1cmwgICAgICA9IGVudigiV0VSQ0hPV1NFUlZfVVJMIikKfQoKbW9kZWwgQVVUX1BSQUMgewogIEVTUF9QUkFDICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDMpCiAgQ09ESUdPUyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoOCkKICBERVNDUklQICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxNTAwKQogIEZFQ0hBX0FMVCAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgQU5VTEFETyAgICBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBDT0RfUFJFUzAxIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIFBSRUNJT18wMSAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTVUNfMDEgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDIgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBQUkVDSU9fMDIgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDXzAyICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT0RfUFJFUzAzIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIFBSRUNJT18wMyAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTVUNfMDMgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDQgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzA0ICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFNVQ18wNCAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMwNSBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMDUgIEZsb2F0PwogIFNVQ18wNSAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMwNiBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMDYgIEZsb2F0PwogIFNVQ18wNiAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMwNyBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMDcgIEZsb2F0PwogIFNVQ18wNyAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMwOCBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMDggIEZsb2F0PwogIFNVQ18wOCAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMwOSBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMDkgIEZsb2F0PwogIFNVQ18wOSAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMxMCBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMTAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDXzEwICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT0RfUFJFUzExIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIFBSRUNJT18xMSAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTVUNfMTEgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTIgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzEyICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFNVQ18xMiAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMxMyBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMTMgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDXzEzICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT0RfUFJFUzE0IFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIFBSRUNJT18xNCAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTVUNfMTQgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTUgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzE1ICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFNVQ18xNSAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMxNiBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMTYgIEZsb2F0PwogIFNVQ18xNiAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMxNyBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMTcgIEZsb2F0PwogIFNVQ18xNyAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMxOCBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMTggIEZsb2F0PwogIFNVQ18xOCAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMxOSBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMTkgIEZsb2F0PwogIFNVQ18xOSAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMyMCBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMjAgIEZsb2F0PwogIFNVQ18yMCAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgaWRwcmFjdGljYSBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKfQoKbW9kZWwgQ0FKQSB7CiAgU1VDVVJTQUwgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIFBVRVNUTyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMikKICBDT0RJR08gICAgSW50PwogIE1PVklNICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDVUVOVEEgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBJTVBPUlRFICAgRmxvYXQ/CiAgVElQTyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIFNFUklFICAgICBJbnQ/CiAgTlVNRVJPICAgIEludD8KICBDVUlUICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEzKQogIERFVEFMTEUgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIERFVF9BVVggICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTApCiAgRkVDSEEgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEZFQ19DT01QICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEhPUkEgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE9SSUdFTiAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBPUEVSQURPUiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBBU0lFTlRPICAgSW50PwogIEVYRU5UTyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIENBTlRfQUZJTCBJbnQ/CiAgQ0FFICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxNCkKICBWVE9fQ0FFICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBpZGl0ZW0gICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCn0KCm1vZGVsIENPTlNVTFRBIHsKICBDT05UUkFUTyAgIEludD8KICBGRUNIQSAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEhPUkEgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgTlJPX09SREVOICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTIpCiAgREVTVElOTyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBDT0RfUFJFUyAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIElNUE9SVEUgICAgRmxvYXQ/CiAgQU5VTEFETyAgICBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBPUEVSQURPUiAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgT1BFX0FOVSAgICBJbnQ/CiAgRElBR05PU1RJQyBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMzApCiAgQVRFTkNJT04gICBJbnQ/CiAgTlJPX0ROSSAgICBJbnQ/CiAgaWRjb25zdWx0YSBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBTVUMgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCn0KCm1vZGVsIEVORkVSTUVSIHsKICBDT05UUkFUTyAgIEludD8KICBGRUNIQSAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEhPUkEgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgTlJPX09SREVOICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTIpCiAgREVTVElOTyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBJTVBPUlRFICAgIEZsb2F0PwogIEFOVUxBRE8gICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgUFJBQ1RJQ0EgICBJbnQ/CiAgT1BFUkFET1IgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE9QRV9BTlUgICAgSW50PwogIE5ST19ETkkgICAgSW50PwogIGlkZW5mZXJtZXIgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgQ0FOVElEQUQgICBJbnQ/CiAgU1VDICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBFTkZFUk1FUkZBIHsKICBDT05UUkFUTyAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgRkVDSEEgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIEhPUkEgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBOUk9fT1JERU4gU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgREVTVElOTyAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIElNUE9SVEUgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBBTlVMQURPICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgUFJBQ1RJQ0EgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIE9QRVJBRE9SICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBPUEVfQU5VICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgTlJPX0ROSSAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIEYxMiAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBGMTMgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgRjE0ICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIEYxNSAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBTVUMgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCgogIEBAaWdub3JlCn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIEVTUEVDSUFMIHsKICBFU1BFQ0lBTCAgIFN0cmluZz8gQGRiLlZhckNoYXIoMykKICBOT01CUkUgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjUpCiAgUFJBQ1RJQ0EgICBJbnQ/ICAgIEBkYi5UaW55SW50CiAgQ09OU1VMVEEgICBJbnQ/ICAgIEBkYi5UaW55SW50CiAgUkVJTlRFR1JPUyBJbnQ/ICAgIEBkYi5UaW55SW50CiAgUExBTl9BICAgICBGbG9hdD8KICBQTEFOX0IgICAgIEZsb2F0PwogIFBMQU5fNTAgICAgRmxvYXQ/CiAgUExBTl83MCAgICBGbG9hdD8KCiAgQEBpZ25vcmUKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgRkFSTUEgewogIENPRElHTyBTdHJpbmc/IEBkYi5WYXJDaGFyKDUpCiAgTk9NQlJFIFN0cmluZz8gQGRiLlZhckNoYXIoMjApCiAgREVTQyAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIERFU0MyICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKCiAgQEBpZ25vcmUKfQoKbW9kZWwgRkFSTUFDSUEgewogIENPTlRSQVRPICAgSW50PwogIEZFQ0hBICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgSE9SQSAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE5ST19ET0MgICAgSW50PwogIE5ST19PUkRFTiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBERVNUSU5PICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTU9ETyAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIElNUE9SVEUgICAgRmxvYXQ/CiAgQU5VTEFETyAgICBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBPUEVSQURPUiAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgT1BFX0FOVSAgICBJbnQ/CiAgRkVDX1VTTyAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBDQU5fTUVESSAgIEludD8KICBNQVRSSUNVTEEgIEludD8KICBIQUJJTElUQSAgIEludD8gICAgICBAZGIuVGlueUludAogIGlkZmFybWFjaWEgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgU1VDICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBISVNfU0VSViB7CiAgUFJFU1RBRE8gIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIE9QRVJBRE9SICBJbnQ/CiAgRkVDSEEgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEhPUkEgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBDQU1QTyAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDIwKQogIEFOVEVSSU9SICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTApCiAgTlVFVk8gICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1MCkKICBBQ1RVQUxJWkEgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEzKQogIFNVQ1VSU0FMICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKCiAgQEBpZ25vcmUKfQoKbW9kZWwgTUVESUNPU19UVVJOT1MgewogIGlkdHVybm8gICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB0dXJubyAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBmZWNoYSAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgaG9yYSAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgZG9jdG9yICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgcGFjaWVudGUgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgb2JyYV9zb2MgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgdGVsZWZvbm8gIEJpZ0ludD8KICBlc3RhZG8gICAgSW50PwogIG9wZXJhZG9yICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGRvbWljaWxpbyBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTAwMCkKICBtYWlsICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwMCkKICBkbmkgICAgICAgSW50Pwp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBPUFRJQ0EgewogIENPTlRSQVRPICBJbnQ/CiAgRkVDSEEgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEhPUkEgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBOUk9fT1JERU4gU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEyKQogIERFU1RJTk8gICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBJTVBPUlRFICAgRmxvYXQ/CiAgQU5VTEFETyAgIEludD8gICAgICBAZGIuVGlueUludAogIERFU0NVRU5UTyBJbnQ/CiAgT1BFUkFET1IgIEludD8KICBPUEVfQU5VICAgSW50PwogIFBVRVNUTyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMikKCiAgQEBpZ25vcmUKfQoKbW9kZWwgUFJBQ1RJQ0EgewogIFNVQ19QUkEgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09OVFJBVE8gICBJbnQ/CiAgTlJPX0ROSSAgICBJbnQ/CiAgRkVDSEEgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBIT1JBICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIE5ST19PUkRFTiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEyKQogIFBSQUNfUkVBICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDExKQogIENBTlRfUFJBICAgSW50PwogIElNUE9SVEUgICAgRmxvYXQ/CiAgQU5VTEFETyAgICBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBPUEVSQURPUiAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgT1BFX0FOVSAgICBJbnQ/CiAgQ09EX1BSQUMgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoOCkKICBpZHByYWN0aWNhIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIERFU0NSSVAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwgUFJBQ1RfRU5GRVIgewogIGlkcHJhY3RpY2EgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHByYWN0aWNhICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgaW1wb3J0ZSAgICBGbG9hdD8gIEBkYi5GbG9hdAp9Cgptb2RlbCBQUkVTVEFETyB7CiAgQ09EX1BSRVMgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNSkKICBOT01CUkUgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNSkKICBFU1BFQyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxNSkKICBMSVNfRVNQRSAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigzMCkKICBTVUMgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIERJUkVDQ0lPTiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBMT0NBTElEQUQgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxNSkKICBURUxFRk9OT1MgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxNSkKICBIT1JBUklPMSAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgSE9SQVJJTzIgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE1PREFMSURBRCAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDYwKQogIE1BVFJJQ1VMQSAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwKQogIENPRF9QT1NUICAgSW50PwogIEFVU0VOVEUgICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgREVTREUgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBIQVNUQSAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIENVSVQgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEzKQogIEZFQ19OQUMgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgTFVHQVIgICAgICBJbnQ/CiAgTUFMQV9QUkFYSSBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBDT05fUEFHQSAgIEludD8KICBBTFRBICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEJBSkEgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgT1RFUk8gICAgICBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBpZHByZXN0ICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIFBST01PICAgICAgQm9vbGVhbj8KfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgU0VSVklDSU8gewogIENPRElHTyAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcig0KQogIERFU0NSSVAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigzMCkKICBQUk9HUkFNQSAgIFN0cmluZz8gQGRiLlZhckNoYXIoOCkKICBBUkNISVZPICAgIFN0cmluZz8gQGRiLlZhckNoYXIoOCkKICBOUk9fT1JERU4gIEludD8KICBJTVBPUlRFICAgIEZsb2F0PwogIE5ST19SRUNJQk8gSW50PwogIExJTUlURSAgICAgSW50PwogIEVOQkFTRV8xICAgRmxvYXQ/CiAgRU5CQVNFXzIgICBGbG9hdD8KICBQTEFOX0EgICAgIEZsb2F0PwogIFBMQU5fQiAgICAgRmxvYXQ/CiAgUExBTl9DICAgICBGbG9hdD8KICBQTEFOX0QgICAgIEZsb2F0PwogIE1PRFVfNyAgICAgRmxvYXQ/CiAgTU9EVV84ICAgICBGbG9hdD8KICBNT0RVXzEgICAgIEZsb2F0PwogIE1PRFVfNCAgICAgRmxvYXQ/CgogIEBAaWdub3JlCn0KCm1vZGVsIFVTT1MgewogIFNVQyAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgT1JERU4gICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTIpCiAgQ09OVFJBVE8gICAgICBJbnQ/CiAgTlJPX0FESCAgICAgICBJbnQ/CiAgTlJPX0RPQyAgICAgICBJbnQ/CiAgUExBTiAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEVEQUQgICAgICAgICAgSW50PwogIFNFWE8gICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgT0JSQV9TT0MgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEZFQ0hBICAgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgRkVDX0NBSkEgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBIT1JBICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIFNFUlZJQ0lPICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDQpCiAgTlVTT1MgICAgICAgICBJbnQ/CiAgTU9EQUxJREFEICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBWQUxPUiAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgSU1QT1JURSAgICAgICBGbG9hdD8gICAgQGRiLkZsb2F0CiAgUFVFU1RPICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMikKICBQUkVTVEFETyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIEFOVUxBRE8gICAgICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgT1BFUkFET1IgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFJFTkRJRE8gICAgICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgRkVDSEFfQ0lFUlJFICBEYXRlVGltZT8gQGRiLkRhdGUKICBFTVBSRVNBICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIGlkdXNvICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgQ09OVFJPTCAgICAgICBCb29sZWFuPwogIE5PUkRFTiAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBGRUNIQV9DT05UUk9MIERhdGVUaW1lPyBAZGIuRGF0ZQogIElNUF9MSVEgICAgICAgRmxvYXQ/ICAgIEBkYi5GbG9hdAp9Cgptb2RlbCBVU09TRkEgewogIFNVQyAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPUkRFTiAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgQ09OVFJBVE8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE5ST19BREggICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBOUk9fRE9DICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgUExBTiAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEVEQUQgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTRVhPICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgT0JSQV9TT0MgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEZFQ0hBICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBGRUNfQ0FKQSAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgSE9SQSAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFNFUlZJQ0lPICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBDT01QUk9CQSAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTU9EQUxJREFEICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFZBTE9SICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBJTVBPUlRFICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgUFVFU1RPICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFBSRVNUQURPICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBBTlVMQURPICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgT1BFUkFET1IgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE9QRV9BVVRPICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBGRUNfVVNPICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgUEVESURPICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE5ST19SRUNFVEEgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBDT01QICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgRU1QUkVTQSAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE5fU0VSSUUgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBOX1JFQ0lCTyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgSU1QX05DICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIENPTlRST0wgICAgICAgQm9vbGVhbj8KICBOT1JERU4gICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgRkVDSEFfQ09OVFJPTCBEYXRlVGltZT8gQGRiLkRhdGUKICBpZHVzbyAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIElNUF9MSVEgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwgYWRoZXJlbnRfcHJvdmkgewogIGlkYWRoZXJlbnQgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgQ09OVFJBVE8gICBJbnQ/CiAgTlJPX0RPQyAgICBJbnQ/CiAgUExBTiAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEFQRUxMSURPUyAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBOT01CUkVTICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTkFDSU1JRU5UTyBEYXRlVGltZT8gQGRiLkRhdGUKICBFTVBSRVNBICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgRVNUQURPICAgICBCb29sZWFuPwp9Cgptb2RlbCBub3NvY2lvcyB7CiAgaWRub3NvY2lvIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5vc29jaW8gICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGRuaSAgICAgICBCaWdJbnQ/CiAgdGVsZWZvbm8gIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgbWFpbCAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgb2JyYV9zb2MgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgZmVjaGEgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIGNvZGlnbyAgICBJbnQ/CiAgZ3JlbWlvICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgZXN0YWRvICAgIEJvb2xlYW4/CiAgb3RyYV9vcyAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCn0KCm1vZGVsIHBsYW5lc19vZG9udG9sb2dpY29zIHsKICBpZHBsYW4gICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdG90YWwgICAgICAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBwYWdvX2luaWNpYWwgRmxvYXQ/ICAgIEBkYi5GbG9hdAogIGRldGFsbGUgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGVzdGFkbyAgICAgICBCb29sZWFuPwogIHZpc2l0YXMgICAgICBJbnQ/CiAgZmVjaGFfcGxhbiAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIGN1b3RhcyAgICAgICBJbnQ/CiAgcGxhbiAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCn0KCm1vZGVsIHBsYW5lc19zb2NpbyB7CiAgaWRwbGFuc29jaW8gICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjb250cmF0byAgICAgICAgIEludD8KICBkbmkgICAgICAgICAgICAgIEludD8KICBzb2NpbyAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgZmVjaGEgICAgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICB0b3RhbCAgICAgICAgICAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBwYWdhZG8gICAgICAgICAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBzYWxkbyAgICAgICAgICAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBlc3RhZG8gICAgICAgICAgIEJvb2xlYW4/CiAgcHJlc3RhZG9yICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHByZXN0YWRvcl9ub21icmUgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBvcGVyYWRvciAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgc3VjdXJzYWwgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHBsYW4gICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwgcGxhbmVzX3Zpc2l0YXMgewogIGlkdmlzaXRhIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGlkcGxhbiAgIEludD8KICBudmlzaXRhICBJbnQ/CiAgcGFnbyAgICAgRmxvYXQ/ICAgIEBkYi5GbG9hdAogIGZlY2hhICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIHBhZ2FkbyAgIEJvb2xlYW4/CiAgb3BlcmFkb3IgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBwbGFuICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQp9Cgptb2RlbCBwcm9tb2Npb25lcyB7CiAgaWRwcm9tbyBJbnQgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcG90MSAgICBJbnQ/CiAgcG90MiAgICBJbnQ/CiAgcGludDEgICBJbnQ/CiAgcGludDIgICBJbnQ/Cn0KCm1vZGVsIHBhY2llbnRlcyB7CiAgaWRwYWNpZW50ZSBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcGFjaWVudGUgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDUwMCkKICBkbmkgICAgICAgIEludD8KICBvYnJhX3NvYyAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIHRlbGVmb25vICAgQmlnSW50PwogIGRvbWljaWxpbyAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMDAwKQogIG1haWwgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcig1MDApCn0K",
  "inlineSchemaHash": "432bfa5b17ece7393956242c0443d236eee0118e7cfae853f6d449dec9741650",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"AUT_PRAC\":{\"dbName\":null,\"fields\":[{\"name\":\"ESP_PRAC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODIGOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_ALT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES01\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_01\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_01\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES02\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_02\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_02\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES03\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_03\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_03\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES04\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_04\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_04\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES05\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_05\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_05\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES06\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_06\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_06\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES07\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_07\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_07\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES08\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_08\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_08\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES09\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_09\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_09\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES11\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_11\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_11\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES12\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_12\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_12\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES13\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_13\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_13\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES14\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_14\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_14\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES15\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_15\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_15\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES16\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_16\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_16\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES17\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_17\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_17\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES18\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_18\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_18\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES19\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_19\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_19\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES20\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_20\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_20\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpractica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CAJA\":{\"dbName\":null,\"fields\":[{\"name\":\"SUCURSAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PUESTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODIGO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MOVIM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUENTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TIPO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERIE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUMERO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUIT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DETALLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DET_AUX\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_COMP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORIGEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ASIENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EXENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CANT_AFIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CAE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VTO_CAE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iditem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CONSULTA\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESTINO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIAGNOSTIC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ATENCION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DNI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idconsulta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ENFERMER\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESTINO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRACTICA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DNI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idenfermer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CANTIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FARMACIA\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESTINO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_USO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CAN_MEDI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MATRICULA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HABILITA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idfarmacia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MEDICOS_TURNOS\":{\"dbName\":null,\"fields\":[{\"name\":\"idturno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hora\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doctor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paciente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obra_soc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domicilio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PRACTICA\":{\"dbName\":null,\"fields\":[{\"name\":\"SUC_PRA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DNI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRAC_REA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CANT_PRA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRAC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpractica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PRACT_ENFER\":{\"dbName\":null,\"fields\":[{\"name\":\"idpractica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"practica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"importe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PRESTADO\":{\"dbName\":null,\"fields\":[{\"name\":\"COD_PRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOMBRE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ESPEC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LIS_ESPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIRECCION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TELEFONOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORARIO1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORARIO2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MATRICULA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_POST\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AUSENTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESDE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HASTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUIT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_NAC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LUGAR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MALA_PRAXI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CON_PAGA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ALTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OTERO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idprest\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PROMO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"USOS\":{\"dbName\":null,\"fields\":[{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ADH\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEXO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OBRA_SOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_CAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERVICIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUSOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PUESTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRESTADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RENDIDO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_CIERRE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMP_LIQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"USOSFA\":{\"dbName\":null,\"fields\":[{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ADH\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEXO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OBRA_SOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_CAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERVICIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMPROBA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PUESTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRESTADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_AUTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_USO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PEDIDO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_RECETA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"N_SERIE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"N_RECIBO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMP_NC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMP_LIQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"adherent_provi\":{\"dbName\":null,\"fields\":[{\"name\":\"idadherent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"APELLIDOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOMBRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NACIMIENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ESTADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"nosocios\":{\"dbName\":null,\"fields\":[{\"name\":\"idnosocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nosocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obra_soc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gremio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"otra_os\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"planes_odontologicos\":{\"dbName\":null,\"fields\":[{\"name\":\"idplan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago_inicial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visitas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuotas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"planes_socio\":{\"dbName\":null,\"fields\":[{\"name\":\"idplansocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saldo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prestador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prestador_nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sucursal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"planes_visitas\":{\"dbName\":null,\"fields\":[{\"name\":\"idvisita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idplan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nvisita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"promociones\":{\"dbName\":null,\"fields\":[{\"name\":\"idpromo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pot1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pot2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pint1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pint2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pacientes\":{\"dbName\":null,\"fields\":[{\"name\":\"idpaciente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paciente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obra_soc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domicilio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    WERCHOWSERV_URL: typeof globalThis !== 'undefined' && globalThis['WERCHOWSERV_URL'] || typeof process !== 'undefined' && process.env && process.env.WERCHOWSERV_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

