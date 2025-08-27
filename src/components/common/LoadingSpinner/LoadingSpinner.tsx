import React from 'react';
import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
  fullScreen?: boolean;
  color?: 'primary' | 'secondary' | 'white';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  message = 'Loading...',
  fullScreen = false,
  color = 'primary',
}) => {
  const spinnerClasses = [styles.spinner, styles[size], styles[color]].join(
    ' '
  );

  const containerClasses = [
    styles.container,
    fullScreen ? styles.fullScreen : '',
  ].join(' ');

  return (
    <div className={containerClasses}>
      <div className={styles.spinnerWrapper}>
        <div className={spinnerClasses}></div>

        {message && (
          <p className={styles.message} aria-live='polite'>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;
