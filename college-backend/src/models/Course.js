import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ['undergraduate', 'postgraduate', 'diploma'],
      required: true,
    },
    totalSeats: {
      type: Number,
      default: 60,
    },
    availableSeats: {
      type: Number,
      default: 60,
    },
    fees: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    eligibility: {
      type: String,
    },
    subjects: [{
      name: String,
      code: String,
      credits: Number,
    }],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model('Course', courseSchema);
export default Course;
