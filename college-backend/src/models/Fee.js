import mongoose from 'mongoose';

const feeSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    feeType: {
      type: String,
      enum: ['admission', 'tuition', 'exam', 'library', 'hostel', 'sports', 'other'],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    dueAmount: {
      type: Number,
      required: true,
    },
    paidAmount: {
      type: Number,
      default: 0,
    },
    semester: {
      type: Number,
    },
    year: {
      type: Number,
    },
    dueDate: {
      type: Date,
    },
    paidDate: {
      type: Date,
    },
    paymentMode: {
      type: String,
      enum: ['cash', 'online', 'check', 'draft'],
    },
    transactionId: {
      type: String,
    },
    status: {
      type: String,
      enum: ['pending', 'partial', 'paid', 'overdue'],
      default: 'pending',
    },
    remarks: {
      type: String,
    },
    receiptNumber: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Fee = mongoose.model('Fee', feeSchema);
export default Fee;
