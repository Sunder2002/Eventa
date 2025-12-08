import React, { JSX } from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = (): JSX.Element => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`;
  const whatsappPhone = COMPANY_INFO.phones[0]?.replace(/\D/g, '') || '';
  const whatsappUrl = whatsappPhone 
    ? `https://wa.me/${whatsappPhone}?text=Hi%20Eventa%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`
    : '#';

  return (
    <section id="contact" className="py-20 bg-white" aria-label="Contact Section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-eventa-green font-serif text-4xl md:text-5xl font-bold mb-4">Let's Plan Your Event</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg font-sans font-light">
            Ready to turn your vision into reality? We are available for Decoration, Photography, and Venue Selection services.
          </p>
        </div>

        <div className="bg-eventa-beige/30 p-8 md:p-12 rounded-2xl border border-eventa-gold/30 shadow-lg">
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Info Column */}
                <div className="space-y-8">
                    {/* Address */}
                    <div className="flex items-start gap-4 group">
                       <div className="bg-eventa-gold/20 p-3 rounded-full text-eventa-green shrink-0 group-hover:bg-eventa-gold group-hover:text-white transition-all duration-300">
                          <MapPin size={24} aria-hidden="true" />
                       </div>
                       <div>
                          <h3 className="font-bold text-eventa-green mb-1 uppercase text-sm tracking-wider">Visit Our Office</h3>
                          <p className="text-gray-800 font-sans leading-relaxed text-sm mb-2 font-medium">
                            {COMPANY_INFO.address}
                          </p>
                          <a 
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-eventa-gold hover:text-eventa-dark hover:underline text-sm font-bold transition-colors"
                            aria-label="Open office location in Google Maps"
                          >
                            Open in Google Maps <ExternalLink size={12} className="ml-1" aria-hidden="true" />
                          </a>
                       </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 group">
                       <div className="bg-eventa-gold/20 p-3 rounded-full text-eventa-green shrink-0 group-hover:bg-eventa-gold group-hover:text-white transition-all duration-300">
                          <Mail size={24} aria-hidden="true" />
                       </div>
                       <div>
                          <h3 className="font-bold text-eventa-green mb-1 uppercase text-sm tracking-wider">Email Us</h3>
                          <a 
                            href={`mailto:${COMPANY_INFO.email}?subject=Event%20Inquiry`}
                            className="text-gray-800 hover:text-eventa-gold transition-colors block break-all font-sans font-medium"
                            aria-label={`Send email to ${COMPANY_INFO.email}`}
                          >
                            {COMPANY_INFO.email}
                          </a>
                       </div>
                    </div>
                    
                    {/* Instagram */}
                     <div className="flex items-start gap-4 group">
                       <div className="bg-eventa-gold/20 p-3 rounded-full text-eventa-green shrink-0 group-hover:bg-eventa-gold group-hover:text-white transition-all duration-300">
                          <Instagram size={24} aria-hidden="true" />
                       </div>
                       <div>
                          <h3 className="font-bold text-eventa-green mb-1 uppercase text-sm tracking-wider">Follow Our Work</h3>
                          <a
                            href={COMPANY_INFO.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 font-sans font-medium inline-flex items-center gap-2 hover:text-eventa-gold transition-colors"
                            aria-label="Open Eventa Instagram profile in a new tab"
                          >
                            {COMPANY_INFO.instagramHandle}
                            <ExternalLink size={12} aria-hidden="true" />
                          </a>
                       </div>
                    </div>
                </div>

                {/* Action Buttons Column */}
                <div className="flex flex-col gap-4">
                    <div className="text-center mb-4">
                        <h3 className="font-serif text-2xl text-eventa-green italic font-bold">Contact Us Now</h3>
                        <p className="text-xs text-gray-600 uppercase tracking-widest mt-1 font-semibold">For Immediate Assistance</p>
                    </div>
                    
                    {/* Phone Buttons */}
                    {COMPANY_INFO.phones.map((phone, idx) => (
                        <a 
                            key={idx}
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="group bg-eventa-green hover:bg-eventa-dark text-white px-6 py-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-between font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-eventa-gold focus:ring-offset-2"
                            aria-label={`Call ${phone}`}
                        >
                            <span className="flex items-center gap-3">
                                <Phone size={20} className="fill-current" aria-hidden="true" />
                                <span>Call {idx + 1}</span>
                            </span>
                            <span className="font-sans opacity-90 text-sm">{phone}</span>
                        </a>
                    ))}

                    {/* WhatsApp Button */}
                    <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="group bg-white border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                        aria-label="Chat with us on WhatsApp"
                    >
                        <MessageCircle size={20} aria-hidden="true" />
                        <span>Chat on WhatsApp</span>
                    </a>
                </div>

             </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;