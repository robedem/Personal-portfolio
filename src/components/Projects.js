function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="grid">
          <h2 className="projects-title">Projects</h2>
          <div className="card">
            <h3 className="project-title">My Portfolio Website</h3>
            <p className="project-description">A responsive personal portfolio built with React and styled with CSS.</p>
            <div className="card-footer">
              <span>React, CSS</span>
              <a href="roberto-dev-portfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="project-link">View Project →</a>
            </div>
          </div>
          <div className="card">
            <h3 className="project-title">Lifecare</h3>
            <p className="project-description">A web app dedicated for the care for elderly people. Providing both opportunites for Elders to get professional care and workers to get employed in the sector</p>
            <div className="card-footer">
              <span>JavaScript, MySQL</span>
              <a href="https://robedem.github.io/lifecare/" target="_blank" rel="noopener noreferrer" className="project-link">View Project →</a>
            </div>
          </div>
          <div className="card">
            <h3 className="project-title">E-Commerce Platform</h3>
            <p className="project-description">An online store built with React and integrated with a payment gateway.</p>
            <div className="card-footer">
              <span>React, Payment API</span>
              <a href="https://robedem.github.io/timbu-cloud-shop/" target="_blank" rel="noopener noreferrer" className="project-link">View Project →</a>
            </div>
          </div>
          <div className="btn-container">
            <a href="[view-all-url]" className="btn">View All Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;