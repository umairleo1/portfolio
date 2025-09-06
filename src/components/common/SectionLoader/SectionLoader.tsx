import React from 'react';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import styles from './SectionLoader.module.css';

interface SectionLoaderProps {
  message?: string;
}

const SectionLoader: React.FC<SectionLoaderProps> = ({
  message = 'Loading sections...',
}) => {
  return (
    <section className={styles.sectionLoader}>
      <div className={styles.container}>
        <LoadingSpinner message={message} size='medium' color='primary' />
      </div>
    </section>
  );
};

export default SectionLoader;
