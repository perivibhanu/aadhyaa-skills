import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    institution: { type: String }, // College / School / Company
    inquiryType: {
      type: String,
      enum: ['Kit Purchase', 'Internship & Training', 'Final Year Project Guidance', 'Custom Workshop', 'General Inquiry'],
      default: 'Kit Purchase',
    },
    selectedItem: { type: String }, // e.g. "Robotics Kit", "Robotic ARM"
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ['New', 'In Review', 'Contacted', 'Closed'],
      default: 'New',
    },
  },
  { timestamps: true }
);

export const Inquiry = mongoose.model('Inquiry', inquirySchema);

