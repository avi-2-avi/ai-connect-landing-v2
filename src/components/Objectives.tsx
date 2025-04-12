
import React from 'react';

const Objectives = () => {
  return (
    <section id="objectives" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-audiowide mb-12 text-center">
          Que <span className="text-ai-teal">hacemos</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Placeholder image as requested */}
          <div className="bg-ai-dark/50 border border-ai-teal/30 rounded-lg p-6 shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-64 md:h-80 bg-gradient-to-r from-ai-dark to-ai-blue rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-lg md:text-xl text-ai-teal mb-4">Imagen de esquema pendiente</p>
                  <div className="w-full h-40 md:h-52 bg-ai-blue/50 border border-ai-teal/20 rounded-lg flex items-center justify-center">
                    <span className="text-ai-teal/70 font-audiowide text-xl">Esquema</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
