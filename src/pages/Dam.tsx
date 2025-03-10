import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Zap, Ruler, Users } from 'lucide-react';

export function Dam() {
  const stats = [
    {
      icon: Ruler,
      value: '34km²',
      label: 'Área do Reservatório'
    },
    {
      icon: Droplets,
      value: '28 bi m³',
      label: 'Capacidade'
    },
    {
      icon: Zap,
      value: '1.050 MW',
      label: 'Potência Instalada'
    },
    {
      icon: Users,
      value: '1.000+',
      label: 'Empregos Gerados'
    }
  ];

  return (
    <div className="pt-28 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Barragem de Sobradinho
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uma das maiores obras de engenharia do Brasil, gerando energia e desenvolvimento para a região.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-100 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-sky-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              História da Barragem
            </h2>
            <p className="text-gray-600 mb-4">
              A Barragem de Sobradinho começou a ser construída em 1973 e foi inaugurada em 1978.
              É considerada uma das maiores obras de engenharia do Brasil e fundamental para o
              desenvolvimento da região.
            </p>
            <p className="text-gray-600">
              Além da geração de energia, a barragem também é responsável pela regularização da
              vazão do Rio São Francisco, permitindo a navegação e o desenvolvimento da agricultura
              irrigada na região.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1504280317859-8d2aa9b1fd3d"
              alt="Barragem de Sobradinho"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}