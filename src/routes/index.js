import { Router } from 'express';
import { productsRoutes } from './products.routes.js';
import { categoriesRoutes } from './categories.routes.js';
import { ordersRoutes } from './orders.routes.js';
import { usersRoutes } from './users.routes.js';
import { authRoutes } from './auth.routes.js';
import { checkoutRoutes } from './checkout.routes.js';

export const routes = Router();

routes.use('/products', productsRoutes);
routes.use('/categories', categoriesRoutes);
routes.use('/orders', ordersRoutes);
routes.use('/users', usersRoutes);
routes.use('/auth', authRoutes);
routes.use('/checkout', checkoutRoutes);