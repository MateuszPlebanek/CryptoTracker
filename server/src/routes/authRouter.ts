import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../database';
import type { Request, Response } from 'express';
import type { RowDataPacket } from 'mysql2';

const router = express.Router();

interface User extends RowDataPacket {
  id: number;
  email: string;
  pseudo: string;
  password: string;
}

// Inscription
router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { email, pseudo, password } = req.body;

  try {
    const [existingUsers] = await pool.query<User[]>(
      'SELECT * FROM users WHERE email = ? OR pseudo = ?',
      [email, pseudo]
    );

    if (existingUsers.length > 0) {
      res.status(400).json({ message: 'Utilisateur déjà existant' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      'INSERT INTO users (email, pseudo, password) VALUES (?, ?, ?)',
      [email, pseudo, hashedPassword]
    );

    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Connexion
router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const [users] = await pool.query<User[]>(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    const user = users[0];

    if (!user) {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ message: 'Mot de passe incorrect' });
      return;
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, pseudo: user.pseudo },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Connexion réussie', token });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

export default router;
