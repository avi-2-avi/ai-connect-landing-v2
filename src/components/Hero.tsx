
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-4 text-soft-purple">
        Hi, I'm Your Name
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Software Developer | Creative Problem Solver
      </p>
      <a 
        href="#about" 
        className="inline-flex items-center bg-soft-blue text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
      >
        Explore More 
        <ArrowDown className="ml-2" />
      </a>
    </section>
  );
};

export default Hero;
