import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-eventa-dark text-eventa-beige/60 py-12 border-t border-eventa-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-eventa-gold mb-4">{COMPANY_INFO.name}</h2>
            <p className="max-w-md text-sm leading-relaxed mb-6">
              {COMPANY_INFO.description}
            </p>
          </div>

          <div>
            <h3 className="text-eventa-cream font-bold uppercase tracking-wider text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-eventa-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-eventa-gold transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-eventa-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-eventa-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-eventa-cream font-bold uppercase tracking-wider text-sm mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Wedding Planning</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Dhoti & Saree Ceremony</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Turning Moments into Memories.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;