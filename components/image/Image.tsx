import React from 'react';

import useIntersectionObserver from 'hooks/use-intersection-observer';

import styles from './image.module.scss';

interface ImageContainerProps {
  src: string;
  thumb: string;
  height: number;
  width: number;
  alt: string;
}

interface ImageProps {
  src: string;
  thumb: string;
  alt: string;
}

const Image: React.FC<ImageProps> = (props: ImageProps) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <img
        className={styles.thumbnail}
        src={props.thumb}
        alt={props.alt}
        style={{ visibility: loading ? 'visible' : 'hidden' }}
      />
      <img
        className={styles.image}
        src={props.src}
        onLoad={() => setLoading(false)}
        alt={props.alt}
        style={{ opacity: loading ? 0 : 1 }}
      />
    </>
  );
};

export const ImageContainer: React.FC<ImageContainerProps> = (props: ImageContainerProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });
  const aspectRatio = (props.height / props.width) * 100;

  return (
    <div ref={ref} className={styles.imageContainer} style={{ paddingBottom: `${aspectRatio}%` }}>
      {visible && <Image src={props.src} thumb={props.thumb} alt={props.alt} />}
    </div>
  );
};
