import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Hook để detect khi section visible và trigger callbacks
 * @param {Object} options - IntersectionObserver options
 * @returns {Object} - { ref, isVisible, hasBeenVisible }
 */
const useInViewSection = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [visiblePercentage, setVisiblePercentage] = useState(0);

  const handleIntersection = useCallback((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setHasBeenVisible(true);
        const percentage = Math.round(entry.intersectionRatio * 100);
        setVisiblePercentage(percentage);
      } else {
        setIsVisible(false);
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
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
  }, [handleIntersection, options]);

  return { ref, isVisible, hasBeenVisible, visiblePercentage };
};

export default useInViewSection;
