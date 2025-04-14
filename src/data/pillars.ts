import { Users, Rocket, BookOpen, Briefcase } from "lucide-react";

export const pillarsData = {
  comunidad: {
    title: "Comunidad",
    description:
      "Creamos conexiones auténticas y espacios de colaboración donde las ideas y el talento se unen para impulsar el impacto colectivo.",
    leaders: [
      { name: "Cristian Gomez", role: "CEO @ Aicon", photo: "cristiangomez.avif", url: "https://www.linkedin.com/in/cristiangl16j/"},
      { name: "Ronald Barzola", role: "Innovation Lead @ Scale", photo: "ronaldbarzola.avif", url: "https://www.linkedin.com/in/ronaldbarzola/" },
    ],
    icon: Users,
  },
  startups: {
    title: "Startups",
    description:
      "Apoyamos la innovación y el emprendimiento, ayudando a startups a escalar sus ideas y liderar el futuro de la inteligencia artificial.",
    leaders: [
      { name: "Cristian Vega", role: "CTO @ Talently", photo: "cristianvega.avif", url: "" },
      { name: "Sebastián Burgos", role: "CTO @ Preauth", photo: "sebastianburgos.avif", url: "" },
      { name: "Carlos Effio", role: "CEO @ Udocz", photo: "carloseffio.avif", url: "" },
      { name: "Billy Caballero", role: "CTO @ Hapi", photo: "billycaballero.avif", url: "" },
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
        photo: "arturodeza.avif", url: "" 
      },
      {
        name: "Aurea Soriano",
        role: "PhD. Computer Science, Universidade de São Paulo",
        photo: "aureasoriano.avif", url: "" 
      },
    ],
    icon: BookOpen,
  },
  corporativo: {
    title: "Corporativo",
    description:
      "Colaboramos con empresas para integrar la inteligencia artificial en sus estrategias, potenciando su competitividad y alcance global.",
    leaders: [
      { name: "Rodrigo Osorio", role: "AI Lead @ Entel", photo: "rodrigoosorio.avif", url: ""  },
      { name: "Misael Lazo", role: "Data & AI Strategy @ Pacifico Seguros", photo: "misaellazo.avif", url: ""  },
      { name: "Moshe Ojeda", role: "AI Lead @ Yape", photo: "mosheojeda.avif", url: ""  },
      { name: "Gustavo Santillán", role: "PM @ Crehana", photo: "gustavosantillan.avif", url: ""  },
    ],
    icon: Briefcase,
  },
};
