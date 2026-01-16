# Refactoring de `agregarPractica` - Sistema de Reglas

## 📋 Resumen

Se refactorizó la función `agregarPractica` (líneas 919-1006) para implementar un **sistema de reglas configurable** que facilita el mantenimiento y la adición de nuevas validaciones de precios.

## 🎯 Mejoras Implementadas

### 1. **Sistema de Reglas Declarativo**
En lugar de múltiples `if/else` anidados, ahora cada regla de negocio es un objeto independiente:

```javascript
{
  id: 'fisio-gratis-grupos-especiales',
  descripcion: 'Fisioterapia gratis para grupos 66 y 55',
  condicion: () => /* evalúa si aplica */,
  aplicar: (practica) => /* modifica el precio */
}
```

### 2. **Constantes Nombradas**
```javascript
// Antes:
if (socio.GRUPO === 66 || socio.GRUPO === 55)

// Ahora:
const GRUPOS_FISIO_GRATIS = [66, 55];
if (GRUPOS_FISIO_GRATIS.includes(socio.GRUPO))
```

### 3. **Funciones Helper Reutilizables**
- `aplicarReglasDeAjuste()` - Aplica todas las reglas automáticamente
- `practicaYaExiste()` - Valida duplicados eficientemente
- `obtenerMensajePromocion()` - Centraliza mensajes de promoción

### 4. **Separación de Responsabilidades**
```javascript
// Estructura clara:
1. Crear práctica base
2. Aplicar reglas de ajuste
3. Validar duplicados
4. Verificar promociones
5. Agregar al listado
```

## 📊 Comparación: Antes vs Después

### Código Original (88 líneas)
```javascript
const agregarPractica = async (row) => {
  let pra = { /* ... */ };

  // Regla 1: Fisio gratis
  if (socio.GRUPO === 66 || socio.GRUPO === 55) {
    if (detalleMed.SERVICIO === "FIS" && pra.CODIGOS === "25.01.01") {
      if (nFisio >= 0 && nFisio <= 8) {
        pra.IMPORTE = 0;
      }
    }
  }

  // Regla 2: Aumento bioquímico
  if (detalleMed.COD_PRES === "C_BIO") {
    if (priUsoBio === 1) {
      pra.IMPORTE = pra.IMPORTE * 1.15;
    } else if (priUsoBio === 2) {
      pra.IMPORTE = pra.IMPORTE * 1.2;
    } else if (priUsoBio > 2) {
      pra.IMPORTE = pra.IMPORTE * 1.25;
    }
  }

  // ... más reglas anidadas ...

  // Validación de duplicados manual
  let encontrado = false;
  for (let i = 0; i < pracSocio.length; i++) {
    if (pracSocio[i].idpractica === pra.idpractica) {
      encontrado = true;
    }
  }
  // ... más lógica ...
};
```

### Código Refactorizado (50 líneas + reglas configurables)
```javascript
const agregarPracticaRefactorizada = async (row) => {
  // 1. Crear práctica base
  let practica = { /* ... */ };

  // 2. Aplicar reglas automáticamente
  practica = aplicarReglasDeAjuste(practica, context);

  // 3. Validar duplicados (1 línea)
  if (practicaYaExiste(pracSocio, practica)) {
    toastr.warning("El codigo ingresado ya existe", "ATENCION");
    return;
  }

  // 4. Verificar promociones
  const mensajePromo = obtenerMensajePromocion(practica, priUso);
  if (mensajePromo) {
    toastr.warning(mensajePromo, "ATENCION");
  }

  // 5. Agregar
  guardarPracSocio([...pracSocio, practica]);
};
```

## ➕ Cómo Agregar Nuevas Reglas

### Ejemplo 1: Descuento para Jubilados
```javascript
{
  id: 'descuento-jubilados-rayos',
  descripcion: 'Descuento 20% para jubilados en rayos X',
  condicion: () => 
    socio.ES_JUBILADO === true &&
    pra.CODIGOS.startsWith('40.'),
  aplicar: (practica) => {
    practica.IMPORTE = practica.IMPORTE * 0.8;
    return practica;
  }
}
```

### Ejemplo 2: Precio Fijo por Horario
```javascript
{
  id: 'recargo-nocturno',
  descripcion: 'Recargo 30% en horario nocturno',
  condicion: () => {
    const hora = parseInt(detalleMed.HORA.split(':')[0]);
    return hora >= 20 || hora < 6;
  },
  aplicar: (practica) => {
    practica.IMPORTE = practica.IMPORTE * 1.3;
    return practica;
  }
}
```

### Ejemplo 3: Límite de Prácticas por Mes
```javascript
{
  id: 'limite-ecografias-mes',
  descripcion: 'Máximo 2 ecografías por mes',
  condicion: () => 
    /ECOGRAFIA.*/.test(pra.DESCRIP) &&
    contarEcografiasDelMes(socio.CONTRATO) >= 2,
  aplicar: (practica) => {
    // Bloquear o aplicar recargo
    practica.IMPORTE = practica.IMPORTE * 2;
    practica.ADVERTENCIA = 'Excede límite mensual';
    return practica;
  }
}
```

## 🔧 Implementación en emision.js

### Opción 1: Reemplazar Completamente
Reemplazar la función actual (líneas 919-1006) con la versión refactorizada.

### Opción 2: Migración Gradual
1. Mantener ambas funciones temporalmente
2. Probar la nueva con casos específicos
3. Una vez validada, eliminar la antigua

### Pasos de Integración:

1. **Importar las funciones helper** al inicio de `emision.js`:
```javascript
import {
  aplicarReglasDeAjuste,
  practicaYaExiste,
  obtenerMensajePromocion
} from './emision-practica-rules';
```

2. **Reemplazar la función** `agregarPractica` con `agregarPracticaRefactorizada`

3. **Actualizar referencias** en el código que llama a esta función

## 📈 Beneficios

| Aspecto | Antes | Después |
|---------|-------|---------|
| **Líneas de código** | 88 | 50 (función) + reglas separadas |
| **Complejidad ciclomática** | Alta (múltiples niveles de anidación) | Baja (lineal) |
| **Agregar nueva regla** | Modificar función principal | Agregar objeto al array |
| **Testabilidad** | Difícil (función monolítica) | Fácil (reglas independientes) |
| **Mantenibilidad** | Baja | Alta |
| **Legibilidad** | Media | Alta |

## 🧪 Testing

Cada regla puede testearse independientemente:

```javascript
// Test de regla individual
const regla = {
  id: 'test-fisio',
  condicion: () => socio.GRUPO === 66,
  aplicar: (p) => { p.IMPORTE = 0; return p; }
};

const practica = { IMPORTE: 1000 };
const resultado = regla.aplicar(practica);
console.assert(resultado.IMPORTE === 0, 'Fisio debe ser gratis');
```

## 🎓 Conceptos Aplicados

- **Strategy Pattern**: Cada regla es una estrategia intercambiable
- **Chain of Responsibility**: Las reglas se aplican en secuencia
- **Single Responsibility**: Cada función tiene una única responsabilidad
- **Open/Closed Principle**: Abierto a extensión (nuevas reglas), cerrado a modificación (función principal)

## 🚀 Próximos Pasos

1. ✅ Revisar y aprobar el diseño propuesto
2. ⏳ Implementar en `emision.js`
3. ⏳ Agregar las nuevas reglas que necesites
4. ⏳ Probar con casos reales
5. ⏳ Documentar las reglas de negocio
