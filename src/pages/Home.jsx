import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import oceanfront from '../assets/oceanfront.jpg';
import bdcposter from '../assets/BDC2026.png';
import ImageSection from '../components/ImageSection';

import teamPhoto from '../assets/Aerocellutions_team_photo.JPG'
import LabBackground from '../assets/McGillLab.jpg'

export default function Home() {
  return (
    <div className="home-container">
      <Hero title="Aerocellutions"
      subtitle="A part of McGill Biodesign"
      bgImage={oceanfront}
      isHome={true}></Hero>

      <ImageSection 
        title="What We Do" 
        image={LabBackground} 
        imageAlt="Lab research"
        imageReversed={false}
        bgColor="var(--section-blue)"
      >
        <p>
          At aerocellutions, we are designing an environmentally friendly and afordable material for cleaning up oil spills in marine enviornments.
        </p>
        <div className="button-group">
          <Link to="./Mission" className="btn btn-primary">
          Our Work
          </Link>
        </div>
        
      </ImageSection>

      <ImageSection 
        title="Our Team" 
        image={teamPhoto} 
        imageAlt="Team Photo"
        imageReversed={true}
        bgColor="var(--section-pale-blue)"
      >
        <p>
          We are a team of engineering and science students at McGill University working together to develop sustainable materials for cleaner oil spill remediation.
        </p>
        <div className="button-group">
          <Link to="./About" className="btn btn-primary">
          Our Team
          </Link>
          <Link to="./Contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>
         
      </ImageSection>


      <ImageSection 
        title="Biodesign Challenge" 
        image={bdcposter} 
        imageAlt="BDC 2025"
        imageReversed={false}
        bgColor="var(--section-warm)"
      >
        <p>
          The Biodesign Challenge (BDC) is an international competition that partners university students with artists, designers, and scientists to envision the future of biotechnology. The Biodesign Challenge Summit 2026 takes place from June 11th to 12th, at the Parsons School of Design & the Museum of Modern Art (NYC).
        </p>

        <div className="button-group">
          <a 
            href="https://biodesignchallenge.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary external-btn">
            BDC Official Site <span className="icon">↗</span>
          </a>
          <a
          href="https://www.mcgillbiodesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary external-btn">
          McGill Biodesign <span className="icon">↗</span>
          </a>
        </div>
      </ImageSection>


    </div>
  );
}
