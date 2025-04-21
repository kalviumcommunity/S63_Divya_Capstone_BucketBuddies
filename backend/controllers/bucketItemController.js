const BucketItem = require('../models/BucketItem');
const Tag = require('../models/Tag');

const createBucketItem = async (req, res) => {
  try {
    const { title, description, dueDate, category, visibility } = req.body;
    const userId = req.user.id;

    let tagIds = [];

    // Auto-convert category to a tag
    if (category) {
      // Check if tag already exists
      let tag = await Tag.findOne({ name: category.trim().toLowerCase() });

      // If tag doesn't exist, create it
      if (!tag) {
        tag = await Tag.create({
          name: category.trim().toLowerCase(),
          color: '#888' // default color
        });
      }

      tagIds.push(tag._id);
    }

    const newItem = new BucketItem({
      title,
      description,
      dueDate,
      category,
      visibility,
      tags: tagIds,
      user: userId
    });

    await newItem.save();

    res.status(201).json({ message: 'Bucket item created successfully', newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

module.exports = {
  createBucketItem
};
