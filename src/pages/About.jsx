import Hero from '../components/Hero';
import LabBackground from '../assets/McGillLab.jpg';
import anisaPhoto from '../assets/people/Anisa_H.jpg';
import carolynPhoto from '../assets/people/Carolyn_D.jpeg';
import cassidyPhoto from '../assets/people/Cassidy_D.jpeg';
import daniellaPhoto from '../assets/people/Daniella_S.jpg';
import emmaBrysonPhoto from '../assets/people/Emma_B.jpg';
import emmaLouiePhoto from '../assets/people/Emma_L.jpg';
import emmettPhoto from '../assets/people/Emmett_O.jpg';
import grahamPhoto from '../assets/people/Graham_C.jpg';
import jerryPhoto from '../assets/people/Jerry_W.jpg';
import libertePhoto from '../assets/people/Liberte_V.png';
import lorenzoPhoto from '../assets/people/Lorenzo_C.jpeg';
import meenakshiPhoto from '../assets/people/Meenakshi_P.png';
import oliviaCozariucPhoto from '../assets/people/Olivia_C.jpg';
import oliviaMahonPhoto from '../assets/people/Olivia_M.jpg';
import samatharPhoto from '../assets/people/Samathar_S.jpg';
import taylorPhoto from '../assets/people/Taylor_R.jpg';
import theoPhoto from '../assets/people/Theo.heic.png';
import './About.css';

const teamMembers = [
  {
    name: 'Carolyn Denton',
    roles: ['Co-Team Lead', 'Research Member'],
    year: '4th year',
    major: 'Bioengineering',
    image: carolynPhoto,
    bio: 'My favourite moment in the lab was when we finally figured out how to make our product float on water! The cherry on top was watching it absorb all the oil 🙂.',
  },
  {
    name: 'Cassidy Devereaux',
    roles: ['Co-Team Lead', 'Research Member'],
    year: '3rd year',
    major: 'Bioresource Engineering',
    image: cassidyPhoto,
    bio: 'My favourite memory is getting to meet with communities impacted by oil spills and learn more about what they need.',
  },
  {
    name: 'Theo van de Ven',
    roles: ['Lab Supervisor'],
    year: 'Professor',
    major: 'Department of Chemistry',
    image: theoPhoto,
    imageClassName: 'team-member-photo--theo',
  },
  {
    name: 'Lorenzo Costello',
    roles: ['Sub-Team Lead', 'Research Member'],
    year: '3rd year',
    major: 'Chemical Engineering',
    image: lorenzoPhoto,
    bio: 'Getting a free gingerbread house from our first meeting.',
  },
  {
    name: 'Olivia Cozariuc',
    roles: ['Sub-Team Lead', 'Research Member'],
    year: '2nd year',
    major: 'Bioengineering',
    image: oliviaCozariucPhoto,
    bio: 'The TechIdea Pitch Competition night.',
  },
  {
    name: 'Daniella St-Laurent',
    roles: ['Sub-Team Lead', 'Research Member'],
    year: '2nd year',
    major: 'Chemical Engineering',
    image: daniellaPhoto,
    bio: "My favourite memory was watching everyone auditioning for the role of the Otter's voice!",
  },

  {
    name: 'Jerry Wong',
    roles: ['Research Member', 'Website Developer'],
    year: '2nd year',
    major: 'Computer Science & Biology',
    image: jerryPhoto,
    imageClassName: 'team-member-photo--jerry',
    bio: 'My favourite part of AeroCellutions was when we finally had a working and effective version of the product.',
  },

  {
    name: 'Anisa Hashemi',
    roles: ['Research Member'],
    year: '2nd year',
    major: 'Computer Science & Biology',
    image: anisaPhoto,
    bio: 'My fav AeroCellutions memory was when we presented our work at the Innovation for Impact competition and won first place!!',
  },

  {
    name: 'Samathar Senso',
    roles: ['Research Member'],
    year: '2nd year',
    major: 'Chemical Engineering',
    image: samatharPhoto,
    bio: 'My favourite AeroCellutions memory was when we gave wool samples a bath in the lab.',
  },
  {
    name: 'Meenakshi Pillai',
    roles: ['Research Member'],
    year: '3rd year',
    major: 'Anatomy & Cell Biology',
    image: meenakshiPhoto,
    bio: 'My favourite AeroCellutions memory was definitely trying to force everyone to make reels for Instagram after meetings 😭',
  },
  {
    name: 'Taylor Rakowski',
    roles: ['Research Member'],
    year: '3rd year',
    major: 'Chemistry',
    image: taylorPhoto,
    bio: 'My favourite AeroCellutions memory was auditioning to be the voice of the otter.',
  },
  {
    name: 'Liberté Vaudandaine',
    roles: ['Research Member'],
    year: '2nd year',
    major: 'Biology & Mathematics',
    image: libertePhoto,
    bio: 'My favourite memory is watching everyone audition for the voice of the otter (and playing wordle).',
  },
  {
    name: 'Emmett Olthuis',
    roles: ['Research Member'],
    year: '3rd year',
    major: 'Chemistry',
    image: emmettPhoto,
    bio: 'Favourite memory: seeing if our inventions pass the tests.',
  },
  {
    name: 'Graham Chapman',
    roles: ['Research Member'],
    year: '2nd year',
    major: 'Quantitative Biology',
    image: grahamPhoto,
    bio: 'My favourite memory was the Innovation for Impact pitch competition!',
  },
  {
    name: 'Olivia Mahon',
    roles: ['Research Member'],
    year: '1st year',
    major: 'Bioengineering',
    image: oliviaMahonPhoto,
    bio: 'My favorite moment was getting to see the absorption results and time in the lab!!',
  },
  {
    name: 'Emma Bryson',
    roles: ['Research Member'],
    year: '1st year',
    major: 'Bioengineering',
    image: emmaBrysonPhoto,
    bio: 'My fav moment was the struggle of trying to weigh the wool.',
  },
  {
    name: 'Emma Louie',
    roles: ['Research Member'],
    year: '2nd year',
    major: 'Microbiology and Immunology',
    image: emmaLouiePhoto,
    bio: 'My favourite moment was going in the lab.',
  },
];

