#!/bin/bash

# Casa 9 Viagens - Start Script
# Inicia servidor local e abre o site no navegador

echo "🏡 Casa 9 Viagens - Iniciando site..."
echo ""

PORT=8001

# Verificar se a porta já está em uso
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Servidor já rodando na porta $PORT"
    echo "   Abrindo navegador..."
else
    echo "🚀 Iniciando servidor na porta $PORT..."

    # Iniciar servidor Python em background
    python3 -m http.server $PORT > /dev/null 2>&1 &
    SERVER_PID=$!

    # Aguardar servidor iniciar
    sleep 2

    echo "✅ Servidor iniciado (PID: $SERVER_PID)"
fi

# URL do site
URL="http://localhost:$PORT"

echo ""
echo "🌐 Abrindo $URL"
echo ""

# Abrir no navegador padrão (macOS)
open "$URL"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  ✨ Casa 9 Viagens está rodando!"
echo ""
echo "  📍 URL: $URL"
echo "  🛑 Para parar: Ctrl + C ou fechar o terminal"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
