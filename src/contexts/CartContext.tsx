import { createContext, ReactNode, useContext } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      total: 0,
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id);
          
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              total: state.total + (product.discount > 0 
                ? (product.price * (100 - product.discount)) / 100 
                : product.price)
            };
          }
          
          return {
            items: [...state.items, { ...product, quantity: 1 }],
            total: state.total + (product.discount > 0 
              ? (product.price * (100 - product.discount)) / 100 
              : product.price)
          };
        });
      },
      removeFromCart: (productId) => {
        set((state) => {
          const item = state.items.find(item => item.id === productId);
          if (!item) return state;
          
          const itemPrice = item.discount > 0 
            ? (item.price * (100 - item.discount)) / 100 
            : item.price;
          
          return {
            items: state.items.filter(item => item.id !== productId),
            total: state.total - (itemPrice * item.quantity)
          };
        });
      },
      updateQuantity: (productId, quantity) => {
        set((state) => {
          const item = state.items.find(item => item.id === productId);
          if (!item) return state;
          
          const itemPrice = item.discount > 0 
            ? (item.price * (100 - item.discount)) / 100 
            : item.price;
          
          const oldTotal = itemPrice * item.quantity;
          const newTotal = itemPrice * quantity;
          
          return {
            items: state.items.map(item =>
              item.id === productId
                ? { ...item, quantity }
                : item
            ),
            total: state.total - oldTotal + newTotal
          };
        });
      },
      clearCart: () => {
        set({ items: [], total: 0 });
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);

const CartContext = createContext<CartStore | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  return (
    <CartContext.Provider value={useCartStore()}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
}