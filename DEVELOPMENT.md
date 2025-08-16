# 🛠️ Development Guide

This guide covers all the development scripts and services for the portfolio website.

## 🚀 Quick Start

### Option 1: Using the Portfolio Development Helper (Recommended)
```bash
# Start development environment
./portfolio-dev.sh start

# Stop all services
./portfolio-dev.sh stop

# Build for production
./portfolio-dev.sh build

# Deploy to GitHub Pages
./portfolio-dev.sh deploy
```

### Option 2: Using NPM Scripts
```bash
# Start all development services
npm run start:all

# Stop all services
npm run stop:all

# Individual services
npm start              # Dev server only
npm test               # Run tests once
npm run test:watch     # Tests in watch mode
```

### Option 3: Direct Script Execution
```bash
# Start services
./scripts/start-services.sh

# Stop services
./scripts/stop-services.sh
```

## 📋 Available Commands

### Development Commands
| Command | Description |
|---------|-------------|
| `./portfolio-dev.sh start` | Start all development services |
| `./portfolio-dev.sh stop` | Stop all running services |
| `npm run start:all` | Start dev server + test watcher |
| `npm run stop:all` | Stop all services |
| `npm start` | Start development server only |

### Build & Deploy Commands
| Command | Description |
|---------|-------------|
| `./portfolio-dev.sh build` | Build for production |
| `./portfolio-dev.sh deploy` | Deploy to GitHub Pages |
| `npm run build` | Build production bundle |
| `npm run deploy` | Deploy to GitHub Pages |

### Testing Commands
| Command | Description |
|---------|-------------|
| `./portfolio-dev.sh test` | Run tests once |
| `npm test` | Run tests interactively |
| `npm run test:watch` | Run tests in watch mode |

### Utility Commands
| Command | Description |
|---------|-------------|
| `./portfolio-dev.sh install` | Install all dependencies |
| `./portfolio-dev.sh clean` | Clean and reinstall everything |

## 🔧 Service Details

### When you start development (`start:all`):
- **Development Server** starts on `http://localhost:3000`
- **Test Runner** starts in watch mode
- **Hot Reloading** enabled for instant updates
- **Automatic Browser Opening** (if not already open)

### Output Colors:
- 🔵 **DEV** - Development server logs (blue)
- 🟢 **TEST** - Test runner logs (green)

## 🚨 Troubleshooting

### Port 3000 Already in Use
```bash
# Stop all services and restart
./portfolio-dev.sh stop
./portfolio-dev.sh start
```

### Clean Installation
```bash
# Clean everything and reinstall
./portfolio-dev.sh clean
```

### Manual Process Cleanup
```bash
# Find processes on port 3000
lsof -ti:3000

# Kill specific process
kill -9 <PID>

# Or use our stop script
npm run stop:all
```

## 🔄 Development Workflow

### Daily Development
1. `./portfolio-dev.sh start` - Start your development environment
2. Make your changes - see them instantly with hot reload
3. Tests run automatically in the background
4. `./portfolio-dev.sh stop` - Stop when done

### Before Deployment
1. `./portfolio-dev.sh test` - Ensure all tests pass
2. `./portfolio-dev.sh build` - Build production version
3. `./portfolio-dev.sh deploy` - Deploy to GitHub Pages

### Project Maintenance
1. `./portfolio-dev.sh clean` - When dependencies need refreshing
2. `./portfolio-dev.sh install` - After pulling new changes

## 📁 Script Locations

```
portfolio-website/
├── portfolio-dev.sh           # Main development helper
├── scripts/
│   ├── start-services.sh      # Start all services
│   └── stop-services.sh       # Stop all services
└── package.json               # NPM scripts
```

## 💡 Tips

- Use `./portfolio-dev.sh start` for the best development experience
- The test watcher will automatically run tests when you make changes
- Press `Ctrl+C` to stop all services when using the start scripts
- All scripts include helpful output messages and error handling
- Services automatically check for port conflicts and resolve them

## 🔧 Advanced Troubleshooting

### React Icons TypeScript Errors (Fixed)
The portfolio now uses a custom icon utility (`src/utils/icons.tsx`) that's fully compatible with React 19 and TypeScript. All icons render as beautiful emojis with proper semantic meaning.

### Build Optimization
- Production builds are optimized and gzipped
- Bundle size is kept minimal with code splitting
- All assets are properly cached

### Performance Monitoring
```bash
# Analyze bundle size
npm run build
# Check the generated build/static folder for file sizes
```

---

## 🎯 **Production Ready!**

Your portfolio is now:
- ✅ **TypeScript Compliant** - Zero compilation errors
- ✅ **React 19 Compatible** - Latest React features supported
- ✅ **Build Optimized** - Production-ready bundle
- ✅ **Service Managed** - Professional development workflow
- ✅ **Deployment Ready** - GitHub Pages configured

Happy coding! 🎉