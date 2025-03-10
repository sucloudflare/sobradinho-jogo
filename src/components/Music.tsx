import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Share2 } from 'lucide-react';

export function Music() {
  const songs = [
    {
      title: "Tua Graça Me Basta",
      duration: "4:35",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
    },
    {
      title: "Em Tua Presença",
      duration: "5:20",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
    },
    {
      title: "Santo Espírito",
      duration: "6:15",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
    }
  ];

  return (
    <section id="music" className="py-20 bg-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Músicas & <span className="text-blue-500">Louvores</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ouça nossas músicas e deixe seu coração ser tocado pelo poder do louvor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {songs.map((song, index) => (
            <motion.div
              key={song.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 rounded-xl overflow-hidden group"
            >
              <div className="relative aspect-square">
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{song.title}</h3>
                    <p className="text-gray-300 mb-4">{song.duration}</p>
                    <div className="flex items-center gap-4">
                      <button className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                        <Play className="w-6 h-6" />
                      </button>
                      <button className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                        <Heart className="w-6 h-6" />
                      </button>
                      <button className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                        <Share2 className="w-6 h-6" />
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