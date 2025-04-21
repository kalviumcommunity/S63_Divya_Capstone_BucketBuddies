import express from 'express';
import BucketItem from '../models/BucketItem.js';
import Tag from '../models/Tag.js';

const router = express.Router();

// POST: Create a bucket item and auto-create related tag
router.post('/', async (req, res) => {
  try {
    const { user, title, description, category, dueDate, visibility } = req.body;

    let tagId = null;

    // If category is provided, check for a matching tag or create one
    if (category) {
      const categoryName = category.trim().toLowerCase();

      let tag = await Tag.findOne({ name: categoryName });

      if (!tag) {
        tag = await Tag.create({ name: categoryName, color: '#888' }); // default color
      }

      tagId = tag._id;
    }

    const newItem = new BucketItem({
      user,
      title,
      description,
      category,
      dueDate,
      visibility,
      tags: tagId ? [tagId] : []
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error('Error creating bucket item:', err);
    res.status(500).json({ error: 'Failed to create bucket item' });
  }
});

// GET: Fetch all bucket items
router.get('/', async (req, res) => {
  try {
    const items = await BucketItem.find()
      .populate('user', 'name email')
      .populate('tags', 'name color') // populate tag info
      .sort({ createdAt: -1 });

    res.status(200).json(items);
  } catch (err) {
    console.error('Error fetching bucket items:', err);
    res.status(500).json({ error: 'Failed to fetch bucket items' });
  }
});

export default router;
