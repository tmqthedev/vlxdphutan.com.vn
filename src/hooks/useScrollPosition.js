import { useEffect, useState, useRef, useCallback } from 'react';

/**
 * Hook để track scroll position với throttle
 * @param {number} throttleDelay - Throttle delay (ms)
 * @returns {Object} - { scrollY, scrollX, isScrolling, direction }
 */
const useScrollPosition = (throttleDelay = 100) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState('down');
  const lastScrollY = useRef(0);
  const throttleTimer = useRef(null);

  const handleScroll = useCallback(() => {
    if (throttleTimer.current) return;

    throttleTimer.current = setTimeout(() => {
      const currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      const currentScrollX = typeof window !== 'undefined' ? window.scrollX : 0;

      // Detect direction
      if (currentScrollY > lastScrollY.current) {
        setDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setDirection('up');
      }

      setScrollPosition({ x: currentScrollX, y: currentScrollY });
      lastScrollY.current = currentScrollY;
      setIsScrolling(false);
      throttleTimer.current = null;
    }, throttleDelay);

    setIsScrolling(true);
  }, [throttleDelay]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimer.current) {
        clearTimeout(throttleTimer.current);
      }
    };
  }, [handleScroll]);

  return { 
    scrollY: scrollPosition.y, 
    scrollX: scrollPosition.x, 
    isScrolling, 
    direction 
  };
};

export default useScrollPosition;
