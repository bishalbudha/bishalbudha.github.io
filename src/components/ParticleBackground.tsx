
import React, { useEffect, useRef } from 'react';

interface ParticleElement {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotate: number;
  rotateSpeed: number;
  element: HTMLDivElement;
  type: 'atom' | 'testTube' | 'radiation' | 'molecule' | 'dna' | 'brain' | 'microscope' | 'neuron';
  opacity: number;
  opacityStep: number;
}

const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<ParticleElement[]>([]);
  const animationRef = useRef<number | null>(null);

  const colors = [
    'rgba(126, 87, 194, 0.5)', // purple
    'rgba(155, 135, 245, 0.4)', // lighter purple
    'rgba(33, 195, 240, 0.4)', // bright blue
    'rgba(240, 83, 83, 0.4)', // red for radiation
    'rgba(80, 200, 120, 0.4)', // green for molecules
    'rgba(255, 167, 38, 0.4)', // orange for neurons
    'rgba(233, 30, 99, 0.4)', // pink for medical
    'rgba(3, 169, 244, 0.4)', // light blue for medical
  ];

  const createSVGIcon = (type: 'atom' | 'testTube' | 'radiation' | 'molecule' | 'dna' | 'brain' | 'microscope' | 'neuron'): string => {
    switch (type) {
      case 'atom':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><path d="M12 21a9 9 0 0 0 0-18"></path><path d="M3.6 9A16 16 0 0 0 12 2.5"></path><path d="M14 21.08c6.1-2 9.76-8.08 8.51-15"></path></svg>`;
      case 'testTube':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2v16.5c0 3-2.5 3.5-4.5 1.5s-1.5-3.5-1.5-3.5V2"></path><path d="M8.5 2h6"></path><path d="M14.5 16a2 2 0 0 0-4 0"></path></svg>`;
      case 'radiation':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12h0"></path><path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 .9 1h5c.5 0 .9-.4 1-.9"></path><path d="M21 12c0-.6-.4-1-.9-1h-5c-.5 0-.9.4-1 .9"></path><path d="M16.8 19.8c.3.5.9.7 1.3.4 2.3-1.7 3.9-4.3 4.2-7.2.1-.5-.4-1-.9-1h-5c-.5 0-.9.4-1 .9"></path><path d="M12.1 18.2c.4.4 1 .5 1.4.1 1.8-2 2-5.1 0-7.2-.4-.4-1-.5-1.4-.1"></path><path d="M7.5 19.8c.3.5.9.7 1.3.4C10.6 19 12 17.5 12 16"></path></svg>`;
      case 'molecule':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="6" r="2"></circle><circle cx="6" cy="18" r="2"></circle><circle cx="22" cy="18" r="2"></circle><line x1="13.4" y1="7.9" x2="7.1" y2="16"></line><line x1="8" y1="18.4" x2="20" y2="18.4"></line></svg>`;
      case 'dna':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="M17 6c-2.5 1.5-5 3-7 3s-4.5-1.5-7-3"></path><path d="M17 18c-2.5-1.5-5-3-7-3s-4.5 1.5-7 3"></path></svg>`;
      case 'brain':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>`;
      case 'microscope':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>`;
      case 'neuron':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 2 4 10 1-10 2 10-2 10 3-10-2-10 3 10h3.5l1.5-5h-1l1-5"></path><path d="M2 8.5h6.5"></path><path d="M2 15.5h6.5"></path></svg>`;
      default:
        return '';
    }
  };

  const createParticle = (): ParticleElement => {
    const element = document.createElement('div');
    element.className = 'particle';
    
    const size = Math.random() * 25 + 25; // Larger size for visibility
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    
    const colorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[colorIndex];
    element.style.color = color;
    
    // Add a stronger glow effect
    element.style.filter = `drop-shadow(0 0 ${Math.random() * 8 + 3}px ${color})`;
    
    // Randomly select particle type with more focus on scientific symbols
    const types: ('atom' | 'testTube' | 'radiation' | 'molecule' | 'dna' | 'brain' | 'microscope' | 'neuron')[] = [
      'atom', 'atom', 'testTube', 'radiation', 'radiation', 'molecule', 'molecule', 'dna', 'dna', 'brain', 'microscope', 'neuron'
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    
    // Insert SVG icon
    element.innerHTML = createSVGIcon(type);
    
    if (containerRef.current) {
      containerRef.current.appendChild(element);
    }
    
    // Create with random opacity for pulsing effect
    const opacity = Math.random() * 0.5 + 0.3;
    element.style.opacity = opacity.toString();
    
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size,
      speedX: (Math.random() - 0.5) * 0.4, // Slower movement for more elegant effect
      speedY: (Math.random() - 0.5) * 0.4,
      rotate: Math.random() * 360,
      rotateSpeed: (Math.random() - 0.5) * 0.8,
      element,
      type,
      opacity,
      opacityStep: Math.random() * 0.01 + 0.002 // For the breathing/pulsing effect
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
      
      // Apply breathing/pulsing effect
      particle.opacity += particle.opacityStep;
      if (particle.opacity > 0.7 || particle.opacity < 0.2) {
        particle.opacityStep *= -1;
      }
      particle.element.style.opacity = particle.opacity.toString();
      
      // Apply specialized animations based on particle type
      if (particle.type === 'radiation') {
        particle.element.style.filter = `drop-shadow(0 0 ${5 + Math.sin(Date.now() * 0.003) * 5}px rgba(240, 83, 83, ${0.3 + Math.sin(Date.now() * 0.002) * 0.2}))`;
      } else if (particle.type === 'dna' || particle.type === 'molecule') {
        particle.element.style.filter = `drop-shadow(0 0 ${3 + Math.sin(Date.now() * 0.002) * 3}px rgba(80, 200, 120, ${0.2 + Math.sin(Date.now() * 0.003) * 0.2}))`;
      } else if (particle.type === 'brain' || particle.type === 'neuron') {
        particle.element.style.filter = `drop-shadow(0 0 ${4 + Math.sin(Date.now() * 0.004) * 4}px rgba(255, 167, 38, ${0.25 + Math.sin(Date.now() * 0.002) * 0.15}))`;
      }
      
      // Apply position and rotation
      particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px) rotate(${particle.rotate}deg)`;
    });
    
    animationRef.current = requestAnimationFrame(updateParticles);
  };

  useEffect(() => {
    // Create particles
    for (let i = 0; i < 35; i++) { // Reduced count slightly for better performance with more complex elements
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
