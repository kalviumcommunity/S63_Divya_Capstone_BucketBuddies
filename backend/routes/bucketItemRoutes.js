import express from 'express';
import BucketItem from '../models/BucketItem.js';

const router = express.Router();

// POST: Create a bucket item
router.post('/', async (req, res) => {
  try {
    const { user, title, description, category, dueDate, visibility } = req.body;

    const newItem = new BucketItem({
      user,
      title,
      description,
      category,
      dueDate,
      visibility
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create bucket item' });
  }
});

// GET: Fetch all bucket items
router.get('/', async (req, res) => {
  try {
    const items = await BucketItem.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bucket items' });
  }
});

export default router;
