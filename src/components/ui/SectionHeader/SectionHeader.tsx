import React from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`${styles.header} ${className}`}>
      <h2 className={`${styles.sectionTitle} chunky-underline`}>{title}</h2>
      <p className={styles.sectionSubtitle}>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
