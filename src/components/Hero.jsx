import './Hero.css';
import logo from '../assets/logo-dark.png';

export default function Hero ({ title, subtitle, bgImage, children, isHome }) {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${bgImage})`}}>
            <div className="hero-content">
                
                {isHome ? (
                    <img src={logo} alt="Aerocellutions Logo" className="hero-logo" />
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
