import Hero from '../components/Hero';
import LabBackground from '../assets/McGillLab.jpg';
import placeholder from '../assets/placeholderimage.png';
import './About.css';

const teamMembers = [
  {
    name: 'Team Member Name',
    role: 'Project Role',
    image: placeholder,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    name: 'Team Member Name',
    role: 'Project Role',
    image: placeholder,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
];

export default function About() {
  return (
    <div className="about-page">
      <Hero
        title="About Us"
        subtitle="Meet the team behind Aerocellutions."
        bgImage={LabBackground}
      />

      <section className="about-team-section">
        <div className="about-team-header">
          <h2>Our Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-member-card" key={`${member.name}-${member.role}`}>
              <img src={member.image} alt={member.name} />
              <div className="team-member-content">
                <p className="team-member-role">{member.role}</p>
                <h3>{member.name}</h3>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
