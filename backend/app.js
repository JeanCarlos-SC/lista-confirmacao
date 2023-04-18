const express = require('express');
const { findAll, confirmConvidado, hideConvidado } = require('./service');

const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || '3000';

app.listen(PORT, () => {
  console.log(`Runing on ${PORT}`);
});

app.get('/convidados', async (_req, res, _next) => {
  const convidados = await findAll();
  res.status(200).json({ convidados });
});

app.put('/convidados/confirmar/:id', async (req, res, _next) => {
  const { id } = req.params;
  try {
    await confirmConvidado(id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
  res.status(200).send();
});

app.put('/convidados/esconder/:id', async (req, res, _next) => {
  const { id } = req.params;
  try {
    await hideConvidado(id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.status(200).send();
});