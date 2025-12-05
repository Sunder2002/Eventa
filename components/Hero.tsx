import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")', // Elegant wedding/event setup
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-eventa-cream/40 via-transparent to-eventa-green/90"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-eventa-gold/20 text-eventa-dark backdrop-blur-sm border border-eventa-gold/40 text-xs tracking-[0.2em] uppercase mb-6 font-bold animate-fade-in-up">
          Hyderabad's Premier Event Planner
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-eventa-dark mb-6 leading-tight drop-shadow-sm animate-fade-in-up delay-100">
          We Curate <span className="text-eventa-green italic">Timeless</span> <br/> Celebrations
        </h1>
        
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-eventa-dark/80 font-sans mb-10 animate-fade-in-up delay-200">
          From intimate gatherings to grand weddings, Eventa transforms your vision into flawless reality in Hyderabad & Telangana.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
          <a 
            href="#contact" 
            className="group bg-eventa-green text-eventa-cream px-8 py-4 rounded-none border border-eventa-green hover:bg-transparent hover:text-eventa-green transition-all duration-300 font-serif text-lg flex items-center justify-center gap-2"
          >
            Plan My Event
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
          </a>
          <a 
            href="#services" 
            className="group bg-transparent text-eventa-green px-8 py-4 rounded-none border border-eventa-green hover:bg-eventa-green hover:text-eventa-cream transition-all duration-300 font-serif text-lg"
          >
            Explore Services
          </a>
        </div>
      </div>
      
      {/* Decorative Wave at bottom */}
      <div className="absolute bottom-0 w-full leading-none text-eventa-cream">
         <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;