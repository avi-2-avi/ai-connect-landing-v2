
import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    { 
      title: 'Project 1', 
      description: 'A web application built with React', 
      technologies: ['React', 'Tailwind', 'TypeScript'] 
    },
    { 
      title: 'Project 2', 
      description: 'Full-stack e-commerce platform', 
      technologies: ['Node.js', 'Express', 'MongoDB'] 
    },
    { 
      title: 'Project 3', 
      description: 'Mobile-first responsive design', 
      technologies: ['Vue.js', 'Vuetify', 'Firebase'] 
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-soft-purple">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-soft-blue/10 p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs bg-soft-purple/20 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href="#" className="text-soft-purple hover:opacity-80">
                <Github />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
