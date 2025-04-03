//file path: HowNotToDieDemo/how-not-to-die/server/src/routes/auth-routes.ts

import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.js'; 
import { generateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  console.log('📬 Received register request:', username);

  let status = 200;
  let response: object = {};

  try {
    const existingUser = await User.findOne({ where: { username } });
    console.log('🔎 Checking for existing user:', !!existingUser);

    if (existingUser) {
      console.log('⚠️ Username already taken:', username);
      status = 409;
      response = { error: 'Username already exists' };
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log('🔐 Hashed password:', hashedPassword);

      const newUser = await User.create({ username, password: hashedPassword });
      console.log('📦 New user created with ID:', newUser.id);

      const token = generateToken(newUser.id);
      console.log('✅ Registration successful for:', username);

      response = { token, user: newUser };
    }
  } catch (err) {
    console.error('❌ Registration failed:', err);
    status = 500;
    response = { error: 'Registration failed' };
  }

  res.status(status).json(response);
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('🔐 Login attempt for:', username);

  let status = 200;
  let response: object = {};

  try {
    const user = await User.findOne({ where: { username } });
    console.log('🔎 User lookup result:', !!user);

    if (!user) {
      console.log('❌ No user found with that username');
      status = 401;
      response = { error: 'Invalid credentials' };
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      console.log('🔍 Password match result:', passwordMatch);

      if (!passwordMatch) {
        console.log('❌ Password incorrect for user:', username);
        status = 401;
        response = { error: 'Invalid credentials' };
      } else {
        const token = generateToken(user.id);
        console.log('✅ Login successful for:', username);
        response = { token, user };
      }
    }
  } catch (err) {
    console.error('❌ Login failed with error:', err);
    status = 500;
    response = { error: 'Login failed' };
  }

  res.status(status).json(response);
});

export default router;
