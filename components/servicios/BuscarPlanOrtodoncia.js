import React from 'react'

const BuscarPlanOrtodoncia = ({
    traerPlan,
    socioRef,
    errores
}) => {
    return (
        <div className='container-fluid mt-4'>
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">
                        <i className="fa fa-search me-2"></i>
                        Buscar Plan de Ortodoncia
                    </h2>
                </div>
                <div className="card-body">
                    <div className='row g-3 align-items-end justify-content-center'>
                        <div className='col-md-6'>
                            <label className="form-label fw-bold">
                                Número de Socio o DNI
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                ref={socioRef}
                                placeholder="Ingrese número de socio o DNI"
                            />
                        </div>

                        <div className='col-md-4'>
                            <button
                                className='btn btn-primary w-100'
                                onClick={traerPlan}
                            >
                                <i className="fa fa-search me-1"></i>
                                Buscar Plan
                            </button>
                        </div>

                        {errores && (
                            <div className='col-12'>
                                <div className='alert alert-danger shadow-sm text-center'>
                                    <i className="fa fa-exclamation-triangle me-2"></i>
                                    <strong>Error:</strong> {errores}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuscarPlanOrtodoncia