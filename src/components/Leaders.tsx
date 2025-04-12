
import React, { useState } from 'react';

interface Leader {
  id: number;
  name: string;
  company: string;
  image: string;
  category: 'community' | 'startups' | 'academia' | 'corporativo';
}

const Leaders = () => {
  const [activeCategory, setActiveCategory] = useState<'community' | 'startups' | 'academia' | 'corporativo'>('community');
  
  const leaders: Leader[] = [
    // Community leaders
    {
      id: 1,
      name: "Carlos Rodríguez",
      company: "Comunidad AI - Fundador",
      image: "https://i.imgur.com/Q9MSTpP.jpg",
      category: "community"
    },
    {
      id: 2,
      name: "Ana Gómez",
      company: "Comunidad AI - Co-fundadora",
      image: "https://i.imgur.com/cBMu8e3.jpg",
      category: "community"
    },
    {
      id: 3,
      name: "David Torres",
      company: "AI Labs Perú",
      image: "https://i.imgur.com/PyMXmWz.jpg",
      category: "community"
    },
    
    // Startups leaders
    {
      id: 4,
      name: "Laura Mendoza",
      company: "AI Health Tech",
      image: "https://i.imgur.com/Ufbm827.jpg",
      category: "startups"
    },
    {
      id: 5,
      name: "Roberto Díaz",
      company: "NLP Solutions",
      image: "https://i.imgur.com/oK43hXu.jpg",
      category: "startups"
    },
    {
      id: 6,
      name: "Patricia Li",
      company: "AgriTech AI",
      image: "https://i.imgur.com/xnNdQWk.jpg",
      category: "startups"
    },
    
    // Academia leaders
    {
      id: 7,
      name: "Dr. Felipe González",
      company: "Universidad Nacional de San Marcos",
      image: "https://i.imgur.com/4vhi9bv.jpg",
      category: "academia"
    },
    {
      id: 8,
      name: "Dra. Mariana Vargas",
      company: "UTEC",
      image: "https://i.imgur.com/31Y4Gq9.jpg",
      category: "academia"
    },
    {
      id: 9,
      name: "Dr. Javier Acosta",
      company: "PUCP",
      image: "https://i.imgur.com/3WeAyxW.jpg",
      category: "academia"
    },
    
    // Corporativo leaders
    {
      id: 10,
      name: "Miguel Sánchez",
      company: "BCP - Head of AI",
      image: "https://i.imgur.com/gyRhHX0.jpg",
      category: "corporativo"
    },
    {
      id: 11,
      name: "Gabriela Fuentes",
      company: "Interbank - Data Science Lead",
      image: "https://i.imgur.com/bWrBSz0.jpg",
      category: "corporativo"
    },
    {
      id: 12,
      name: "Raúl Paredes",
      company: "Alicorp - Digital Transformation",
      image: "https://i.imgur.com/IkurVxc.jpg",
      category: "corporativo"
    }
  ];

  const filteredLeaders = leaders.filter(leader => leader.category === activeCategory);
  
  const categories = [
    { id: 'community', label: 'Community' },
    { id: 'startups', label: 'Startups' },
    { id: 'academia', label: 'Academia' },
    { id: 'corporativo', label: 'Corporativo' }
  ] as const;

  return (
    <section id="leaders" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-audiowide mb-12 text-center">
          Nuestros <span className="text-ai-teal">AI Leaders</span>
        </h2>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 m-2 rounded-full transition-all ${
                activeCategory === category.id 
                  ? 'bg-ai-teal text-white' 
                  : 'bg-ai-dark/50 text-white/70 hover:bg-ai-dark/70'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Leaders grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredLeaders.map((leader) => (
            <div 
              key={leader.id}
              className="bg-ai-dark/70 border border-ai-teal/20 rounded-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-60 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-audiowide text-ai-teal mb-2">{leader.name}</h3>
                <p className="text-white/80">{leader.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaders;
