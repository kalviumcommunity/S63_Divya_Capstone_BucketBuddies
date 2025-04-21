import Tag from '../models/Tag.js';

// Create a new tag
export const createTag = async (req, res) => {
  try {
    const { name, color } = req.body;
    const tag = new Tag({ name, color });
    await tag.save();
    res.status(201).json(tag);
  } catch (error) {
    res.status(400).json({ message: 'Tag creation failed', error });
  }
};

// Get all tags
export const getTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tags', error });
  }
};
