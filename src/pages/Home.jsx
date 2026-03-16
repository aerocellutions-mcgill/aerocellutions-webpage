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
      </ImageSection>


    </div>
  );
}