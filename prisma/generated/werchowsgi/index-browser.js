
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

exports.Prisma.Alta_novellScalarFieldEnum = {
  idnovell: 'idnovell',
  fecha_recepcion: 'fecha_recepcion',
  servicio: 'servicio',
  monto: 'monto',
  monto_letra: 'monto_letra',
  anticipo: 'anticipo',
  gastos_adm: 'gastos_adm',
  apellido_sol: 'apellido_sol',
  nombre_sol: 'nombre_sol',
  dni_sol: 'dni_sol',
  estcivil_sol: 'estcivil_sol',
  fecha_nac_sol: 'fecha_nac_sol',
  dom_sol: 'dom_sol',
  domnum_sol: 'domnum_sol',
  piso_sol: 'piso_sol',
  barrio_sol: 'barrio_sol',
  localidad_sol: 'localidad_sol',
  codpostal_sol: 'codpostal_sol',
  telefono_sol: 'telefono_sol',
  movil_sol: 'movil_sol',
  apellido_ben: 'apellido_ben',
  nombre_ben: 'nombre_ben',
  dni_ben: 'dni_ben',
  estcivil_ben: 'estcivil_ben',
  fecha_nac_ben: 'fecha_nac_ben',
  dom_ben: 'dom_ben',
  domnum_ben: 'domnum_ben',
  piso_ben: 'piso_ben',
  barrio_ben: 'barrio_ben',
  localidad_ben: 'localidad_ben',
  codpostal_ben: 'codpostal_ben',
  telefono_ben: 'telefono_ben',
  movil_ben: 'movil_ben',
  operador: 'operador',
  cuotas: 'cuotas',
  nacionalidad_sol: 'nacionalidad_sol',
  nacionalidad_ben: 'nacionalidad_ben',
  anticipo_letra: 'anticipo_letra',
  cuotasaldo: 'cuotasaldo',
  cuotasaldo_letra: 'cuotasaldo_letra',
  cuota_mantenimiento: 'cuota_mantenimiento'
};

exports.Prisma.Caja_sucursalesScalarFieldEnum = {
  idcaja: 'idcaja',
  fecha_carga: 'fecha_carga',
  sucursal: 'sucursal',
  ingresos: 'ingresos',
  egresos: 'egresos',
  saldo: 'saldo',
  operador_carga: 'operador_carga',
  empresa: 'empresa'
};

exports.Prisma.CampanacasosScalarFieldEnum = {
  idcaso: 'idcaso',
  idcampana: 'idcampana',
  fechacampana: 'fechacampana',
  mes: 'mes',
  ano: 'ano',
  sucursal: 'sucursal',
  contrato: 'contrato',
  apellido: 'apellido',
  nombre: 'nombre',
  dni: 'dni',
  telefono: 'telefono',
  movil: 'movil',
  calle: 'calle',
  nro_calle: 'nro_calle',
  barrio: 'barrio',
  localidad: 'localidad',
  cuota: 'cuota',
  cuotasadeudadas: 'cuotasadeudadas',
  montoadeudado: 'montoadeudado',
  estadocaso: 'estadocaso',
  accion: 'accion',
  edad: 'edad',
  adherentes: 'adherentes',
  alta: 'alta',
  vigencia: 'vigencia'
};

exports.Prisma.CampanasScalarFieldEnum = {
  idcampana: 'idcampana',
  descripcion: 'descripcion',
  operador: 'operador',
  fecha: 'fecha',
  empresa: 'empresa',
  sucursal: 'sucursal'
};

exports.Prisma.CampanatemporalScalarFieldEnum = {
  SUCURSAL: 'SUCURSAL',
  CONTRATO: 'CONTRATO',
  NRO_DOC: 'NRO_DOC',
  APELLIDOS: 'APELLIDOS',
  NOMBRES: 'NOMBRES',
  ALTA: 'ALTA',
  VIGENCIA: 'VIGENCIA',
  CALLE: 'CALLE',
  NRO_CALLE: 'NRO_CALLE',
  BARRIO: 'BARRIO',
  LOCALIDAD: 'LOCALIDAD',
  GRUPO: 'GRUPO',
  ZONA: 'ZONA',
  TELEFONO: 'TELEFONO',
  MOVIL: 'MOVIL',
  EDAD: 'EDAD',
  MES: 'MES',
  ANO: 'ANO',
  IMPORTE: 'IMPORTE',
  operador: 'operador',
  estado: 'estado',
  idcaso: 'idcaso',
  observacion: 'observacion',
  fecha: 'fecha',
  fecha_observacion: 'fecha_observacion',
  accion: 'accion'
};

