import React from 'react';
import { Heart } from 'react-feather';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.wrapper}>
      <section className={styles.container}>
        <span>
          <Heart fill={'#daddf0'} size={28} className={styles.heartIcon} />
        </span>
      </section>
    </footer>
  );
};
