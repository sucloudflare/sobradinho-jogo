import { createContext, useContext, ReactNode } from 'react';
import { create } from 'zustand';

interface Order {
  id: string;
  status: 'preparing' | 'ready' | 'delivering' | 'delivered';
  items: any[];
  total: number;
}

interface Location {
  lat: number;
  lng: number;
}

interface OrderTrackingStore {
  order: Order;
  deliveryLocation: Location;
  updateOrderStatus: (status: Order['status']) => void;
  updateDeliveryLocation: (location: Location) => void;
}

const useOrderTrackingStore = create<OrderTrackingStore>((set) => ({
  order: {
    id: '1',
    status: 'preparing',
    items: [],
    total: 0,
  },
  deliveryLocation: {
    lat: -23.550520,
    lng: -46.633308,
  },
  updateOrderStatus: (status) => set((state) => ({
    order: { ...state.order, status }
  })),
  updateDeliveryLocation: (location) => set({ deliveryLocation: location }),
}));

const OrderTrackingContext = createContext({} as OrderTrackingStore);

export function OrderTrackingProvider({ children }: { children: ReactNode }) {
  return (
    <OrderTrackingContext.Provider value={useOrderTrackingStore()}>
      {children}
    </OrderTrackingContext.Provider>
  );
}

export const useOrderTracking = () => useContext(OrderTrackingContext);