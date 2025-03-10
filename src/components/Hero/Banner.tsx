import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Banner() {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-ss22-ultraboost-launch-hp-masthead-large-3d-d_yfbvna.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
              PERFORMANCE ELEVADO
            </h1>
            <p className="text-xl text-zinc-200 mb-8 animate-fade-in delay-200">
              Nova coleção de tênis de alta performance para atletas que buscam o máximo.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group animate-fade-in delay-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Comprar Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}