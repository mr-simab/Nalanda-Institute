import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
    applicationNumber: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    category: {
      type: String,
      enum: ['general', 'obc', 'sc', 'st', 'ews'],
      default: 'general',
    },
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
    previousEducation: {
      qualification: String,
      board: String,
      year: Number,
      percentage: Number,
    },
    documents: {
      photo: String,
      marksheet10: String,
      marksheet12: String,
      transferCertificate: String,
      casteCertificate: String,
      otherDocuments: [String],
    },
    status: {
      type: String,
      enum: ['pending', 'under_review', 'approved', 'rejected', 'admitted'],
      default: 'pending',
    },
    remarks: {
      type: String,
    },
    feePaid: {
      type: Boolean,
      default: false,
    },
    applicationDate: {
      type: Date,
      default: Date.now,
    },
    admissionDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Admission = mongoose.model('Admission', admissionSchema);
export default Admission;
