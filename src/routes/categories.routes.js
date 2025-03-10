import { Router } from 'express';

export const categoriesRoutes = Router();

categoriesRoutes.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Lançamentos' },
    { id: 2, name: 'Masculino' },
    { id: 3, name: 'Feminino' },
    { id: 4, name: 'Esportes' }
  ]);
});