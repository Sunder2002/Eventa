import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-eventa-green font-serif text-4xl md:text-5xl font-bold mb-4">Let's Plan Your Event</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to turn your vision into reality? We are available for Decoration, Photography, and Venue Selection services.
          </p>
        </div>

        <div className="bg-eventa-beige/30 p-8 md:p-12 rounded-2xl border border-eventa-gold/30 shadow-lg">
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Info Column */}
                <div className="space-y-8">
                    {/* Address - Clickable */}
                    <div className="flex items-start gap-4 group">
                       <div className="bg-eventa-gold/20 p-3 rounded-full text-eventa-green shrink-0 group-hover:bg-eventa-gold group-hover:text-white transition-colors">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-eventa-green mb-1 uppercase text-sm tracking-wider">Visit Our Office</h4>
                          <p className="text-gray-700 font-sans leading-relaxed text-sm mb-2">
                            {COMPANY_INFO.address}
                          </p>
                          <a 
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-eventa-gold hover:underline text-sm font-bold"
                          >
                            Open in Google Maps <ExternalLink size={12} className="ml-1"/>
                          </a>
                       </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 group">
                       <div className="bg-eventa-gold/20 p-3 rounded-full text-eventa-green shrink-0 group-hover:bg-eventa-gold group-hover:text-white transition-colors">
                          <Mail size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-eventa-green mb-1 uppercase text-sm tracking-wider">Email Us</h4>
                          <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-700 hover:text-eventa-gold transition-colors block break-all font-sans">
                            {COMPANY_INFO.email}
                          </a>
                       </div>
                    </div>
                    
                    {/* Instagram */}
                     <div className="flex items-start gap-4 group">
                       <div className="bg-eventa-gold/20 p-3 rounded-full text-eventa-green shrink-0 group-hover:bg-eventa-gold group-hover:text-white transition-colors">
                          <Instagram size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-eventa-green mb-1 uppercase text-sm tracking-wider">Follow Our Work</h4>
                          <a href="#" className="text-gray-700 hover:text-eventa-gold transition-colors font-sans">
                            {COMPANY_INFO.instagram}
                          </a>
                       </div>
                    </div>
                </div>

                {/* Action Buttons Column */}
                <div className="flex flex-col gap-4">
                    <div className="text-center mb-4">
                        <h4 className="font-serif text-2xl text-eventa-green italic">Contact Us Now</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">For Immediate Assistance</p>
                    </div>
                    
                    {/* Phone Buttons */}
                    {COMPANY_INFO.phones.map((phone, idx) => (
                        <a 
                            key={idx}
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="group bg-eventa-green hover:bg-eventa-dark text-white px-6 py-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-between"
                        >
                            <span className="flex items-center gap-3">
                                <Phone size={20} className="fill-current" />
                                <span className="font-bold tracking-wide">Call {idx + 1}</span>
                            </span>
                            <span className="font-sans opacity-90">{phone}</span>
                        </a>
                    ))}

                    {/* WhatsApp Button */}
                    <a 
                        href={`https://wa.me/${COMPANY_INFO.phones[0].replace(/\D/g,'')}`}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="group bg-white border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                    >
                        <MessageCircle size={20} />
                        <span className="font-bold tracking-wide">Chat on WhatsApp</span>
                    </a>
                </div>

             </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;