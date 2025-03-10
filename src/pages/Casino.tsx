import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { GameCard } from '../components/GameCard';
import { games } from '../data/games';
import { useAuth } from '../hooks/useAuth';

export function Casino() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'slots', name: 'Slots' },
    { id: 'table', name: 'Mesa' },
    { id: 'live', name: 'Ao Vivo' },
    { id: 'jackpot', name: 'Jackpot' },
  ];
  
  const filteredGames = games.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const handlePlayGame = (game: any) => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
    
    // Handle game play
    console.log('Playing game:', game);
  };

  return (
    <div className="pt-28 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Cassino</h1>
            <p className="text-slate-400">
              Explore nossa coleção de jogos de cassino e divirta-se!
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar jogos..."
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
        
        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-slate-900'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
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
                <h4 className="text-sm font-medium text-slate-300 mb-2">Provedor</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Pragmatic Play</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">NetEnt</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Microgaming</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Popularidade</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="popularity" className="rounded-full border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Mais populares</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="popularity" className="rounded-full border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Novos jogos</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="popularity" className="rounded-full border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Maiores prêmios</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Recursos</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Rodadas grátis</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Multiplicadores</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-600 text-amber-500 focus:ring-amber-500" />
                    <span className="text-slate-300">Bônus</span>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} onPlay={handlePlayGame} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-800 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Nenhum jogo encontrado</h3>
            <p className="text-slate-400">
              Tente ajustar seus filtros ou buscar por outro termo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}