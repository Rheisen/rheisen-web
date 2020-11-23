import React from 'react';

import InfoCard, { InfoCardProps } from 'components/info-card';

import styles from './infoCardSection.module.scss';

interface InfoCardSectionProps extends InfoCardProps {
  children?: React.ReactNode
}

export const InfoCardSection: React.FC<InfoCardSectionProps> = (props) => {
  return (
    <section className={styles.infoCardSectionWrapper}>
      <div className={styles.infoCardSectionContainer}>
        <InfoCard {...props} />
        <section className={styles.contentSectionWrapper}>
          {props.children}
        </section>
      </div>
    </section>
  );
}
