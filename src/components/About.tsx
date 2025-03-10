import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
              alt="Gospel Singer"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">
              Sobre o <span className="text-blue-500">Ministério</span>
            </h2>
            
            <p className="text-gray-300">
              "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que 
              todo aquele que nele crê não pereça, mas tenha a vida eterna." - João 3:16
            </p>
            
            <p className="text-gray-300">
              Há mais de 15 anos dedicados à obra do Senhor, nosso ministério tem como missão
              levar a palavra de Deus através da música e da pregação, alcançando vidas e
              transformando corações para a glória de Deus.
            </p>
            
            <p className="text-gray-300">
              Acreditamos no poder transformador do Evangelho e na importância de adorar a
              Deus em espírito e em verdade, usando os dons que Ele nos deu para edificar
              Seu reino.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}