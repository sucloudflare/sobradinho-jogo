import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ArrowRight, Plus, Minus } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/format';

export function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const deliveryFee = 10;

  return (
    <div className="pt-28 min-h-screen bg-zinc-950">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Carrinho</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.length === 0 ? (
              <div className="bg-zinc-900 rounded-2xl p-8 text-center">
                <p className="text-zinc-400">Seu carrinho está vazio</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-zinc-900 rounded-2xl p-4 flex items-center gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white">{item.name}</h3>
                      <p className="text-sm text-zinc-400">{item.description}</p>
                      <p className="text-lg font-bold text-white mt-2">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-white w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-zinc-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 h-fit">
            <h2 className="text-xl font-bold text-white mb-4">Resumo do Pedido</h2>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Taxa de entrega</span>
                <span>{formatPrice(deliveryFee)}</span>
              </div>
              <div className="h-px bg-zinc-800 my-4" />
              <div className="flex justify-between text-white font-bold">
                <span>Total</span>
                <span>{formatPrice(total + deliveryFee)}</span>
              </div>
            </div>
            <button
              disabled={items.length === 0}
              className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Finalizar Pedido
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}