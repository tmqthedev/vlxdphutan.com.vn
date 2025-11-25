import React from 'react';
import PropTypes from 'prop-types';
import useInView from '../hooks/useInView';

/**
 * Component wrapper để lazy load và animate element khi visible
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content cần lazy load
 * @param {string} props.className - CSS class
 * @param {string} props.animation - Animation type: 'fadeIn', 'slideUp', 'slideDown'
 * @param {number} props.delay - Delay animation (ms)
 */
const LazyLoad = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useInView({ threshold });

  const animationClass = isVisible ? `animated ${animation}` : '';
  const combinedClass = `lazy-load ${className} ${animationClass}`;

  return (
    <div
      ref={ref}
      className={combinedClass}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

LazyLoad.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  animation: PropTypes.string,
  delay: PropTypes.number,
  threshold: PropTypes.number,
};

export default LazyLoad;
