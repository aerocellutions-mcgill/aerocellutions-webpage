import './Footer.css';
export default function Footer() {
    return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AeroCellutions</h3>
          <p>A BioDesign McGill Team.</p>
        </div>
        
        <div className="footer-section copyright">
          <p>&copy; {new Date().getFullYear()} AeroCellutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}
