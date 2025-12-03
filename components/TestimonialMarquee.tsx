import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const TestimonialMarquee: React.FC = () => {
  // Duplicate testimonials to create a seamless loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div id="testimonials" className="py-24 bg-charcoal-800 overflow-hidden relative border-y border-gold-600/20">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gold-400 mb-4">Whispers of Delight</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Hear what our cherished collectors have to say about their Lustree treasures.</p>
      </div>

      <div className="relative w-full flex">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-charcoal-800 to-transparent z-10 pointer-events-none hidden md:block" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-charcoal-800 to-transparent z-10 pointer-events-none hidden md:block" />

        <motion.div
          className="flex space-x-8"
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-charcoal-900 border border-gold-600/30 p-8 rounded-sm relative group hover:border-gold-400 transition-colors duration-300"
            >
              <Quote className="absolute top-4 right-4 text-gold-600/20 group-hover:text-gold-400/40 transition-colors" size={40} />
              
              <p className="text-gray-300 font-serif italic text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-gold-500 object-cover mr-4"
                />
                <div>
                  <h4 className="text-gold-200 font-bold text-sm tracking-wide">{testimonial.name}</h4>
                  <span className="text-gray-500 text-xs uppercase tracking-wider">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialMarquee;