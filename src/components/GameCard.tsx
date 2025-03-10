import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Heart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Game } from '../types';
import { useAuth } from '../hooks/useAuth';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

export function GameCard({ game, onPlay }: GameCardProps) {
  const { user } = useAuth();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full bg-slate-800/80 backdrop-blur-sm shadow-md flex items-center justify-center text-slate-300 hover:text-amber-500 transition-colors"
          >
            <Heart size={16} />
          </motion.button>
        </div>
        
        {game.hot && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              HOT
            </span>
          </div>
        )}
        
        {game.new && (
          <div className="absolute top-3 left-3">
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              NEW
            </span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onPlay(game)}
            disabled={!user}
            className="bg-amber-500 text-slate-900 font-bold rounded-full w-12 h-12 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={i < game.rating ? "text-amber-500 fill-amber-500" : "text-slate-600"} 
            />
          ))}
          <span className="text-xs text-slate-500 ml-1">({game.reviews})</span>
        </div>
        
        <h3 className="font-bold text-white mb-1 line-clamp-1">{game.name}</h3>
        
        <p className="text-slate-400 text-sm mb-3 line-clamp-2">{game.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-500">Prêmio:</span>
            <span className="text-sm font-bold text-amber-500">
              {game.maxPrize}x
            </span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-bold text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <Info size={14} />
            Detalhes
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}