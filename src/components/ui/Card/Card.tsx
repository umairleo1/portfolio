import React from 'react';
import { motion, type Variants, type MotionStyle } from 'framer-motion';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  glowEffect?: boolean;
  onClick?: () => void;
  variants?: Variants;
  style?: MotionStyle;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  glowEffect = false,
  onClick,
  variants,
  style,
}) => {
  const cardClasses = [
    styles.card,
    hoverable && styles.hoverable,
    glowEffect && styles.glow,
    onClick && styles.clickable,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const motionProps: any = {};
  if (variants) motionProps.variants = variants;
  if (onClick) motionProps.onClick = onClick;
  if (style) motionProps.style = style;

  return (
    <motion.div className={cardClasses} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default Card;
