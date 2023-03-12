import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


function FullStackProject({title, description, url, imageUrl }) {
  //const { projectName } = useParams();
  return (
    <div className="col-lg-6">
      <div className="card mb-4">
        <img className="card-img-top" src={imageUrl} alt="project of website" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={url} className="btn btn-primary">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

function MulesoftProject({ title, description, url,imageUrl }) {
  //const { projectName } = useParams();
  return (
    <div className="col-lg-4">
      <div className="card mb-4">
        <img className="card-img-top" src={imageUrl} alt="project Mule" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={url} className="btn btn-primary">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const fullStackProjects = [
    {
      projectName: "E-commerce Website",
      title:"E-commerce Website",
      description:
        "An online store that allows users to purchase products and checkout securely.",
      url: "/projects/full-stack/ecommerce",
      imageUrl:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/ezy-ecommerce-website-template.jpg",
    },
    {
      projectName: "Social Media Platform",
      description:
        "A web application that allows users to connect with each other and share content.",
      url: "/projects/full-stack/social-media",
      imageUrl:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/ezy-ecommerce-website-template.jpg",
    
    },
    {
      projectName: "Blog Website",
      description: "A platform for users to write and read blog posts.",
      url: "/projects/full-stack/blog",
      imageUrl:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/ezy-ecommerce-website-template.jpg",
    
    },
  ];

  const mulesoftProjects = [
    {
      projectName: "API Integration",
      description:
        "A project that integrates multiple APIs to provide a comprehensive service to users.",
      url: "/projects/mulesoft/api",
      imageUrl:
        "https://th.bing.com/th/id/OIP.KgGjG9xW84y2cm9QORS1MwHaFK?w=250&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    
    },
    {
      projectName: "Data Transformation",
      description:
        "A project that involves transforming data from multiple sources into a standardized format.",
      url: "/projects/mulesoft/data-transformation",
      imageUrl:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/ezy-ecommerce-website-template.jpg",
    
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Projects</h1>
      <h2 className="mb-4">Full Stack</h2>
      <div className="row">
        {fullStackProjects.map((project, index) => (
          <FullStackProject
            key={index}
            title={project.title}
            description={project.description}
            url={project.url}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
      <h2 className="mb-4 mt-5">Mulesoft</h2>
      <div className="row">
        {mulesoftProjects.map((project, index) => (
          <MulesoftProject
            key={index}
            title={project.projectName}
            description={project.description}
            url={project.url}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
