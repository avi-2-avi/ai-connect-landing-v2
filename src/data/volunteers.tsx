
import { Blocks, MessageCircleHeart, Handshake, Ticket } from "lucide-react";

export const volunteerRoles = [
    {
      title: "Tribu Builders",
      description:
        "Si eres una persona apasionada por la inteligencia artificial, con habilidades de liderazgo estratégico, organización y gestión de relaciones clave, este rol es para ti. Diseñarás la visión de AI Connect, coordinarás su ejecución anual y supervisarás el crecimiento y el impacto de sus iniciativas.",
      highlightedDescription:
        "Persona <strong>apasionada</strong> por la IA con <strong>liderazgo estratégico</strong>. Diseñarás la <strong>visión</strong> de AI Connect, coordinarás su <strong>ejecución</strong> y supervisarás su <strong>crecimiento</strong>.",
      icon: <Blocks className="w-14 h-14" />,
      buttonText: "¡Quiero liderar la visión!",
      gradient: "linear-gradient(135deg, #002A46 0%, #0062A3 100%)",
    },
    {
      title: "Tribu Marketing & Growth",
      description:
        "¿Eres una persona creativa, estratégica y apasionada por el marketing y el crecimiento de comunidades? En esta tribu serás clave en la creación de contenido, análisis de métricas y diseño de estrategias para aumentar el engagement. Podrás ser contribuir con roles como Community Manager, Marketing Analyst o Content Creator.",
      highlightedDescription:
        "Persona <strong>creativa</strong> y <strong>estratégica</strong> apasionada por el <strong>marketing</strong>. Serás clave en <strong>creación de contenido</strong>, <strong>análisis de métricas</strong> y <strong>estrategias de engagement</strong>.",
      icon: <MessageCircleHeart className="w-14 h-14" />,
      buttonText: "¡Quiero impulsar el crecimiento!",
      gradient: "linear-gradient(135deg, #57BBB3 0%, #37837D 100%)",
    },
    {
      title: "Tribu Alianzas & PR",
      description:
        "¿Eres una persona estratégica, con habilidades para construir relaciones en el ecosistema de AI? En esta tribu serás clave para identificar alianzas, diseñar propuestas de valor y representar a AI Connect en eventos externos. Contribuirás en la creación de directorios de contactos y en actividades colaborativas con aliados clave.",
      highlightedDescription:
        "Persona <strong>estratégica</strong> que sabe <strong>construir relaciones</strong>. Serás clave para <strong>identificar alianzas</strong>, <strong>diseñar propuestas</strong> y <strong>representar</strong> a AI Connect en <strong>eventos externos</strong>.",
      icon: <Handshake className="w-14 h-14" />,
      buttonText: "¡Quiero crear alianzas!",
      gradient: "linear-gradient(135deg, #C970F5 0%, #9747B9 100%)",
    },
    {
      title: "Tribu Eventos & Comunidad",
      description:
        "En esta tribu serás responsable de crear un cronograma anual de eventos, gestionar la logística y coordinación con proveedores, y desarrollar manuales operativos detallados. También innovarás en formatos de eventos e implementarás encuestas de satisfacción para mejorar continuamente la experiencia.",
      highlightedDescription:
        "Serás responsable de <strong>crear cronogramas</strong>, <strong>gestionar logística</strong> y <strong>coordinar</strong> con proveedores. <strong>Innovarás</strong> en formatos de eventos y <strong>mejorarás</strong> continuamente la experiencia.",
      icon: <Ticket className="w-14 h-14" />,
      buttonText: "¡Quiero organizar eventos geniales!",
      gradient: "linear-gradient(135deg, #5F7ADB 0%, #354291 100%)",
    },
  ];
