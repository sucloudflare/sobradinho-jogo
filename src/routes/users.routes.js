import { Router } from 'express';

export const usersRoutes = Router();

usersRoutes.post('/', (req, res) => {
  res.status(201).json({ message: 'Usuário criado com sucesso' });
});