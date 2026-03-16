import './Hero.css';

export default function Hero ({ title, subtitle, bgImage, children }) {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${bgImage})`}}>
            <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                {subtitle && <p className="hero-subtitle">{subtitle}</p>} {/* Subtitle only is shown if given */}
                <div className="hero-interactables">
                    {children}
                </div>
            </div>

        </section>

    )
}