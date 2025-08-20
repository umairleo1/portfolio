import React from 'react';
import '@/styles/components/ui/Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  hoverable?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  hoverable = false,
}) => {
  const badgeClasses = [
    'ui-badge',
    `ui-badge--${variant}`,
    `ui-badge--${size}`,
    hoverable && 'ui-badge--hoverable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={badgeClasses}>{children}</span>;
};

export default Badge;
