
import { partnersImgs } from '@/data/partners';

const PartnersCarousel = () => {
  return (
    <div className="w-full bg-ai-teal py-6 overflow-hidden">
      <div className="flex animate-[slide_20s_linear_infinite]">
        {[...partnersImgs, ...partnersImgs].map((partner, index) => (
          <div 
            key={index} 
            className="mx-10 flex-shrink-0 flex items-center justify-center"
          >
            <img 
              src={`/partners/${partner}`} 
              alt={partner.replace(/\.[^/.]+$/, "")}
              className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
