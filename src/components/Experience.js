function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2024 — Present</div>
            <div className="timeline-content">
              <h3>[Your Role] at [Company]</h3>
              <p>[Description, e.g., "Build and maintain UI components..."]</p>
              <ul>
                <li>[Tech, e.g., JavaScript, React]</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2018 — 2024</div>
            <div className="timeline-content">
              <h3>[Previous Role]</h3>
              <p>[Description]</p>
              <ul>
                <li>[Tech]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;