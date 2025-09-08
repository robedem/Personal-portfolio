function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Portfolio Website</h3>
            <p className="project-description">A responsive personal portfolio built with React and styled with CSS.</p>
            <div className="project-tech">
              <span>🔴 React</span>
              <span>💻 CSS</span>
            </div>
            <a href="[your-portfolio-url]" target="_blank" rel="noopener noreferrer" className="project-btn">View Project</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">Portfolio Website</h3>
            <p className="project-description">A responsive personal portfolio built with React and styled with CSS.</p>
            <div className="project-tech">
              <span>🔴 React</span>
              <span>💻 CSS</span>
            </div>
            <a href="[your-portfolio-url]" target="_blank" rel="noopener noreferrer" className="project-btn">View Project</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">Task Manager App</h3>
            <p className="project-description">A web app for task management using JavaScript and MySQL.</p>
            <div className="project-tech">
              <span>🌐 JavaScript</span>
              <span>📊 MySQL</span>
            </div>
            <a href="[your-task-manager-url]" target="_blank" rel="noopener noreferrer" className="project-btn">View Project</a>
          </div>
        </div>
        <div className="projects-button">
          <a href="[view-all-url]" className="view-all-btn">View All Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;