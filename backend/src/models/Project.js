import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    tagline: { type: String },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String },
    recommendedKit: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Intermediate',
    },
    keyComponents: [{ type: String }],
    features: [{ type: String }],
    applications: [{ type: String }],
    schematicOverview: { type: String },
    starterCode: {
      language: { type: String, default: 'cpp' },
      code: { type: String },
    },
  },
  { timestamps: true }
);

export const Project = mongoose.model('Project', projectSchema);

