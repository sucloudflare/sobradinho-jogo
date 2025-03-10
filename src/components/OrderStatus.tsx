import React from 'react';
import { Check, Clock, Truck, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

interface OrderStatusProps {
  status: 'preparing' | 'ready' | 'delivering' | 'delivered';
}

export function OrderStatus({ status }: OrderStatusProps) {
  const steps = [
    {
      icon: ChefHat,
      label: 'Preparando',
      status: 'preparing',
    },
    {
      icon: Check,
      label: 'Pronto',
      status: 'ready',
    },
    {
      icon: Truck,
      label: 'Em Entrega',
      status: 'delivering',
    },
    {
      icon: Clock,
      label: 'Entregue',
      status: 'delivered',
    },
  ];

  const currentStep = steps.findIndex(step => step.status === status);

  return (
    <div className="space-y-8">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index <= currentStep;
        
        return (
          <motion.div
            key={step.status}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center gap-4"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isActive ? 'bg-red-500' : 'bg-zinc-800'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
            </div>
            
            <div>
              <h4 className={`font-medium ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                {step.label}
              </h4>
              {isActive && (
                <p className="text-sm text-zinc-400">
                  {status === step.status ? 'Em andamento' : 'Concluído'}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}