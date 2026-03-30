import './ImageSection.css';

export default function FeatureSplit({ title, image, attribution, imageAlt, imageReversed, bgColor, children,  }) {
  return (
    <section style={{backgroundColor : bgColor}}>
        <div className="feature-wrapper">

        <div className={`split-container ${imageReversed ? 'reverse' : ''}`}>
            
            <div className="split-text">
            {title && <h3 className="split-title">{title}</h3>}
            {children} 
            </div>

            <div className="split-image">
            <img src={image} alt={imageAlt || "Feature"} />
           {attribution && (
                <p className="image-attribution">{attribution}</p>
              )}
            </div>

        </div>

        </div>
    </section>
  );
}