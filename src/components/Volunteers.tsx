
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Blocks, MessageCircleHeart, Handshake, Ticket } from "lucide-react";

const Volunteers = () => {
  const volunteerRoles = [
    {
      title: "Tribu Builders",
      description:
        "Si eres una persona apasionada por la inteligencia artificial, con habilidades de liderazgo estratégico, organización y gestión de relaciones clave, este rol es para ti. Diseñarás la visión de AI Connect, coordinarás su ejecución anual y supervisarás el crecimiento y el impacto de sus iniciativas.",
      icon: <Blocks className="w-10 h-10 text-ai-teal" />,
    },
    {
      title: "Tribu Marketing & Growth",
      description:
        "¿Eres una persona creativa, estratégica y apasionada por el marketing y el crecimiento de comunidades? En esta tribu serás clave en la creación de contenido, análisis de métricas y diseño de estrategias para aumentar el engagement. Podrás ser contribuir con roles como Community Manager, Marketing Analyst o Content Creator.",
      icon: <MessageCircleHeart className="w-10 h-10 text-ai-teal" />,
    },
    {
      title: "Tribu Alianzas & PR",
      description:
        "¿Eres una persona estratégica, con habilidades para construir relaciones en el ecosistema de AI? En esta tribu serás clave para identificar alianzas, diseñar propuestas de valor y representar a AI Connect en eventos externos. Contribuirás en la creación de directorios de contactos y en actividades colaborativas con aliados clave.",
      icon: <Handshake className="w-10 h-10 text-ai-teal" />,
    },
    {
      title: "Tribu Eventos & Comunidad",
      description:
        "En esta tribu serás responsable de crear un cronograma anual de eventos, gestionar la logística y coordinación con proveedores, y desarrollar manuales operativos detallados. También innovarás en formatos de eventos e implementarás encuestas de satisfacción para mejorar continuamente la experiencia.",
      icon: <Ticket className="w-10 h-10 text-ai-teal" />,
    },
  ];

  return (
    <section id="volunteers" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-ai-purple">Voluntarios</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
            ¿Estás listo para hacer una diferencia y aportar tu energía a proyectos innovadores? 
            Únete como voluntario de AI Connect, aprende junto a un equipo eficiente y sé parte 
            de una comunidad dinámica que impulsa el cambio.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-white/80">
            ¡Esta es tu oportunidad para crecer y contribuir a algo increíble!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {volunteerRoles.map((role, index) => (
            <Card key={index} className="bg-ai-blue border-none hover:shadow-lg hover:shadow-ai-teal/20 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{role.icon}</div>
                <CardTitle className="text-xl text-white">{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-sm">{role.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-ai-teal hover:bg-ai-teal/80 text-white">
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
