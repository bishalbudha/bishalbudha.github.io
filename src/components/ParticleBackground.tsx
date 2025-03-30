
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  element: HTMLDivElement;
}

const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  const colors = [
    'rgba(126, 87, 194, 0.4)', // purple
    'rgba(155, 135, 245, 0.3)', // lighter purple
    'rgba(126, 105, 171, 0.4)', // secondary purple
    'rgba(33, 195, 240, 0.3)', // bright blue
    'rgba(211, 228, 253, 0.4)', // soft blue
    'rgba(126, 87, 194, 0.2)', // purple with different opacity
  ];

  const createParticle = (): Particle => {
    const element = document.createElement('div');
    element.className = 'particle';
    
    const size = Math.random() * 8 + 2;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    
    const colorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[colorIndex];
    element.style.backgroundColor = color;
    
    // Add a subtle glow effect to some particles
    if (Math.random() > 0.7) {
      element.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${color}`;
    }
    
    if (containerRef.current) {
      containerRef.current.appendChild(element);
    }
    
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size,
      speedX: (Math.random() - 0.5) * 0.7,
      speedY: (Math.random() - 0.5) * 0.7,
      color,
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
    for (let i = 0; i < 80; i++) {
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
