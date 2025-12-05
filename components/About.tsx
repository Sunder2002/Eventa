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
                <img src="https://images.unsplash.com/photo-1519225468707-1d8986c75c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Floral Decoration" className="rounded-lg shadow-xl object-cover h-64 w-full" />
                <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Venue Hall" className="rounded-lg shadow-xl object-cover h-48 w-full" />
             </div>
             <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1520854221256-17451cc330e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Event Photography" className="rounded-lg shadow-xl object-cover h-48 w-full" />
                <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Decor Details" className="rounded-lg shadow-xl object-cover h-64 w-full" />
             </div>
          </div>

          {/* Text Content */}
          <div>
             <h2 className="text-eventa-gold font-sans uppercase tracking-widest text-sm font-bold mb-4">Why Choose Eventa?</h2>
             <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
               Turning Your Moments <br/> Into <span className="italic text-eventa-gold">Memories</span>
             </h3>
             <p className="text-eventa-cream/80 text-lg leading-relaxed mb-8 font-sans font-light">
               {COMPANY_INFO.description} We focus on the most visual aspects of your event to ensure it looks and feels spectacular.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/20 transition duration-300">
                    <Palette className="text-eventa-gold mb-4" size={32} />
                    <h4 className="font-serif text-xl mb-2">Stunning Decor</h4>
                    <p className="text-sm opacity-70">Themes that mesmerize.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/20 transition duration-300">
                    <Camera className="text-eventa-gold mb-4" size={32} />
                    <h4 className="font-serif text-xl mb-2">Best Photos</h4>
                    <p className="text-sm opacity-70">Memories captured forever.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/20 transition duration-300">
                    <MapPin className="text-eventa-gold mb-4" size={32} />
                    <h4 className="font-serif text-xl mb-2">Top Venues</h4>
                    <p className="text-sm opacity-70">The perfect location.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
