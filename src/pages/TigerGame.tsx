import React from 'react';
import { motion } from 'framer-motion';
import { TigerSlot } from '../components/TigerSlot';
import { Trophy, Users, DollarSign, Clock } from 'lucide-react';

export function TigerGame() {
  const topWinners = [
    { id: 1, username: 'tiger123', amount: 5000, time: '2 min atrás' },
    { id: 2, username: 'luckystar', amount: 3500, time: '15 min atrás' },
    { id: 3, username: 'winner777', amount: 2800, time: '32 min atrás' },
    { id: 4, username: 'goldenhunter', amount: 2200, time: '1 hora atrás' },
    { id: 5, username: 'fortuneseeker', amount: 1800, time: '2 horas atrás' },
  ];

  return (
    <div className="pt-28 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-tiger-pattern bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Fortune Tiger</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            O famoso jogo do tigrinho agora disponível para você! Gire os rolos e combine símbolos para ganhar prêmios incríveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-amber-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-900 rounded-lg p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Prêmio Máximo</p>
                    <p className="text-white font-bold text-xl">10x</p>
                  </div>
                </div>
                
                <div className="bg-slate-900 rounded-lg p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Jogadores Online</p>
                    <p className="text-white font-bold text-xl">1,243</p>
                  </div>
                </div>
              </div>
              
              <div className="max-w-md mx-auto">
                <TigerSlot />
              </div>
              
              <div className="mt-8 bg-slate-900 rounded-lg p-4">
                <h3 className="text-white font-bold mb-4">Como Jogar</h3>
                <ol className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="bg-amber-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <span>Escolha o valor da sua aposta usando os botões + e -.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-amber-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <span>Clique no botão "Girar" para iniciar o jogo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-amber-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <span>Combine 3 símbolos iguais em uma linha para ganhar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-amber-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <span>O símbolo do Tigre (🐯) paga 10x o valor da aposta!</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-amber-500/20">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h3 className="text-white font-bold">Maiores Ganhos</h3>
              </div>
              
              <div className="space-y-4">
                {topWinners.map((winner, index) => (
                  <div key={winner.id} className="bg-slate-900 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-white font-medium">{winner.username}</p>
                        <p className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock size={12} />
                          {winner.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-amber-500 font-bold flex items-center gap-1">
                        <DollarSign size={14} />
                        {winner.amount.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-amber-500/20">
              <h3 className="text-white font-bold mb-4">Tabela de Pagamentos</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🐯 🐯 🐯</span>
                    <span className="text-white">Tigre</span>
                  </div>
                  <span className="text-amber-500 font-bold">10x</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💰 💰 💰</span>
                    <span className="text-white">Dinheiro</span>
                  </div>
                  <span className="text-amber-500 font-bold">5x</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💎 💎 💎</span>
                    <span className="text-white">Diamante</span>
                  </div>
                  <span className="text-amber-500 font-bold">4x</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">7️⃣ 7️⃣ 7️⃣</span>
                    <span className="text-white">Sete</span>
                  </div>
                  <span className="text-amber-500 font-bold">3x</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎰 🎰 🎰</span>
                    <span className="text-white">Slot</span>
                  </div>
                  <span className="text-amber-500 font-bold">2x</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⭐ ⭐ ⭐</span>
                    <span className="text-white">Estrela</span>
                  </div>
                  <span className="text-amber-500 font-bold">2x</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎲 🎲 🎲</span>
                    <span className="text-white">Dado</span>
                  </div>
                  <span className="text-amber-500 font-bold">1x</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🍒 🍒 🍒</span>
                    <span className="text-white">Cereja</span>
                  </div>
                  <span className="text-amber-500 font-bold">1x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}