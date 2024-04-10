import express from 'express';
import { promises as fs } from 'fs';
const router = express.Router();

const { readFile } = fs;

router.get('/maisModelos', async (req, res, next) => {
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
    logger.info('GET /maisModelos');
  } catch (err) {
    next(err);
  }
});

router.get('/menosModelos', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile('car-list.json'));

    let menorQuantidadeDeModelos = 1000;
    let marcaComMenosModelos = '';

    data.forEach(brand => {
      if (brand.models.length < menorQuantidadeDeModelos) {
        menorQuantidadeDeModelos = brand.models.length;
        marcaComMenosModelos = brand.brand;
      }
    });
    res.send(marcaComMenosModelos);
    logger.info('GET /menosModelos');
  } catch (err) {
    next(err);
  }
});

router.get('/listaMaisModelos/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const data = JSON.parse(await readFile('car-list.json'));

    const contadorModelosPorMarca = {};
    data.forEach(brand => {
      contadorModelosPorMarca[brand.brand] = brand.models.length;
    });

    const marcasOrdenadas = Object.entries(contadorModelosPorMarca)
      .sort((a, b) => {
        if (b[1] !== a[1]) {
          return b[1] - a[1];
        }
        return a[0].localeCompare(b[0]);
      })
      .slice(0, id);

    const resultado = marcasOrdenadas.map(
      ([marca, quantidade]) => `${marca} - ${quantidade}`
    );

    res.send(resultado);
    logger.info('GET /listaMaisModelos');
  } catch (err) {
    next(err);
  }
});

router.get('/listaMenosModelos/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const data = JSON.parse(await readFile('car-list.json'));

    const contadorModelosPorMarca = {};
    data.forEach(brand => {
      contadorModelosPorMarca[brand.brand] = brand.models.length;
    });

    const marcasOrdenadas = Object.entries(contadorModelosPorMarca)
      .sort((a, b) => {
        if (a[1] !== b[1]) {
          return a[1] - b[1];
        }
        return a[0].localeCompare(b[0]);
      })
      .slice(0, id);

    const resultado = marcasOrdenadas.map(
      ([marca, quantidade]) => `${marca} - ${quantidade}`
    );
    res.send(resultado);
    logger.info('GET /listaMenosModelos');
  } catch (err) {
    next(err);
  }
});

router.post('/listaModelos', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile('car-list.json'));
    const brand = data.find(
      b => b.brand.toUpperCase() === req.body.nomeMarca.toUpperCase()
    );
    if (brand) {
      res.send(brand.models);
    } else {
      res.send([]);
    }
    logger.info('POST /listaModelos');
  } catch (err) {
    next(err);
  }
});

router.use((err, res, req, next) => {
  global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  console.log(err);
  res.status(400).send({ error: err.message });
});

export default router;
