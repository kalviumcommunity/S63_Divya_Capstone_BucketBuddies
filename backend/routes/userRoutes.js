// routes/userRoutes.js

import express from 'express';
import { getUserById } from '../controllers/userController.js';

const router = express.Router();

// GET /api/users/:id
router.get('/:id', getUserById);

export default router;
