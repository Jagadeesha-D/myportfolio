



function SkillCard({ title,myimage }) {
  return (<>
    <div className="col-lg-4 mb-3">
      <div className="card skill-card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="skill-icon mr-2">
            <img className='skill-img' alt='skillset'src={myimage}></img>
            </div>
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function Skills() {
  const mernStackSkills = [
    { title: 'ReactJS', skillImage :'https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png'},
    {title:'Javascript',skillImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"},
    { title: 'Node.js', skillImage:'https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png'},
    { title: 'Express.js',skillImage:'https://template-images--amasad.repl.co/express.png',},
    { title: 'MongoDB',skillImage:'https://mpng.subpng.com/20190401/zsf/kisspng-mongodb-document-oriented-database-nosql-openshift-web-app-development-servcie-in-dehradun-5ca1b8cb8a0f32.3708278115541024755655.jpg'},
    { title: 'REST APIs',skillImage:'https://www.connectpos.com/wp-content/uploads/Capture-23.jpg' },

  ];

  const mulesoftSkills = [
    { title: 'Anypoint Platform',skillImage:'https://images.saasworthy.com/mulesoftanypointconnectors_8518_logo_1593769664_5tgkf.jpg'  },
    { title: 'API Designer', skillImage:'https://images.saasworthy.com/mulesoftanypointconnectors_8518_logo_1593769664_5tgkf.jpg' },
    { title: 'API Manager', skillImage:'https://images.saasworthy.com/mulesoftanypointconnectors_8518_logo_1593769664_5tgkf.jpg' },
    { title: 'MuleSoft Runtime', skillImage:'https://images.saasworthy.com/mulesoftanypointconnectors_8518_logo_1593769664_5tgkf.jpg' },
    { title: 'MUnit', skillImage:'https://images.saasworthy.com/mulesoftanypointconnectors_8518_logo_1593769664_5tgkf.jpg' },
    { title: 'DataWeave', skillImage:'https://images.saasworthy.com/mulesoftanypointconnectors_8518_logo_1593769664_5tgkf.jpg' }
  ];

  return (
    <div className="container">
      <h2>MERN Stack Development</h2>
      <hr />
      <div className="row">
        {mernStackSkills.map(skill => (
          <SkillCard key={skill.title} title={skill.title} myimage={skill.skillImage}/>
        ))}
      </div>

      <h2>MuleSoft API Development</h2>
      <hr />
      <div className="row">
        {mulesoftSkills.map(skill => (
          <SkillCard key={skill.title} title={skill.title}  myimage={skill.skillImage} />
        ))}
      </div>
    </div>
  );
}

export default Skills