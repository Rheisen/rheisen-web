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
  const [modalActive, setModalActive] = useState(false);

  const handlePhotoClick = () => {
    setModalActive(true);
    document.body.classList.add('no-scroll');
  };

  const handleExitClick = () => {
    setModalActive(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <>
      <div className={styles.imageWrapper}>
        <div className={styles.photoContainer} onClick={handlePhotoClick}>
          <Image
            src={`/images/photos/${props.name}.jpg`}
            thumb={`/images/photo-thumbnails/${props.name}.jpg`}
            height={props.height}
            width={props.width}
            alt={props.alt}
          />
        </div>
      </div>
      {modalActive ? (
        <div className={styles.modalWrapper}>
          <div className={styles.iconContainer}>
            <X className={styles.exitIcon} size={28} aria-label="Exit Image Display" onClick={handleExitClick} />
          </div>
          <div className={styles.photoContainer}>
            <img src={`/images/photos/${props.name}.jpg`} alt={props.alt} />
          </div>
        </div>
      ) : null}
    </>
  );
};
