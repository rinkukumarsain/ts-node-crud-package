// src/index.ts
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const createServer = (mongoUri: string): Application => {
  const app: Application = express();

  app.use(bodyParser.json());
  app.use('/users', userRoutes);

  mongoose.connect(mongoUri, {
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Node.js!');
  });

  return app;
};

export default createServer;
