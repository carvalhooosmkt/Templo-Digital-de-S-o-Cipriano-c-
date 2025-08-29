import { useEffect, useRef } from 'react';

export default function SacredParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const maxParticles = 15;

    const createParticle = () => {
      if (particles.length >= maxParticles) return;

      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-gold-500 rounded-full opacity-60 pointer-events-none';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = '100vh';
      particle.style.animation = `particleFloat ${8 + Math.random() * 4}s linear infinite`;
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      container.appendChild(particle);
      particles.push(particle);

      // Remove particle after animation completes
      const animationDuration = (8 + Math.random() * 4) * 1000;
      setTimeout(() => {
        if (particle.parentNode === container) {
          container.removeChild(particle);
          const index = particles.indexOf(particle);
          if (index > -1) {
            particles.splice(index, 1);
          }
        }
      }, animationDuration);
    };

    // Create particles at intervals
    const interval = setInterval(createParticle, 2000);

    // Cleanup function
    return () => {
      clearInterval(interval);
      particles.forEach(particle => {
        if (particle.parentNode === container) {
          container.removeChild(particle);
        }
      });
      particles.length = 0;
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-1 overflow-hidden"
    />
  );
}
