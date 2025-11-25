import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/ImageSlider.css';

const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  };

  return (
    <div className="image-slider">
      {/* Main Image Display */}
      <div className="slider-main">
        <img
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          className="slider-image"
        />

        {/* Navigation Buttons */}
        <button
          className="slider-button prev"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ❮
        </button>
        <button
          className="slider-button next"
          onClick={goToNext}
          aria-label="Next image"
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
              key={`thumb-${index}`}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`View image ${index + 1}`}
              type="button"
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail-image"
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
