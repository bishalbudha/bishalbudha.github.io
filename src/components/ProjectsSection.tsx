
import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  collaborators: string[];
}

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Quantum Imaging Enhancement',
      category: 'imaging',
      description: 'Developing advanced quantum imaging techniques that improve resolution and reduce radiation exposure for medical diagnostics.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      collaborators: ['National Physics Institute', 'Medical Imaging Center']
    },
    {
      id: 2,
      title: 'Targeted Therapy Optimization',
      category: 'therapy',
      description: 'Creating mathematical models to optimize cancer treatment protocols based on patient-specific factors and tumor characteristics.',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      collaborators: ['University Cancer Research Center', 'Department of Medical Physics']
    },
    {
      id: 3,
      title: 'Radiation Safety Protocols',
      category: 'safety',
      description: 'Developing comprehensive radiation safety protocols for medical staff working with advanced cancer treatment technologies.',
      image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      collaborators: ['Health Safety Organization', 'Radiation Protection Agency']
    },
    {
      id: 4,
      title: 'AI-Assisted Diagnosis',
      category: 'imaging',
      description: 'Implementing artificial intelligence algorithms to enhance medical image analysis and improve early cancer detection rates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      collaborators: ['AI Research Institute', 'Medical Diagnostics Lab']
    },
    {
      id: 5,
      title: 'Nanoparticle-Mediated Therapy',
      category: 'therapy',
      description: 'Investigating the use of specialized nanoparticles that can target cancer cells with high specificity when activated by external radiation.',
      image: 'https://images.unsplash.com/photo-1631556097153-42f5b18e0824?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      collaborators: ['Nanomedicine Center', 'Cancer Research Foundation']
    },
    {
      id: 6,
      title: 'Medical Equipment Calibration',
      category: 'safety',
      description: 'Developing advanced calibration techniques for medical physics equipment to ensure precise and accurate treatment delivery.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      collaborators: ['Medical Engineering Department', 'Standards Institute']
    },
  ];
  
  const categories = ['all', 'imaging', 'therapy', 'safety'];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-theme-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12 text-center">Projects & Collaborations</h2>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-theme-purple text-white'
                    : 'bg-white text-slate-700 hover:bg-theme-purple hover:text-white'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-theme-purple bg-opacity-10 text-theme-purple rounded-full">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-theme-navy mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-theme-navy mb-2">Collaborators:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.collaborators.map((collaborator, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-xs bg-gray-100 text-slate-700 rounded"
                      >
                        {collaborator}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
