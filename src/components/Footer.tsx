
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { socialLinks } from '@/data/socialLinks';

const Footer = () => {

  return (
    <section id="contact" className="py-20">
      <div className="px-4 sm:container mx-auto">
        <h2 className="text-3xl md:text-4xl font-audiowide mb-4 text-center">
          Únete a nuestra <span className="text-ai-teal">Comunidad</span>
        </h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-12 text-white/80">
            Únete a nuestra comunidad y mantente al día con las últimas novedades en inteligencia artificial
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="h-full bg-gradient-to-br border-none bg-opacity-20 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-ai-dark hover:scale-105">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${link.color} h-3 w-full`}></div>
                    <div className="p-6 flex flex-col items-center">
                      <div className={`rounded-full p-5 bg-gradient-to-br ${link.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {link.icon}
                      </div>
                      <h3 className="text-xl font-audiowide text-white mb-2">{link.name}</h3>
                      <p className="text-white/70 text-sm">{link.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-ai-teal/20">
            <p className="text-white/70">
              © 2025 Comunidad AI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
