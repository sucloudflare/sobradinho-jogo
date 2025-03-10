import { z } from 'zod';
import Stripe from 'stripe';
import { stripeConfig } from '../config/stripe.js';

const stripe = new Stripe(stripeConfig.secretKey);

export class CheckoutController {
  async createSession(request, response) {
    const bodySchema = z.object({
      items: z.array(z.object({
        id: z.string(),
        quantity: z.number()
      })),
      successUrl: z.string().url(),
      cancelUrl: z.string().url()
    });

    const { items, successUrl, cancelUrl } = bodySchema.parse(request.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl
    });

    return response.json({ sessionId: session.id });
  }

  async createPixPayment(request, response) {
    const bodySchema = z.object({
      amount: z.number(),
      description: z.string()
    });

    const { amount, description } = bodySchema.parse(request.body);

    // Mock PIX QR Code generation for development
    const pixQRCode = {
      qrcode: 'mock-qr-code',
      expires_at: new Date(Date.now() + 30 * 60 * 1000) // 30 minutes
    };

    return response.json({ 
      qrCode: pixQRCode.qrcode,
      expiresAt: pixQRCode.expires_at
    });
  }
}