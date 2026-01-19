# Changelog

## [6.0.4] - 2026-01-19

### Critical Fixes
- **🔧 Búsqueda Multi-Tenant Corregida**: Solucionado problema crítico donde todos los botones de búsqueda (Werchow, Mutual, San Miguel) estaban buscando exclusivamente en Werchow debido a funciones alias que apuntaban a la misma implementación genérica.

### Backend (API)
- **Adherentes**: Endpoints `adh` y `mae adh` ahora aceptan parámetro `tenant` opcional (default: werchow)
- **Mutual Corregido**: Todos los endpoints de Mutual ahora usan correctamente `sanvalentin`:
  - `f: "mutual"` (búsqueda por DNI)
  - `f: "mutual contrato"` (búsqueda por contrato)
  - `f: "mutual titulares"` (listado completo) - **Fix principal del listado de apellidos**
  - `f: "mutual adh"` (adherentes por contrato)
  - `f: "mut adh"` (adherentes por DNI)
- **Grupos**: Endpoint `traer grupo` ahora acepta parámetro `tenant` opcional
- **Adherentes Provisorios**: Funciones `checkAdhProvi` y `traerAdhs` actualizadas para pasar el tenant correcto

### Frontend (Emisión)
- **Funciones Específicas por Tenant**: Creadas 6 funciones específicas reemplazando aliases:
  - `buscarTitularW()`, `buscarTitularM()`, `buscarTitularSM()` (búsqueda por contrato)
  - `buscarTitularDniW()`, `buscarTitularDniM()`, `buscarTitularDniSM()` (búsqueda por DNI)
- **Helpers Mejorados**: Funciones `buscarTitularPorContrato()` y `buscarTitularPorDni()` ahora aceptan parámetro `tenantEspecifico` opcional

### Database Queries
- **LEFT JOIN en lugar de INNER JOIN**: Cambiados todos los joins en queries SQL para permitir retornar socios aunque no tengan:
  - Cuota fija (`cuo_fija`)
  - Obra social (`obra_soc`)
- **Solución San Miguel**: Socios 220+ ahora son encontrables (problema: faltaban registros en tablas relacionadas)

### Impact
- ✅ Cada botón de búsqueda ahora busca exclusivamente en su tenant
- ✅ Listado de apellidos de San Valentín (Mutual) funciona correctamente
- ✅ Mejora significativa en tasa de éxito de búsquedas (menos "socio no encontrado")
- ✅ Compatibilidad hacia atrás mantenida con defaults inteligentes

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
