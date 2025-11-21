import React from "react";
import Spinner from "../layout/Spinner";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import OpcionesServicios from "./OpcionesServicios";
import ModalAdhProvi from "./ModalAdhProvi";

const EmitirServicio = ({
  pagos,
  adhs,
  ficha,
  socio,
  sucursales,
  selectSocio,
  espec,
  medicos,
  traerMedicosPorSuc,
  farmaciaRef,
  modalidadRef,
  descuentoRef,
  especialidadRef,
  especialidadRefP,
  especialidadRefPl,
  sucursalRef,
  sucursalRefP,
  sucursalRefPl,
  medicoRef,
  medicoRefP,
  medicoRefPl,
  traerDetalleMedSelec,
  detalleMed,
  registrarOrdenUsos,
  practicas,
  agregarPractica,
  pracSocio,
  eliminarPracticaPrecargado,
  calcularTotalPracticas,
  registrarPracticaUso,
  farmacias,
  gestionDescuento,
  descFarma,
  registrarFarmaciaUso,
  enfer,
  sucursalRefE,
  traerEnfer,
  detEnf,
  medicoRefE,
  practEnfer,
  prestacionRefE,
  cantidadRefE,
  registrarEnfermeriaUso,
  cantidadRefP,
  priUso,
  nFisio,
  selector,
  isj,
  importeOrden,
  verificarUso,
  planOrto,
  registrarPlanOrto,
  arancel,
  nacimientoRef,
  nombreRef,
  apellidoRef,
  nroDocRef,
  sexoRef,
  edadRef,
  regAdhProvi,
  checkAdhProvi,
  habilita,
  infoAdh,
  planImp,
  registrarPlanImp,
  usosFarm,
  selDescuento,
  traerHistorialUsos,
  arancelEnfDomi,
  indexSel,
  priUsoBio,
}) => {
  if (!ficha) return <Spinner />;

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-primary fw-bold">
          <i className="fa fa-file-medical me-2"></i>
          Emisión de Servicios Médicos
        </h1>
        <p className="text-muted">Gestione órdenes médicas para el afiliado seleccionado</p>
      </div>

      {/* Status Alerts */}
      {ficha[0].GRUPO === 1001 ||
      ficha[0].GRUPO === 3444 ||
      ficha[0].GRUPO === 3666 ||
      ficha[0].GRUPO === 3777 ||
      ficha[0].GRUPO === 3888 ||
      ficha[0].GRUPO === 3999 ||
      ficha[0].GRUPO === 4004 ||
      ficha[0].GRUPO === 7777 ||
      ficha[0].GRUPO === 8500 ? (
        <div className="alert alert-danger alert-dismissible fade show shadow-sm mb-4" role="alert">
          <div className="d-flex align-items-center">
            <i className="fa fa-exclamation-triangle fa-2x me-3"></i>
            <div>
              <h4 className="alert-heading mb-2">¡Atención!</h4>
              <p className="mb-0">El afiliado está en estado de morosidad.</p>
            </div>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : ficha[0].GRUPO === 66 || ficha[0].GRUPO === 55 ? (
        <div className="alert alert-info shadow-sm mb-4">
          <i className="fa fa-graduation-cap me-2"></i>
          El afiliado es un estudiante de policía o penitenciaria. El sistema verificará si es su primera orden y le bonificará al 100%.
        </div>
      ) : (
        <div className="alert alert-success shadow-sm mb-4">
          <i className="fa fa-check-circle me-2"></i>
          El afiliado no es moroso, pero verifique que esté al día con sus pagos.
        </div>
      )}

      {/* Promotion Alert */}
      <div className="alert alert-warning shadow-sm mb-4">
        <i className="fa fa-gift me-2"></i>
        <strong>Promoción Vigente:</strong> Hasta octubre, promoción de ecografía a $7.000 o consulta oftalmología + módulo 81 a $9.000, por mes y por grupo familiar. El sistema la computa automáticamente.
      </div>

      {/* Member Information */}
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <i className="fa fa-user me-2"></i>
            Información del Afiliado
          </h5>
          <div>
            <button
              className="btn btn-light btn-sm me-2"
              data-bs-toggle="modal"
              data-bs-target="#ModalHistorialUsos"
              onClick={() => traerHistorialUsos(ficha[0].CONTRATO)}
            >
              <i className="fa fa-history me-1"></i>
              Historial
            </button>
            <a
              className="btn btn-outline-light btn-sm"
              href="/servicios/emision"
            >
              <i className="fa fa-times me-1"></i>
              Cancelar
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h4 className="text-primary mb-1">
                {ficha[0].CONTRATO} - {ficha[0].APELLIDOS}, {ficha[0].NOMBRES}
              </h4>
              <p className="text-muted mb-0">Afiliado activo en el sistema</p>
            </div>
            <div className="col-md-4 text-end">
              <div className="badge bg-success fs-6 p-2">
                <i className="fa fa-check-circle me-1"></i>
                Estado: Activo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History and Adherents */}
      <div className="row g-4 mb-4">
        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">
                <i className="fa fa-credit-card me-2"></i>
                Historial de Pagos
              </h5>
            </div>
            <div className="card-body">
              {pagos ? (
                <div className="table-responsive">
                  <ReactTable
                    data={pagos}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                      row[filter.id] === filter.value
                    }
                    columns={[
                      {
                        Header: "Pagos",
                        columns: [
                          {
                            Header: "Mes",
                            id: "MES",
                            accessor: (d) => d.MES,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["MES"],
                              }),
                            filterAll: true,
                            width: 60,
                          },
                          {
                            Header: "Año",
                            id: "ANO",
                            accessor: (d) => d.ANO,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["ANO"],
                              }),
                            filterAll: true,
                            width: 60,
                          },
                          {
                            Header: "Importe",
                            id: "IMPORTE",
                            accessor: (d) => d.IMPORTE,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["IMPORTE"],
                              }),
                            filterAll: true,
                            width: 80,
                          },
                          {
                            Header: "Recibo",
                            id: "NRO_RECIBO",
                            accessor: (d) => d.NRO_RECIBO,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["NRO_RECIBO"],
                              }),
                            filterAll: true,
                          },
                          {
                            Header: "Fecha",
                            id: "DIA_PAG",
                            accessor: (d) => d.DIA_PAG,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["DIA_PAG"],
                              }),
                            filterAll: true,
                          },
                        ],
                      },
                    ]}
                    defaultPageSize={8}
                    className="-striped -highlight"
                  />
                </div>
              ) : (
                <div className="text-center text-muted py-4">
                  <i className="fa fa-info-circle fa-2x mb-2"></i>
                  <p>No hay historial de pagos disponible</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i className="fa fa-users me-2"></i>
                Integrantes de la Ficha
              </h5>
              <button
                className="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#ModalAdhProvi"
              >
                <i className="fa fa-plus me-1"></i>
                Agregar
              </button>
            </div>
            <div className="card-body">
              {adhs ? (
                <div className="table-responsive">
                  <ReactTable
                    data={ficha.concat(adhs)}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                      row[filter.id] === filter.value
                    }
                    columns={[
                      {
                        Header: "Integrantes",
                        columns: [
                          {
                            Header: "Apellido",
                            id: "APELLIDOS",
                            accessor: (d) => d.APELLIDOS,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["APELLIDOS"],
                              }),
                            filterAll: true,
                            width: 100,
                          },
                          {
                            Header: "Nombre",
                            id: "NOMBRES",
                            accessor: (d) => d.NOMBRES,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["NOMBRES"],
                              }),
                            filterAll: true,
                          },
                          {
                            Header: "DNI",
                            id: "NRO_DOC",
                            accessor: (d) => d.NRO_DOC,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["NRO_DOC"],
                              }),
                            filterAll: true,
                            width: 100,
                          },
                          {
                            Header: "Acciones",
                            id: "acciones",
                            filterAll: true,
                            width: 80,
                            Cell: (row) => (
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() => selectSocio(row.original)}
                                title="Seleccionar integrante"
                              >
                                <i className="fa fa-check"></i>
                              </button>
                            ),
                          },
                        ],
                      },
                    ]}
                    defaultPageSize={8}
                    className="-striped -highlight"
                  />
                </div>
              ) : (
                <div className="text-center text-muted py-4">
                  <i className="fa fa-users fa-2x mb-2"></i>
                  <p>No hay adherentes registrados</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Service Options */}
      {!socio ? (
        <div className="card shadow-sm">
          <div className="card-body text-center py-5">
            <i className="fa fa-user-plus fa-3x text-primary mb-3"></i>
            <h4 className="text-primary">Seleccione un Integrante</h4>
            <p className="text-muted">Elija un integrante de la ficha familiar para gestionar sus servicios médicos</p>
          </div>
        </div>
      ) : (
        <OpcionesServicios
          socio={socio}
          farmaciaRef={farmaciaRef}
          modalidadRef={modalidadRef}
          descuentoRef={descuentoRef}
          especialidadRef={especialidadRef}
          especialidadRefP={especialidadRefP}
          especialidadRefPl={especialidadRefPl}
          sucursalRef={sucursalRef}
          sucursalRefP={sucursalRefP}
          sucursalRefPl={sucursalRefPl}
          sucursales={sucursales}
          espec={espec}
          medicos={medicos}
          traerMedicosPorSuc={traerMedicosPorSuc}
          medicoRef={medicoRef}
          medicoRefP={medicoRefP}
          medicoRefPl={medicoRefPl}
          traerDetalleMedSelec={traerDetalleMedSelec}
          detalleMed={detalleMed}
          registrarOrdenUsos={registrarOrdenUsos}
          practicas={practicas}
          agregarPractica={agregarPractica}
          pracSocio={pracSocio}
          eliminarPracticaPrecargado={eliminarPracticaPrecargado}
          calcularTotalPracticas={calcularTotalPracticas}
          registrarPracticaUso={registrarPracticaUso}
          farmacias={farmacias}
          gestionDescuento={gestionDescuento}
          descFarma={descFarma}
          registrarFarmaciaUso={registrarFarmaciaUso}
          enfer={enfer}
          sucursalRefE={sucursalRefE}
          traerEnfer={traerEnfer}
          detEnf={detEnf}
          medicoRefE={medicoRefE}
          practEnfer={practEnfer}
          prestacionRefE={prestacionRefE}
          cantidadRefE={cantidadRefE}
          registrarEnfermeriaUso={registrarEnfermeriaUso}
          cantidadRefP={cantidadRefP}
          priUso={priUso}
          nFisio={nFisio}
          selector={selector}
          isj={isj}
          importeOrden={importeOrden}
          verificarUso={verificarUso}
          planOrto={planOrto}
          registrarPlanOrto={registrarPlanOrto}
          arancel={arancel}
          planImp={planImp}
          registrarPlanImp={registrarPlanImp}
          usosFarm={usosFarm}
          selDescuento={selDescuento}
          arancelEnfDomi={arancelEnfDomi}
          indexSel={indexSel}
          priUsoBio={priUsoBio}
        />
      )}

      <ModalAdhProvi
        nacimientoRef={nacimientoRef}
        nombreRef={nombreRef}
        apellidoRef={apellidoRef}
        nroDocRef={nroDocRef}
        sexoRef={sexoRef}
        edadRef={edadRef}
        regAdhProvi={regAdhProvi}
        checkAdhProvi={checkAdhProvi}
        habilita={habilita}
        infoAdh={infoAdh}
      />
    </div>
  );
};

export default EmitirServicio;
