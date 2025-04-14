
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LeaderCard from './LeaderCard';
import { Users, Rocket, BookOpen, Briefcase } from 'lucide-react';

// Placeholder data for leaders
const pillarsData = {
  comunidad: {
    title: "Comunidad",
    description: "Creamos conexiones auténticas y espacios de colaboración donde las ideas y el talento se unen para impulsar el impacto colectivo.",
    leaders: [
      { name: "Ana García", role: "Community Lead @ AI Connect" },
      { name: "Carlos Méndez", role: "Partnerships Director" }
    ],
    icon: Users
  },
  startups: {
    title: "Startups",
    description: "Apoyamos la innovación y el emprendimiento, ayudando a startups a escalar sus ideas y liderar el futuro de la inteligencia artificial.",
    leaders: [
      { name: "Sofía Torres", role: "CTO @ Aicon" },
      { name: "Miguel Ríos", role: "Founder & CEO @ AI Solutions" },
      { name: "Laura Blanco", role: "Startup Mentor" }
    ],
    icon: Rocket
  },
  academia: {
    title: "Academia",
    description: "Fomentamos el aprendizaje continuo y la investigación, conectando a estudiantes y académicos con oportunidades que transforman conocimiento en acción.",
    leaders: [
      { name: "Dr. Javier Ruiz", role: "PhD. Neuroscience, Universidad Nacional" },
      { name: "Dra. Lucía Vega", role: "AI Research Lead, Instituto Tecnológico" }
    ],
    icon: BookOpen
  },
  corporativo: {
    title: "Corporativo",
    description: "Colaboramos con empresas para integrar la inteligencia artificial en sus estrategias, potenciando su competitividad y alcance global.",
    leaders: [
      { name: "Roberto Sánchez", role: "Head of AI @ Global Corp" },
      { name: "Patricia Flores", role: "Digital Transformation Director" },
      { name: "Alejandro Díaz", role: "Enterprise AI Consultant" }
    ],
    icon: Briefcase
  }
};

const Pillars = () => {
  return (
    <section id="pillars" className="py-20 bg-gradient-to-b from-ai-dark to-ai-blue/90">
      <div className="px-4 sm:container mx-auto">
        <h2 className="text-3xl md:text-4xl font-audiowide mb-5 text-center">
          Nuestros <span className="text-ai-teal">Pilares</span>
        </h2>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Descubre nuestros pilares estratégicos, áreas clave de impacto lideradas por expertos 
          apasionados que inspiran y guían el crecimiento de nuestra comunidad.
        </p>
        
        <Tabs defaultValue="comunidad" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 bg-transparent h-auto p-0 mb-8">
            {Object.entries(pillarsData).map(([key, value]) => {
              const Icon = value.icon;
              return (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="flex items-center justify-center gap-2 py-3 px-4 data-[state=active]:bg-ai-teal/20 data-[state=active]:text-ai-teal border border-ai-teal/30 rounded-lg"
                >
                  <Icon className="w-5 h-5" />
                  <span>{value.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {Object.entries(pillarsData).map(([key, value]) => (
            <TabsContent 
              key={key} 
              value={key} 
              className="mt-6 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl font-audiowide mb-4 text-ai-teal">
                  {value.title}
                </h3>
                <p className="max-w-3xl mx-auto">
                  {value.description}
                </p>
              </div>
              
              <div className={`grid grid-cols-1 ${value.leaders.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8 max-w-6xl mx-auto`}>
                {value.leaders.map((leader, idx) => (
                  <LeaderCard 
                    key={idx}
                    name={leader.name}
                    role={leader.role}
                    // Using placeholder images - you can replace with real images later
                    imageSrc={`https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=300&h=300&q=80`}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Pillars;
