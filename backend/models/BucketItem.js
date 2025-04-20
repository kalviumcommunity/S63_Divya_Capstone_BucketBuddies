const mongoose = require("mongoose");

const bucketItemSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    visibility: {
      type: String,
      enum: ["public", "private", "friends"],
      default: "public"
    },
    dueDate: {
      type: Date
    },
    category: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("BucketItem", bucketItemSchema);
