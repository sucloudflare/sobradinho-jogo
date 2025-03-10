import jwt from 'jsonwebtoken';
import { authConfig } from '../config/auth.js';

export function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ 
      error: 'Token não fornecido' 
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = jwt.verify(token, authConfig.jwt.secret);
    
    request.user = {
      id: userId
    };

    return next();
  } catch {
    return response.status(401).json({ 
      error: 'Token inválido' 
    });
  }
}