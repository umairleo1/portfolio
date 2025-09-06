import React from 'react';
import { useSectionTracking } from '@/hooks';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  className?: string | undefined;
  ariaLabel?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  ariaLabel,
  children,
}) => {
  const sectionRef = useSectionTracking(id);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${styles.section} ${className}`}
      aria-label={ariaLabel}
    >
      <div className='container'>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
