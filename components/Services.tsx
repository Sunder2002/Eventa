import React from 'react';
import { SERVICES, CORE_OFFERINGS } from '../constants';
import { Star, CheckCircle2, Camera, MapPin, Palette } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-eventa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-eventa-gold font-sans uppercase tracking-[0.2em] text-sm font-bold mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-eventa-green font-bold mb-6">Creating Perfect Ambiances</h3>
          <div className="w-24 h-1 bg-eventa-gold mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            We specialize in three core pillars of a successful event: breathtaking <strong>Decoration</strong>, timeless <strong>Photography</strong>, and perfect <strong>Venue Selection</strong>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-eventa-dark/20 group-hover:bg-eventa-dark/0 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                 {/* Decorative Icon Background */}
                 <div className="absolute top-0 right-0 -mt-8 mr-6 bg-eventa-gold text-white p-3 rounded-full shadow-md z-20">
                   <Star fill="currentColor" size={24} />
                 </div>

                <h4 className="text-2xl font-serif font-bold text-eventa-green mb-3 group-hover:text-eventa-gold transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 font-sans leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                <a href="#contact" className="inline-block text-eventa-green font-bold text-sm uppercase tracking-wider border-b-2 border-transparent group-hover:border-eventa-gold transition-all">
                  Get a Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Core Offerings Strip */}
        <div className="mt-20 bg-eventa-beige/50 rounded-2xl p-10 border border-eventa-gold/20">
            <div className="text-center mb-10">
                <h4 className="text-3xl font-serif text-eventa-green">Our Core Services</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4 text-eventa-gold">
                        <Palette size={32} />
                    </div>
                    <h5 className="font-serif text-xl font-bold text-eventa-dark mb-2">Decoration</h5>
                    <p className="text-sm text-gray-600">Transforming spaces with floral arrangements, lighting, and thematic props.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4 text-eventa-gold">
                        <Camera size={32} />
                    </div>
                    <h5 className="font-serif text-xl font-bold text-eventa-dark mb-2">Photography</h5>
                    <p className="text-sm text-gray-600">Capturing every emotion and detail with professional cinematic photography.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4 text-eventa-gold">
                        <MapPin size={32} />
                    </div>
                    <h5 className="font-serif text-xl font-bold text-eventa-dark mb-2">Venue Selection</h5>
                    <p className="text-sm text-gray-600">Finding the perfect location that fits your guest count and budget.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
