
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ResearchSection: React.FC = () => {
  const researchAreas = [
    {
      title: 'Radiation Therapy Optimization',
      description: 'Developing novel approaches to optimize radiation delivery for cancer treatment, minimizing damage to healthy tissue while maximizing tumor destruction.',
      imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Medical Imaging Physics',
      description: 'Exploring advanced imaging techniques that leverage quantum physics principles to achieve higher resolution and more detailed medical scans.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Targeted Particle Therapy',
      description: 'Investigating the use of specifically designed nanoparticles that can target cancer cells with unprecedented precision when activated by external energy sources.',
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const publications = [
    {
      title: 'Novel Applications of Quantum Mechanics in Cancer Treatment',
      journal: 'International Journal of Medical Physics',
      year: '2023',
      doi: '10.xxxx/xxxxx'
    },
    {
      title: 'Optimizing Radiation Dose Distribution Using Advanced Mathematical Models',
      journal: 'Physics in Medicine and Biology',
      year: '2022',
      doi: '10.xxxx/xxxxx'
    },
    {
      title: 'Targeted Nanoparticle Delivery Systems for Enhanced Radiotherapy',
      journal: 'Journal of Applied Physics in Medicine',
      year: '2021',
      doi: '10.xxxx/xxxxx'
    }
  ];

  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12 text-center">Research Focus</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={area.imageUrl} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-theme-navy mb-3">{area.title}</h3>
                <p className="text-slate-600">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-theme-navy text-white rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-6">Current Project: Advanced Cancer Treatment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                My current research focuses on developing a revolutionary approach to cancer treatment 
                that combines principles from quantum physics with targeted drug delivery systems. This 
                interdisciplinary approach aims to significantly improve treatment efficacy while 
                reducing side effects.
              </p>
              <p className="mb-4">
                By leveraging quantum tunneling effects, we're exploring ways to deliver therapeutic 
                agents directly to cancer cells with unprecedented precision. This approach holds 
                promise for treating aggressive and historically treatment-resistant cancers.
              </p>
              <div className="mt-6">
                <a href="#" className="inline-flex items-center text-theme-purple-light hover:text-white transition-colors">
                  Read research abstract
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Key Innovations</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-theme-purple">•</span>
                  <span>Quantum-guided drug delivery mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-theme-purple">•</span>
                  <span>Novel radiation focusing techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-theme-purple">•</span>
                  <span>Predictive models for treatment optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-theme-purple">•</span>
                  <span>Integration with personalized medicine approaches</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-theme-purple">•</span>
                  <span>Minimal invasive monitoring systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-theme-navy mb-6">Selected Publications</h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-medium text-theme-navy mb-2">{pub.title}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-slate-600">
                  <span className="mb-1 sm:mb-0">{pub.journal}</span>
                  <span className="hidden sm:block mx-2">•</span>
                  <span className="mb-1 sm:mb-0">{pub.year}</span>
                  <span className="hidden sm:block mx-2">•</span>
                  <span>DOI: {pub.doi}</span>
                </div>
                <div className="mt-4">
                  <a href="#" className="text-sm text-theme-purple hover:text-theme-purple-light transition-colors">
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="btn-outline inline-flex items-center">
              View All Publications
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
