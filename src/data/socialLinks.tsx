import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

export const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-10 h-10" />,
      url: 'https://chat.whatsapp.com/HyBszYrNVoNB3ez7QrCR4H',
      color: 'from-green-600 to-green-400',
      description: 'Forma parte de nuestra comunidad activa'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-10 h-10" />,
      url: 'https://www.instagram.com/aiconnectlatam/',
      color: 'from-pink-600 to-purple-400',
      description: 'Síguenos para descubrir contenido exclusivo'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-10 h-10" />,
      url: 'https://www.linkedin.com/company/aiconnectlatam/',
      color: 'from-blue-700 to-blue-500',
      description: 'Síguenos para acceder a contenido profesional'
    },
  ];