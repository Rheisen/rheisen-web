import React from 'react';

import styles from './tag.module.scss';

interface TagProps {
  text: string;
}

export const Tag: React.FC<TagProps> = (props: TagProps) => {
  return (
    <div className={styles.tagWrapper}>
      <span className={styles.hashtag}>#</span>
      <span className={styles.text}>{props.text}</span>
    </div>
  );
};
