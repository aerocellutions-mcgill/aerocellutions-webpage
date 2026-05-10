import Hero from '../components/Hero';
import './Contact.css';
import contactBg from '../assets/vintage-telephone.jpg';

export default function Contact() {
  return (
    <div className="contact-page">
      <Hero 
        title="Get in Touch" 
        subtitle="Connect with the team."
        bgImage={contactBg}
      />
      
      <section className="contact-container">
        <h2 className="contact-page-heading">Contact Us</h2>
        
        <div className="contact-boxes">
          <div className="contact-info">
            <h3>Our Socials</h3>
            <p>Reach out through our social channels!</p>
            
            <div className="social-links">
              <a href="mailto:aerocellutions.mcgill@gmail.com" className="social-btn email-btn">
                ✉️ Email Us
              </a>
             
              <a href="https://www.instagram.com/aerocellutions.mcgill/" target="_blank" rel="noopener noreferrer" className="social-btn ig-btn">
                📸 Instagram
              </a>
              
              <a href="https://www.linkedin.com/company/aerocellutions/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">
                💼 LinkedIn
              </a>
            </div>
          </div>


          <div className="contact-form-wrapper">
            <h3>Send a Message</h3>
            <p>Send us a message directly to our team inbox!</p>
            
            <form action="https://formspree.io/f/xqengqzg" method="POST" className="contact-form">

              <input type="text" name="name" placeholder="Your Name" required />
              
              <input type="email" name="email" placeholder="Your Email" required />

              <textarea name="message" placeholder="How can we help?" rows="4" required></textarea>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}