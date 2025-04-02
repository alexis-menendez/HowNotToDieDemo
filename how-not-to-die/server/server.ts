//file path: HowNotToDieDemo/how-not-to-die/server/server.ts

import express from "express";
import authRoutes from './src/routes/auth-routes.js';
import { Sequelize, DataTypes, Model } from "sequelize";
//import cors from 'cors';

import dotenv from 'dotenv';

// Load .env config
dotenv.config();


const app = express();
const PORT = 3001;

//app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

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
// landing spot
class LandingSpot extends Model {}
LandingSpot.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    planet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Planet,
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    flora: {
      type: DataTypes.STRING,
    },
    fauna: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "LandingSpot",
    tableName: "landingspot",
    timestamps: false,
  }
);

// flora
class Flora extends Model {}
Flora.init(
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
    planet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Planet,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Flora",
    tableName: "flora",
    timestamps: false,
  }
);

class Fauna extends Model {}
Fauna.init(
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
    planet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Planet,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Fauna",
    tableName: "fauna",
    timestamps: false,
  }
);


//unexplained
class Unexplained extends Model {}
Unexplained.init(
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
    planet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Planet,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Unexplained",
    tableName: "unexplained",
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
    console.log(planets, "planets"); // Log the fetched planets
    res.json(planets);
  } catch (error) {
    console.error("Error fetching planets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to fetch flora
app.get("/api/landingspot", async (_req, res) => {
  try {
    const landingspot = await LandingSpot.findAll(); // Fetch all flora from the database
    console.log(landingspot, "landingspot"); // Log the fetched flora
    res.json(landingspot); // Send flora as JSON
  } catch (error) {
    console.error("Error fetching the landingspot:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/flora", async (_req, res) => {
  try {
    const flora = await Flora.findAll(); // Fetch all flora from the database
    console.log(flora, "flora");
    res.json(flora); // Send flora as JSON
  } catch (error) {
    console.error("Error fetching flora:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to fetch fauna
app.get("/api/fauna", async (_req, res) => {
  try {
    const fauna = await Fauna.findAll(); // Fetch all fauna from the database
    console.log(fauna, "fauna");
    res.json(fauna); // Send fauna as JSON
  } catch (error) {
    console.error("Error fetching fauna:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



// API route to fetch fauna
app.get("/api/unexplained", async (_req, res) => {
  try {
    const unexplained = await Unexplained.findAll(); // Fetch all fauna from the database
    console.log(unexplained, "unexplained");
    res.json(unexplained); // Send fauna as JSON
  } catch (error) {
    console.error("Error fetching the unexplained mysteries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API to fetch users
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
