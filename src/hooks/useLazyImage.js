import { useEffect, useRef, useState } from 'react';

/**
 * Hook để lazy load hình ảnh
 * @param {Object} options - IntersectionObserver options
 * @returns {Object} - { ref, src, isLoaded }
 */
const useLazyImage = (options = {}) => {
  const ref = useRef(null);
  const [src, setSrc] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && ref.current?.dataset.src) {
        setSrc(ref.current.dataset.src);
        setIsLoaded(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    });

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, src, isLoaded };
};

export default useLazyImage;
