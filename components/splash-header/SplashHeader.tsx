import React from 'react';

import styles from './splash-header.module.scss';

export const SplashHeader: React.FC = (props) => {
  return (
    <header className={styles.splashHeaderWrapper}>
      {props.children}
    </header>
  );
};
