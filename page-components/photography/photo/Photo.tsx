import React, { useState } from 'react';
import { X } from 'react-feather';

import styles from './photo.module.scss';

interface PhotoProps {
  imageName: string,
  alt: string,
}

export const Photo: React.FC<PhotoProps> = (props) => {
  const [enlarged, setEnlarged] = useState(false);

  const handlePhotoClick = () => {
    if (enlarged) {
    } else {
      setEnlarged(true);
      document.body.classList.add('no-scroll');
    }
  }

  const handleExitClick = () => {
    setEnlarged(false);
    document.body.classList.remove('no-scroll');
  }

  return (
    <div className={enlarged ? styles.enlargedImageWrapper : styles.imageWrapper}>
      {
        enlarged ? (
          <div className={styles.iconContainer}>
            <X
              className={styles.exitIcon}
              size={28}
              aria-label='Exit Image Display'
              onClick={handleExitClick}
            />
          </div>
        ) : null
      }
      <picture>
        <img
          src={`/images/photos/${props.imageName}.jpg`}
          alt={props.alt}
          onClick={handlePhotoClick}
        />
      </picture>
    </div>
  );
}
