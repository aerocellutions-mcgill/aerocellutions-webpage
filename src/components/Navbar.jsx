
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-dark.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Aerocellutions Logo" className="logo-image" />
        </Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/mission" className="nav-link">Mission</Link></li>
        <li><Link to="/about" className="nav-link">About Us</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}