import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Building2, Landmark } from 'lucide-react';

export function History() {
  const timeline = [
    {
      year: '1973',
      title: 'Início da Construção',
      description: 'Início da construção da Barragem de Sobradinho.',
      icon: Building2
    },
    {
      year: '1978',
      title: 'Inauguração',
      description: 'Inauguração oficial da Barragem e formação do lago.',
      icon: Landmark
    },
    {
      year: '1989',
      title: 'Emancipação',
      description: 'Sobradinho se torna município independente.',
      icon: Users
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
            História de Sobradinho
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça a rica história da nossa cidade, desde sua fundação até os dias atuais.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-200" />
          
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`bg-white p-6 rounded-2xl shadow-lg ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="text-sky-600 font-bold text-xl mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-sky-600 rounded-full">
                  <event.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}