// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
   
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>Aerocellutions</Link>
      </div>
      
      <ul style={styles.navLinks}>
        <li><Link to="/mission" style={styles.link}>Mission</Link></li>
        <li><Link to="/about" style={styles.link}>About Us</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

// Just some quick inline CSS to make it readable for now. 
// We will move this to a proper CSS file later!
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: 'white',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};