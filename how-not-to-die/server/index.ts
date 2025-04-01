import express from 'express';
import authRoutes from './src/routes/auth-routes.js';

const app = express();
app.use(express.json());

// ✅ Correct usage
app.use('/auth', authRoutes); // mounts /auth/register

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
