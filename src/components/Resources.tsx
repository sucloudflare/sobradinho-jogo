import React from 'react';
import { motion } from 'framer-motion';
import { Book, Download, Eye } from 'lucide-react';

export function Resources() {
  const ebooks = [
    {
      title: "O Poder da Oração",
      description: "Um guia prático para fortalecer sua vida de oração",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
    },
    {
      title: "Fundamentos da Fé",
      description: "Princípios essenciais para uma vida cristã sólida",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765"
    },
    {
      title: "Vida no Espírito",
      description: "Descobrindo os dons e frutos do Espírito Santo",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            E-books & <span className="text-blue-500">Recursos</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Material exclusivo para seu crescimento espiritual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={ebook.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 rounded-xl overflow-hidden group"
            >
              <div className="relative aspect-[4/5]">
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{ebook.title}</h3>
                    <p className="text-gray-300 mb-4">{ebook.description}</p>
                    <div className="flex gap-4">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Download
                      </button>
                      <button className="flex-1 bg-white/10 text-white py-2 rounded-lg font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                        <Eye className="w-5 h-5" />
                        Prévia
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