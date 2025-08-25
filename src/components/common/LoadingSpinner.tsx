import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  message?: string;
  minimal?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = 'Loading...',
  minimal = false,
}) => {
  if (minimal) {
    return (
      <div className='loading-minimal'>
        <div className='loading-dot'></div>
      </div>
    );
  }

  return (
    <motion.div
      className='loading-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className='loading-spinner'>
        <div className='spinner-ring'></div>
      </div>
      <p className='loading-text'>{message}</p>
    </motion.div>
  );
};

export default LoadingSpinner;
