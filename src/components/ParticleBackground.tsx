
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  element: HTMLDivElement;
}

const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  const createParticle = (): Particle => {
    const element = document.createElement('div');
    element.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    
    const opacity = Math.random() * 0.5 + 0.1;
    element.style.backgroundColor = `rgba(126, 87, 194, ${opacity})`;
    
    if (containerRef.current) {
      containerRef.current.appendChild(element);
    }
    
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      element
    };
  };

  const updateParticles = () => {
    particlesRef.current.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > window.innerWidth) {
        particle.speedX *= -1;
      }
      
      if (particle.y < 0 || particle.y > window.innerHeight) {
        particle.speedY *= -1;
      }
      
      particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
    });
    
    animationRef.current = requestAnimationFrame(updateParticles);
  };

  useEffect(() => {
    // Create particles
    for (let i = 0; i < 50; i++) {
      particlesRef.current.push(createParticle());
    }
    
    // Start animation
    animationRef.current = requestAnimationFrame(updateParticles);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      particlesRef.current.forEach(particle => {
        particle.element.remove();
      });
      
      particlesRef.current = [];
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