function TeamMemberCard({ member }) {
  const roles = Array.isArray(member.roles) ? member.roles : [member.roles];

  return (
    <article className="team-member-card">
      <img className={member.imageClassName} src={member.image} alt={member.name} />
      <div className="team-member-content">
        <div className="team-member-meta">
          <p className="team-member-role">{roles.filter(Boolean).join(' / ')}</p>
          {member.year && <p className="team-member-year">{member.year}</p>}
          {member.major && <p className="team-member-major">{member.major}</p>}
        </div>
        <h3>{member.name}</h3>
        {member.bio && <p className="team-member-bio">{member.bio}</p>}
      </div>
    </article>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <Hero
        title="About Us"
        subtitle="Meet the people behind AeroCellutions."
        bgImage={LabBackground}
      />

      <section className="about-team-section">
        <div className="about-team-header">
          <h2>Our Team</h2>
          <p>
            The faces behind AeroCellutions!
          </p>
        </div>

        <div className="team-grid team-grid-featured">
          {teamMembers.slice(0, 3).map((member) => (
            <TeamMemberCard member={member} key={member.name} />
          ))}
        </div>

        <div className="team-grid team-grid-subleads">
          {teamMembers.slice(3, 6).map((member) => (
            <TeamMemberCard member={member} key={member.name} />
          ))}
        </div>

        <div className="team-grid team-grid-standard">
          {teamMembers.slice(6).map((member) => (
            <TeamMemberCard member={member} key={member.name} />
          ))}
        </div>
      </section>
    </div>
  );
}
