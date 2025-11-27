import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useLazyImage from '../hooks/useLazyImage';
import '../styles/LazyImage.css';

/**
 * Component để lazy load hình ảnh với placeholder
 * @param {string} src - URL hình ảnh thực
 * @param {string} alt - Alt text
 * @param {string} placeholder - Placeholder/blur image (base64 hoặc URL nhỏ)
 * @param {string} className - CSS classes
 * @param {number} width - Chiều rộng
 * @param {number} height - Chiều cao
 */
const LazyImage = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
  className = '',
  width,
  height,
  ...props
}) => {
  const { ref, src: loadedSrc, isLoaded } = useLazyImage();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const displaySrc = loadedSrc || placeholder;
  const classes = `lazy-image ${isLoaded ? 'loading' : ''} ${imageLoaded ? 'loaded' : ''} ${className}`;

  return (
    <div className={classes} ref={ref} data-src={src} style={{ width, height }}>
      <img
        src={displaySrc}
        alt={alt}
        className="lazy-image-img"
        width={width}
        height={height}
        onLoad={handleImageLoad}
        {...props}
      />
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LazyImage;
