import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    // Portfolio removed to simplify navigation as per request to remove unnecessary buttons if content is light
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-eventa-green/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="flex flex-col items-start group">
              <h1 className={`font-serif text-3xl font-bold tracking-wide transition-colors ${isScrolled ? 'text-eventa-cream' : 'text-eventa-green'}`}>
                EVENTA
              </h1>
              <span className={`text-[10px] uppercase tracking-widest font-sans ${isScrolled ? 'text-eventa-gold' : 'text-eventa-dark'}`}>
                Turning Moments into Memories
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-wider font-semibold hover:text-eventa-gold transition-colors ${
                  isScrolled ? 'text-white' : 'text-eventa-green'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-eventa-gold text-white px-5 py-2 rounded-full font-serif italic hover:bg-yellow-600 transition duration-300 flex items-center gap-2"
            >
              <CalendarCheck size={16} />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-white' : 'text-eventa-green'} hover:text-eventa-gold focus:outline-none`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-eventa-green absolute w-full shadow-xl animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-eventa-cream hover:text-eventa-gold text-center uppercase tracking-widest font-sans border-b border-eventa-lightGreen/20 last:border-none"
              >
                {link.name}
              </a>
            ))}
            <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-eventa-gold font-bold text-center uppercase tracking-widest font-sans"
              >
                Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;