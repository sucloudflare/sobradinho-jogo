import React from 'react';
import { motion } from 'framer-motion';
import { Book, Play } from 'lucide-react';

export function Children() {
  const stories = [
    {
      title: "A Arca de Noé",
      description: "A história da grande arca e o dilúvio",
      image: "https://images.unsplash.com/photo-1578924608828-89b2611b1011",
      age: "3-6 anos"
    },
    {
      title: "Daniel na Cova dos Leões",
      description: "A coragem e a fé de Daniel",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
      age: "4-8 anos"
    },
    {
      title: "O Bom Pastor",
      description: "Jesus cuida de suas ovelhas",
      image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73",
      age: "3-7 anos"
    }
  ];

  return (
    <section className="pt-28 min-h-screen bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Histórias para <span className="text-blue-500">Crianças</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Histórias bíblicas divertidas e educativas para as crianças aprenderem sobre Deus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/50 rounded-xl overflow-hidden group"
            >
              <div className="relative aspect-video">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm rounded-full mb-2">
                      {story.age}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                    <p className="text-gray-300 mb-4">{story.description}</p>
                    <div className="flex gap-4">
                      <button className="flex-1 bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                        <Book className="w-5 h-5" />
                        Ler História
                      </button>
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                        <Play className="w-5 h-5" />
                        Ver Vídeo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}