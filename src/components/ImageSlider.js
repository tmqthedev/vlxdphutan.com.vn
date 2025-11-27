import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import '../styles/ImageSlider.css';

const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState(new Set([0]));

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Pre-load adjacent images
    const adjacentIndices = new Set(loadedIndices);
    adjacentIndices.add(index);
    if (index > 0) adjacentIndices.add(index - 1);
    if (index < images.length - 1) adjacentIndices.add(index + 1);
    setLoadedIndices(adjacentIndices);
  };

  const handleImageLoad = (index) => {
    setLoadedIndices(prev => new Set(prev).add(index));
  };

  // Track preloaded images (current + adjacent)
  useMemo(() => {
    const indices = new Set(loadedIndices);
    indices.add(currentIndex);
    if (currentIndex > 0) indices.add(currentIndex - 1);
    if (currentIndex < images.length - 1) indices.add(currentIndex + 1);
    return indices;
  }, [currentIndex, loadedIndices, images.length]);

  return (
    <div className="image-slider">
      {/* Main Image Display */}
      <div className="slider-main">
        <img
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          className="slider-image"
          loading="lazy"
          onLoad={() => handleImageLoad(currentIndex)}
        />

        {/* Navigation Buttons */}
        <button
          className="slider-button prev"
          onClick={goToPrevious}
          aria-label="Previous image"
          type="button"
        >
          ❮
        </button>
        <button
          className="slider-button next"
          onClick={goToNext}
          aria-label="Next image"
          type="button"
        >
          ❯
        </button>

        {/* Image Counter */}
        <div className="image-counter">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Thumbnail Strip - Inside Main */}
        <div className="slider-thumbnails">
          {images.map((image, index) => (
            <button
              key={image}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`View image ${index + 1}`}
              type="button"
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail-image"
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageSlider;
