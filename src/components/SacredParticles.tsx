import { useEffect, useRef } from 'react';

export default function SacredParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const maxParticles = 20;

    const createParticle = () => {
      if (particles.length >= maxParticles) return;

      const particle = document.createElement('div');
      particle.className = 'particle absolute w-2 h-2 bg-gold-500 rounded-full opacity-60';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.bottom = '0px';
      particle.style.animationDuration = (8 + Math.random() * 4) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      container.appendChild(particle);
      particles.push(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
          const index = particles.indexOf(particle);
          if (index > -1) {
            particles.splice(index, 1);
          }
        }
      }, 12000);
    };

    const interval = setInterval(createParticle, 1000);

    return () => {
      clearInterval(interval);
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="sacred-particles"
      style={{
        animation: 'particleFloat 8s linear infinite'
      }}
    />
  );
}