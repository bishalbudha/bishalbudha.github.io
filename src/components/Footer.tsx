
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theme-navy py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Bishal Budha</h3>
            <p className="text-gray-400 mt-1">Biophysics & Medical Physics Researcher</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#home" className="text-gray-400 hover:text-theme-purple transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-theme-purple transition-colors">About</a>
            <a href="#research" className="text-gray-400 hover:text-theme-purple transition-colors">Research</a>
            <a href="#projects" className="text-gray-400 hover:text-theme-purple transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-theme-purple transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Bishal Budha. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-theme-purple transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="mx-2 text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-theme-purple transition-colors text-sm">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
