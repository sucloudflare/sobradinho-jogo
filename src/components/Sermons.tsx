import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Calendar } from 'lucide-react';

export function Sermons() {
  const sermons = [
    {
      title: "O Poder da Oração",
      date: "15 Jan 2024",
      duration: "45:20",
      image: "https://images.unsplash.com/photo-1445445290350-18a3b86e0b5b"
    },
    {
      title: "Vivendo pela Fé",
      date: "10 Jan 2024",
      duration: "38:15",
      image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94"
    },
    {
      title: "A Graça de Deus",
      date: "05 Jan 2024",
      duration: "42:30",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65"
    }
  ];

  return (
    <section id="sermons" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Pregações & <span className="text-blue-500">Estudos</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Aprofunde-se na palavra de Deus através de nossas pregações e estudos bíblicos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <motion.div
              key={sermon.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-950/30 rounded-xl overflow-hidden group"
            >
              <div className="relative aspect-video">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-16 h-16 text-white" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{sermon.title}</h3>
                <div className="flex items-center gap-4 text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {sermon.date}
                  </span>
                  <span>{sermon.duration}</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Assistir
                  </button>
                  <button className="p-2 text-gray-300 hover:text-white transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}