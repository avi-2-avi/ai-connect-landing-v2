
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="px-4 sm:container mx-auto">
        <h2 className="text-3xl md:text-4xl font-audiowide mb-12 text-center">
          Quiénes <span className="text-ai-teal">somos</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Misión */}
          <div className="bg-gradient-to-br from-ai-blue to-ai-dark border border-ai-purple/20 rounded-lg p-8 transition-transform hover:-translate-y-2 duration-300 shadow-lg">
            <h3 className="text-2xl font-audiowide mb-4 text-ai-purple">Misión</h3>
            <p className="text-lg">
              Impulsamos la innovación y el desarrollo de soluciones con IA para resolver problemas reales
            </p>
          </div>
          
          {/* Visión */}
          <div className="bg-gradient-to-br from-ai-blue to-ai-dark border border-ai-purple/20 rounded-lg p-8 transition-transform hover:-translate-y-2 duration-300 shadow-lg">
            <h3 className="text-2xl font-audiowide mb-4 text-ai-purple">Visión</h3>
            <p className="text-lg">
              Ser la comunidad líder en innovación tecnológica centrada en personas en Latam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
