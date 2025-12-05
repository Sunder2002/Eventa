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
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-eventa-green/98 backdrop-blur-md shadow-lg py-2' : 'bg-white/10 backdrop-blur-sm py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="flex flex-col items-start group" aria-label="Eventa home">
              <h1 className={`font-serif text-3xl font-bold tracking-wide transition-colors drop-shadow-md ${
                isScrolled ? 'text-eventa-cream drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]' : 'text-eventa-green drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]'
              }`}>
                EVENTA
              </h1>
              <span className={`text-[10px] uppercase tracking-widest font-sans drop-shadow-sm transition-colors ${
                isScrolled ? 'text-eventa-gold drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]' : 'text-eventa-dark drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]'
              }`}>
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
                className={`text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-white hover:text-eventa-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]' 
                    : 'text-eventa-green hover:text-eventa-gold drop-shadow-[0_1px_3px_rgba(255,255,255,0.3)]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-eventa-gold text-white px-6 py-3 rounded-full font-serif font-bold italic hover:bg-yellow-700 shadow-lg transition-all duration-300 flex items-center gap-2 drop-shadow-md"
            >
              <CalendarCheck size={18} />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-all duration-300 focus:outline-none ${
                isScrolled 
                  ? 'text-white hover:text-eventa-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]' 
                  : 'text-eventa-green hover:text-eventa-gold drop-shadow-[0_1px_3px_rgba(255,255,255,0.3)]'
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-eventa-green/98 backdrop-blur-md absolute w-full shadow-xl animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-white hover:text-eventa-gold text-center uppercase tracking-widest font-sans font-semibold border-b border-eventa-lightGreen/20 last:border-none transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-4 bg-eventa-gold text-white font-bold text-center uppercase tracking-widest font-sans rounded-lg mt-2"
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