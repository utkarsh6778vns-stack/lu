import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

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

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-serif font-bold text-gold-400 tracking-wider">
              LUSTREE
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#collections" className="text-gray-300 hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">Collections</a>
            <a href="#featured" className="text-gray-300 hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">Featured</a>
            <a href="#stylist" className="text-gray-300 hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">AI Stylist</a>
            <a href="#testimonials" className="text-gray-300 hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">Stories</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-gold-400">
            <button className="hover:text-white transition-colors"><Search size={20} /></button>
            <button className="hover:text-white transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-white text-charcoal-900 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gold-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-charcoal-900 absolute top-full left-0 w-full border-t border-gray-800">
          <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
            <a href="#collections" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-gold-400 py-2 uppercase tracking-widest">Collections</a>
            <a href="#featured" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-gold-400 py-2 uppercase tracking-widest">Featured</a>
            <a href="#stylist" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-gold-400 py-2 uppercase tracking-widest">AI Stylist</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-gold-400 py-2 uppercase tracking-widest">Stories</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;