import React from 'react';
import { motion } from 'framer-motion';
import { Book, Users, Clock, Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function Schools() {
  const schools = [
    {
      name: 'Escola Municipal João Paulo II',
      description: 'Ensino Fundamental completo com ótima estrutura.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b',
      stats: {
        students: '800+',
        teachers: '45',
        classrooms: '20'
      }
    },
    {
      name: 'Colégio Estadual de Sobradinho',
      description: 'Referência em ensino médio na região.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      stats: {
        students: '1200+',
        teachers: '60',
        classrooms: '30'
      }
    },
    {
      name: 'Escola Técnica de Sobradinho',
      description: 'Formação técnica profissionalizante.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585',
      stats: {
        students: '500+',
        teachers: '30',
        classrooms: '15'
      }
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
            Escolas de Sobradinho
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça as instituições de ensino que formam o futuro de nossa cidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative aspect-video">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {school.name}
                </h3>
                <p className="text-gray-600 mb-6">{school.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Users className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">
                      {school.stats.students}
                    </div>
                    <div className="text-xs text-gray-500">Alunos</div>
                  </div>
                  
                  <div className="text-center">
                    <Book className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">
                      {school.stats.teachers}
                    </div>
                    <div className="text-xs text-gray-500">Professores</div>
                  </div>
                  
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">
                      {school.stats.classrooms}
                    </div>
                    <div className="text-xs text-gray-500">Salas</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-8 h-8 text-sky-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Destaques Educacionais
            </h2>
          </div>
          
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-64"
          >
            <SwiperSlide>
              <div className="bg-sky-50 p-6 rounded-xl h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Prêmio de Educação 2023
                </h3>
                <p className="text-gray-600">
                  Nossas escolas foram reconhecidas pelo excelente desempenho no IDEB,
                  superando as metas estabelecidas pelo MEC.
                </p>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="bg-sky-50 p-6 rounded-xl h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Olimpíadas de Matemática
                </h3>
                <p className="text-gray-600">
                  Alunos de Sobradinho conquistaram medalhas nas Olimpíadas
                  Brasileiras de Matemática das Escolas Públicas.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}