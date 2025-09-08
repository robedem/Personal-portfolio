import { useEffect, useRef } from 'react';

function Hero() {
  const particlesRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#4a90e2' },
          shape: { type: 'circle' },
          opacity: { value: 0.8, random: true }, // Increased for visibility
          size: { value: 10, random: true }, // Increased from 8 to 10
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
    } else {
      console.log('Particle.js script not loaded yet. Check the CDN URL in index.html.');
    }

    if (window.Typed && typedRef.current) {
      new window.Typed(typedRef.current, {
        strings: ['Hi, I\'m Roberto Edem'],
        typeSpeed: 50,
        backSpeed: 0,
        showCursor: true,
        cursorChar: '|',
        startDelay: 500,
      });
    }
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
            backgroundColor: 'rgba(15, 88, 112, 0.6)', // Reduced opacity to 60% to allow better interaction
            zIndex: 2, // Slightly above particles but below text
          }}
        />
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'flex-end', width: '100%', padding: '20px' }}>
          <div>
            <h1 className="hero-title" ref={typedRef} style={{ fontSize: '2.5rem' }}></h1> {/* Increased font size */}
            <p className="hero-description" style={{ fontSize: '1rem', maxWidth: '500px' }}>
              From a curious beginner to a skilled front-end developer, I build captivating web experiences using JavaScript, React, and MySQL. Backed by internships at HNG and Start Innovation Hub, along with a suite of client-driven projects, I’m eager to fuel innovation and create game-changing solutions in my next tech chapter!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;