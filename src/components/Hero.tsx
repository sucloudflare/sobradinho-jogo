import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3"
          alt="Church"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Adoração & <span className="text-blue-500">Louvor</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Levando a palavra de Deus através da música e da pregação,
              tocando vidas e transformando corações.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 group">
              <Play className="w-5 h-5" />
              Ouvir Agora
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}