import express from 'express';
import { promises as fs } from 'fs';
const router = express.Router();

const { readFile } = fs;

router.get('/maisModelos', async (req, res) => {
  try {
    const data = JSON.parse(await readFile('car-list.json'));

    let maiorQuantidadeDeModelos = 0;
    let marcaComMaisModelos = '';

    data.forEach(brand => {
      if (brand.models.length > maiorQuantidadeDeModelos) {
        maiorQuantidadeDeModelos = brand.models.length;
        marcaComMaisModelos = brand.brand;
      }
    });
    res.send(marcaComMaisModelos);
  } catch (err) {
    console.log(err);
  }
});

export default router;
