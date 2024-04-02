import express from 'express';
import marcasRouter from './routes/marcas.js';
import { promises as fs } from 'fs';

const { readFile } = fs;

const app = express();

app.use(express.json());
app.use('/marcas', marcasRouter);

app.listen(3000, async () => {
  try {
    await readFile('car-list.json');
  } catch (err) {
    console.log(err);
  }
  console.log('API Started!');
});
