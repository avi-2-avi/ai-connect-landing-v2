
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { volunteerRoles } from "@/data/volunteers";

const Volunteers = () => {
  return (
    <section id="volunteers" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteerRoles.map((role, index) => (
            <Card key={index} className="bg-gradient-to-br from-ai-blue to-ai-dark border-ai-purple/20 hover:shadow-lg hover:shadow-ai-teal/20 transition-all duration-300">
              <CardHeader className="pb-2 flex items-center justify-center text-ai-teal">
                <div className="mb-2">{role.icon}</div>
                <CardTitle className="text-2xl">{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-sm">{role.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-ai-teal/80 hover:bg-ai-teal/70 text-white">
                  ¡Me interesa unirme!
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
