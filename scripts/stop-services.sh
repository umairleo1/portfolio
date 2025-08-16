#!/bin/bash

# Portfolio Website - Stop All Services
# This script stops all running development services

echo "🛑 Stopping Portfolio Website Services..."
echo "=================================="

# Function to kill processes by name pattern
kill_process() {
    local pattern=$1
    local description=$2
    
    if pgrep -f "$pattern" > /dev/null 2>&1; then
        echo "🔪 Stopping $description..."
        pkill -f "$pattern" 2>/dev/null || true
        sleep 1
        
        # Force kill if still running
        if pgrep -f "$pattern" > /dev/null 2>&1; then
            echo "💀 Force stopping $description..."
            pkill -9 -f "$pattern" 2>/dev/null || true
        fi
    else
        echo "✅ $description is not running"
    fi
}

# Stop React development server
kill_process "react-scripts start" "React Development Server"

# Stop test runner
kill_process "react-scripts test" "Test Runner"

# Stop any Node.js processes on port 3000
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "🔪 Stopping processes on port 3000..."
    kill -9 $(lsof -ti:3000) 2>/dev/null || true
fi

# Stop any concurrently processes
kill_process "concurrently" "Concurrently Process Manager"

echo ""
echo "✅ All services stopped successfully!"
echo "=================================="