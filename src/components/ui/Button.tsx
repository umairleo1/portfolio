import React from 'react';
import '@/styles/components/ui/Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  href,
  target,
  rel,
  disabled,
  ...props
}) => {
  const buttonClasses = [
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    fullWidth && 'ui-button--full-width',
    loading && 'ui-button--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className='ui-button__icon ui-button__icon--left'>{icon}</span>
      )}
      <span className='ui-button__text'>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className='ui-button__icon ui-button__icon--right'>{icon}</span>
      )}
      {loading && <span className='ui-button__loader'></span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        {...(props as any)}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClasses} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
};

export default Button;
