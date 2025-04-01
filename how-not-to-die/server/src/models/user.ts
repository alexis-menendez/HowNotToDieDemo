import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/connection.js'; // Adjust the path to your Sequelize instance

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;

  // Optional fields if you ever add timestamps
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;
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
    tableName: 'users', // ✅ match the lowercase table in your DB
    timestamps: false,  // ✅ set to true if your table has createdAt/updatedAt
  }
);

export default User;
