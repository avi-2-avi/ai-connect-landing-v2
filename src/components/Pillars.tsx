
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LeaderCard from './LeaderCard';
import { pillarsData } from '@/data/pillars';

const Pillars = () => {
  return (
    <section id="pillars" className="py-20">
      <div className="px-4 sm:container mx-auto">
        <h2 className="text-3xl md:text-4xl font-audiowide mb-5 text-center">
          Nuestros <span className="text-ai-teal">Pilares</span>
        </h2>
        
        <p className="text-lg md:text-xl text-center max-w-2xl text-white/80 mx-auto mb-12">
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
                  className="flex items-center justify-center gap-2 py-3 px-4 data-[state=active]:bg-ai-purple/10 data-[state=active]:text-ai-purple border border-ai-purple/30 rounded-lg"
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
                <h3 className="text-3xl font-audiowide mb-4 text-ai-purple">
                  {value.title}
                </h3>
                <p className="max-w-2xl text-lg mx-auto">
                  {value.description}
                </p>
              </div>
              
              <div className={`grid grid-cols-1 ${value.leaders.length % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8 max-w-6xl mx-auto`}>
                {value.leaders.map((leader, idx) => (
                  <LeaderCard 
                    key={idx}
                    name={leader.name}
                    role={leader.role}
                    imageSrc={`/leaders/${leader.photo}`}
                    url={leader.url}
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
