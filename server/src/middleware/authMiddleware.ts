import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import type { AuthRequest } from '../types/AuthRequest';

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1]; // Récupérer le token

  if (!token) {
    res.status(401).json({ message: 'Accès refusé, token manquant' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number; email: string; pseudo: string };
    req.user = decoded; // Ajouter l'utilisateur déchiffré à la requête
    next(); // Passer à la suite
  } catch (error) {
    res.status(403).json({ message: 'Token invalide' });
  }
};

export default authMiddleware;
