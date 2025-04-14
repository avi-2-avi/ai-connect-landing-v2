
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface LeaderCardProps {
  name: string;
  role: string;
  imageSrc?: string;
}

const LeaderCard = ({ name, role, imageSrc }: LeaderCardProps) => {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-ai-dark to-ai-blue/70 border border-ai-purple/20 rounded-lg transition-transform hover:-translate-y-2 duration-300 hover:shadow-lg">
      <Avatar className="w-32 h-32 mb-4 grayscale">
        {imageSrc ? (
          <AvatarImage src={imageSrc} alt={name} className="object-cover" />
        ) : (
          <AvatarFallback className="text-3xl font-audiowide bg-ai-blue text-white">
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
      <h3 className="text-xl font-audiowide text-white mb-1">{name}</h3>
      <p className="text-ai-teal font-medium text-center">{role}</p>
    </div>
  );
};

export default LeaderCard;
