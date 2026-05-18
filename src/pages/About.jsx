import Hero from '../components/Hero';
import LabBackground from '../assets/McGillLab.jpg';
import placeholder from '../assets/placeholderimage.png';
import './About.css';

const teamMembers = [
  {
    name: 'Carolyn Denton',
    roles: ['Co-Team Lead', 'Research Member'],
    year: '4th year',
    major: 'Bioengineering',
    image: placeholder,
    bio: 'My favourite moment in the lab was when we finally figured out how to make our product float on water! The cherry on top was watching it absorb all the oil 🙂.',
  },
  {
    name: 'Team Member 1',
    roles: ['Co-Team Lead', 'Research Member'],
    year: 'Year',
    major: 'Major',
    image: placeholder,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    name: 'Lorenzo Costello',
    roles: ['Sub-Team Lead', 'Research Member'],
    year: '3rd year',
    major: 'Chemical Engineering',
    image: placeholder,
    bio: 'Getting a free gingerbread house from our first meeting.',
  },
  {
    name: 'Team Member 2',
    roles: ['Sub-Team Lead', 'Research Member'],
    year: 'Year',
    major: 'Major',
    image: placeholder,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    name: 'Team Member 3',
    roles: ['Sub-Team Lead', 'Research Member'],
    year: 'Year',
    major: 'Major',
    image: placeholder,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    name: 'Team Member 4',
    roles: ['Sub-Team Lead', 'Research Member'],
    year: 'Year',
    major: 'Major',
    image: placeholder,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    name: 'Anisa Hashemi',
    roles: ['Research Member'],
    year: 'U1',
    major: 'Computer Science & Biology',
    image: placeholder,
    bio: 'My fav AeroCellutions memory was when we presented our work at the Innovation for Impact competition and won first place!!',
  },
  {
    name: 'Samathar Senso',
    roles: ['Research Member'],
    year: '2nd year',
    major: 'Chemical Engineering',
    image: placeholder,
    bio: 'My fav AeroCellutions memory was when we presented our work at the Innovation for Impact competition and won first place!!',
  },
  {
    name: 'Meenakshi Pillai',
    roles: ['Research Member'],
    year: '3rd year',
    major: 'Anatomy & Cell Biology',
    image: placeholder,
    bio: 'My favourite AeroCellutions memory was definitely trying to force everyone to make reels for Instagram after meetings 😭',
  },
  {
    name: 'Taylor Rakowski',
    roles: ['Research Member'],
    year: '3rd year',
    major: 'Chemistry',
    image: placeholder,
    bio: 'My favourite AeroCellutions memory was auditioning to be the voice of the otter.',
  },
  {
    name: 'Liberté Vaudandaine',
    roles: ['Research Member'],
    year: '2nd year',
    major: 'Biology & Mathematics',
    image: placeholder,
    bio: 'My favourite memory is watching everyone audition for the voice of the otter (and playing wordle).',
  },

  ...Array.from({ length: 8 }, (_, index) => ({
    name: `Team Member ${index + 5}`,
    roles: ['Project Role'],
    year: 'Year',
    major: 'Major',
    image: placeholder,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  })),
];

function TeamMemberCard({ member }) {
  const roles = Array.isArray(member.roles) ? member.roles : [member.roles];

  return (
    <article className="team-member-card">
      <img src={member.image} alt={member.name} />
      <div className="team-member-content">
        <div className="team-member-meta">
          <p className="team-member-role">{roles.filter(Boolean).join(' / ')}</p>
          <p className="team-member-year">{member.year}</p>
          <p className="team-member-major">{member.major}</p>
        </div>
        <h3>{member.name}</h3>
        <p className="team-member-bio">{member.bio}</p>
      </div>
    </article>
  );
}

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

        <div className="team-grid team-grid-featured">
          {teamMembers.slice(0, 2).map((member) => (
            <TeamMemberCard member={member} key={member.name} />
          ))}
        </div>

        <div className="team-grid team-grid-standard">
          {teamMembers.slice(2).map((member) => (
            <TeamMemberCard member={member} key={member.name} />
          ))}
        </div>
      </section>
    </div>
  );
}
