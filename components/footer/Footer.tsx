import React from 'react';
import { Heart } from 'react-feather';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.wrapper}>
      <section className={styles.container}>
        <span>
          Made with <Heart size={20} className={styles.heartIcon} /> by Rheisen Dennis
        </span>
      </section>
    </footer>
  );
};
