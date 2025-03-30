
import React from 'react';
import ParticleBackground from './ParticleBackground';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <ParticleBackground />
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-theme-navy mb-4 animate-fade-in">
            Pushing the Boundaries of <span className="text-theme-purple">Physics in Medicine</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-8 animate-slide-up">
            Biophysicist and medical physics researcher dedicated to developing innovative 
            cancer treatment approaches through the application of advanced physics principles.
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
