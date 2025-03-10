import { Router } from 'express';
import { CheckoutController } from '../controllers/CheckoutController.js';

export const checkoutRoutes = Router();
const checkoutController = new CheckoutController();

checkoutRoutes.post('/session', checkoutController.createSession);
checkoutRoutes.post('/pix', checkoutController.createPixPayment);