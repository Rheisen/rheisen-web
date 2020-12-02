import React, { RefObject } from 'react';

interface useIntersectionObserverProps {
  target: RefObject<Element>;
  onIntersect: (...args: any[]) => void;
  threshold?: number;
  rootMargin?: string;
}

const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px',
}: useIntersectionObserverProps): void => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { rootMargin, threshold });

    const current = target.current;

    current ? observer.observe(current) : null;

    return () => {
      current ? observer.unobserve(current) : null;
    };
  });
};

export default useIntersectionObserver;
