import '../styles/Projects.css';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Osaan Restro',
      description: 'SaaS platform for multi-tenant restaurant management with complete POS system',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/owais0803/osaan-restro-app'
    },
    {
      id: 2,
      title: 'Shopper',
      description: 'E-commerce application with full CRUD operations, shopping cart, and payment integration',
      tech: ['React', 'Express', 'MongoDB', 'Stripe'],
      link: 'https://github.com/owais0803/shopper'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio to showcase projects and skills with responsive design',
      tech: ['React', 'CSS', 'JavaScript'],
      link: 'https://github.com/owais0803/owais_portfolio_web'
    },
    // ADD NEW PROJECTS HERE
   
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;