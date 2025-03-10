import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function News() {
  const news = [
    {
      id: 1,
      title: 'Nova área de lazer será inaugurada no Balneário',
      excerpt: 'Projeto inclui quadras esportivas, área para eventos e playground infantil.',
      image: 'https://images.unsplash.com/photo-1595100417477-45b15aa6c8a0',
      date: '15/02/2024',
      author: 'João Silva',
      category: 'Infraestrutura'
    },
    {
      id: 2,
      title: 'Festival Cultural movimenta a cidade',
      excerpt: 'Evento reúne artistas locais e regionais em três dias de apresentações.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
      date: '14/02/2024',
      author: 'Maria Santos',
      category: 'Cultura'
    },
    {
      id: 3,
      title: 'Barragem atinge capacidade máxima',
      excerpt: 'Chuvas dos últimos meses contribuíram para o resultado positivo.',
      image: 'https://images.unsplash.com/photo-1504280317859-8d2aa9b1fd3d',
      date: '13/02/2024',
      author: 'Pedro Costa',
      category: 'Meio Ambiente'
    },
    {
      id: 4,
      title: 'Projeto de Energia Solar beneficia comunidade',
      excerpt: 'Iniciativa vai gerar economia e sustentabilidade para moradores.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
      date: '12/02/2024',
      author: 'Ana Oliveira',
      category: 'Sustentabilidade'
    },
    {
      id: 5,
      title: 'Escolas municipais recebem novos laboratórios',
      excerpt: 'Investimento em educação tecnológica beneficia estudantes da rede pública.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585',
      date: '11/02/2024',
      author: 'Carlos Mendes',
      category: 'Educação'
    }
  ];

  return (
    <div className="pt-28 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Notícias de Sobradinho
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fique por dentro das últimas novidades da nossa cidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {item.author}
                    </span>
                  </div>
                </div>
                
                <button className="mt-6 inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors">
                  Ler mais
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}