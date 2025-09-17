import React from "react";
import "./ProjectsShowcase.css";

const ProjectsShowcase = () => {
  return (
    <section className="projectsShowcase-wrapper">
      <div className="projectsShowcase-container">
        <h1 className="projectsShowcase-title">All My Projects</h1>

        <div className="projectsShowcase-grid">
          <div className="projectsShowcase-card">
            <h2 className="projectsShowcase-card-title">Portfolio Website</h2>
            <p className="projectsShowcase-card-desc">
              A responsive personal portfolio built with React and styled with CSS.
            </p>
            <div className="projectsShowcase-card-footer">
              <span>React, CSS</span>
              <a href="[your-portfolio-url]" target="_blank" rel="noopener noreferrer" className="projectsShowcase-link">
                View Project →
              </a>
            </div>
          </div>

          <div className="projectsShowcase-card">
            <h2 className="projectsShowcase-card-title">Task Manager App</h2>
            <p className="projectsShowcase-card-desc">
              A web app for task management using JavaScript and MySQL.
            </p>
            <div className="projectsShowcase-card-footer">
              <span>JavaScript, MySQL</span>
              <a href="[your-task-manager-url]" target="_blank" rel="noopener noreferrer" className="projectsShowcase-link">
                View Project →
              </a>
            </div>
          </div>

          <div className="projectsShowcase-card">
            <h2 className="projectsShowcase-card-title">E-Commerce Platform</h2>
            <p className="projectsShowcase-card-desc">
              An online store built with React and integrated with a payment gateway.
            </p>
            <div className="projectsShowcase-card-footer">
              <span>React, Payment API</span>
              <a href="[your-ecommerce-url]" target="_blank" rel="noopener noreferrer" className="projectsShowcase-link">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
