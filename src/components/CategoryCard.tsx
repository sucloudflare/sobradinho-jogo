import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <Link to={category.href}>
      <motion.div
        whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-6 transition-all duration-300"
      >
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4"
        >
          <Icon size={32} className="text-primary-600" />
        </motion.div>
        
        <h3 className="font-bubblegum text-xl text-gray-900 mb-2">{category.name}</h3>
        
        <p className="text-gray-500 text-sm">{category.description}</p>
      </motion.div>
    </Link>
  );
}