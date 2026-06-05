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
  
            {/* If it is a video, render the <video> tag */}
            {images[currentIndex].type === 'video' ? (
              <video 
                src={images[currentIndex].src} 
                className="carousel-image" /* Reusing your exact same CSS! */
                style={{ objectPosition: images[currentIndex].objectPosition || 'center' }}
                autoPlay 
                loop 
                muted 
                playsInline
              />
            ) : (
              /* Otherwise, render the standard <img> tag */
              <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].caption || "Carousel image"} 
                className="carousel-image" 
                style={{ 
                  objectPosition: images[currentIndex].objectPosition || 'center',
                  transform: `rotate(${images[currentIndex].rotation || 0}deg)`,
                }}
              />
            )}

            {/* Your existing caption code stays exactly the same down here... */}
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
