# Design System Documentation

## Overview

This project uses a centralized design system with CSS custom properties (CSS variables) located in `/src/styles/base/globals.css`. All colors, spacing, animations, and design tokens are defined as CSS custom properties to ensure consistency and easy maintenance across the entire application.

## Architecture Principles

- **Single Source of Truth** - All design tokens are defined in `globals.css`
- **CSS Modules** - Components use scoped CSS with `.module.css` files
- **No Hardcoded Values** - Use CSS variables instead of hardcoded colors/values
- **Consistent Patterns** - Reusable hover effects, transitions, and spacing
- **Maintainable** - Easy to update themes by changing variables in one place

## File Structure

```
src/styles/
├── base/
│   ├── globals.css        # Main theme variables and global styles
│   ├── App.css           # Application-wide styles
│   └── index.css         # Entry point styles
├── index.css             # Style imports
└── README.md             # This documentation
```

## Design Tokens

### Colors

```css
/* Primary Brand Colors */
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

The design system includes comprehensive opacity variations of the primary color:

```css
/* Primary Cyan Opacity Scale */
--primary-cyan-02: rgba(var(--primary-cyan-rgb), 0.02);
--primary-cyan-05: rgba(var(--primary-cyan-rgb), 0.05);
--primary-cyan-08: rgba(var(--primary-cyan-rgb), 0.08);
--primary-cyan-10: rgba(var(--primary-cyan-rgb), 0.1);
--primary-cyan-15: rgba(var(--primary-cyan-rgb), 0.15);
--primary-cyan-20: rgba(var(--primary-cyan-rgb), 0.2);
--primary-cyan-25: rgba(var(--primary-cyan-rgb), 0.25);
--primary-cyan-30: rgba(var(--primary-cyan-rgb), 0.3);
--primary-cyan-40: rgba(var(--primary-cyan-rgb), 0.4);
--primary-cyan-50: rgba(var(--primary-cyan-rgb), 0.5);
--primary-cyan-60: rgba(var(--primary-cyan-rgb), 0.6);
--primary-cyan-70: rgba(var(--primary-cyan-rgb), 0.7);
--primary-cyan-80: rgba(var(--primary-cyan-rgb), 0.8);
--primary-cyan-90: rgba(var(--primary-cyan-rgb), 0.9);
```

### Semantic Color Aliases

```css
/* Border Colors */
--border-subtle: var(--primary-cyan-10);
--border-medium: var(--primary-cyan-20);
--border-strong: var(--primary-cyan-30);

/* Background Overlays */
--overlay-subtle: var(--primary-cyan-05);
--overlay-medium: var(--primary-cyan-10);
--overlay-strong: var(--primary-cyan-15);

/* Shadow Colors */
--shadow-primary: var(--primary-cyan-20);
--shadow-glow: var(--primary-cyan-30);
```

### Layout & Spacing

```css
/* Border Radius Scale */
--border-radius-sm: 4px;
--border-radius-md: 8px;
--border-radius-lg: 12px;
--border-radius-xl: 16px;
--border-radius-2xl: 20px;
--border-radius-pill: 25px;

/* Spacing System */
--section-padding: 80px 0;
--container-padding: 0 clamp(20px, 5vw, 80px);
--max-width: min(1400px, 95vw);
```

### Typography

```css
/* Font Family */
--font-mono: 'Roboto Mono', monospace;
```

### Animations & Transitions

```css
/* Transition Timing */
--transition: all 0.3s ease;
--transition-fast: all 0.2s ease;
--transition-slow: all 0.4s ease;

/* Hover Transform Effects */
--hover-lift: translateY(-8px) scale(1.02);
--hover-lift-small: translateY(-2px) scale(1.05);
```

### Shadows

```css
/* Card Shadows */
--shadow-card: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--border-subtle);
--shadow-card-hover:
  0 15px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-medium);
--shadow-glow-effect: 0 0 30px var(--shadow-glow);

/* Specific Shadow Variations */
--shadow-small: 0 4px 12px var(--shadow-primary);
--shadow-medium: 0 8px 25px var(--shadow-primary);
--shadow-large: 0 12px 35px var(--shadow-glow);
--shadow-glow-strong: 0 0 20px var(--shadow-glow);

/* Outline Shadows */
--shadow-outline-thin: 0 0 0 1px var(--border-subtle);
--shadow-outline-medium: 0 0 0 1px var(--border-medium);
--shadow-outline-thick: 0 0 0 2px var(--border-medium);
```

## CSS Modules Usage

### Component Structure

Each component follows the CSS Modules pattern:

```
Component/
├── Component.tsx           # Component logic
├── Component.module.css    # Scoped styles
└── index.ts               # Barrel export
```

### Correct Usage in Components

```tsx
import React from 'react';
import styles from './MyComponent.module.css';

const MyComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Content</h2>
    </div>
  );
};

export default MyComponent;
```

### CSS Module Styles with Design Tokens

```css
/* MyComponent.module.css */
.container {
  background: var(--dark-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-md);
  transition: var(--transition);
  box-shadow: var(--shadow-card);
}

.container:hover {
  transform: var(--hover-lift);
  border-color: var(--border-strong);
  box-shadow: var(--shadow-card-hover);
}

.title {
  color: var(--text-primary);
  font-family: var(--font-mono);
}
```

### Anti-patterns to Avoid

```css
/* ❌ Don't hardcode values */
.bad-component {
  background: #1a1a1a;
  border: 1px solid rgba(102, 217, 237, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* ✅ Use design tokens instead */
.good-component {
  background: var(--dark-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-md);
  transition: var(--transition);
}
```

## Customization Guide

### Updating the Theme

1. **Change Primary Color**
   - Update `--primary-cyan` and `--primary-cyan-rgb` in `globals.css`
   - All opacity variations will automatically inherit the new color

2. **Add New Design Tokens**
   - Define new variables in `globals.css`
   - Use semantic naming (e.g., `--surface-elevated`, `--text-accent`)

3. **Modify Spacing**
   - Update spacing variables in the layout section
   - Components will automatically use the new values

4. **Test Changes**
   - Check all components still look consistent
   - Verify responsive behavior
   - Test hover and focus states

### Creating New Components

1. **Create component directory** in appropriate section
2. **Use CSS Modules** with `.module.css` extension
3. **Reference design tokens** instead of hardcoding values
4. **Follow naming conventions** (camelCase for CSS classes)
5. **Export component** through barrel export (`index.ts`)

## Benefits

- **Maintainability** - Change design tokens in one place, affects entire app
- **Consistency** - All components use the same design language
- **Performance** - CSS Modules eliminate unused styles
- **Scalability** - Easy to add new themes or design variants
- **Developer Experience** - Clear, semantic variable names
- **Type Safety** - CSS Modules provide compile-time checking

## Responsive Design

The design system includes responsive considerations:

```css
/* Mobile adjustments */
@media (max-width: 768px) {
  :root {
    --section-padding: 60px 0;
    --container-padding: 0 16px;
  }
}

@media (max-width: 480px) {
  :root {
    --section-padding: 40px 0;
  }
}
```

## Animation Guidelines

- Use the predefined transition variables for consistency
- Prefer `transform` over changing layout properties for performance
- Use `--hover-lift` for standard card hover effects
- Apply `--transition` for smooth state changes

---

**Note**: This design system is implemented using CSS Modules architecture. All components use scoped styles with design token references for maximum maintainability and consistency.
