import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Camera, MapPin, Palette } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-eventa-green text-eventa-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4 mt-8">
                <div className="relative overflow-hidden rounded-lg shadow-xl h-64 bg-eventa-lightGreen/20">
                   <img 
                     src="/assets/vs1.jpg"
                     alt="Floral event decoration with vibrant flowers" 
                     className="w-full h-full object-cover rounded-lg"
                     loading="lazy"
                   />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-xl h-48 bg-eventa-lightGreen/20">
                   <img 
                     src="/assets/vs2.jpg"
                     alt="Elegant venue setup for weddings" 
                     className="w-full h-full object-cover rounded-lg"
                     loading="lazy"
                   />
                </div>
             </div>
             <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg shadow-xl h-48 bg-eventa-lightGreen/20">
                   <img 
                     src="/assets/vs3.jpg"
                     alt="Professional event photography capturing moments" 
                     className="w-full h-full object-cover rounded-lg"
                     loading="lazy"
                   />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-xl h-64 bg-eventa-lightGreen/20">
                   <img 
                     src="/assets/vs4.jpg"
                     alt="Close-up details of event decoration and setup" 
                     className="w-full h-full object-cover rounded-lg"
                     loading="lazy"
                   />
                </div>
             </div>
          </div>

          {/* Text Content */}
          <div>
             <h2 className="text-eventa-gold font-sans uppercase tracking-widest text-sm font-bold mb-4">Why Choose Eventa?</h2>
             <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
               Turning Your Moments <br/> Into <span className="italic text-eventa-gold">Memories</span>
             </h3>
             <p className="text-eventa-cream/90 text-lg leading-relaxed mb-8 font-sans font-light">
               {COMPANY_INFO.description} We focus on the most visual aspects of your event to ensure it looks and feels spectacular.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/20 hover:border-eventa-gold/30 transition duration-300">
                    <Palette className="text-eventa-gold mb-4" size={32} />
                    <h4 className="font-serif text-xl mb-2 font-bold">Stunning Decor</h4>
                    <p className="text-sm opacity-80">Themes that mesmerize.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/20 hover:border-eventa-gold/30 transition duration-300">
                    <Camera className="text-eventa-gold mb-4" size={32} />
                    <h4 className="font-serif text-xl mb-2 font-bold">Best Photos</h4>
                    <p className="text-sm opacity-80">Memories captured forever.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/20 hover:border-eventa-gold/30 transition duration-300">
                    <MapPin className="text-eventa-gold mb-4" size={32} />
                    <h4 className="font-serif text-xl mb-2 font-bold">Top Venues</h4>
                    <p className="text-sm opacity-80">The perfect location.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
