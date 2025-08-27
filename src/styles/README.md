# Portfolio - Design System & Theme Variables

## 🎨 Theme Overview

This project uses a centralized theme system located in `/src/styles/base/globals.css`. All colors, spacing, animations, and design tokens are defined as CSS custom properties (variables) to ensure consistency and easy maintenance.

## 🎯 Key Principles

- **Single Source of Truth**: All design tokens are defined in `globals.css`
- **No Hardcoded Colors**: Use CSS variables instead of hardcoded rgba/hex values
- **Consistent Patterns**: Reusable hover effects, transitions, and spacing
- **Future-Proof**: Easy to update themes by changing variables in one place

## 📋 Available Variables

### Colors

```css
/* Primary Colors */
--primary-cyan: #66d9ed;
--primary-cyan-rgb: 102, 217, 237;

/* Background Colors */
--dark-bg: #17161a;
--dark-surface: #1a1a1a;
--dark-card: #1e1e1e;

/* Text Colors */
--text-primary: #ffffff;
--text-secondary: #888;
--text-muted: #666;
```

### Opacity Variations

```css
/* Primary Cyan with Different Opacities */
--primary-cyan-02: rgba(102, 217, 237, 0.02);
--primary-cyan-05: rgba(102, 217, 237, 0.05);
--primary-cyan-10: rgba(102, 217, 237, 0.1);
--primary-cyan-15: rgba(102, 217, 237, 0.15);
--primary-cyan-20: rgba(102, 217, 237, 0.2);
--primary-cyan-25: rgba(102, 217, 237, 0.25);
--primary-cyan-30: rgba(102, 217, 237, 0.3);
--primary-cyan-40: rgba(102, 217, 237, 0.4);
--primary-cyan-50: rgba(102, 217, 237, 0.5);
--primary-cyan-60: rgba(102, 217, 237, 0.6);
--primary-cyan-70: rgba(102, 217, 237, 0.7);
--primary-cyan-80: rgba(102, 217, 237, 0.8);
--primary-cyan-90: rgba(102, 217, 237, 0.9);
```

### Semantic Color Aliases

```css
/* Borders */
--border-subtle: var(--primary-cyan-10);
--border-medium: var(--primary-cyan-20);
--border-strong: var(--primary-cyan-30);

/* Backgrounds */
--overlay-subtle: var(--primary-cyan-05);
--overlay-medium: var(--primary-cyan-10);
--overlay-strong: var(--primary-cyan-15);

/* Shadows */
--shadow-primary: var(--primary-cyan-20);
--shadow-glow: var(--primary-cyan-30);
```

### Layout & Spacing

```css
/* Border Radius */
--border-radius-sm: 4px;
--border-radius-md: 8px;
--border-radius-lg: 12px;
--border-radius-xl: 16px;
--border-radius-2xl: 20px;
--border-radius-pill: 25px;

/* Spacing */
--section-padding: 80px 0;
--container-padding: 0 clamp(20px, 5vw, 80px);
--max-width: min(1400px, 95vw);
```

### Animations & Transitions

```css
/* Transitions */
--transition: all 0.3s ease;
--transition-fast: all 0.2s ease;
--transition-slow: all 0.4s ease;

/* Hover Effects */
--hover-lift: translateY(-8px) scale(1.02);
--hover-lift-small: translateY(-2px) scale(1.05);
```

### Shadows

```css
/* Card Shadows */
--shadow-card: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--border-subtle);
--shadow-card-hover:
  0 15px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-medium);

/* Effect Shadows */
--shadow-small: 0 4px 12px var(--shadow-primary);
--shadow-medium: 0 8px 25px var(--shadow-primary);
--shadow-large: 0 12px 35px var(--shadow-glow);
--shadow-glow-strong: 0 0 20px var(--shadow-glow);
```

## 🔧 Usage Examples

### ✅ Correct Usage

```css
.my-component {
  background: var(--dark-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-md);
  transition: var(--transition);
  box-shadow: var(--shadow-card);
}

.my-component:hover {
  transform: var(--hover-lift);
  border-color: var(--border-strong);
  box-shadow: var(--shadow-card-hover);
}
```

### ❌ Avoid This

```css
.my-component {
  background: #1a1a1a;
  border: 1px solid rgba(102, 217, 237, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
```

## 🚀 How to Update the Theme

1. **Change Primary Color**: Update `--primary-cyan` and `--primary-cyan-rgb` in `globals.css`
2. **Add New Opacity**: Add new `--primary-cyan-XX` variables as needed
3. **Update Shadows**: Modify shadow variables to use new color variations
4. **Test**: Check all components still look consistent

## 📁 File Structure

```
src/styles/
├── base/
│   └── globals.css          # 🎯 MAIN THEME FILE
├── components/
│   ├── Education.css        # Uses theme variables
│   ├── Experience.css       # Uses theme variables
│   ├── Expertise.css        # Uses theme variables
│   └── ...
└── THEME_SYSTEM.md         # This documentation
```

## 🎉 Benefits

- **Easy Maintenance**: Change colors in one place
- **Consistency**: All components use the same design tokens
- **Performance**: No duplicate CSS rules
- **Future-Ready**: Easy to implement dark/light mode switching
- **Developer Experience**: Clear, semantic variable names

---

**Last Updated**: Created during theme system implementation
**Maintainer**: Design system overhaul for consistent theming
