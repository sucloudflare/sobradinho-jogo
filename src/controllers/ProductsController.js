import { z } from 'zod';
import { ProductsService } from '../services/ProductsService.js';

export class ProductsController {
  async index(request, response) {
    const { category, subcategory } = request.query;
    
    const products = await ProductsService.findAll({ category, subcategory });
    
    return response.json(products);
  }

  async show(request, response) {
    const paramsSchema = z.object({
      id: z.string().uuid()
    });

    const { id } = paramsSchema.parse(request.params);
    
    const product = await ProductsService.findById(id);
    
    return response.json(product);
  }

  async create(request, response) {
    const bodySchema = z.object({
      name: z.string(),
      price: z.number(),
      description: z.string(),
      category: z.string(),
      subcategory: z.string().optional(),
      image: z.string().url(),
      featured: z.boolean().default(false),
      isNew: z.boolean().default(false),
      onSale: z.boolean().default(false)
    });

    const data = bodySchema.parse(request.body);
    
    const product = await ProductsService.create(data);
    
    return response.status(201).json(product);
  }
}