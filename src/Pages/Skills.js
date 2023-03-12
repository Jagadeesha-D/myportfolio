import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaExchangeAlt, FaCode } from 'react-icons/fa';
import { SiGraphql } from 'react-icons/si';


function SkillCard({ title, icon }) {
  return (
    <div className="col-lg-4 mb-3">
      <div className="card skill-card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="skill-icon mr-2">{icon}</div>
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const mernStackSkills = [
    { title: 'ReactJS', icon: <FaReact /> },
    { title: 'Node.js', icon: <FaNodeJs /> },
    { title: 'Express.js', icon: <FaNodeJs /> },
    { title: 'MongoDB',  },
    { title: 'REST APIs' },
    { title: 'GraphQL', icon: <SiGraphql /> }
  ];

  const mulesoftSkills = [
    { title: 'Anypoint Platform',  },
    { title: 'API Designer', icon: <FaCode /> },
    { title: 'API Manager', icon: <FaCloud /> },
    { title: 'MuleSoft Runtime', icon: <FaExchangeAlt /> },
    { title: 'MUnit', icon: <FaCode /> },
    { title: 'DataWeave', icon: <FaDatabase /> }
  ];

  return (
    <div className="container">
      <h2>MERN Stack Development</h2>
      <hr />
      <div className="row">
        {mernStackSkills.map(skill => (
          <SkillCard key={skill.title} title={skill.title} icon={skill.icon} />
        ))}
      </div>

      <h2>MuleSoft API Development</h2>
      <hr />
      <div className="row">
        {mulesoftSkills.map(skill => (
          <SkillCard key={skill.title} title={skill.title} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

export default Skills