// controllers/userController.js

import User from '../models/User.js';

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Fetch user by ID, exclude password
    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Get User Error:', error.message);
    res.status(500).json({ error: 'Server Error' });
  }
};
