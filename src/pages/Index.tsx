
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-charcoal-700 antialiased">
      <div className="container mx-auto px-4 max-w-6xl">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
