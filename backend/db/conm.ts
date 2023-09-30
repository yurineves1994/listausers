import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('nodesequelize2', 'root', '', {
  host: '172.17.0.2',
  dialect: 'mysql',
  port: 3306,
});

// Tente autenticar a conexão (opcional)
sequelize
  .authenticate()
  .then(() => {
    console.log('Conectamos com sucesso com o Sequelize!');
  })
  .catch((error) => {
    console.error('Não foi possível conectar:', error);
  });