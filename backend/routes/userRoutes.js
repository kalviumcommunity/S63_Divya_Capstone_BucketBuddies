// routes/userRoutes.js

import express from 'express';
import { getUserById, updateUserById } from '../controllers/userController.js';

const router = express.Router();

// GET /api/users/:id
router.get('/:id', getUserById);

// ➕ Add this PUT route
router.put('/:id', updateUserById);

export default router;
