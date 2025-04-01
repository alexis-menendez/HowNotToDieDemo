//file path: HowNotToDieDemo/how-not-to-die/server/src/config/connect.ts

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
