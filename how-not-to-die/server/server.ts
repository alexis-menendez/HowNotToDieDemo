import express from "express";
import { Sequelize, DataTypes, Model } from "sequelize";
//import cors from 'cors';

import dotenv from "dotenv";

// Load .env config
dotenv.config();

const app = express();
const PORT = 3001;

//app.use(cors());
app.use(express.json());

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.DB_USER || "",
  process.env.DB_PASSWORD || "",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

// Define Planet model
class Planet extends Model {}
Planet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },
    hostility: {
      type: DataTypes.STRING,
    },
    exploration: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Planet",
    tableName: "planet",
    timestamps: false,
  }
);

class Users extends Model {}
Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Users",
    tableName: "users",
    timestamps: false,
  }
);

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL via Sequelize"))
  .catch((err) => console.error("Unable to connect to database:", err));

// API route to fetch planets
app.get("/api/planets", async (_req, res) => {
  try {
    const planets = await Planet.findAll();
    res.json(planets);
  } catch (error) {
    console.error("Error fetching planets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/users", async (_, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
