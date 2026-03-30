// src/pages/Mission.jsx
import Hero from '../components/Hero';
import ImageCarousel from '../components/ImageCarousel';
import ImageSection from '../components/ImageSection'
import oilspill from '../assets/Oilspill.jpg'

import placeholder from '../assets/placeholderimage.png'
export default function Mission() {
  
  // Create your array of images to pass to the carousel
  const missionImages = [
    {
      src: placeholder,
      caption: "Synthesizing the cellulose aerogel framework."
    },
    {
      src: placeholder,
      caption: "Testing hydrophobic properties in the lab."
    },
    {
      src: placeholder,
      caption: "Targeting aquatic oil spill remediation."
    }
  ];

  return (
    <div className="mission-page">
      <Hero 
        title="Our Mission" 
        subtitle="Engineering sustainable remediation."
        bgImage={placeholder}
      />
      
      <section className="mission-content container">
        
        <ImageSection 
                title="The Problem" 
                image={oilspill} 
                attribution={"By Diego Tirira from Quito, Ecuador - H Abraspungo 0501 032, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=129552146"}

                imageAlt="Lab research"
                imageReversed={false}
                bgColor="#81A6C6"
              >

                <p>
                  Oil spills have long had disasterous consequences for our ecosystems. While we have tools for dealing with them, they are traditionanally themselves harmful to the enviornment. At aerocellutions, we are designing an enviornmentally friendly and afordable alternative to clean up oil spills.
                </p>
              
        </ImageSection>

        <ImageCarousel 
          title="What we Do" 
          images={missionImages}
          bgColor="#AACDDC"
        >
          <p>
            This section has not been finished but it will include three pictures of our lab work. The current images are placeholders.
          </p>
        </ImageCarousel>


        <ImageSection 
                title="Our Impact" 
                image={placeholder} 
                imageAlt="Lab research"
                imageReversed={true}
                bgColor="#F3E3D0"
              >
              <p>Today, [give some statistic about like burning oil spills or something. This page might also have an interactive oil spill map.]</p>

        </ImageSection>

      </section>
    </div>
  );
}