exports.Prisma.Capital_prestamoScalarFieldEnum = {
  idcapital: 'idcapital',
  capital: 'capital',
  fecha: 'fecha',
  estado: 'estado',
  autorizacion: 'autorizacion'
};

exports.Prisma.Capital_prestamo_empleadosScalarFieldEnum = {
  idcapital: 'idcapital',
  capital: 'capital',
  fecha: 'fecha',
  estado: 'estado',
  autorizacion: 'autorizacion'
};

exports.Prisma.Categoria_obsequioScalarFieldEnum = {
  idcategoria: 'idcategoria',
  categoria: 'categoria',
  observacion: 'observacion'
};

exports.Prisma.ContratosScalarFieldEnum = {
  idcontrato: 'idcontrato',
  locatario1: 'locatario1',
  dni1: 'dni1',
  domicilio1: 'domicilio1',
  locatario2: 'locatario2',
  dni2: 'dni2',
  domicilio2: 'domicilio2',
  monto: 'monto',
  fecha_inicio: 'fecha_inicio',
  duracion: 'duracion',
  locador: 'locador',
  operador: 'operador',
  local: 'local',
  uf: 'uf'
};

exports.Prisma.Convenio_deudaScalarFieldEnum = {
  idconvdeuda: 'idconvdeuda',
  contrato: 'contrato',
  apellido: 'apellido',
  nombre: 'nombre',
  operador: 'operador',
  vigencia: 'vigencia',
  fecha: 'fecha',
  cuotas: 'cuotas',
  dni: 'dni',
  empresa: 'empresa',
  idoperador: 'idoperador',
  vencimiento1: 'vencimiento1',
  importe1: 'importe1',
  vencimiento2: 'vencimiento2',
  importe2: 'importe2',
  deuda: 'deuda',
  bonificacion: 'bonificacion',
  saldo: 'saldo'
};

exports.Prisma.DatosScalarFieldEnum = {
  iddato: 'iddato',
  apellido: 'apellido',
  nombre: 'nombre',
  edad: 'edad',
  telefono: 'telefono',
  celular: 'celular',
  cobertura: 'cobertura',
  grupo_familiar: 'grupo_familiar',
  observacion: 'observacion',
  operador: 'operador',
  domicilio: 'domicilio',
  fecha: 'fecha'
};

exports.Prisma.Datos_atencionScalarFieldEnum = {
  iddatos: 'iddatos',
  apellido: 'apellido',
  nombre: 'nombre',
  dni: 'dni',
  telefono: 'telefono',
  parentezco: 'parentezco',
  motivo: 'motivo',
  operador: 'operador',
  operadoratencion: 'operadoratencion',
  fecha: 'fecha'
};

exports.Prisma.Detalle_orden_pagoScalarFieldEnum = {
  iddetallepago: 'iddetallepago',
  norden: 'norden',
  nconsulta: 'nconsulta',
  sucursal: 'sucursal',
  prestador: 'prestador',
  importe: 'importe',
  operador_carga: 'operador_carga',
  fecha: 'fecha',
  servicio: 'servicio'
};

exports.Prisma.EmpresasScalarFieldEnum = {
  idempresa: 'idempresa',
  empresa: 'empresa',
  cuit: 'cuit'
};

exports.Prisma.EventosScalarFieldEnum = {
  idevents: 'idevents',
  title: 'title',
  allDay: 'allDay',
  start: 'start',
  end: 'end'
};

