import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import oceanfront from '../assets/oceanfront.jpg';
import bdcposter from '../assets/BDC2026.png';
import ImageSection from '../components/ImageSection';

import placeholder from '../assets/placeholderimage.png'
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
        bgColor="#81A6C6"
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
        image={placeholder} 
        imageAlt="Team Photo"
        imageReversed={true}
        bgColor="#AACDDC"
      >
        <p>
          I'm thinking of taking that team picture we have on the staircase here, but perhaps another team picture can be done since I think the members have changed since last semester.
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
        bgColor="#F3E3D0"
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