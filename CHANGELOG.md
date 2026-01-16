# Changelog

## [6.0.3] - 2026-01-16

### Features
- **Soporte Multi-tenant Completo**: Implementación robusta para Werchow (W), San Miguel (SM) y San Valentín (Mutual/M) con bases de datos independientes.
- **Promociones Clínica Otero**: Nuevas validaciones y precios promocionales para prácticas específicas (Fisioterapia, Quiropraxia, Colpo/Cito, Ecografías) con lógica de "primer uso del mes".
- **Lógica de Promociones por Empresa**: Exclusión explícita de San Miguel de las promociones de prestadores (`PROMO=1`), cobrando siempre el valor completo.
- **Carga Conjunta Cito/Colpo**: Permite cargar ambas prácticas en la misma orden manteniendo las validaciones de límite mensual.

### Refactor
- **API Socios Modularizada**: Reescritura completa de `/api/socios` eliminando lógica duplicada y SQL injections.
- **Queries Centralizadas**: Nuevos builders de queries SQL que manejan dinámicamente las diferencias de schema entre tenants.
- **Optimización Emisión**: Refactorización de `emision.js` usando helpers (`emisionHelpers.js`) y limpieza de código repetitivo de búsqueda de socios.
- **Limpieza de Schema**: Eliminación de referencias a campos obsoletos (`SUB_PLAN`, `TSEG`) que causaban errores en runtime.

### Fixes
- **Corrección de Tablas Inexistentes**: Solucionado error `Table 'wercho.mutual' doesn't exist` remapeando consultas a la base de datos correcta (`sanvalentin`).
- **Pagos San Valentín**: Corrección en la recuperación de pagos para Mutual redirigiendo al tenant correcto.
- **Build Errors**: Solucionados errores de exportación en controladores y ubicación de archivos helper.

### Documentation
- Agregada documentación sobre el refactoring de reglas de prácticas (`docs/refactoring-agregarPractica.md`).
