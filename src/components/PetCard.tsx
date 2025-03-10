import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Pet } from '../types';

interface PetCardProps {
  pet: Pet;
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card group overflow-hidden"
    >
      <Link to={`/adoption/${pet.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-tertiary-500 transition-colors"
            >
              <Heart size={16} />
            </motion.button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
              pet.status === 'available' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {pet.status === 'available' ? 'Disponível' : 'Em processo'}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Calendar size={12} />
              {pet.age}
            </span>
          </div>
          
          <h3 className="font-bold text-gray-900 mb-1">{pet.name}</h3>
          
          <p className="text-gray-500 text-sm mb-3 line-clamp-2">{pet.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <MapPin size={12} />
              <span>{pet.location}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              Conhecer
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}