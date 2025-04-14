import { Blocks, MessageCircleHeart, Handshake, Ticket } from "lucide-react";

export const volunteerRoles = [
    {
      title: "Tribu Builders",
      description:
        "Si eres una persona apasionada por la inteligencia artificial, con habilidades de liderazgo estratégico, organización y gestión de relaciones clave, este rol es para ti. Diseñarás la visión de AI Connect, coordinarás su ejecución anual y supervisarás el crecimiento y el impacto de sus iniciativas.",
      icon: <Blocks className="w-14 h-14" />,
    },
    {
      title: "Tribu Marketing & Growth",
      description:
        "¿Eres una persona creativa, estratégica y apasionada por el marketing y el crecimiento de comunidades? En esta tribu serás clave en la creación de contenido, análisis de métricas y diseño de estrategias para aumentar el engagement. Podrás ser contribuir con roles como Community Manager, Marketing Analyst o Content Creator.",
      icon: <MessageCircleHeart className="w-14 h-14" />,
    },
    {
      title: "Tribu Alianzas & PR",
      description:
        "¿Eres una persona estratégica, con habilidades para construir relaciones en el ecosistema de AI? En esta tribu serás clave para identificar alianzas, diseñar propuestas de valor y representar a AI Connect en eventos externos. Contribuirás en la creación de directorios de contactos y en actividades colaborativas con aliados clave.",
      icon: <Handshake className="w-14 h-14" />,
    },
    {
      title: "Tribu Eventos & Comunidad",
      description:
        "En esta tribu serás responsable de crear un cronograma anual de eventos, gestionar la logística y coordinación con proveedores, y desarrollar manuales operativos detallados. También innovarás en formatos de eventos e implementarás encuestas de satisfacción para mejorar continuamente la experiencia.",
      icon: <Ticket className="w-14 h-14" />,
    },
  ];