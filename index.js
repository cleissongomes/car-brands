import express from 'express';
import winston from 'winston';
import marcasRouter from './routes/marcas.js';
import { promises as fs } from 'fs';
import cors from 'cors';

const { readFile } = fs;

global.fileName = 'car-list.json';

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'car-brands-api.log' }),
  ],
  format: combine(label({ label: 'car-brands-api' }), timestamp(), myFormat),
});

const app = express();

app.use(express.json());
app.use(cors());
app.use('/marcas', marcasRouter);

app.listen(3000, async () => {
  try {
    await readFile(global.fileName);
  } catch (err) {
    logger.error(err);
  }
  logger.info('API Started!');
});
