import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/components/ui/Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  glowEffect?: boolean;
  onClick?: () => void;
  variants?: any;
  [key: string]: any;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  glowEffect = false,
  onClick,
  variants,
  ...motionProps
}) => {
  const cardClasses = [
    'ui-card',
    hoverable && 'ui-card--hoverable',
    glowEffect && 'ui-card--glow',
    onClick && 'ui-card--clickable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.div
      className={cardClasses}
      variants={variants}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default Card;
