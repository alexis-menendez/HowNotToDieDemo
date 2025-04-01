//file path: HowNotToDieDemo/how-not-to-die/server/src/models/user.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/connection.js'; // Adjust the path to Sequelize instance

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;

}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users', //  match the lowercase table in  DB
    timestamps: false,  // set to true if table has createdAt/updatedAt
  }
);

export default User;
