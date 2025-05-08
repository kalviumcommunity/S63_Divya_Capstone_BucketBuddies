//routes/authRoutes.js

import express from 'express';
import { signup, login, googleAuth } from '../controllers/authController.js';

const router = express.Router();

// Regular signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Google authentication route
router.post('/google', googleAuth);

export default router;
