
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4vZ2VuZXJhdGVkL3dlcmNob3dzZXJ2IgogIHByZXZpZXdGZWF0dXJlcyA9IFsibXVsdGlTY2hlbWEiXQp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJteXNxbCIKICB1cmwgICAgICA9IGVudigiV0VSQ0hPV1NFUlZfVVJMIikKfQoKbW9kZWwgQVVUX1BSQUMgewogIEVTUF9QUkFDICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDMpCiAgQ09ESUdPUyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjApCiAgREVTQ1JJUCAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTUwMCkKICBGRUNIQV9BTFQgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEFOVUxBRE8gICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgQ09EX1BSRVMwMSBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMDEgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDXzAxICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT0RfUFJFUzAyIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgUFJFQ0lPXzAyICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFNVQ18wMiAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMwMyBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMDMgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDXzAzICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT0RfUFJFUzA0IFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIFBSRUNJT18wNCAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTVUNfMDQgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDUgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzA1ICBGbG9hdD8KICBTVUNfMDUgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDYgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzA2ICBGbG9hdD8KICBTVUNfMDYgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDcgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzA3ICBGbG9hdD8KICBTVUNfMDcgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDggU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzA4ICBGbG9hdD8KICBTVUNfMDggICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMDkgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzA5ICBGbG9hdD8KICBTVUNfMDkgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzEwICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFNVQ18xMCAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMxMSBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMTEgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDXzExICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT0RfUFJFUzEyIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIFBSRUNJT18xMiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTVUNfMTIgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTMgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzEzICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFNVQ18xMyAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ09EX1BSRVMxNCBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBQUkVDSU9fMTQgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU1VDXzE0ICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT0RfUFJFUzE1IFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIFBSRUNJT18xNSAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTVUNfMTUgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTYgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzE2ICBGbG9hdD8KICBTVUNfMTYgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTcgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzE3ICBGbG9hdD8KICBTVUNfMTcgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTggU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzE4ICBGbG9hdD8KICBTVUNfMTggICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMTkgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzE5ICBGbG9hdD8KICBTVUNfMTkgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIENPRF9QUkVTMjAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgUFJFQ0lPXzIwICBGbG9hdD8KICBTVUNfMjAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIGlkcHJhY3RpY2EgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCn0KCm1vZGVsIENBSkEgewogIFNVQ1VSU0FMICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBQVUVTVE8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDIpCiAgQ09ESUdPICAgIEludD8KICBNT1ZJTSAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgQ1VFTlRBICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgSU1QT1JURSAgIEZsb2F0PwogIFRJUE8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBTRVJJRSAgICAgSW50PwogIE5VTUVSTyAgICBJbnQ/CiAgQ1VJVCAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMykKICBERVRBTExFICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBERVRfQVVYICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQogIEZFQ0hBICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBGRUNfQ09NUCAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBIT1JBICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPUklHRU4gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgT1BFUkFET1IgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgQVNJRU5UTyAgIEludD8KICBFWEVOVE8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBDQU5UX0FGSUwgSW50PwogIENBRSAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTQpCiAgVlRPX0NBRSAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgaWRpdGVtICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQp9Cgptb2RlbCBDT05TVUxUQSB7CiAgQ09OVFJBVE8gICBJbnQ/CiAgRkVDSEEgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBIT1JBICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIE5ST19PUkRFTiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEyKQogIERFU1RJTk8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgQ09EX1BSRVMgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBJTVBPUlRFICAgIEZsb2F0PwogIEFOVUxBRE8gICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgT1BFUkFET1IgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE9QRV9BTlUgICAgSW50PwogIERJQUdOT1NUSUMgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDMwKQogIEFURU5DSU9OICAgSW50PwogIE5ST19ETkkgICAgSW50PwogIGlkY29uc3VsdGEgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgU1VDICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQp9Cgptb2RlbCBFTkZFUk1FUiB7CiAgQ09OVFJBVE8gICBJbnQ/CiAgRkVDSEEgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBIT1JBICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIE5ST19PUkRFTiAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEyKQogIERFU1RJTk8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgSU1QT1JURSAgICBGbG9hdD8KICBBTlVMQURPICAgIEludD8gICAgICBAZGIuVGlueUludAogIFBSQUNUSUNBICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPUEVSQURPUiAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgT1BFX0FOVSAgICBJbnQ/CiAgTlJPX0ROSSAgICBJbnQ/CiAgaWRlbmZlcm1lciBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBDQU5USURBRCAgIEludD8KICBTVUMgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIEVORkVSTUVSRkEgewogIENPTlRSQVRPICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBGRUNIQSAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgSE9SQSAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIE5ST19PUkRFTiBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBERVNUSU5PICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgSU1QT1JURSAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIEFOVUxBRE8gICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBQUkFDVElDQSAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgT1BFUkFET1IgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIE9QRV9BTlUgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBOUk9fRE5JICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgRjEyICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIEYxMyAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBGMTQgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgRjE1ICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIFNVQyAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKCiAgQEBpZ25vcmUKfQoKLy8vIFRoZSB1bmRlcmx5aW5nIHRhYmxlIGRvZXMgbm90IGNvbnRhaW4gYSB2YWxpZCB1bmlxdWUgaWRlbnRpZmllciBhbmQgY2FuIHRoZXJlZm9yZSBjdXJyZW50bHkgbm90IGJlIGhhbmRsZWQgYnkgUHJpc21hIENsaWVudC4KbW9kZWwgRVNQRUNJQUwgewogIEVTUEVDSUFMICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigzKQogIE5PTUJSRSAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNSkKICBQUkFDVElDQSAgIEludD8gICAgQGRiLlRpbnlJbnQKICBDT05TVUxUQSAgIEludD8gICAgQGRiLlRpbnlJbnQKICBSRUlOVEVHUk9TIEludD8gICAgQGRiLlRpbnlJbnQKICBQTEFOX0EgICAgIEZsb2F0PwogIFBMQU5fQiAgICAgRmxvYXQ/CiAgUExBTl81MCAgICBGbG9hdD8KICBQTEFOXzcwICAgIEZsb2F0PwoKICBAQGlnbm9yZQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBGQVJNQSB7CiAgQ09ESUdPIFN0cmluZz8gQGRiLlZhckNoYXIoNSkKICBOT01CUkUgU3RyaW5nPyBAZGIuVmFyQ2hhcigyMCkKICBERVNDICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgREVTQzIgIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQoKICBAQGlnbm9yZQp9Cgptb2RlbCBGQVJNQUNJQSB7CiAgQ09OVFJBVE8gICBJbnQ/CiAgRkVDSEEgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBIT1JBICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTlJPX0RPQyAgICBJbnQ/CiAgTlJPX09SREVOICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIERFU1RJTk8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBNT0RPICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgSU1QT1JURSAgICBGbG9hdD8KICBBTlVMQURPICAgIEludD8gICAgICBAZGIuVGlueUludAogIE9QRVJBRE9SICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPUEVfQU5VICAgIEludD8KICBGRUNfVVNPICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIENBTl9NRURJICAgSW50PwogIE1BVFJJQ1VMQSAgSW50PwogIEhBQklMSVRBICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgaWRmYXJtYWNpYSBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBTVUMgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIEhJU19TRVJWIHsKICBQUkVTVEFETyAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgT1BFUkFET1IgIEludD8KICBGRUNIQSAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgSE9SQSAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIENBTVBPICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjApCiAgQU5URVJJT1IgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1MCkKICBOVUVWTyAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwKQogIEFDVFVBTElaQSBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTMpCiAgU1VDVVJTQUwgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQoKICBAQGlnbm9yZQp9Cgptb2RlbCBNRURJQ09TX1RVUk5PUyB7CiAgaWR0dXJubyAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHR1cm5vICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGZlY2hhICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBob3JhICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBkb2N0b3IgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBwYWNpZW50ZSAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBvYnJhX3NvYyAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICB0ZWxlZm9ubyAgQmlnSW50PwogIGVzdGFkbyAgICBJbnQ/CiAgb3BlcmFkb3IgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgZG9taWNpbGlvIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDAwKQogIG1haWwgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTAwKQogIGRuaSAgICAgICBJbnQ/Cn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIE9QVElDQSB7CiAgQ09OVFJBVE8gIEludD8KICBGRUNIQSAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgSE9SQSAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIE5ST19PUkRFTiBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTIpCiAgREVTVElOTyAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig1KQogIElNUE9SVEUgICBGbG9hdD8KICBBTlVMQURPICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgREVTQ1VFTlRPIEludD8KICBPUEVSQURPUiAgSW50PwogIE9QRV9BTlUgICBJbnQ/CiAgUFVFU1RPICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyKQoKICBAQGlnbm9yZQp9Cgptb2RlbCBQUkFDVElDQSB7CiAgU1VDX1BSQSAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBDT05UUkFUTyAgIEludD8KICBOUk9fRE5JICAgIEludD8KICBGRUNIQSAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEhPUkEgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUpCiAgTlJPX09SREVOICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTIpCiAgUFJBQ19SRUEgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTEpCiAgQ0FOVF9QUkEgICBJbnQ/CiAgSU1QT1JURSAgICBGbG9hdD8KICBBTlVMQURPICAgIEludD8gICAgICBAZGIuVGlueUludAogIE9QRVJBRE9SICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPUEVfQU5VICAgIEludD8KICBDT0RfUFJBQyAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig4KQogIGlkcHJhY3RpY2EgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgREVTQ1JJUCAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQp9Cgptb2RlbCBQUkFDVF9FTkZFUiB7CiAgaWRwcmFjdGljYSBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcHJhY3RpY2EgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBpbXBvcnRlICAgIEZsb2F0PyAgQGRiLkZsb2F0Cn0KCm1vZGVsIFBSRVNUQURPIHsKICBDT0RfUFJFUyAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcig1KQogIE5PTUJSRSAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1KQogIEVTUEVDICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDE1KQogIExJU19FU1BFICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDMwKQogIFNVQyAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgRElSRUNDSU9OICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIExPQ0FMSURBRCAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDE1KQogIFRFTEVGT05PUyAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDE1KQogIEhPUkFSSU8xICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBIT1JBUklPMiAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTU9EQUxJREFEICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNjApCiAgTUFUUklDVUxBICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTApCiAgQ09EX1BPU1QgICBJbnQ/CiAgQVVTRU5URSAgICBJbnQ/ICAgICAgQGRiLlRpbnlJbnQKICBDVUlUICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMykKICBGRUNfTkFDICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIExVR0FSICAgICAgSW50PwogIE1BTEFfUFJBWEkgSW50PyAgICAgIEBkYi5UaW55SW50CiAgQ09OX1BBR0EgICBJbnQ/CiAgQUxUQSAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBCQUpBICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIE9URVJPICAgICAgSW50PyAgICAgIEBkYi5UaW55SW50CiAgaWRwcmVzdCAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBQUk9NTyAgICAgIEJvb2xlYW4/Cn0KCi8vLyBUaGUgdW5kZXJseWluZyB0YWJsZSBkb2VzIG5vdCBjb250YWluIGEgdmFsaWQgdW5pcXVlIGlkZW50aWZpZXIgYW5kIGNhbiB0aGVyZWZvcmUgY3VycmVudGx5IG5vdCBiZSBoYW5kbGVkIGJ5IFByaXNtYSBDbGllbnQuCm1vZGVsIFNFUlZJQ0lPIHsKICBDT0RJR08gICAgIFN0cmluZz8gQGRiLlZhckNoYXIoNCkKICBERVNDUklQICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMzApCiAgUFJPR1JBTUEgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDgpCiAgQVJDSElWTyAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDgpCiAgTlJPX09SREVOICBJbnQ/CiAgSU1QT1JURSAgICBGbG9hdD8KICBOUk9fUkVDSUJPIEludD8KICBMSU1JVEUgICAgIEludD8KICBFTkJBU0VfMSAgIEZsb2F0PwogIEVOQkFTRV8yICAgRmxvYXQ/CiAgUExBTl9BICAgICBGbG9hdD8KICBQTEFOX0IgICAgIEZsb2F0PwogIFBMQU5fQyAgICAgRmxvYXQ/CiAgUExBTl9EICAgICBGbG9hdD8KICBNT0RVXzcgICAgIEZsb2F0PwogIE1PRFVfOCAgICAgRmxvYXQ/CiAgTU9EVV8xICAgICBGbG9hdD8KICBNT0RVXzQgICAgIEZsb2F0PwoKICBAQGlnbm9yZQp9Cgptb2RlbCBVU09TIHsKICBTVUMgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIE9SREVOICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEyKQogIENPTlRSQVRPICAgICAgSW50PwogIE5ST19BREggICAgICAgSW50PwogIE5ST19ET0MgICAgICAgSW50PwogIFBMQU4gICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBFREFEICAgICAgICAgIEludD8KICBTRVhPICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIE9CUkFfU09DICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBGRUNIQSAgICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIEZFQ19DQUpBICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgSE9SQSAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBTRVJWSUNJTyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcig0KQogIE5VU09TICAgICAgICAgSW50PwogIE1PREFMSURBRCAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEpCiAgVkFMT1IgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIElNUE9SVEUgICAgICAgRmxvYXQ/ICAgIEBkYi5GbG9hdAogIFBVRVNUTyAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDIpCiAgUFJFU1RBRE8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNSkKICBBTlVMQURPICAgICAgIEludD8gICAgICBAZGIuVGlueUludAogIE9QRVJBRE9SICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBSRU5ESURPICAgICAgIEludD8gICAgICBAZGIuVGlueUludAogIEZFQ0hBX0NJRVJSRSAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgRU1QUkVTQSAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMSkKICBpZHVzbyAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIENPTlRST0wgICAgICAgQm9vbGVhbj8KICBOT1JERU4gICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgRkVDSEFfQ09OVFJPTCBEYXRlVGltZT8gQGRiLkRhdGUKICBJTVBfTElRICAgICAgIEZsb2F0PyAgICBAZGIuRmxvYXQKfQoKbW9kZWwgVVNPU0ZBIHsKICBTVUMgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgT1JERU4gICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIENPTlRSQVRPICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBOUk9fQURIICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTlJPX0RPQyAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFBMQU4gICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBFREFEICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgU0VYTyAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE9CUkFfU09DICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBGRUNIQSAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgRkVDX0NBSkEgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEhPUkEgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBTRVJWSUNJTyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgQ09NUFJPQkEgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE1PREFMSURBRCAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBWQUxPUiAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgSU1QT1JURSAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFBVRVNUTyAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBQUkVTVEFETyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgQU5VTEFETyAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE9QRVJBRE9SICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBPUEVfQVVUTyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgRkVDX1VTTyAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIFBFRElETyAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBOUk9fUkVDRVRBICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgQ09NUCAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEVNUFJFU0EgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBOX1NFUklFICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTl9SRUNJQk8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIElNUF9OQyAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBDT05UUk9MICAgICAgIEJvb2xlYW4/CiAgTk9SREVOICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEZFQ0hBX0NPTlRST0wgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgaWR1c28gICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBJTVBfTElRICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCn0KCm1vZGVsIGFkaGVyZW50X3Byb3ZpIHsKICBpZGFkaGVyZW50IEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIENPTlRSQVRPICAgSW50PwogIE5ST19ET0MgICAgSW50PwogIFBMQU4gICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBBUEVMTElET1MgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgTk9NQlJFUyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIE5BQ0lNSUVOVE8gRGF0ZVRpbWU/IEBkYi5EYXRlCiAgRU1QUkVTQSAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIEVTVEFETyAgICAgQm9vbGVhbj8KfQoKbW9kZWwgbm9zb2Npb3MgewogIGlkbm9zb2NpbyBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBub3NvY2lvICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBkbmkgICAgICAgQmlnSW50PwogIHRlbGVmb25vICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIG1haWwgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIG9icmFfc29jICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGZlY2hhICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBjb2RpZ28gICAgSW50PwogIGdyZW1pbyAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGVzdGFkbyAgICBCb29sZWFuPwogIG90cmFfb3MgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQp9Cgptb2RlbCBwbGFuZXNfb2RvbnRvbG9naWNvcyB7CiAgaWRwbGFuICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHBsYW4gICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHBhZ29faW5pY2lhbCBGbG9hdD8gICAgQGRiLkZsb2F0CiAgcGFnb19jdW90YSAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBwYWdvX2ZpbmFsICAgRmxvYXQ/ICAgIEBkYi5GbG9hdAogIGN1b3RhcyAgICAgICBJbnQ/CiAgZGV0YWxsZSAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgdmlzaXRhcyAgICAgIEludD8KICBmZWNoYV9wbGFuICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgdG90YWwgICAgICAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBlc3RhZG8gICAgICAgQm9vbGVhbj8KICBkZXRhbGxlX3BsYW4gU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMDApCn0KCm1vZGVsIHBsYW5lc19zb2NpbyB7CiAgaWRwbGFuc29jaW8gICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjb250cmF0byAgICAgICAgIEludD8KICBkbmkgICAgICAgICAgICAgIEludD8KICBzb2NpbyAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgZmVjaGEgICAgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICB0b3RhbCAgICAgICAgICAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBwYWdhZG8gICAgICAgICAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBzYWxkbyAgICAgICAgICAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBlc3RhZG8gICAgICAgICAgIEJvb2xlYW4/CiAgcHJlc3RhZG9yICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHByZXN0YWRvcl9ub21icmUgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBvcGVyYWRvciAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgc3VjdXJzYWwgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHBsYW4gICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBjb250ZW5jaW9uICAgICAgIEJvb2xlYW4/Cn0KCm1vZGVsIHBsYW5lc192aXNpdGFzIHsKICBpZHZpc2l0YSBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBpZHBsYW4gICBJbnQ/CiAgbnZpc2l0YSAgSW50PwogIHBhZ28gICAgIEZsb2F0PyAgICBAZGIuRmxvYXQKICBmZWNoYSAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBwYWdhZG8gICBCb29sZWFuPwogIG9wZXJhZG9yIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgcGxhbiAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwgcHJvbW9jaW9uZXMgewogIGlkcHJvbW8gSW50ICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHBvdDEgICAgSW50PwogIHBvdDIgICAgSW50PwogIHBpbnQxICAgSW50PwogIHBpbnQyICAgSW50Pwp9Cgptb2RlbCBwYWNpZW50ZXMgewogIGlkcGFjaWVudGUgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHBhY2llbnRlICAgU3RyaW5nPyBAZGIuVmFyQ2hhcig1MDApCiAgZG5pICAgICAgICBJbnQ/CiAgb2JyYV9zb2MgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICB0ZWxlZm9ubyAgIEJpZ0ludD8KICBkb21pY2lsaW8gIFN0cmluZz8gQGRiLlZhckNoYXIoMTAwMCkKICBtYWlsICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIoNTAwKQp9Cgptb2RlbCBhdXNlbmNpYXMgewogIGlkYXVzZW5jaWEgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGNvZF9wcmVzICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgcHJlc3RhZG9yICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBtb3Rpdm8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGRlc2RlICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIGhhc3RhICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIG9ic2VydmFjaW9uIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDAwKQogIGVzdGFkbyAgICAgIEludD8gICAgICBAZGIuVGlueUludAogIG9wZXJhZG9yICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCn0K",
  "inlineSchemaHash": "78d2f00cacb51569ef9aaf9d36525723626918c295954c7abf19c86612c46a07",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"AUT_PRAC\":{\"dbName\":null,\"fields\":[{\"name\":\"ESP_PRAC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODIGOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_ALT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES01\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_01\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_01\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES02\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_02\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_02\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES03\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_03\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_03\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES04\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_04\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_04\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES05\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_05\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_05\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES06\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_06\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_06\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES07\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_07\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_07\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES08\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_08\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_08\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES09\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_09\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_09\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES11\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_11\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_11\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES12\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_12\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_12\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES13\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_13\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_13\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES14\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_14\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_14\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES15\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_15\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_15\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES16\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_16\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_16\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES17\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_17\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_17\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES18\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_18\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_18\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES19\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_19\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_19\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES20\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRECIO_20\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC_20\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpractica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CAJA\":{\"dbName\":null,\"fields\":[{\"name\":\"SUCURSAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PUESTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODIGO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MOVIM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUENTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TIPO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERIE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUMERO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUIT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DETALLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DET_AUX\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_COMP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORIGEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ASIENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EXENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CANT_AFIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CAE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VTO_CAE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iditem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CONSULTA\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESTINO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIAGNOSTIC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ATENCION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DNI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idconsulta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ENFERMER\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESTINO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRACTICA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DNI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idenfermer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CANTIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FARMACIA\":{\"dbName\":null,\"fields\":[{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESTINO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_USO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CAN_MEDI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MATRICULA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HABILITA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idfarmacia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MEDICOS_TURNOS\":{\"dbName\":null,\"fields\":[{\"name\":\"idturno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hora\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doctor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paciente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obra_soc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domicilio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PRACTICA\":{\"dbName\":null,\"fields\":[{\"name\":\"SUC_PRA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DNI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRAC_REA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CANT_PRA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_ANU\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_PRAC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpractica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PRACT_ENFER\":{\"dbName\":null,\"fields\":[{\"name\":\"idpractica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"practica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"importe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PRESTADO\":{\"dbName\":null,\"fields\":[{\"name\":\"COD_PRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOMBRE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ESPEC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LIS_ESPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIRECCION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TELEFONOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORARIO1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORARIO2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MATRICULA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COD_POST\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AUSENTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CUIT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_NAC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LUGAR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MALA_PRAXI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CON_PAGA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ALTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OTERO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idprest\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PROMO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"USOS\":{\"dbName\":null,\"fields\":[{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ADH\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEXO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OBRA_SOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_CAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERVICIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUSOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PUESTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRESTADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RENDIDO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_CIERRE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMP_LIQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"USOSFA\":{\"dbName\":null,\"fields\":[{\"name\":\"SUC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_ADH\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEXO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OBRA_SOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_CAJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SERVICIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMPROBA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODALIDAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMPORTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PUESTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRESTADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ANULADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPE_AUTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEC_USO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PEDIDO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_RECETA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"N_SERIE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"N_RECIBO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMP_NC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NORDEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FECHA_CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iduso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMP_LIQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"adherent_provi\":{\"dbName\":null,\"fields\":[{\"name\":\"idadherent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CONTRATO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NRO_DOC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"APELLIDOS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOMBRES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NACIMIENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMPRESA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ESTADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"nosocios\":{\"dbName\":null,\"fields\":[{\"name\":\"idnosocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nosocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obra_soc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gremio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"otra_os\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"planes_odontologicos\":{\"dbName\":null,\"fields\":[{\"name\":\"idplan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago_inicial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago_cuota\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago_final\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuotas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visitas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detalle_plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"planes_socio\":{\"dbName\":null,\"fields\":[{\"name\":\"idplansocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saldo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prestador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prestador_nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sucursal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contencion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"planes_visitas\":{\"dbName\":null,\"fields\":[{\"name\":\"idvisita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idplan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nvisita\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"promociones\":{\"dbName\":null,\"fields\":[{\"name\":\"idpromo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pot1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pot2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pint1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pint2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pacientes\":{\"dbName\":null,\"fields\":[{\"name\":\"idpaciente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paciente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dni\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obra_soc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domicilio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ausencias\":{\"dbName\":null,\"fields\":[{\"name\":\"idausencia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_pres\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prestador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desde\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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

