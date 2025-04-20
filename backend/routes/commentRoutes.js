import express from 'express';
import Comment from '../models/Comment.js';

const router = express.Router();

// POST: Add a comment
router.post('/', async (req, res) => {
  try {
    const { author, bucketItem, text } = req.body;

    const newComment = new Comment({ author, bucketItem, text });
    await newComment.save();

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to post comment' });
  }
});

// GET: Comments for a bucket item
router.get('/:bucketItemId', async (req, res) => {
  try {
    const comments = await Comment.find({ bucketItem: req.params.bucketItemId })
      .populate('author', 'name')
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

export default router;
