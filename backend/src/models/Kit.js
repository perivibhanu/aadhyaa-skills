import mongoose from 'mongoose';

const kitSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    tagline: { type: String },
    category: { type: String, required: true },
    badge: { type: String },
    priceINR: { type: Number, required: true },
    description: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
      default: 'Beginner',
    },
    targetProjects: [{ type: String }],
    componentsIncluded: [
      {
        name: { type: String, required: true },
        qty: { type: Number, default: 1 },
        spec: { type: String },
      },
    ],
    learningOutcomes: [{ type: String }],
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Kit = mongoose.model('Kit', kitSchema);

