// file path: how-not-to-die/server/src/config/connection.ts

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

let sequelize: Sequelize;

if (process.env.DATABASE_URL) {
  // Render/Production environment
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  
  //  Local development
  sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );
}

export default sequelize;
