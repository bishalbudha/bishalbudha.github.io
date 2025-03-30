
import React from 'react';
import { Calendar, Award, User, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  const milestones = [
    {
      year: '2018',
      title: 'B.Sc. in Physics',
      description: 'Tribhuvan University with distinction',
      icon: <BookOpen className="h-6 w-6 text-theme-purple" />
    },
    {
      year: '2020',
      title: 'Research Fellowship',
      description: 'Awarded prestigious research fellowship in Medical Physics',
      icon: <Award className="h-6 w-6 text-theme-purple" />
    },
    {
      year: '2022',
      title: 'Cancer Research Project',
      description: 'Led innovative project applying physics principles to cancer treatment',
      icon: <User className="h-6 w-6 text-theme-purple" />
    },
    {
      year: '2023',
      title: 'PhD Application',
      description: 'Pursuing PhD opportunities in Biophysics and Medical Physics',
      icon: <Calendar className="h-6 w-6 text-theme-purple" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-theme-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-slate-700 mb-6">
              I am Bishal Budha, a dedicated researcher at the intersection of physics and medicine. With a 
              strong foundation in physics from Tribhuvan University, I've developed a passion for applying 
              physical principles to solve medical challenges, particularly in the field of cancer treatment.
            </p>
            <p className="text-slate-700 mb-6">
              My research focuses on innovative approaches to cancer therapy that leverage advanced 
              physics concepts to improve treatment efficacy while minimizing side effects. I believe that 
              the precision of physics can revolutionize how we approach complex medical problems.
            </p>
            <p className="text-slate-700">
              As an aspiring PhD candidate, I aim to continue pushing the boundaries of what's possible 
              in medical physics, contributing to the development of next-generation treatments that will 
              improve patient outcomes worldwide.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gradient-to-r from-theme-navy to-theme-purple rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <span className="text-5xl block mb-3">👨‍🔬</span>
                  <h3 className="text-xl font-semibold mb-2">Bishal Budha</h3>
                  <p className="text-sm opacity-90">Biophysicist & Medical Physics Researcher</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-theme-purple rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-white text-2xl">⚛️</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-theme-navy mb-8 text-center">Academic Journey</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-theme-purple bg-opacity-30 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-4 md:gap-0 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-md card-hover">
                      <div className="flex items-center mb-3">
                        {milestone.icon}
                        <span className="ml-2 text-sm font-semibold text-theme-purple">{milestone.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-theme-navy mb-2">{milestone.title}</h4>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center z-10">
                    <div className="w-8 h-8 bg-theme-purple rounded-full flex items-center justify-center shadow-md">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
