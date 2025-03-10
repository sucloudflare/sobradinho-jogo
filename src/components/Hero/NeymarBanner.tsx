import React from 'react';
import { ArrowRight } from 'lucide-react';

export function NeymarBanner() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1577223625816-7546f13df25d"
        alt="Neymar Jr Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold text-white mb-6">
              NEYMAR JR COLLECTION
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Descubra a nova coleção exclusiva do Neymar Jr. Estilo único que combina performance e personalidade.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-zinc-200 transition-all duration-300 group">
              Explorar Coleção
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}