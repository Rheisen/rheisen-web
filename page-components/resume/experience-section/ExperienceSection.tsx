import React, { useState } from 'react';

import styles from './experienceSection.module.scss';

interface ExperienceSectionProps {
  title: string,
  timeframe?: string,
  children?: React.ReactNode,
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = (props) => {
  const [displayChildren, setDisplayChildren] = useState(false);

  return(
    <section className={styles.sectionWrapper}>
      <header className={styles.headerContainer}>
        <span className={styles.experienceTitle} onClick={() => setDisplayChildren(!displayChildren)}>
          <span>{props.title}</span>
        </span>
        {
          props.timeframe ? (
            <span className={styles.experienceTimeframe}>{props.timeframe}</span>
          ) : null
        }
      </header>
      { displayChildren ? (
        <div className={styles.experienceDescription}>
          {props.children}
        </div>
      ) : null
      }
    </section>
  );
}
