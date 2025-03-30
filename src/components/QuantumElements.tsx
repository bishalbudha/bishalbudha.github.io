
import React, { useEffect, useRef } from 'react';
import { Atom, CircleDashed, Dna } from 'lucide-react';

const QuantumElements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This effect will run after the component mounts
    const container = containerRef.current;
    if (!container) return;

    // Clean up function to be run on unmount
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Quantum Wave Pattern - Top Right */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-10 md:opacity-15 animate-pulse">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#7E57C2" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-45.8C87.3,-32.6,89.9,-16.3,88.9,-0.6C87.9,15.1,83.2,30.2,74.9,42.7C66.5,55.2,54.5,65.1,41.1,72.7C27.7,80.3,13.9,85.7,-0.4,86.3C-14.7,87,-29.5,82.9,-42.4,75.3C-55.4,67.8,-66.6,56.7,-74.4,43.5C-82.2,30.2,-86.5,15.1,-87.4,-0.5C-88.2,-16.1,-85.5,-32.2,-77.6,-45.3C-69.7,-58.4,-56.6,-68.4,-42.4,-75.5C-28.3,-82.5,-14.1,-86.5,0.8,-87.8C15.8,-89.1,31.6,-87.7,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      {/* Quantum Field - Bottom Left */}
      <div className="absolute bottom-20 left-10 w-48 h-48 opacity-10 md:opacity-15">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#33C3F0" d="M39.9,-65.7C54.2,-60,69.7,-53.6,77.4,-42.1C85.1,-30.6,85,-14.3,81.2,-0.6C77.4,13.1,69.8,26.1,62.1,39.7C54.3,53.3,46.3,67.5,34.5,73C22.7,78.6,7.1,75.6,-7.9,71.9C-22.9,68.2,-37.4,63.8,-49.4,55.8C-61.4,47.7,-70.9,36,-75.3,22.6C-79.8,9.1,-79.1,-6.2,-74.6,-19.8C-70,-33.4,-61.5,-45.5,-50.1,-52.6C-38.7,-59.7,-24.3,-61.9,-10.9,-64.1C2.6,-66.3,16,-71.4,29.4,-69.4C42.8,-67.5,56.2,-58.5,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      {/* Quantum Icons */}
      <div className="hidden md:block absolute top-1/4 left-20 opacity-5">
        <Atom size={120} className="text-theme-purple-light" />
      </div>
      
      <div className="hidden md:block absolute bottom-1/3 right-20 opacity-5">
        <CircleDashed size={100} className="text-blue-400" />
      </div>
      
      <div className="hidden md:block absolute top-2/3 left-1/3 opacity-5">
        <Dna size={80} className="text-purple-300" />
      </div>
      
      {/* Quantum Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/5 pointer-events-none"></div>
    </div>
  );
};

export default QuantumElements;
