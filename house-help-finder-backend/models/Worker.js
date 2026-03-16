const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
    },
    serviceType: {
      type: String,
      required: [true, 'Service type is required'],
      enum: ['maid', 'cook', 'driver', 'babysitter', 'cleaner', 'gardener'],
      lowercase: true,
    },
    experience: {
      type: String,
      required: [true, 'Experience is required'],
      enum: ['0–1 year', '1–3 years', '3–5 years', '5+ years'],
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    area: {
      type: String,
      trim: true,
      default: '',
    },
    expectedSalary: {
      type: Number,
      required: [true, 'Salary is required'],
      min: 0,
    },
    availability: {
      type: String,
      enum: ['full-time', 'part-time', 'live-in'],
      default: 'full-time',
    },
    about: {
      type: String,
      trim: true,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

workerSchema.index({ city: 1, serviceType: 1 });

module.exports = mongoose.model('Worker', workerSchema);