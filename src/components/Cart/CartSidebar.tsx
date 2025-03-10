import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../utils/format';
import { processPixPayment } from '../../services/payment';
import toast from 'react-hot-toast';

interface CartSidebarProps {
  items: Product[];
  onClose: () => void;
  onRemove: (id: number) => void;
  onProceedToCheckout: () => void;
}

export function CartSidebar({ items, onClose, onRemove, onProceedToCheckout }: CartSidebarProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    try {
      const { qrCode, expiresAt } = await processPixPayment(total);
      onProceedToCheckout();
    } catch (error) {
      toast.error('Erro ao processar pagamento');
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-zinc-900 shadow-xl z-50">
      {/* Rest of the component remains the same */}
      <div className="p-4 border-t border-zinc-800">
        <div className="flex justify-between items-center mb-4">
          <span className="text-zinc-400">Total:</span>
          <span className="text-xl font-bold text-white">{formatPrice(total)}</span>
        </div>
        <button
          onClick={handleCheckout}
          disabled={items.length === 0}
          className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}