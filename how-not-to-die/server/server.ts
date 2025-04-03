// file path: HowNotToDieDemo/how-not-to-die/server/server.ts

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from './src/routes/auth-routes.js';
import sequelize from './src/config/connection.js'; // Use shared connection

import { DataTypes, Model } from "sequelize";

dotenv.config();

const app = express();
const PORT = 3001;

// Allow all origins (for development only)
app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use('/auth', authRoutes);

// === Sequelize Models ===

class Planet extends Model { }
Planet.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    hostility: { type: DataTypes.STRING },
    exploration: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: "Planet",
    tableName: "planet",
    timestamps: false,
  }
);

class LandingSpot extends Model { }
LandingSpot.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    planet_id: { type: DataTypes.INTEGER, references: { model: Planet, key: "id" } },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    flora: { type: DataTypes.STRING },
    fauna: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: "LandingSpot",
    tableName: "landingspot",
    timestamps: false,
  }
);

class Flora extends Model { }
Flora.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    planet_id: { type: DataTypes.INTEGER, references: { model: Planet, key: "id" } },
  },
  {
    sequelize,
    modelName: "Flora",
    tableName: "flora",
    timestamps: false,
  }
);

class Fauna extends Model { }
Fauna.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    planet_id: { type: DataTypes.INTEGER, references: { model: Planet, key: "id" } },
  },
  {
    sequelize,
    modelName: "Fauna",
    tableName: "fauna",
    timestamps: false,
  }
);

class Unexplained extends Model { }
Unexplained.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    planet_id: { type: DataTypes.INTEGER, references: { model: Planet, key: "id" } },
  },
  {
    sequelize,
    modelName: "Unexplained",
    tableName: "unexplained",
    timestamps: false,
  }
);

class Users extends Model { }
Users.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false },
  },
  {
    sequelize,
    modelName: "Users",
    tableName: "users",
    timestamps: false,
  }
);

// === API Routes ===

app.get("/api/planets", async (_req, res) => {
  try {
    const planets = await Planet.findAll();
    console.log(planets, "planets");
    res.json(planets);
  } catch (error) {
    console.error("Error fetching planets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/landingspot", async (_req, res) => {
  try {
    const landingspot = await LandingSpot.findAll();
    console.log(landingspot, "landingspot");
    res.json(landingspot);
  } catch (error) {
    console.error("Error fetching the landingspot:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/flora", async (_req, res) => {
  try {
    const flora = await Flora.findAll();
    console.log(flora, "flora");
    res.json(flora);
  } catch (error) {
    console.error("Error fetching flora:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/fauna", async (_req, res) => {
  try {
    const fauna = await Fauna.findAll();
    console.log(fauna, "fauna");
    res.json(fauna);
  } catch (error) {
    console.error("Error fetching fauna:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/unexplained", async (_req, res) => {
  try {
    const unexplained = await Unexplained.findAll();
    console.log(unexplained, "unexplained");
    res.json(unexplained);
  } catch (error) {
    console.error("Error fetching the unexplained mysteries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/users", async (_req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// === Start Server ===

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to PostgreSQL via Sequelize");
    return sequelize.sync(); // Optional sync for dev
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to database:", err);
  });
