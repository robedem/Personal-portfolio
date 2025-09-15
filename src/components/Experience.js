function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {/* Freelance Web Developer */}
          <div className="timeline-item">
            <div className="timeline-date">Aug 2024 — Present</div>
            <div className="timeline-content">
              <h3>Freelance Web Developer</h3>
              <p>Designed and delivered custom web solutions for private clients using React, JavaScript, and MySQL, ensuring scalable and interactive websites.</p>
              <ul>
                <li>React, JavaScript, MySQL, Git/GitHub</li>
              </ul>
            </div>
          </div>

          {/* HNG Internship */}
          <div className="timeline-item">
            <div className="timeline-date">Nov 2024 — Jul 2025</div>
            <div className="timeline-content">
              <h3>Web Developer Intern – HNG Internship</h3>
              <p>Assisted in developing and debugging new features for production apps, collaborated with remote teams, and implemented front-end components for smooth user interaction.</p>
              <ul>
                <li>React, HTML/CSS, API Integration</li>
              </ul>
            </div>
          </div>

          {/* Python Programming Internship */}
          <div className="timeline-item">
            <div className="timeline-date">Mar 2023 — Nov 2023</div>
            <div className="timeline-content">
              <h3>Python Programming Intern – Start Innovation Hub</h3>
              <p>Trained junior developers in Python and Django, solved technical problems in a team environment, and improved training methods for better learning outcomes.</p>
              <ul>
                <li>Python, Django, Flask</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
