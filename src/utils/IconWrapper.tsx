import React from 'react';

// Type-safe wrapper for react-icons to work with React 19's strict typing
export function IconWrapper({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
  return React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center' }, ...props }, children);
}

// Helper function to safely render react-icons
export function renderIcon(IconComponent: any, props?: any): React.ReactNode {
  try {
    return React.createElement(IconComponent, props || {});
  } catch {
    return null;
  }
}