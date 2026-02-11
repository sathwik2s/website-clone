#!/bin/bash

echo "🔍 Testing Cogniq AI Clone - Backend & Frontend"
echo "================================================"
echo ""

# Test Backend
echo "📡 Testing Backend API (Port 5001)..."
echo ""

echo "1. Testing /api/hero endpoint:"
curl -s http://localhost:5001/api/hero | jq -r '.title' 2>/dev/null || echo "❌ Failed"
echo ""

echo "2. Testing /api/services endpoint:"
SERVICES_COUNT=$(curl -s http://localhost:5001/api/services | jq 'length' 2>/dev/null)
echo "   Found $SERVICES_COUNT services"
echo ""

echo "3. Testing /api/features endpoint:"
FEATURES_COUNT=$(curl -s http://localhost:5001/api/features | jq 'length' 2>/dev/null)
echo "   Found $FEATURES_COUNT features"
echo ""

echo "4. Testing /api/process endpoint:"
PROCESS_COUNT=$(curl -s http://localhost:5001/api/process | jq 'length' 2>/dev/null)
echo "   Found $PROCESS_COUNT process steps"
echo ""

# Test Frontend
echo "🌐 Testing Frontend (Port 5173)..."
FRONTEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5173)
if [ "$FRONTEND_STATUS" = "200" ]; then
    echo "   ✅ Frontend is running successfully"
else
    echo "   ❌ Frontend returned status: $FRONTEND_STATUS"
fi
echo ""

echo "================================================"
echo "✅ All tests complete!"
echo ""
echo "🚀 Your Cogniq AI clone is running at:"
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:5001"
echo ""
