import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import TestimonialMarquee from './components/TestimonialMarquee';
import AIStylist from './components/AIStylist';
import { FEATURED_PRODUCTS } from './constants';
import { ArrowRight, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const App: React.FC = () => {
  const collectionImages = [
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80', // Ring
    'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80', // Necklace
    'https://images.unsplash.com/photo-1635767798638-3e2523c90e4a?auto=format&fit=crop&w=800&q=80'  // Earrings (Model)
  ];

  return (
    <div className="bg-charcoal-900 min-h-screen text-gray-100 font-sans selection:bg-gold-400 selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop" 
            alt="Luxury Jewelry Background" 
            className="w-full h-full object-cover opacity-40 grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-gold-400 uppercase tracking-[0.3em] text-sm md:text-base mb-6 animate-fade-in-up">
            Est. 2024
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            Adorn Yourself <br/>
            <span className="italic text-gold-100">in Elegance</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Discover a collection where timeless artistry meets modern sophistication. 
            Handcrafted for those who shine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#featured" 
              className="px-8 py-4 bg-gold-500 text-charcoal-900 font-bold tracking-widest hover:bg-white transition-colors duration-300 min-w-[180px]"
            >
              SHOP NOW
            </a>
            <a 
              href="#stylist" 
              className="px-8 py-4 border border-white text-white font-bold tracking-widest hover:bg-white hover:text-charcoal-900 transition-colors duration-300 min-w-[180px]"
            >
              ASK STYLIST
            </a>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section id="collections" className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
             {['Rings', 'Necklaces', 'Earrings'].map((category, index) => (
               <div key={category} className="group relative h-96 overflow-hidden cursor-pointer">
                 <img 
                   src={collectionImages[index]} 
                   alt={category} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <h3 className="text-3xl font-serif text-white italic mb-2">{category}</h3>
                   <span className="text-gold-400 uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                     View Collection
                   </span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-24 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif text-gold-100 mb-2">Curated Selections</h2>
              <p className="text-gray-400">Handpicked favorites for the discerning collector.</p>
            </div>
            <a href="#" className="hidden md:flex items-center text-gold-400 hover:text-white transition-colors">
              View All <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {FEATURED_PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-gold-400 hover:text-white transition-colors">
              View All <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Moving Testimonials */}
      <TestimonialMarquee />

      {/* AI Stylist Section */}
      <AIStylist />

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="text-3xl font-serif font-bold text-white tracking-wider mb-6 block">
                LUSTREE
              </a>
              <p className="max-w-sm mb-8 font-light">
                Crafting moments of brilliance since 2024. Every piece tells a story of elegance, passion, and timeless beauty.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-gold-400 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-gold-400 transition-colors"><Mail size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-gold-400 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Wedding & Engagement</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Custom Designs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-gold-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Care Instructions</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-900 text-center text-xs text-gray-600">
            &copy; 2024 Lustree Jewelry. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;