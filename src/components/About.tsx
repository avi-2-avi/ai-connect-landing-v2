
import React from 'react';
import { Code, Server, Layout } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      icon: Code, 
      title: 'Frontend Development', 
      description: 'Creating responsive and interactive web interfaces' 
    },
    { 
      icon: Server, 
      title: 'Backend Development', 
      description: 'Building scalable server-side solutions' 
    },
    { 
      icon: Layout, 
      title: 'UI/UX Design', 
      description: 'Designing intuitive and beautiful user experiences' 
    }
  ];

  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-soft-purple">
        About Me
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-soft-blue/10 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
          >
            <skill.icon size={48} className="mx-auto mb-4 text-soft-purple" />
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
