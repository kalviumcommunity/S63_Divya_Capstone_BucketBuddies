import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  color: { type: String, default: '#ccc' } // Optional for UI badges
}, { timestamps: true });

const Tag = mongoose.model('Tag', tagSchema);
export default Tag;
