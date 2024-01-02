require('dotenv').config();
import { Sequelize } from 'sequelize';

const URL = process.env.MYSQL;

const sequelize = new Sequelize(`${URL}`);

export default sequelize;