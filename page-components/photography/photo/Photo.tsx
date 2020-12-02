import React, { useState } from 'react';
import { X } from 'react-feather';

import Image from 'components/image';

import styles from './photo.module.scss';

interface PhotoProps {
  name: string;
  height: number;
  width: number;
  alt: string;
}

export const Photo: React.FC<PhotoProps> = (props: PhotoProps) => {
  const [enlarged, setEnlarged] = useState(false);

  const handlePhotoClick = () => {
    if (enlarged) {
    } else {
      setEnlarged(true);
      document.body.classList.add('no-scroll');
    }
  };

  const handleExitClick = () => {
    setEnlarged(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className={enlarged ? styles.enlargedImageWrapper : styles.imageWrapper}>
      {enlarged ? (
        <div className={styles.iconContainer}>
          <X className={styles.exitIcon} size={28} aria-label="Exit Image Display" onClick={handleExitClick} />
        </div>
      ) : null}
      {/* <img src={`/images/photos/${props.imageName}.jpg`} alt={props.alt} onClick={handlePhotoClick} /> */}
      <Image
        src={`/images/photos/${props.name}.jpg`}
        thumb={`/images/photo-thumbnails/${props.name}.jpg}`}
        height={props.height}
        width={props.width}
        alt={props.alt}
      />
    </div>
  );
};
