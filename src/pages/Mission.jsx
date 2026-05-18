// src/pages/Mission.jsx
import Hero from '../components/Hero';
import ImageCarousel from '../components/ImageCarousel';
import ImageSection from '../components/ImageSection'
import OilSpillMap from '../components/OilSpillMap';
import LabBackground from '../assets/McGillLab.jpg'
import oilspill from '../assets/Oilspill.jpg'

import placeholder from '../assets/placeholderimage.png'
import cellufoam from '../assets/Cellufoam.jpg'
import aerogelTestVideo from '../assets/AerogelTestRotate.mp4'
export default function Mission() {
  
  // Create your array of images to pass to the carousel
  const missionImages = [
    {
      src: cellufoam,
      caption: "Cellulose aerogel, as synthesized in the lab.",
    },
    {
      type: 'video', // Tell the carousel this is a video
      src: aerogelTestVideo,
      caption: "Testing the oil absorption capabilities of our cellulose aerogel.",
    },
    {
      src: placeholder,
      caption: "if possible, I'd like a picture of the cellulose being prepared since I couldnt find any."
    }
  ];

  return (
    <div className="mission-page">
      <Hero 
        title="Our Mission" 
        subtitle="Engineering sustainable remediation."
        bgImage={LabBackground}
      />
      
      <section className="mission-content container">
        
        <ImageSection 
                title="The Problem" 
                image={oilspill} 
                attribution={"By Diego Tirira from Quito, Ecuador - H Abraspungo 0501 032, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=129552146"}

                imageAlt="Lab research"
                imageReversed={false}
                bgColor="var(--section-blue)"
              >

                <p>
                  Oil spills have long had disasterous consequences for our ecosystems. While we have tools for dealing with them, they are traditionanally themselves harmful to the enviornment. At aerocellutions, we are designing an enviornmentally friendly and afordable alternative to clean up oil spills.
                </p>
              
        </ImageSection>

        <ImageCarousel 
          title="What we Do" 
          images={missionImages}
          bgColor="var(--section-pale-blue)"
        >
          <p>
            We are synthesizing and experimenting with our aerogel in the laboratory.
          </p>
        </ImageCarousel>


        <ImageSection 
                title="Oil Spills in Context" 
                media={<OilSpillMap />}
                imageReversed={true}
                bgColor="var(--section-warm)"
              >
              <p>Oil spills leave long-lasting damage across oceans, lakes, rivers, wetlands, and coastal communities. Our work focuses on sustainable remediation materials that can help make future response efforts cleaner, safer, and less wasteful.</p>

        </ImageSection>

      </section>
    </div>
  );
}
