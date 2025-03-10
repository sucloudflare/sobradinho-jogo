import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X, Calendar, Clock } from 'lucide-react';
import { SportCard } from '../components/SportCard';
import { sports } from '../data/sports';

export function Sports() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const sportTypes = [
    { id: 'all', name: 'Todos', icon: '🏆' },
    { id: 'football', name: 'Futebol', icon: '⚽' },
    { id: 'basketball', name: 'Basquete', icon: '🏀' },
    { id: 'tennis', name: 'Tênis', icon: '🎾' },
    { id: 'volleyball', name: 'Vôlei', icon: '🏐' },
    { id: 'fighting', name: 'UFC/MMA', icon: '🥊' },
    { id: 'esports', name: 'E-Sports', icon: '🎮' },
  ];
  
  const filteredSports = sports.filter(sport => {
    const matchesSearch = sport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sport.league.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sport.team1.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sport.team2.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport = selectedSport === 'all' || sport.type === selectedSport;
    
    return matchesSearch && matchesSport;
  });

  return (
    <div className="pt-28 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Apostas Esportivas</h1>
            <p className="text-slate-400">
              Aposte nos seus times favoritos e acompanhe os jogos ao vivo!
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar eventos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 w-full md:w-64"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors flex items-center gap-2"
            >
              <Filter size={20} />
              <span className="hidden md:inline">Filtros</span>
            </button>
          </div>
        </div>
        
        {/* Sport Types */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {sportTypes.map((sport) => (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                  selectedSport === sport.id
                    ? 'bg-amber-500 text-slate-900'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>{sport.icon}</span>
                {sport.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-slate-800 rounded-xl p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white">Filtros Avançados</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Data</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="date" className="rounded-full border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Hoje</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="date" className="rounded-full border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Amanhã</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="date" className="rounded-full border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Esta semana</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Status</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Ao vivo</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Próximos</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Populares</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Ligas</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Champions League</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Premier League</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">NBA</span>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Live Events */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <h2 className="text-xl font-bold text-white">Ao Vivo</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSports.filter(sport => sport.live).slice(0, 3).map((sport) => (
              <SportCard key={sport.id} sport={sport} />
            ))}
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={20} className="text-amber-500" />
            <h2 className="text-xl font-bold text-white">Próximos Eventos</h2>
          </div>
          
          {filteredSports.filter(sport => !sport.live).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSports.filter(sport => !sport.live).map((sport) => (
                <SportCard key={sport.id} sport={sport} />
              ))}
            </div>
          ) : (
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Nenhum evento encontrado</h3>
              <p className="text-slate-400">
                Tente ajustar seus filtros ou buscar por outro termo.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}