import { Users, Rocket, BookOpen, Briefcase } from "lucide-react";

export const pillarsData = {
  comunidad: {
    title: "Comunidad",
    description:
      "Creamos conexiones auténticas y espacios de colaboración donde las ideas y el talento se unen para impulsar el impacto colectivo.",
    leaders: [
      { name: "Cristian Gomez", role: "CEO @ Aicon & Director @ AI Connect", photo: "cristiangomez.avif", url: "https://www.linkedin.com/in/cristiangl16j/"},
      { name: "Ronald Barzola", role: "Impact & Innovation Director @ Scale Incubator & Subdirector @ AI Connect", photo: "ronaldbarzola.avif", url: "https://www.linkedin.com/in/ronaldbarzola/" },
      { name: "Cristina Vidal", role: "General Coordinator @ AI Connect", photo: "cristinavidal.avif", url: "https://www.linkedin.com/in/avi2avi/"},
      { name: "Jordy Suarez", role: "Product Owner @ AI Connect", photo: "jordysuarez.avif", url: "https://www.linkedin.com/in/jordy-suarez29/" },
    ],
    icon: Users,
  },
  startups: {
    title: "Startups",
    description:
      "Apoyamos la innovación y el emprendimiento, ayudando a startups a escalar sus ideas y liderar el futuro de la inteligencia artificial.",
    leaders: [
      { name: "Cristian Vega", role: "CTO @ Talently", photo: "cristianvega.avif", url: "https://www.linkedin.com/in/cristianvegaperu/" },
      { name: "Sebastián Burgos", role: "CTO @ Preauth", photo: "sebastianburgos.avif", url: "https://www.linkedin.com/in/sebastian-burgos-diaz/" },
      { name: "Carlos Effio", role: "CEO @ Udocz", photo: "carloseffio.avif", url: "https://www.linkedin.com/in/carlos-effio-565940119/" },
      { name: "Billy Caballero", role: "CTO @ Hapi", photo: "billycaballero.avif", url: "https://www.linkedin.com/in/billycaballero/" },
    ],
    icon: Rocket,
  },
  academia: {
    title: "Academia",
    description:
      "Fomentamos el aprendizaje continuo y la investigación, conectando a estudiantes y académicos con oportunidades que transforman conocimiento en acción.",
    leaders: [
      {
        name: "Arturo Deza",
        role: "Co-Founder & CEO @ Artificio",
        photo: "arturodeza.avif", url: "https://www.linkedin.com/in/arturo-deza-9b12324a/" 
      },
      {
        name: "Aurea Soriano",
        role: "AI Senior Research Scientist and Professor @ UTEC",
        photo: "aureasoriano.avif", url: "https://www.linkedin.com/in/aureasoriano/" 
      },
    ],
    icon: BookOpen,
  },
  corporativo: {
    title: "Corporativo",
    description:
      "Colaboramos con empresas para integrar la inteligencia artificial en sus estrategias, potenciando su competitividad y alcance global.",
    leaders: [
      { name: "Rodrigo Osorio", role: "AI Lead @ Entel", photo: "rodrigoosorio.avif", url: "https://www.linkedin.com/in/rodrigo-osorio-814381152/"  },
      { name: "Misael Lazo", role: "Data & AI Strategy @ Pacifico Seguros", photo: "misaellazo.avif", url: "https://www.linkedin.com/in/misaellazo/"  },
      { name: "Moshe Ojeda", role: "AI Lead @ Yape", photo: "mosheojeda.avif", url: "https://www.linkedin.com/in/moshe-ojeda/"  },
      { name: "Gustavo Santillán", role: "Group Product Manager @ Crehana", photo: "gustavosantillan.avif", url: "https://www.linkedin.com/in/gustavo-santillan-gordillo/"  },
    ],
    icon: Briefcase,
  },
};
