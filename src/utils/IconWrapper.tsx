import React from 'react';
import { IconBaseProps } from 'react-icons';

interface IconWrapperProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

// Type-safe wrapper for react-icons to work with React 19's strict typing
export function IconWrapper({ children, ...props }: IconWrapperProps) {
  return React.createElement(
    'span',
    { style: { display: 'inline-flex', alignItems: 'center' }, ...props },
    children
  );
}

// Helper function to safely render react-icons
export function renderIcon(
  IconComponent: React.ComponentType<IconBaseProps>,
  props?: IconBaseProps
): React.ReactNode {
  try {
    return React.createElement(IconComponent, props || {});
  } catch {
    return null;
  }
}
