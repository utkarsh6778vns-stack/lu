import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Order matches the vertical flow of sections in App.tsx
  const navItems = [
    { label: 'Collections', id: 'collections' },
    { label: 'Featured', id: 'featured' },
    { label: 'Stories', id: 'testimonials' },
    { label: 'AI Stylist', id: 'stylist' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle background transparency
      setIsScrolled(window.scrollY > 20);

      // Handle active section highlighting (Scroll Spy)
      // Use a slightly larger offset to catch the section earlier as it enters the view
      const scrollPosition = window.scrollY + 150; 

      let current = '';
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset to account for fixed navbar
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              onClick={scrollToTop}
              className="text-2xl font-serif font-bold text-gold-400 tracking-wider hover:text-white transition-colors"
            >
              LUSTREE
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm uppercase tracking-widest transition-all duration-300 relative group ${
                  activeSection === item.id 
                    ? 'text-gold-400 font-semibold' 
                    : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {item.label}
                {/* Underline indicator for active state */}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gold-400 transform origin-left transition-transform duration-300 ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-gold-400">
            <button className="hover:text-white transition-colors transform hover:scale-110 duration-200">
              <Search size={20} />
            </button>
            <button className="hover:text-white transition-colors relative transform hover:scale-110 duration-200">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-white text-charcoal-900 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gold-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-charcoal-900 border-t border-gray-800 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`py-2 uppercase tracking-widest text-sm w-full text-center hover:bg-white/5 rounded-lg transition-colors ${
                activeSection === item.id ? 'text-gold-400 font-bold' : 'text-gray-300'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;