import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function MainMenu() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1612404730960-5c71577fca11')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl mb-8 text-red-500"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sobradinho Adventures
        </motion.h1>

        <motion.div
          className="space-y-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button 
            onClick={() => navigate('/game')}
            className="pixel-btn block w-48 mx-auto"
          >
            Iniciar Jogo
          </button>
          
          <button className="pixel-btn block w-48 mx-auto opacity-50 cursor-not-allowed">
            Continuar
          </button>
          
          <button className="pixel-btn block w-48 mx-auto">
            Opções
          </button>
        </motion.div>

        <motion.div
          className="mt-12 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>Use as setas para mover</p>
          <p>Espaço para atacar</p>
        </motion.div>
      </div>
    </div>
  );
}