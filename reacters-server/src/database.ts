require('dotenv').config();
import { Sequelize } from 'sequelize-typescript';
import models from './models';

function setup() {
  const { DB_HOST, DB_USER, DB_PASS, DB_PASSWORD, DB_DATABASE } = process.env;
  if (!DB_HOST || !DB_USER || !DB_PASS || !DB_PASSWORD || !DB_DATABASE) {
    throw new Error('ENVVAR missing');
  }
  const sequelize = new Sequelize({
    database: DB_DATABASE,
    dialect: 'postgres',
    username: DB_USER,
    password: DB_PASS
  });

  sequelize.addModels(models);

  return sequelize;
}

const database = setup();

export default database;
