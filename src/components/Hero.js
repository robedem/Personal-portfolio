import { useEffect, useRef } from 'react';

function Hero() {
  const particlesRef = useRef(null);
  const typedRef = useRef(null);
  const typedInstance = useRef(null); // To store Typed instance for cleanup

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
      } else {
        console.log('Particle.js not loaded or ref not ready. Check script in index.html.');
      }
    }, 500);

    if (window.Typed && typedRef.current && !typedInstance.current) {
      try {
        typedInstance.current = new window.Typed(typedRef.current, {
          strings: ['ROBERTO EDEM'], // Uppercase
          typeSpeed: 50,
          backSpeed: 0,
          showCursor: true,
          cursorChar: '|',
          startDelay: 500,
        });
      } catch (error) {
        console.error('Typed.js initialization error:', error);
      }
    }

    return () => {
      clearTimeout(timer);
      if (typedInstance.current) {
        typedInstance.current.destroy(); // Cleanup Typed instance
      }
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div id="particles-js" ref={particlesRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'auto' }}>
          <canvas style={{ width: '100%', height: '100%' }} />
        </div>
        <div
          className="hero-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(15, 88, 112, 0.6)',
            zIndex: 2,
          }}
        />
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%', padding: '20px' }}>
          <div>
            <h1 className="hero-title" ref={typedRef} style={{ fontSize: '4rem', fontWeight: 'bold', letterSpacing: '5px', textTransform: 'uppercase' }}></h1>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <h2 className="hero-subtitle" style={{ fontSize: '1.5rem', margin: 0, textTransform: 'uppercase' }}>SOFTWARE DEVELOPER</h2>
              <h2 className="hero-subtitle" style={{ fontSize: '1.5rem', margin: 0, textTransform: 'uppercase' }}>FRONT-END DEVELOPER</h2>
              <h2 className="hero-subtitle" style={{ fontSize: '1.5rem', margin: 0, textTransform: 'uppercase' }}>IT SUPPORT SPECIALIST</h2>
            </div>
            <div className="tech-slider" style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '10px 0' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="REACT" style={{ width: '50px', marginRight: '20px', verticalAlign: 'middle' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="PYTHON" style={{ width: '50px', marginRight: '20px', verticalAlign: 'middle' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" style={{ width: '50px', marginRight: '20px', verticalAlign: 'middle' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" style={{ width: '50px', marginRight: '20px', verticalAlign: 'middle' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="TAILWIND CSS" style={{ width: '50px', marginRight: '20px', verticalAlign: 'middle' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" alt="DJANGO" style={{ width: '50px', marginRight: '20px', verticalAlign: 'middle' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;