import React from 'react';

import useIntersectionObserver from 'hooks/use-intersection-observer';

import styles from './image.module.scss';

interface ImageProps {
  src: string;
  thumb: string;
  height: number;
  width: number;
  alt: string;
}

export const Image: React.FC<ImageProps> = (props: ImageProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });
  const aspectRatio = (props.height / props.width) * 100;

  return (
    <div ref={ref} className={styles.imageContainer} style={{ paddingBottom: `${aspectRatio}%` }}>
      {isVisible && <img className={styles.image} src={props.src} alt={props.alt} />}
    </div>
  );
};
