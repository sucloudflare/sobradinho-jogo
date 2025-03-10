import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg p-6 relative"
    >
      <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
        <Quote size={20} className="text-white" />
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.petName && `Tutor de ${testimonial.petName}`}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={i < testimonial.rating ? "text-primary-500 fill-primary-500" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-700">{testimonial.text}</p>
    </motion.div>
  );
}