
import React, { useState, useEffect } from 'react';
import { Menu, X, Atom } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Atom className="text-theme-purple w-6 h-6 md:w-7 md:h-7 animate-float" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-theme-purple-light rounded-full opacity-75"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-theme-navy font-semibold text-xl md:text-2xl font-montserrat bg-gradient-to-r from-theme-navy via-theme-purple to-theme-slate bg-clip-text text-transparent">Bishal Budha</span>
              <span className="text-xs text-theme-slate opacity-75 tracking-wider font-light">Biophysics Researcher</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-theme-navy hover:text-theme-purple transition-colors">Home</a>
            <a href="#about" className="text-theme-navy hover:text-theme-purple transition-colors">About</a>
            <a href="#research" className="text-theme-navy hover:text-theme-purple transition-colors">Research</a>
            <a href="#projects" className="text-theme-navy hover:text-theme-purple transition-colors">Projects</a>
            <a href="#contact" className="text-theme-navy hover:text-theme-purple transition-colors">Contact</a>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-theme-navy focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <a href="#home" className="text-theme-navy hover:text-theme-purple transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-theme-navy hover:text-theme-purple transition-colors" onClick={toggleMenu}>About</a>
            <a href="#research" className="text-theme-navy hover:text-theme-purple transition-colors" onClick={toggleMenu}>Research</a>
            <a href="#projects" className="text-theme-navy hover:text-theme-purple transition-colors" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="text-theme-navy hover:text-theme-purple transition-colors" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
