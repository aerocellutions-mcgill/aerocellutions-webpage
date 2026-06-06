
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';

function ThemeIcon({ theme }) {
  if (theme === 'dark') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 7 7 0 1 0 20.5 15.5Z" />
    </svg>
  );
}

export default function Navbar({ theme, onToggleTheme }) {
  const logo = theme === 'dark' ? logoLight : logoDark;

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="AeroCellutions Logo" className="logo-image" />
        </Link>
      </div>

      <div className="nav-actions">
        <ul className="nav-links">
          <li><Link to="/mission" className="nav-link">Mission</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <ThemeIcon theme={theme} />
        </button>
      </div>
    </nav>
  );
}
