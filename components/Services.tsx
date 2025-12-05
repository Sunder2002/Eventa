import React, { useState, JSX } from 'react';
import { SERVICES } from '../constants';
import { Star, Camera, MapPin, Palette } from 'lucide-react';

const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ECE3CE" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="18" fill="%233A4D39" text-anchor="middle" dominant-baseline="middle"%3EImage not available%3C/text%3E%3C/svg%3E';

const Services: React.FC = (): JSX.Element => {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImgError = (serviceId: string): void => {
    setFailedImages(prev => new Set(prev).add(serviceId));
  };

  const getImageSrc = (serviceId: string, originalSrc: string): string => {
    return failedImages.has(serviceId) ? FALLBACK_IMAGE : originalSrc;
  };

  return (
    <section id="services" className="py-20 bg-eventa-cream" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-eventa-gold font-sans uppercase tracking-[0.2em] text-sm font-bold mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-eventa-green font-bold mb-6">Creating Perfect Ambiances</h3>
          <div className="w-24 h-1 bg-eventa-gold mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-700 font-light text-lg">
            We specialize in three core pillars of a successful event: breathtaking <strong>Decoration</strong>, timeless <strong>Photography</strong>, and perfect <strong>Venue Selection</strong>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-eventa-gold"
              role="article"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden relative bg-gray-200">
                <div className="absolute inset-0 bg-eventa-dark/20 group-hover:bg-eventa-dark/0 transition-colors z-10"></div>
                <img 
                  src={getImageSrc(service.id, service.image)}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={() => handleImgError(service.id)}
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                 {/* Decorative Icon Background */}
                 <div className="absolute top-0 right-0 -mt-8 mr-6 bg-eventa-gold text-white p-3 rounded-full shadow-md z-20" aria-hidden="true">
                   <Star fill="currentColor" size={24} />
                 </div>

                <h4 className="text-2xl font-serif font-bold text-eventa-green mb-3 group-hover:text-eventa-gold transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-700 font-sans leading-relaxed text-sm mb-4 font-light">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-block text-eventa-green font-bold text-sm uppercase tracking-wider border-b-2 border-transparent group-hover:border-eventa-gold transition-all focus:outline-none focus:text-eventa-gold"
                  aria-label={`Get a quote for ${service.title}`}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Core Offerings Strip */}
        <div className="mt-20 bg-eventa-beige/50 rounded-2xl p-10 border border-eventa-gold/20 shadow-md">
            <div className="text-center mb-10">
                <h4 className="text-3xl font-serif text-eventa-green font-bold">Our Core Services</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4 text-eventa-gold">
                        <Palette size={32} aria-hidden="true" />
                    </div>
                    <h5 className="font-serif text-xl font-bold text-eventa-dark mb-2">Decoration</h5>
                    <p className="text-sm text-gray-700 font-light">Transforming spaces with floral arrangements, lighting, and thematic props.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4 text-eventa-gold">
                        <Camera size={32} aria-hidden="true" />
                    </div>
                    <h5 className="font-serif text-xl font-bold text-eventa-dark mb-2">Photography</h5>
                    <p className="text-sm text-gray-700 font-light">Capturing every emotion and detail with professional cinematic photography.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4 text-eventa-gold">
                        <MapPin size={32} aria-hidden="true" />
                    </div>
                    <h5 className="font-serif text-xl font-bold text-eventa-dark mb-2">Venue Selection</h5>
                    <p className="text-sm text-gray-700 font-light">Finding the perfect location that fits your guest count and budget.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
