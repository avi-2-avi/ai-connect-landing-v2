
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { volunteerRoles } from "@/data/volunteers";

const Volunteers = () => {
  return (
    <section id="volunteers" className="py-20">
      <div className="px-4 md:px-12 lg:px-24 sm:container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Programa de <span className="text-ai-teal">Voluntarios</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
            ¿Estás listo para hacer una diferencia y aportar tu energía a proyectos innovadores? 
          </p>
          <p className="text-lg md:text-xl max-w-3xl mt-4 mx-auto text-white/80">
            Únete como voluntario de AI Connect, aprende junto a un equipo eficiente y sé parte 
            de una comunidad dinámica que impulsa el cambio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {volunteerRoles.map((role, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: role.gradient,
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
              }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                <div className="text-white/20 w-full h-full flex items-center justify-center scale-150">
                  {role.icon}
                </div>
              </div>
              <CardHeader className="pb-2 relative z-10">
                <div className="text-white bg-ai-dark/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                  {role.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-white">{role.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-white text-base" 
                  dangerouslySetInnerHTML={{ __html: role.highlightedDescription }}
                />
              </CardContent>
              <CardFooter className="relative z-10">
                <Button 
                  className="bg-white break-works hover:bg-white/90 text-ai-dark/80 font-bold py-3 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {role.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteers;
