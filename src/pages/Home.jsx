import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import oceanfront from '../assets/oceanfront.jpg';
import ImageSection from '../components/ImageSection';

export default function Home() {
  return (
    <div className="home-container">
      <Hero title="Aerocellutions"
      subtitle="A part of McGill Biodesign"
      bgImage={oceanfront}></Hero>

      <ImageSection 
        title="What We Do" 
        //image={} 
        imageAlt="Lab research"
        imageReversed={false}
        bgColor="#81A6C6"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ligula quis nunc luctus efficitur. Donec non congue quam. Morbi placerat nibh ligula, a porta felis commodo interdum. Ut tincidunt lobortis odio, eu blandit orci congue non. Integer iaculis sapien non ex posuere, eget blandit sem ultrices. Vestibulum turpis lectus, molestie vitae mollis non, dapibus sed purus. Suspendisse et dignissim lacus.
        </p>
        <div className="button-group">
          <Link to="./Mission" className="btn btn-primary">
          Our Work
          </Link>
        </div>
        
      </ImageSection>

      <ImageSection 
        title="Our Team" 
        //image={} 
        imageAlt="Team Photo"
        imageReversed={true}
        bgColor="#AACDDC"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ligula quis nunc luctus efficitur. Donec non congue quam. Morbi placerat nibh ligula, a porta felis commodo interdum. Ut tincidunt lobortis odio, eu blandit orci congue non. Integer iaculis sapien non ex posuere, eget blandit sem ultrices. Vestibulum turpis lectus, molestie vitae mollis non, dapibus sed purus. Suspendisse et dignissim lacus.
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
        //image={} 
        imageAlt="BDC 2025"
        imageReversed={false}
        bgColor="#F3E3D0"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ligula quis nunc luctus efficitur. Donec non congue quam. Morbi placerat nibh ligula, a porta felis commodo interdum. Ut tincidunt lobortis odio, eu blandit orci congue non. Integer iaculis sapien non ex posuere, eget blandit sem ultrices. Vestibulum turpis lectus, molestie vitae mollis non, dapibus sed purus. Suspendisse et dignissim lacus.
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