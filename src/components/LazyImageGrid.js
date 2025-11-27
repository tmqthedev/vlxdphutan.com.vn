import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import LazyImage from './LazyImage';
import '../styles/LazyImageGrid.css';

/**
 * Component để hiển thị grid hình ảnh với lazy loading
 * @param {Array} images - Mảng object hình ảnh { src, alt, placeholder }
 * @param {number} columns - Số cột (mặc định: 3)
 * @param {string} className - CSS classes
 */
const LazyImageGrid = ({
  images = [],
  columns = 3,
  className = '',
  gap = 20,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = useCallback((image) => {
    setSelectedImage(image);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(calc((100% - ${gap * 3}px) / ${columns}), 1fr))`,
    gap: `${gap}px`,
  };

  return (
    <>
      <div className={`lazy-image-grid ${className}`} style={gridStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleImageClick(image)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleImageClick(image);
              }
            }}
          >
            <LazyImage
              src={image.src}
              alt={image.alt}
              placeholder={image.placeholder}
              className="grid-image"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <span className="view-icon">🔍</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={handleCloseModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={handleCloseModal}>
              ✕
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
            <p className="lightbox-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
};

LazyImageGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
    })
  ),
  columns: PropTypes.number,
  className: PropTypes.string,
  gap: PropTypes.number,
};

export default LazyImageGrid;