exports.Prisma.Fabricante_ataudScalarFieldEnum = {
  idfabricante: 'idfabricante',
  fabricante: 'fabricante'
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

exports.Prisma.Historial_accionesScalarFieldEnum = {
  idhistorial: 'idhistorial',
  operador: 'operador',
  fecha: 'fecha',
  accion: 'accion'
};

exports.Prisma.Historial_aprobacion_prestamosScalarFieldEnum = {
  idaprobacion: 'idaprobacion',
  operador: 'operador',
  idprestamo: 'idprestamo',
  fecha: 'fecha',
  contrato: 'contrato',
  afiliado: 'afiliado',
  productor: 'productor'
};

exports.Prisma.Historial_liquidacionesScalarFieldEnum = {
  idliquidacion: 'idliquidacion',
  operador: 'operador',
  fecha: 'fecha',
  mes: 'mes',
  ano: 'ano',
  cobranza: 'cobranza',
  total: 'total',
  comision: 'comision',
  entidad: 'entidad'
};

exports.Prisma.Intereses_tarjetasScalarFieldEnum = {
  idplan: 'idplan',
  plan_cuota: 'plan_cuota',
  interes: 'interes',
  tarjeta: 'tarjeta',
  fecha: 'fecha',
  estado: 'estado'
};

exports.Prisma.Legajo_virtualScalarFieldEnum = {
  idlegajo: 'idlegajo',
  contrato: 'contrato',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida',
  empresa: 'empresa',
  tipoarchivo: 'tipoarchivo'
};

exports.Prisma.Legajo_virtual_cajasScalarFieldEnum = {
  idlegajo: 'idlegajo',
  idcaja: 'idcaja',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida'
};

exports.Prisma.Legajo_virtual_ordenesScalarFieldEnum = {
  idlegajo: 'idlegajo',
  idorden: 'idorden',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida',
  empresa: 'empresa'
};

exports.Prisma.Legajo_virtual_personalScalarFieldEnum = {
  idlegajo: 'idlegajo',
  idpersonal: 'idpersonal',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida'
};

exports.Prisma.Legajo_virtual_prestamosScalarFieldEnum = {
  idlegajo: 'idlegajo',
  contrato: 'contrato',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida',
  empresa: 'empresa',
  cod_ptm_leg: 'cod_ptm_leg'
};

exports.Prisma.LocadorScalarFieldEnum = {
  dni: 'dni',
  apellido: 'apellido',
  nombre: 'nombre',
  domicilio: 'domicilio',
  barrio: 'barrio',
  localidad: 'localidad',
  provincia: 'provincia'
};

exports.Prisma.MailsScalarFieldEnum = {
  idmail: 'idmail',
  fecha: 'fecha',
  envia: 'envia',
  recibe: 'recibe',
  descrip: 'descrip',
  codmail: 'codmail',
  asunto: 'asunto',
  leido: 'leido',
  fecha_leido: 'fecha_leido',
  url_caja: 'url_caja'
};

exports.Prisma.Mails_adjuntosScalarFieldEnum = {
  idadjunto: 'idadjunto',
  codmail: 'codmail',
  adjunto: 'adjunto',
  tipo: 'tipo'
};

exports.Prisma.Movimiento_caja_sucursalesScalarFieldEnum = {
  idmovimiento: 'idmovimiento',
  fecha_carga: 'fecha_carga',
  fecha_movimiento: 'fecha_movimiento',
  sucursal: 'sucursal',
  concepto: 'concepto',
  movimiento: 'movimiento',
  importe: 'importe',
  operador_carga: 'operador_carga',
  idcaja: 'idcaja',
  empresa: 'empresa'
};

exports.Prisma.NoticiaScalarFieldEnum = {
  idnoticia: 'idnoticia',
  fecha: 'fecha',
  noticia: 'noticia',
  operador: 'operador',
  perfil: 'perfil'
};

exports.Prisma.NovedadesScalarFieldEnum = {
  idnovedades: 'idnovedades',
  novedad: 'novedad',
  fecha: 'fecha',
  operador: 'operador',
  estado: 'estado'
};

exports.Prisma.ObsequiosScalarFieldEnum = {
  idobsequio: 'idobsequio',
  producto: 'producto',
  marca: 'marca',
  categoria: 'categoria',
  precio: 'precio',
  stock: 'stock',
  operador: 'operador',
  fecha: 'fecha',
  observacion: 'observacion',
  fecha_reposicion: 'fecha_reposicion',
  operador_rep: 'operador_rep'
};

exports.Prisma.Openia_keysScalarFieldEnum = {
  idkey: 'idkey',
  key: 'key',
  fecha: 'fecha',
  estado: 'estado'
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

exports.Prisma.Ordenes_pagoScalarFieldEnum = {
  idorden: 'idorden',
  fecha: 'fecha',
  proveedor: 'proveedor',
  cuit_cuil: 'cuit_cuil',
  total: 'total',
  operador_carga: 'operador_carga',
  autorizado: 'autorizado',
  operador_autorizacion: 'operador_autorizacion',
  fecha_autorizacion: 'fecha_autorizacion',
  norden: 'norden',
  observacion: 'observacion',
  nombre: 'nombre',
  tipo_orden: 'tipo_orden',
  nfactura: 'nfactura',
  tipo_factura: 'tipo_factura',
  fecha_pago: 'fecha_pago',
  pagado: 'pagado',
  estado: 'estado'
};

exports.Prisma.PersonalScalarFieldEnum = {
  idpersonal: 'idpersonal',
  apellido: 'apellido',
  nombre: 'nombre',
  dni: 'dni',
  alta: 'alta',
  rol: 'rol',
  legajo: 'legajo',
  baja: 'baja'
};

exports.Prisma.Plan_cuentasScalarFieldEnum = {
  idcuenta: 'idcuenta',
  idempresa: 'idempresa',
  codigo: 'codigo',
  descripcion: 'descripcion',
  asiento: 'asiento',
  tipo: 'tipo'
};

exports.Prisma.Plan_cuentas_xScalarFieldEnum = {
  idcuenta: 'idcuenta',
  idempresa: 'idempresa',
  codigo: 'codigo',
  descripcion: 'descripcion',
  asiento: 'asiento',
  tipo: 'tipo'
};

exports.Prisma.Plan_detalleScalarFieldEnum = {
  id_plandetalle: 'id_plandetalle',
  detalle: 'detalle',
  cuota: 'cuota',
  sub_ext: 'sub_ext',
  vigencia: 'vigencia',
  id_plan: 'id_plan'
};

exports.Prisma.Prestamos_empleadosScalarFieldEnum = {
  idprestamo: 'idprestamo',
  empleado: 'empleado',
  fecha_solicitud: 'fecha_solicitud',
  capital: 'capital',
  plan_cuotas: 'plan_cuotas',
  cuota_mensual: 'cuota_mensual',
  capital_dev: 'capital_dev',
  inicia: 'inicia',
  termina: 'termina',
  estado: 'estado',
  capinoaut: 'capinoaut'
};

exports.Prisma.Prestamos_empleados_cobroScalarFieldEnum = {
  idpago: 'idpago',
  idprestamo: 'idprestamo',
  cuota: 'cuota',
  importe: 'importe',
  fecha_cobro: 'fecha_cobro',
  estado: 'estado',
  fecha_pago: 'fecha_pago',
  operador: 'operador'
};

exports.Prisma.Registro_constancia_afiliacionScalarFieldEnum = {
  idconstancia: 'idconstancia',
  apellido_extinto: 'apellido_extinto',
  nombre_extinto: 'nombre_extinto',
  dni_extinto: 'dni_extinto',
  apellido_soli: 'apellido_soli',
  nombre_soli: 'nombre_soli',
  dni_soli: 'dni_soli',
  lugar_presentacion: 'lugar_presentacion',
  fecha: 'fecha',
  operador: 'operador',
  idservicio: 'idservicio'
};

exports.Prisma.RehabilitacionesScalarFieldEnum = {
  idrehab: 'idrehab',
  contrato: 'contrato',
  apellido: 'apellido',
  nombre: 'nombre',
  operador: 'operador',
  vigencia: 'vigencia',
  fecha: 'fecha',
  cuotas: 'cuotas',
  dni: 'dni',
  empresa: 'empresa',
  idoperador: 'idoperador'
};

exports.Prisma.SucursalScalarFieldEnum = {
  idsucursal: 'idsucursal',
  sucursal: 'sucursal',
  codigo: 'codigo'
};

exports.Prisma.Tab_efScalarFieldEnum = {
  id: 'id',
  start: 'start',
  end: 'end',
  allDay: 'allDay',
  holiday: 'holiday',
  title: 'title',
  user: 'user',
  detail: 'detail'
};

exports.Prisma.Tablero_efectividadScalarFieldEnum = {
  idregistro: 'idregistro',
  ano: 'ano',
  mes: 'mes',
  dia: 'dia',
  efectividad: 'efectividad',
  aumento: 'aumento',
  por_aumento: 'por_aumento',
  feriado: 'feriado'
};

exports.Prisma.Tareas_sucursalesScalarFieldEnum = {
  idevents: 'idevents',
  title: 'title',
  allDay: 'allDay',
  start: 'start',
  end: 'end',
  priority: 'priority',
  sucursal: 'sucursal',
  operador: 'operador'
};

exports.Prisma.Tipo_contratosScalarFieldEnum = {
  idtipocontrato: 'idtipocontrato',
  tipo_contrato: 'tipo_contrato',
  url: 'url'
};

exports.Prisma.Tipo_facturasScalarFieldEnum = {
  idfactura: 'idfactura',
  tipo_factura: 'tipo_factura',
  fecha: 'fecha',
  estado: 'estado'
};

exports.Prisma.Turno_bajasScalarFieldEnum = {
  idturno: 'idturno',
  contrato: 'contrato',
  apellido: 'apellido',
  nombre: 'nombre',
  dni: 'dni',
  fecha_pedido: 'fecha_pedido',
  fecha_turno: 'fecha_turno',
  motivo: 'motivo',
  operador: 'operador',
  telefono: 'telefono',
  movil: 'movil',
  fecha_atencion: 'fecha_atencion',
  estado: 'estado',
  empresa: 'empresa',
  respuesta: 'respuesta',
  operador_atencion: 'operador_atencion',
  detalle: 'detalle'
};

exports.Prisma.VacacionesScalarFieldEnum = {
  idvacaciones: 'idvacaciones',
  empleado: 'empleado',
  inicio: 'inicio',
  fin: 'fin',
  dias: 'dias',
  observacion: 'observacion',
  operador: 'operador',
  fecha: 'fecha'
};

exports.Prisma.Motivos_atencionScalarFieldEnum = {
  idmotivo: 'idmotivo',
  motivo: 'motivo',
  estado: 'estado'
};

exports.Prisma.Prestamos_plan_cuotasScalarFieldEnum = {
  idplan: 'idplan',
  plan_cuotas: 'plan_cuotas',
  detalle: 'detalle',
  estado: 'estado'
};

exports.Prisma.Prestamos_tasasScalarFieldEnum = {
  idtasa: 'idtasa',
  tasa: 'tasa',
  plan: 'plan',
  tipo: 'tipo',
  estado: 'estado'
};

exports.Prisma.Certificado_estudiantesScalarFieldEnum = {
  idcertificado: 'idcertificado',
  contrato: 'contrato',
  socio: 'socio',
  fecha: 'fecha',
  operador: 'operador',
  ncert: 'ncert'
};

exports.Prisma.Conceptos_liquidacionScalarFieldEnum = {
  idconcepto: 'idconcepto',
  concepto: 'concepto',
  formula: 'formula'
};

exports.Prisma.Gasto_lutoScalarFieldEnum = {
  idgastoluto: 'idgastoluto',
  gasto1: 'gasto1',
  gasto2: 'gasto2'
};

exports.Prisma.Legajo_operadorScalarFieldEnum = {
  idlegajo: 'idlegajo',
  operador: 'operador',
  cuil: 'cuil',
  fecha_ingreso: 'fecha_ingreso',
  antiguedad: 'antiguedad',
  categoria: 'categoria',
  tiempo_trabajo: 'tiempo_trabajo',
  fecha_pago: 'fecha_pago',
  contratacion: 'contratacion',
  idempresa: 'idempresa',
  estado: 'estado'
};

exports.Prisma.PuestosScalarFieldEnum = {
  idpuesto: 'idpuesto',
  operador: 'operador',
  puestow: 'puestow',
  seriew: 'seriew',
  puestom: 'puestom',
  seriem: 'seriem',
  puesto_sm: 'puesto_sm',
  serie_sm: 'serie_sm',
  puesto_isj: 'puesto_isj',
  serie_isj: 'serie_isj'
};

exports.Prisma.Recibo_liquidacionScalarFieldEnum = {
  idrecibo: 'idrecibo',
  periodo: 'periodo',
  fecha: 'fecha',
  operador: 'operador',
  total_neto: 'total_neto',
  total_letra: 'total_letra',
  forma_pago: 'forma_pago',
  fecha_deposito: 'fecha_deposito',
  banco: 'banco',
  empresa: 'empresa',
  empresa_cuit: 'empresa_cuit',
  operador_cuil: 'operador_cuil',
  idlegajo: 'idlegajo',
  fecha_ingreso: 'fecha_ingreso',
  anti: 'anti',
  categoria: 'categoria',
  seccion: 'seccion'
};

exports.Prisma.Recibo_movimientosScalarFieldEnum = {
  idmovimiento: 'idmovimiento',
  idrecibo: 'idrecibo',
  cuil: 'cuil',
  concepto: 'concepto',
  remu_ren: 'remu_ren',
  remu_exe: 'remu_exe',
  descuento: 'descuento'
};

exports.Prisma.ReintegrosScalarFieldEnum = {
  idreintegro: 'idreintegro',
  entidad: 'entidad',
  contrato: 'contrato',
  socio: 'socio',
  dni: 'dni',
  norden: 'norden',
  importe: 'importe',
  observacion: 'observacion',
  operador: 'operador',
  fecha: 'fecha'
};

exports.Prisma.BeneficiosScalarFieldEnum = {
  idbeneficio: 'idbeneficio',
  contrato: 'contrato',
  dni: 'dni',
  socio: 'socio',
  beneficio: 'beneficio',
  fecha: 'fecha',
  observacion: 'observacion',
  operador: 'operador'
};

exports.Prisma.Historial_lv_prestamosScalarFieldEnum = {
  idlegajo: 'idlegajo',
  contrato: 'contrato',
  archivo: 'archivo',
  fecha_subida: 'fecha_subida',
  empresa: 'empresa',
  cod_ptm_leg: 'cod_ptm_leg'
};

exports.Prisma.Cuota_prestamoScalarFieldEnum = {
  cuoptm_id: 'cuoptm_id',
  cuoptm_capital: 'cuoptm_capital',
  cuoptm_cantidad: 'cuoptm_cantidad',
  cuoptm_cuota: 'cuoptm_cuota',
  cuoptm_cuotaant: 'cuoptm_cuotaant'
};

exports.Prisma.Cuotas_adeudadasScalarFieldEnum = {
  id_deuda: 'id_deuda',
  contrato: 'contrato',
  monto_cuota: 'monto_cuota',
  cuotas_adeudadas: 'cuotas_adeudadas'
};

exports.Prisma.LocalidadScalarFieldEnum = {
  local_id: 'local_id',
  local_descrip: 'local_descrip'
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

exports.Prisma.PlanificacionScalarFieldEnum = {
  pln_ide: 'pln_ide',
  pln_usu: 'pln_usu',
  pln_dia: 'pln_dia',
  pln_obs: 'pln_obs'
};

exports.Prisma.Poliza_5380ScalarFieldEnum = {
  DNI: 'DNI',
  TITULAR: 'TITULAR',
  CONTRATO: 'CONTRATO',
  ALTA: 'ALTA',
  BAJA: 'BAJA',
  GRUPO: 'GRUPO',
  PLAN: 'PLAN',
  ADH: 'ADH',
  CUOTA: 'CUOTA',
  INGRESO: 'INGRESO',
  NACIMIENTO: 'NACIMIENTO',
  CAPITAL: 'CAPITAL',
  TIPO: 'TIPO'
};

exports.Prisma.PrestamosScalarFieldEnum = {
  ptm_id: 'ptm_id',
  ptm_fechacarga: 'ptm_fechacarga',
  ptm_op: 'ptm_op',
  ptm_ficha: 'ptm_ficha',
  ptm_legajo: 'ptm_legajo',
  ptm_ant: 'ptm_ant',
  ptm_fechasol: 'ptm_fechasol',
  ptm_renov: 'ptm_renov',
  ptm_prestamo: 'ptm_prestamo',
  ptm_cuotas: 'ptm_cuotas',
  ptm_valcuota: 'ptm_valcuota',
  ptm_neto: 'ptm_neto',
  ptm_estado: 'ptm_estado',
  cod_ptm_leg: 'cod_ptm_leg',
  ptm_afi: 'ptm_afi',
  capinoaut: 'capinoaut',
  ptm_inicio: 'ptm_inicio',
  ptm_fin: 'ptm_fin',
  ptm_fechaingreso: 'ptm_fechaingreso'
};

exports.Prisma.Registro_diario_saldosScalarFieldEnum = {
  reg_diario_id: 'reg_diario_id',
  reg_diario_fecha: 'reg_diario_fecha',
  reg_diario_movim: 'reg_diario_movim',
  reg_diario_entidad: 'reg_diario_entidad',
  reg_diario_ent_tipo: 'reg_diario_ent_tipo',
  reg_diario_descrip: 'reg_diario_descrip',
  reg_diario_saldo: 'reg_diario_saldo',
  reg_diario_estado: 'reg_diario_estado',
  reg_diario_usu: 'reg_diario_usu',
  reg_diario_fecha_egreso: 'reg_diario_fecha_egreso',
  reg_diario_item: 'reg_diario_item',
  reg_diario_cancelado: 'reg_diario_cancelado',
  reg_diario_cheque: 'reg_diario_cheque'
};

exports.Prisma.Registro_egreso_diarioScalarFieldEnum = {
  reg_egre_id: 'reg_egre_id',
  reg_egre_fecha: 'reg_egre_fecha',
  reg_egre_entidad: 'reg_egre_entidad',
  reg_egre_item: 'reg_egre_item',
  reg_egre_detalle: 'reg_egre_detalle',
  reg_egre_nro_cheque: 'reg_egre_nro_cheque',
  reg_egre_fec_debito: 'reg_egre_fec_debito',
  reg_egre_saldo: 'reg_egre_saldo',
  reg_egre_cancelado: 'reg_egre_cancelado',
  reg_egre_usu_carga: 'reg_egre_usu_carga'
};

exports.Prisma.Registro_ingreso_diarioScalarFieldEnum = {
  reg_ing_id: 'reg_ing_id',
  reg_ing_date: 'reg_ing_date',
  reg_ing_entidad: 'reg_ing_entidad',
  reg_ing_detalle: 'reg_ing_detalle',
  reg_ing_saldo: 'reg_ing_saldo',
  reg_ing_usu_car: 'reg_ing_usu_car'
};

exports.Prisma.Registro_sucursalScalarFieldEnum = {
  reg_suc_id: 'reg_suc_id',
  reg_suc_fecha: 'reg_suc_fecha',
  reg_suc_usu: 'reg_suc_usu',
  reg_sucursal: 'reg_sucursal',
  reg_suc_caja: 'reg_suc_caja',
  reg_suc_descrip: 'reg_suc_descrip',
  reg_suc_monto: 'reg_suc_monto',
  reg_suc_movim: 'reg_suc_movim',
  reg_suc_item: 'reg_suc_item',
  reg_suc_estado: 'reg_suc_estado'
};

exports.Prisma.SomScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  APE_NOM: 'APE_NOM',
  ALTA: 'ALTA',
  GRUPO: 'GRUPO',
  ADHS: 'ADHS',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  ZONA: 'ZONA',
  CUOTA: 'CUOTA',
  EMPRESA: 'EMPRESA',
  SUCURSAL: 'SUCURSAL',
  EDAD_PROM: 'EDAD_PROM',
  PERMANEN: 'PERMANEN',
  DEUDA: 'DEUDA'
};

exports.Prisma.SowScalarFieldEnum = {
  CONTRATO: 'CONTRATO',
  APE_NOM: 'APE_NOM',
  ALTA: 'ALTA',
  GRUPO: 'GRUPO',
  ADHS: 'ADHS',
  PLAN: 'PLAN',
  SUB_PLAN: 'SUB_PLAN',
  ZONA: 'ZONA',
  CUOTA: 'CUOTA',
  EMPRESA: 'EMPRESA',
  SUCURSAL: 'SUCURSAL',
  EDAD_PROM: 'EDAD_PROM',
  PERMANEN: 'PERMANEN',
  DEUDA: 'DEUDA',
  idso: 'idso'
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
  alta_novell: 'alta_novell',
  caja_sucursales: 'caja_sucursales',
  campanacasos: 'campanacasos',
  campanas: 'campanas',
  campanatemporal: 'campanatemporal',
  capital_prestamo: 'capital_prestamo',
  capital_prestamo_empleados: 'capital_prestamo_empleados',
  categoria_obsequio: 'categoria_obsequio',
  contratos: 'contratos',
  convenio_deuda: 'convenio_deuda',
  datos: 'datos',
  datos_atencion: 'datos_atencion',
  detalle_orden_pago: 'detalle_orden_pago',
  empresas: 'empresas',
  eventos: 'eventos',
  fabricante_ataud: 'fabricante_ataud',
  gestioncaso: 'gestioncaso',
  historial_acciones: 'historial_acciones',
  historial_aprobacion_prestamos: 'historial_aprobacion_prestamos',
  historial_liquidaciones: 'historial_liquidaciones',
  intereses_tarjetas: 'intereses_tarjetas',
  legajo_virtual: 'legajo_virtual',
  legajo_virtual_cajas: 'legajo_virtual_cajas',
  legajo_virtual_ordenes: 'legajo_virtual_ordenes',
  legajo_virtual_personal: 'legajo_virtual_personal',
  legajo_virtual_prestamos: 'legajo_virtual_prestamos',
  locador: 'locador',
  mails: 'mails',
  mails_adjuntos: 'mails_adjuntos',
  movimiento_caja_sucursales: 'movimiento_caja_sucursales',
  noticia: 'noticia',
  novedades: 'novedades',
  obsequios: 'obsequios',
  openia_keys: 'openia_keys',
  operador: 'operador',
  ordenes_pago: 'ordenes_pago',
  personal: 'personal',
  plan_cuentas: 'plan_cuentas',
  plan_cuentas_x: 'plan_cuentas_x',
  plan_detalle: 'plan_detalle',
  prestamos_empleados: 'prestamos_empleados',
  prestamos_empleados_cobro: 'prestamos_empleados_cobro',
  registro_constancia_afiliacion: 'registro_constancia_afiliacion',
  rehabilitaciones: 'rehabilitaciones',
  sucursal: 'sucursal',
  tab_ef: 'tab_ef',
  tablero_efectividad: 'tablero_efectividad',
  tareas_sucursales: 'tareas_sucursales',
  tipo_contratos: 'tipo_contratos',
  tipo_facturas: 'tipo_facturas',
  turno_bajas: 'turno_bajas',
  vacaciones: 'vacaciones',
  motivos_atencion: 'motivos_atencion',
  prestamos_plan_cuotas: 'prestamos_plan_cuotas',
  prestamos_tasas: 'prestamos_tasas',
  certificado_estudiantes: 'certificado_estudiantes',
  conceptos_liquidacion: 'conceptos_liquidacion',
  gasto_luto: 'gasto_luto',
  legajo_operador: 'legajo_operador',
  puestos: 'puestos',
  recibo_liquidacion: 'recibo_liquidacion',
  recibo_movimientos: 'recibo_movimientos',
  reintegros: 'reintegros',
  beneficios: 'beneficios',
  historial_lv_prestamos: 'historial_lv_prestamos',
  cuota_prestamo: 'cuota_prestamo',
  cuotas_adeudadas: 'cuotas_adeudadas',
  localidad: 'localidad',
  obra_soc: 'obra_soc',
  planificacion: 'planificacion',
  poliza_5380: 'poliza_5380',
  prestamos: 'prestamos',
  registro_diario_saldos: 'registro_diario_saldos',
  registro_egreso_diario: 'registro_egreso_diario',
  registro_ingreso_diario: 'registro_ingreso_diario',
  registro_sucursal: 'registro_sucursal',
  som: 'som',
  sow: 'sow'
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
