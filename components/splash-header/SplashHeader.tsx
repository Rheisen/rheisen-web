import React from 'react';

import styles from './splash-header.module.scss';

interface SplashHeaderProps {
  children?: React.ReactNode;
}

export const SplashHeader: React.FC = (props: SplashHeaderProps) => {
  return <header className={styles.splashHeaderWrapper}>{props.children}</header>;
};
