import { useEffect, useRef } from 'react';

function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.particlesJS && particlesRef.current) {
        try {
          window.particlesJS('particles-js', {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: '#4a90e2' },
              shape: { type: 'circle' },
              opacity: { value: 0.8, random: true },
              size: { value: 10, random: true },
              line_linked: { enable: true, distance: 150, color: '#4a90e2', opacity: 0.7 },
              move: { enable: true, speed: 2, direction: 'none', random: true },
            },
            interactivity: {
              events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
              },
              modes: {
                repulse: { distance: 120, duration: 0.4 },
                push: { particles_nb: 4 },
              },
            },
            retina_detect: true,
          });
        } catch (error) {
          console.error('Particle.js initialization error:', error);
        }
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div id="particles-js" ref={particlesRef}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div>
            <h1 className="hero-title">ROBERTO EDEM</h1>
            <div className="hero-subtitles">
              <h2 className="hero-subtitle">SOFTWARE DEVELOPER</h2>
              <h2 className="hero-subtitle">FRONT-END DEVELOPER</h2>
              <h2 className="hero-subtitle">IT SUPPORT SPECIALIST</h2>
            </div>
            <div className="tech-slider">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="REACT" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="PYTHON" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="TAILWIND CSS" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" alt="DJANGO" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;