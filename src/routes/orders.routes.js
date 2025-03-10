import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/auth.js';

export const ordersRoutes = Router();

ordersRoutes.use(ensureAuthenticated);

ordersRoutes.get('/', (req, res) => {
  res.json([]);
});