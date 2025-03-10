import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RefreshCw, DollarSign } from 'lucide-react';
import { useBalance } from '../hooks/useBalance';
import toast from 'react-hot-toast';

const SYMBOLS = ['🐯', '💰', '💎', '🍒', '7️⃣', '🎰', '⭐', '🎲'];
const ROWS = 3;
const COLS = 3;

export function TigerSlot() {
  const [reels, setReels] = useState<string[][]>(Array(COLS).fill(Array(ROWS).fill('🐯')));
  const [spinning, setSpinning] = useState(false);
  const [bet, setBet] = useState(5);
  const [win, setWin] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const { balance, addBalance, subtractBalance } = useBalance();
  const autoPlayRef = useRef(autoPlay);

  useEffect(() => {
    autoPlayRef.current = autoPlay;
  }, [autoPlay]);

  const generateRandomSymbol = () => {
    return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  };

  const generateReels = () => {
    return Array(COLS).fill(null).map(() => 
      Array(ROWS).fill(null).map(() => generateRandomSymbol())
    );
  };

  const checkWin = (reels: string[][]) => {
    let winAmount = 0;
    
    // Check rows
    for (let row = 0; row < ROWS; row++) {
      const symbols = reels.map(reel => reel[row]);
      if (symbols.every(symbol => symbol === symbols[0])) {
        const multiplier = getMultiplier(symbols[0]);
        winAmount += bet * multiplier;
      }
    }
    
    // Check diagonals
    const diagonal1 = [reels[0][0], reels[1][1], reels[2][2]];
    if (diagonal1.every(symbol => symbol === diagonal1[0])) {
      const multiplier = getMultiplier(diagonal1[0]);
      winAmount += bet * multiplier;
    }
    
    const diagonal2 = [reels[0][2], reels[1][1], reels[2][0]];
    if (diagonal2.every(symbol => symbol === diagonal2[0])) {
      const multiplier = getMultiplier(diagonal2[0]);
      winAmount += bet * multiplier;
    }
    
    return winAmount;
  };

  const getMultiplier = (symbol: string) => {
    switch (symbol) {
      case '🐯': return 10;
      case '💰': return 5;
      case '💎': return 4;
      case '7️⃣': return 3;
      case '🎰': return 2;
      case '⭐': return 2;
      case '🎲': return 1;
      case '🍒': return 1;
      default: return 1;
    }
  };

  const spin = () => {
    if (balance < bet) {
      toast.error('Saldo insuficiente!');
      setAutoPlay(false);
      return;
    }
    
    setSpinning(true);
    subtractBalance(bet);
    setWin(0);
    
    // Simulate spinning animation
    const spinDuration = 2000;
    const spinInterval = 100;
    const iterations = spinDuration / spinInterval;
    let count = 0;
    
    const spinTimer = setInterval(() => {
      setReels(generateReels());
      count++;
      
      if (count >= iterations) {
        clearInterval(spinTimer);
        const finalReels = generateReels();
        setReels(finalReels);
        
        const winAmount = checkWin(finalReels);
        setWin(winAmount);
        
        if (winAmount > 0) {
          addBalance(winAmount);
          toast.success(`Você ganhou R$ ${winAmount.toFixed(2)}!`);
        }
        
        setSpinning(false);
        
        // Continue auto play if enabled
        if (autoPlayRef.current && !spinning) {
          setTimeout(() => {
            if (autoPlayRef.current) spin();
          }, 1000);
        }
      }
    }, spinInterval);
  };

  const handleBetChange = (amount: number) => {
    const newBet = Math.max(1, Math.min(100, bet + amount));
    setBet(newBet);
  };

  const toggleAutoPlay = () => {
    const newAutoPlay = !autoPlay;
    setAutoPlay(newAutoPlay);
    
    if (newAutoPlay && !spinning) {
      spin();
    }
  };

  return (
    <div className="card p-6">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gradient mb-2">Lucky Tiger Slot</h2>
        <p className="text-slate-400">Combine 3 símbolos iguais para ganhar!</p>
      </div>
      
      <div className="bg-slate-800 rounded-xl p-4 mb-6 border-2 border-amber-500/30 animate-pulse-glow">
        <div className="grid grid-cols-3 gap-2">
          {reels.map((reel, colIndex) => (
            <div key={colIndex} className="bg-slate-900 rounded-lg overflow-hidden">
              {reel.map((symbol, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className={`flex items-center justify-center text-4xl p-4 ${spinning ? 'slot-spin' : ''}`}
                >
                  {symbol}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-slate-400 mb-1">Aposta</p>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handleBetChange(-5)}
              disabled={bet <= 1 || spinning}
              className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              -
            </button>
            <div className="bg-slate-800 px-4 py-2 rounded-lg flex items-center">
              <DollarSign size={16} className="text-amber-500 mr-1" />
              <span className="font-bold text-white">{bet.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => handleBetChange(5)}
              disabled={bet >= 100 || spinning}
              className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              +
            </button>
          </div>
        </div>
        
        <div>
          <p className="text-sm text-slate-400 mb-1">Ganho</p>
          <div className="bg-slate-800 px-4 py-2 rounded-lg flex items-center">
            <DollarSign size={16} className="text-green-500 mr-1" />
            <span className="font-bold text-white">{win.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={spin}
          disabled={spinning || balance < bet}
          className="flex-1 btn-primary flex items-center justify-center gap-2"
        >
          {spinning ? (
            <>
              <RefreshCw size={20} className="animate-spin" />
              Girando...
            </>
          ) : (
            <>
              <Play size={20} />
              Girar
            </>
          )}
        </button>
        
        <button
          onClick={toggleAutoPlay}
          disabled={balance < bet}
          className={`btn-outline flex items-center justify-center gap-2 ${
            autoPlay ? 'bg-amber-500/10 text-amber-500 border-amber-500' : ''
          }`}
        >
          {autoPlay ? (
            <>
              <Pause size={20} />
              Parar
            </>
          ) : (
            <>
              <RefreshCw size={20} />
              Auto
            </>
          )}
        </button>
      </div>
    </div>
  );
}