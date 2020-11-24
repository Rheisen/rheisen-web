import React from 'react';

import styles from './experienceArticle.module.scss';

interface ExperienceArticleProps {
  org: string,
  timeframe?: string,
  children?: React.ReactNode,
}

export const ExperienceArticle: React.FC<ExperienceArticleProps> = (props) => {
  return(
    <article className={styles.articleWrapper}>
      <header>
        <h4>{props.org}</h4>
        <span className={styles.timeframe}>{props.timeframe}</span>
      </header>
      <div>
        {props.children}
      </div>
    </article>
  );
}
