import express from 'express';
import authMiddleware from '../middleware/authMiddleware';
import type { AuthRequest } from '../types/AuthRequest';
import type { Response } from 'express';

const router = express.Router();

router.get('/profile', authMiddleware, (req: AuthRequest, res: Response) => {
  res.json({
    message: `Bienvenue sur ton profil, ${req.user?.pseudo}`,
    user: req.user,
  });
});

export default router;
