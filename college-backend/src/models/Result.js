import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
    semester: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    examType: {
      type: String,
      enum: ['midterm', 'final', 'supplementary'],
      default: 'final',
    },
    subjects: [{
      subjectCode: String,
      subjectName: String,
      marksObtained: {
        type: Number,
        required: true,
      },
      maxMarks: {
        type: Number,
        default: 100,
      },
      credits: Number,
    }],
    totalMarks: {
      type: Number,
      required: true,
    },
    maxMarks: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      enum: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'F'],
      required: true,
    },
    status: {
      type: String,
      enum: ['pass', 'fail'],
      required: true,
    },
    rank: {
      type: Number,
    },
    remarks: {
      type: String,
    },
    declaredDate: {
      type: Date,
      default: Date.now,
    },
    declaredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Faculty',
    },
  },
  {
    timestamps: true,
  }
);

const Result = mongoose.model('Result', resultSchema);
export default Result;
