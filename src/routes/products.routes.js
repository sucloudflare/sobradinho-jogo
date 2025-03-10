import { Router } from 'express';
import { ProductsController } from '../controllers/ProductsController.js';

export const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get('/', productsController.index);
productsRoutes.get('/:id', productsController.show);
productsRoutes.post('/', productsController.create);