import React, { useState } from 'react';

import styles from './positionSection.module.scss';

interface PositionSectionProps {
  title: string,
  timeframe?: string,
  children?: React.ReactNode,
}

export const PositionSection: React.FC<PositionSectionProps> = (props) => {
  const [displayChildren, setDisplayChildren] = useState(false);

  return(
    <section className={styles.positionSectionWrapper}>
      <header className={styles.positionHeaderContainer}>
        <span className={styles.positionTitle} onClick={() => setDisplayChildren(!displayChildren)}>
          <span>{props.title}</span>
        </span>
        {
          props.timeframe ? (
            <span className={styles.positionTimeframe}>{props.timeframe}</span>
          ) : null
        }
      </header>
      { displayChildren ? (
        <div className={styles.positionDescription}>
          {props.children}
        </div>
      ) : null
      }
    </section>
  );
}
