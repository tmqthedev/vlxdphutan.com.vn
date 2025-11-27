import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useInView from '../hooks/useInView';

/**
 * Component wrapper để lazy load và animate element khi visible
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content cần lazy load
 * @param {string} props.className - CSS class
 * @param {string} props.animation - Animation type: 'fadeIn', 'slideUp', 'slideDown'
 * @param {number} props.delay - Delay animation (ms)
 * @param {number} props.threshold - Threshold for visibility (0-1)
 * @param {Function} props.onVisible - Callback khi element trở thành visible
 * @param {string} props.tag - HTML tag (div, section, article, etc)
 */
const LazyLoad = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  onVisible,
  tag = 'div',
}) => {
  const { ref, isVisible, hasBeenVisible } = useInView({ threshold });

  // Trigger callback when element becomes visible
  useEffect(() => {
    if (isVisible && onVisible) {
      onVisible();
    }
  }, [isVisible, onVisible]);

  const animationClass = hasBeenVisible ? `animated ${animation}` : '';
  const combinedClass = `lazy-load ${className} ${animationClass}`;

  const Component = tag;

  return (
    <Component
      ref={ref}
      className={combinedClass}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
};

LazyLoad.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  animation: PropTypes.string,
  delay: PropTypes.number,
  threshold: PropTypes.number,
  onVisible: PropTypes.func,
  tag: PropTypes.string,
};

export default LazyLoad;
