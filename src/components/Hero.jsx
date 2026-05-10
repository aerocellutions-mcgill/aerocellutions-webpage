import './Hero.css';
import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';

export default function Hero ({ title, subtitle, bgImage, children, isHome }) {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${bgImage})`}}>
            <div className="hero-content">
                
                {isHome ? (
                    <span className="hero-logo-wrap">
                        <img src={logoDark} alt="Aerocellutions Logo" className="hero-logo hero-logo-dark" />
                        <img src={logoLight} alt="" aria-hidden="true" className="hero-logo hero-logo-light" />
                    </span>
                ) : (
                    <h1 className="hero-title">{title}</h1>
                )}

                {subtitle && <p className="hero-subtitle">{subtitle}</p>} 
                
                <div className="hero-interactables">
                    {children}
                </div>
            </div>
        </section>
    )
}
