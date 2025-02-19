import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.get("/", (req, res) => {
  res.send("Hello, serveur en TypeScript !");
});

app.listen(port, () => {
  console.log('Serveur lancé sur http://localhost:3000');
});
