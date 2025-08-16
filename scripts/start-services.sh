#!/bin/bash

# Portfolio Website - Start All Services
# This script starts the development server and other services

echo "🚀 Starting Portfolio Website Services..."
echo "=================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies first..."
    npm install
fi

# Kill any existing services on port 3000
echo "🔍 Checking for existing services..."
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "⚠️  Port 3000 is in use. Stopping existing service..."
    kill -9 $(lsof -ti:3000) 2>/dev/null || true
    sleep 2
fi

# Start all services concurrently
echo "🔥 Starting all services..."
echo "   - React Development Server (http://localhost:3000)"
echo "   - Test Runner (watch mode)"
echo ""
echo "Press Ctrl+C to stop all services"
echo "=================================="

# Run the services with concurrently
npm run services:start