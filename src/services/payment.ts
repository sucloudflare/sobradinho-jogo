import { api } from './api';

export async function createPaymentIntent(amount: number) {
  const response = await api.post('/checkout/session', {
    amount,
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cart`
  });
  
  return response.data;
}

export async function processPixPayment(amount: number) {
  const response = await api.post('/checkout/pix', {
    amount,
    description: 'Compra LUXE Store'
  });
  
  return response.data;
}