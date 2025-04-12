
import React, { useEffect, useRef } from 'react';
import PartnersCarousel from './PartnersCarousel';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars: Star[] = [];
    class Star {
      x: number;
      y: number;
      size: number;
      velocity: number;
      brightness: number;
      twinkleSpeed: number;
      twinkleDirection: boolean;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5;
        this.velocity = Math.random() * 0.05;
        this.brightness = Math.random() * 0.5 + 0.5; 
        this.twinkleSpeed = Math.random() * 0.03 + 0.01;
        this.twinkleDirection = Math.random() > 0.5; 
      }

      update() {
        this.y += this.velocity;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
        
        // Twinkle effect
        if (this.twinkleDirection) {
          this.brightness += this.twinkleSpeed;
          if (this.brightness >= 1) {
            this.brightness = 1;
            this.twinkleDirection = false;
          }
        } else {
          this.brightness -= this.twinkleSpeed;
          if (this.brightness <= 0.5) {
            this.brightness = 0.5;
            this.twinkleDirection = true;
          }
        }
      }

      draw() {
        if (!ctx) return;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const earthImage = new Image();
    earthImage.src = "globe.avif" 

    const initStars = () => {
      stars.length = 0; 

      const numStars = Math.floor((canvas.width * canvas.height) / 5000);
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };

    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      initStars();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const animate = () => {
      ctx.fillStyle = '#000D18'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      stars.forEach(star => {
        star.update();
        star.draw();
      });
    
      const earthRadius = Math.min(canvas.width, canvas.height) * 0.30;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
    
      ctx.filter = 'brightness(50%)';
      if (earthImage.complete) {
        ctx.drawImage(
          earthImage,
          centerX - earthRadius,
          centerY - earthRadius,
          earthRadius * 2,
          earthRadius * 2
        );
      }
      ctx.filter = 'none';
    
      requestAnimationFrame(animate);
    };

    earthImage.onload = animate;

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="hero" className="relative">
      {/* Canvas for stars and Earth animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-[100vh] z-0"
      />
      
      {/* Hero content */}
      <div className="relative h-[100vh] flex items-center justify-center z-10">
        <div className="flex flex-col items-center text-center px-4">
          <img src="/logo.avif" alt="AI CONNECT" className="w-[700px]" />
          <p className="text-lg md:text-xl lg:text-2xl font-audiowide mb-8 px-2 max-w-lg lg:max-w-2xl mx-auto">
            Conectamos, aprendemos y colaboramos para construir el futuro de la IA
          </p>
          
          <a 
            href="https://beacons.ai/aiconnectlatam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-ai-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-colors shadow-lg"
          >
            Únete a la comunidad
          </a>
        </div>
      </div>
      
      {/* Partners carousel */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <PartnersCarousel />
      </div>
    </section>
  );
};

export default Hero;
