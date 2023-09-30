import express from 'express';
import cors from 'cors';

import { UserRoutes, AdressRoutes } from './routes';
import { sequelize } from './db/conm'; // Importe a instância sequelize corretamente

const app = express();
const PORT = 4000; // Use uma variável para o número da porta

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(UserRoutes);
app.use(AdressRoutes);

sequelize
  .sync()
  // .sync({
  //   force: true
  // }) // força recriar tabelas, limpas (só usar em desenvolvimento, nunca em produção)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
