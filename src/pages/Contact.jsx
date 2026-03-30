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
        
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Our Socials:
          </p>
          
          <div className="social-links">
            {/* The mailto: link automatically opens the user's email app! */}
            <a href="" className="social-btn email-btn">
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
          <p>This form will just end a formatted email to whatever email we want to use. It is not yet functional.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="How can we help?" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </section>
    </div>
  );
}