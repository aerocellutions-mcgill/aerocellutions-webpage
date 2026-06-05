// src/pages/Mission.jsx
import Hero from '../components/Hero';
import ImageCarousel from '../components/ImageCarousel';
import ImageSection from '../components/ImageSection'
import OilSpillMap from '../components/OilSpillMap';
import LabBackground from '../assets/McGillLab.jpg'
import oilspill from '../assets/Oilspill.jpg'

import cellufoam from '../assets/Cellufoam.jpg'
import aerogelTestVideo from '../assets/AerogelTestRotate.mp4'
import woolScouringVideo from '../assets/Wool Scouring.mp4'
import celluloseBlendingVideo from '../assets/Cellulose Blending.mp4'
export default function Mission() {
  
  // Create your array of images to pass to the carousel
  const missionImages = [
    {
      src: cellufoam,
      caption: "Cellulose aerogel, as synthesized in the lab.",
    },
    {
      type: 'video',
      src: woolScouringVideo,
      caption: "Scouring the wool, a necessary step for removing possible marine contaminants in our aerogel.",
    },
    {
      type: 'video', // Tell the carousel this is a video
      src: aerogelTestVideo,
      caption: "Testing the oil absorption capabilities of our cellulose aerogel.",
    },
    {
      type: 'video',
      src: celluloseBlendingVideo,
      caption: "Blending cellulose into a pulp for use in our aerogel.",
      objectPosition: 'center 30%',
    }
  ];

  return (
    <div className="mission-page">
      <Hero 
        title="Our Mission" 
        subtitle="Sustainable oil spill remediation without secondary pollution.
Our novelty lies in replacing conventional siloxane coatings with biodegradable alternatives
while maintaining high oil absorption capacity."
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
                  Oil spills in aquatic environments remain a persistent global environmental crisis, threatening
ecosystems, wildlife, and coastal communities. Current cleanup methods rely heavily on plastic-
based sorbents that are non-biodegradable and require specialized disposal, often generating
additional pollution.
                </p>
              
        </ImageSection>

        <ImageCarousel 
          title="What we Do" 
          images={missionImages}
          bgColor="var(--section-pale-blue)"
        >
          <p>
            In the lab, we synthesize porous materials and test their oil absorption and water repellent
properties. We also evaluate downstream oil recovery to assess reuse potential and end-of-life
impact. Through stakeholder interviews with environmental responders and industry
professionals, we ensure our solution aligns with real-world remediation needs and waste
management systems.
          </p>
        </ImageCarousel>


        <ImageSection 
                title="Oil Spills in Context" 
                media={<OilSpillMap />}
                imageReversed={true}
                bgColor="var(--section-warm)"
              >
              <p>With the continued reliance on oil in many industries, the threat of oil spills in oceans and on
land is high. With the high traffic of fuel ships in central and northern waters, there continues to
be numerous marine oil spills reported every year.</p>

        </ImageSection>

      </section>
    </div>
  );
}
