import { useState } from 'react';
import './ImageCarousel.css';

export default function ImageCarousel({ title, children, images, bgColor }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) return <p>No images to display</p>;

  return (
    <section className="carousel-section" style={{ backgroundColor: bgColor }}>
      <div className="carousel-wrapper">
        
        <div className="carousel-header">
          {title && <h3 className="carousel-title">{title}</h3>}
          <div className="carousel-description">
            {children}
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="carousel-container">
          <button className="carousel-arrow left-arrow" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="carousel-image-wrapper">
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].caption || "Carousel image"} 
              className="carousel-image" 
            />
            {images[currentIndex].caption && (
              <div className="carousel-caption">
                <p>{images[currentIndex].caption}</p>
              </div>
            )}
          </div>

          <button className="carousel-arrow right-arrow" onClick={nextSlide}>
            &#10095;
          </button>
        </div>

      </div>
    </section>
  );
}