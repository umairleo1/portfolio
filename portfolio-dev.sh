#!/bin/bash

# Portfolio Development Helper Script
# Quick commands for development workflow

case "$1" in
    "start" | "up" | "dev")
        echo "🚀 Starting portfolio development environment..."
        npm run start:all
        ;;
    "stop" | "down" | "kill")
        echo "🛑 Stopping all portfolio services..."
        npm run stop:all
        ;;
    "build")
        echo "🏗️  Building portfolio for production..."
        npm run build
        ;;
    "deploy")
        echo "🚀 Deploying portfolio to GitHub Pages..."
        npm run deploy
        ;;
    "test")
        echo "🧪 Running tests..."
        npm test
        ;;
    "install" | "setup")
        echo "📦 Installing dependencies..."
        npm install
        ;;
    "clean")
        echo "🧹 Cleaning up..."
        npm run stop:all
        rm -rf node_modules package-lock.json
        npm install
        ;;
    *)
        echo "Portfolio Development Helper"
        echo "=========================="
        echo "Usage: ./portfolio-dev.sh [command]"
        echo ""
        echo "Commands:"
        echo "  start, up, dev    - Start all development services"
        echo "  stop, down, kill  - Stop all services"
        echo "  build             - Build for production"
        echo "  deploy            - Deploy to GitHub Pages"
        echo "  test              - Run tests"
        echo "  install, setup    - Install dependencies"
        echo "  clean             - Clean and reinstall everything"
        echo ""
        echo "Examples:"
        echo "  ./portfolio-dev.sh start"
        echo "  ./portfolio-dev.sh stop"
        echo "  ./portfolio-dev.sh deploy"
        ;;
esac