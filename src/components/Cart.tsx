import React from 'react';
import { ShoppingBag, X, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface CartProps {
  items: Product[];
  onRemoveFromCart: (productId: number) => void;
  onClose: () => void;
}

export function Cart({ items, onRemoveFromCart, onClose }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-zinc-900 text-white shadow-xl">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-zinc-400" />
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-400">
              <ShoppingBag size={48} className="mb-4 opacity-20" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-2 rounded-lg bg-zinc-800/50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-zinc-400">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="p-2 text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-zinc-800">
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-400">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}