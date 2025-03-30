
import React from 'react';
import { Mail, Linkedin, FileText, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-theme-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center relative inline-block mx-auto">
          Connect With Me
          <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-theme-purple mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center bg-white bg-opacity-5 p-6 rounded-lg">
            <Mail className="h-10 w-10 text-theme-purple mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-center text-gray-300">
              Feel free to reach out directly with any questions or opportunities
            </p>
            <a 
              href="mailto:bishal.budha@example.com" 
              className="mt-4 text-theme-purple hover:text-theme-purple-light transition-colors"
            >
              bishal.budha@example.com
            </a>
          </div>
          
          <div className="flex flex-col items-center bg-white bg-opacity-5 p-6 rounded-lg">
            <Linkedin className="h-10 w-10 text-theme-purple mb-4" />
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-center text-gray-300">
              Connect with me professionally and stay updated with my work
            </p>
            <a 
              href="https://linkedin.com/in/bishalbudha" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 text-theme-purple hover:text-theme-purple-light transition-colors"
            >
              linkedin.com/in/bishalbudha
            </a>
          </div>
          
          <div className="flex flex-col items-center bg-white bg-opacity-5 p-6 rounded-lg">
            <FileText className="h-10 w-10 text-theme-purple mb-4" />
            <h3 className="text-xl font-semibold mb-2">Resume</h3>
            <p className="text-center text-gray-300">
              Download my full curriculum vitae for detailed information
            </p>
            <a 
              href="#" 
              className="mt-4 text-theme-purple hover:text-theme-purple-light transition-colors"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-white bg-opacity-5 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Send Me a Message</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-theme-purple"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-theme-purple"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Message subject"
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-theme-purple"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message"
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-theme-purple"
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-theme-purple hover:bg-theme-purple-light text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-theme-purple mr-2" />
            <span>Kathmandu, Nepal</span>
          </div>
          <p className="text-gray-400">
            Available for research collaborations, speaking engagements, and consulting opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
