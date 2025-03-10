import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sport } from '../types';

interface SportCardProps {
  sport: Sport;
}

export function SportCard({ sport }: SportCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card group"
    >
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img 
              src={sport.icon} 
              alt={sport.name} 
              className="w-6 h-6"
            />
            <h3 className="font-bold text-white">{sport.name}</h3>
          </div>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Calendar size={12} />
            {sport.date}
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Clock size={12} />
            {sport.time}
          </span>
          <span className="text-xs text-amber-500 font-medium">
            {sport.league}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-center">
              <img 
                src={sport.team1.logo} 
                alt={sport.team1.name} 
                className="w-10 h-10 mx-auto mb-1"
              />
              <p className="text-sm text-white font-medium">{sport.team1.name}</p>
            </div>
            
            <div className="text-center">
              <span className="text-lg font-bold text-white">VS</span>
            </div>
            
            <div className="text-center">
              <img 
                src={sport.team2.logo} 
                alt={sport.team2.name} 
                className="w-10 h-10 mx-auto mb-1"
              />
              <p className="text-sm text-white font-medium">{sport.team2.name}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
            <p className="text-xs text-slate-400 mb-1">Casa</p>
            <p className="font-bold text-amber-500">{sport.odds.home}</p>
          </div>
          
          <div className="text-center p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
            <p className="text-xs text-slate-400 mb-1">Empate</p>
            <p className="font-bold text-amber-500">{sport.odds.draw}</p>
          </div>
          
          <div className="text-center p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
            <p className="text-xs text-slate-400 mb-1">Fora</p>
            <p className="font-bold text-amber-500">{sport.odds.away}</p>
          </div>
        </div>
        
        <Link 
          to={`/sports/${sport.id}`}
          className="flex items-center justify-center gap-1 text-sm font-bold text-amber-500 hover:text-amber-400 transition-colors"
        >
          Ver mais mercados
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}