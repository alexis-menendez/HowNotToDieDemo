import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/routes/auth-routes.js';
import userRoutes from './src/routes//api/user-routes.js';
import sequelize from './src/config/connection.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
