#!/bin/bash

# Script de prueba para el API refactorizado de socios
# Uso: ./test-socios-api.sh

BASE_URL="http://localhost:2222"
API_ENDPOINT="${BASE_URL}/api/socios"

echo "🧪 Testing Socios API Refactorizado"
echo "===================================="
echo ""

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para hacer requests
test_endpoint() {
    local name="$1"
    local url="$2"
    
    echo -n "Testing: $name ... "
    
    response=$(curl -s -w "\n%{http_code}" "$url")
    http_code=$(echo "$response" | tail -n1)
    body=$(echo "$response" | sed '$d')
    
    if [ "$http_code" -eq 200 ]; then
        echo -e "${GREEN}✓ OK${NC} (HTTP $http_code)"
        # echo "Response: $body" | head -c 100
    elif [ "$http_code" -eq 400 ]; then
        echo -e "${YELLOW}⚠ BAD REQUEST${NC} (HTTP $http_code)"
        echo "  Error: $body"
    else
        echo -e "${RED}✗ FAIL${NC} (HTTP $http_code)"
        echo "  Response: $body"
    fi
    echo ""
}

echo "📋 Validación de Parámetros"
echo "----------------------------"
test_endpoint "Sin parámetro 'f'" "${API_ENDPOINT}"
test_endpoint "DNI inválido" "${API_ENDPOINT}?f=maestro&tenant=werchow&dni=abc"
test_endpoint "Tenant inválido" "${API_ENDPOINT}?f=maestro&tenant=invalid&dni=12345678"
echo ""

echo "👤 Endpoints de Maestro"
echo "------------------------"
test_endpoint "Werchow - Maestro por DNI" "${API_ENDPOINT}?f=maestro&tenant=werchow&dni=12345678"
test_endpoint "San Miguel - Maestro por DNI" "${API_ENDPOINT}?f=maestro&tenant=sanmiguel&dni=12345678"
test_endpoint "San Valentín - Maestro por DNI (NUEVO)" "${API_ENDPOINT}?f=maestro&tenant=sanvalentin&dni=12345678"
echo ""

echo "🏢 Endpoints de Mutual"
echo "----------------------"
test_endpoint "Mutual por DNI" "${API_ENDPOINT}?f=mutual&dni=12345678"
test_endpoint "Mutual por Contrato" "${API_ENDPOINT}?f=mutual%20contrato&ficha=123456"
echo ""

echo "👨‍👩‍👧‍👦 Endpoints de Adherentes"
echo "----------------------------"
test_endpoint "Adherentes por Contrato" "${API_ENDPOINT}?f=adh&ficha=123456"
test_endpoint "Adherentes San Miguel" "${API_ENDPOINT}?f=adh%20san%20miguel&ficha=123456"
echo ""

echo "💰 Endpoints de Pagos"
echo "---------------------"
test_endpoint "Pagos Werchow" "${API_ENDPOINT}?f=traer%20pagos&ficha=123456&empre=WERCHOW"
test_endpoint "Pagos San Miguel" "${API_ENDPOINT}?f=traer%20pagos&ficha=123456&empre=SAN%20MIGUEL"
echo ""

echo "📊 Otros Endpoints"
echo "------------------"
test_endpoint "Traer Grupo" "${API_ENDPOINT}?f=traer%20grupo&grupo=1"
test_endpoint "Traer Usos" "${API_ENDPOINT}?f=traer%20usos&contrato=123456"
echo ""

echo "===================================="
echo "✅ Tests completados"
echo ""
echo "💡 Nota: Los tests pueden fallar si no existen datos de prueba"
echo "   en la base de datos. Verifica que los HTTP codes sean correctos."
