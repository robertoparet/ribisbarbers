'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">            <h1 className="text-2xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">
                Example
              </span>
              <span className="text-white">Barber</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('reserva')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Reservar
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonios
              </button>
              <a
                href="https://wa.me/34600123456"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('reserva')}
                className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Reservar
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Testimonios
              </button>
              <a
                href="https://wa.me/34600123456"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black block px-3 py-2 rounded-lg text-base font-medium hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}