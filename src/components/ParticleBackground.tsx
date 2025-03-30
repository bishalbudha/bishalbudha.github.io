
import React, { useEffect, useRef } from 'react';
import { Atom, TestTube, Radiation } from 'lucide-react';

interface ParticleElement {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotate: number;
  rotateSpeed: number;
  element: HTMLDivElement;
  type: 'atom' | 'testTube' | 'radiation' | 'molecule';
}

const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<ParticleElement[]>([]);
  const animationRef = useRef<number | null>(null);

  const colors = [
    'rgba(126, 87, 194, 0.4)', // purple
    'rgba(155, 135, 245, 0.3)', // lighter purple
    'rgba(33, 195, 240, 0.3)', // bright blue
    'rgba(240, 83, 83, 0.3)', // red for radiation
    'rgba(80, 200, 120, 0.3)', // green for molecules
  ];

  const createSVGIcon = (type: 'atom' | 'testTube' | 'radiation' | 'molecule'): string => {
    switch (type) {
      case 'atom':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><path d="M12 21a9 9 0 0 0 0-18"></path><path d="M3.6 9A16 16 0 0 0 12 2.5"></path><path d="M14 21.08c6.1-2 9.76-8.08 8.51-15"></path></svg>`;
      case 'testTube':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2v16.5c0 3-2.5 3.5-4.5 1.5s-1.5-3.5-1.5-3.5V2"></path><path d="M8.5 2h6"></path><path d="M14.5 16a2 2 0 0 0-4 0"></path></svg>`;
      case 'radiation':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12h0"></path><path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 .9 1h5c.5 0 .9-.4 1-.9"></path><path d="M21 12c0-.6-.4-1-.9-1h-5c-.5 0-.9.4-1 .9"></path><path d="M16.8 19.8c.3.5.9.7 1.3.4 2.3-1.7 3.9-4.3 4.2-7.2.1-.5-.4-1-.9-1h-5c-.5 0-.9.4-1 .9"></path><path d="M12.1 18.2c.4.4 1 .5 1.4.1 1.8-2 2-5.1 0-7.2-.4-.4-1-.5-1.4-.1"></path><path d="M7.5 19.8c.3.5.9.7 1.3.4C10.6 19 12 17.5 12 16"></path></svg>`;
      case 'molecule':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="4"></circle><circle cx="16" cy="16" r="4"></circle><path d="M12 12 8 8"></path><path d="M16 8a4 4 0 1 0 0 0"></path></svg>`;
      default:
        return '';
    }
  };

  const createParticle = (): ParticleElement => {
    const element = document.createElement('div');
    element.className = 'particle';
    
    const size = Math.random() * 20 + 20; // Larger size for visibility
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    
    const colorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[colorIndex];
    element.style.color = color;
    
    // Add a subtle glow effect
    element.style.filter = `drop-shadow(0 0 ${Math.random() * 5 + 2}px ${color})`;
    
    // Randomly select particle type
    const types: ('atom' | 'testTube' | 'radiation' | 'molecule')[] = ['atom', 'testTube', 'radiation', 'molecule'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    // Insert SVG icon
    element.innerHTML = createSVGIcon(type);
    
    if (containerRef.current) {
      containerRef.current.appendChild(element);
    }
    
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      rotate: Math.random() * 360,
      rotateSpeed: (Math.random() - 0.5) * 1,
      element,
      type
    };
  };

  const updateParticles = () => {
    particlesRef.current.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.rotate += particle.rotateSpeed;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > window.innerWidth) {
        particle.speedX *= -1;
      }
      
      if (particle.y < 0 || particle.y > window.innerHeight) {
        particle.speedY *= -1;
      }
      
      // Apply position and rotation
      particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px) rotate(${particle.rotate}deg)`;
    });
    
    animationRef.current = requestAnimationFrame(updateParticles);
  };

  useEffect(() => {
    // Create particles
    for (let i = 0; i < 40; i++) { // Reduced count for better performance with larger elements
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
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
