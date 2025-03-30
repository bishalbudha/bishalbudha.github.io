
import React from 'react';
import { ArrowRight, Atom } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="mb-4 flex items-center">
            <Atom className="w-8 h-8 text-theme-purple mr-2 animate-quantum-pulse" />
            <span className="text-sm text-theme-purple font-semibold tracking-wider">QUANTUM BIOPHYSICS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-theme-navy mb-4 animate-fade-in">
            Pushing the Boundaries of <span className="text-theme-purple">Physics in Medicine</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-8 animate-slide-up">
            Biophysicist and medical physics researcher dedicated to developing innovative 
            cancer treatment approaches through the application of quantum physics principles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="#research" className="btn-primary flex items-center justify-center">
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#contact" className="btn-outline flex items-center justify-center">
              Connect With Me
            </a>
          </div>
          
          <div className="mt-16 p-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-purple-100 quantum-wave">
            <h3 className="text-lg font-medium text-theme-navy mb-2">Quantum Physics in Medicine</h3>
            <p className="text-slate-600">
              Harnessing the principles of quantum mechanics to revolutionize cancer treatment through precise energy targeting at the subatomic level.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-theme-navy opacity-75 hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
