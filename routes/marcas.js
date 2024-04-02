import express from 'express';
import { promises as fs } from 'fs';
const router = express.Router();

const { readFile } = fs;

export default router;
