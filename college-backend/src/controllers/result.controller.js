import Result from '../models/Result.js';
import { generateResultPDF } from '../utils/pdfGenerator.js';

export const getAllResults = async (req, res) => {
  try {
    const { studentId, semester, year, examType } = req.query;

    let query = {};
    if (studentId) query.studentId = studentId;
    if (semester) query.semester = parseInt(semester);
    if (year) query.year = parseInt(year);
    if (examType) query.examType = examType;

    const results = await Result.find(query)
      .populate('studentId', 'rollNumber name email')
      .populate('course', 'name code')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id)
      .populate('studentId', 'rollNumber name email department course')
      .populate('declaredBy', 'name designation');

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Result not found',
      });
    }

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createResult = async (req, res) => {
  try {
    const { subjects, studentId, rollNumber, maxMarks } = req.body;

    // Calculate total and percentage
    const totalMarks = subjects.reduce((sum, sub) => sum + sub.marksObtained, 0);
    const percentage = (totalMarks / maxMarks) * 100;

    // Calculate grade
    let grade, status;
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B+';
    else if (percentage >= 60) grade = 'B';
    else if (percentage >= 50) grade = 'C+';
    else if (percentage >= 40) grade = 'C';
    else grade = 'F';

    status = grade === 'F' ? 'fail' : 'pass';

    const resultData = {
      ...req.body,
      totalMarks,
      percentage,
      grade,
      status,
      declaredBy: req.user.id,
    };

    const result = await Result.create(resultData);

    res.status(201).json({
      success: true,
      message: 'Result created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateResult = async (req, res) => {
  try {
    const { subjects, maxMarks } = req.body;

    if (subjects && maxMarks) {
      const totalMarks = subjects.reduce((sum, sub) => sum + sub.marksObtained, 0);
      const percentage = (totalMarks / maxMarks) * 100;

      let grade, status;
      if (percentage >= 90) grade = 'A+';
      else if (percentage >= 80) grade = 'A';
      else if (percentage >= 70) grade = 'B+';
      else if (percentage >= 60) grade = 'B';
      else if (percentage >= 50) grade = 'C+';
      else if (percentage >= 40) grade = 'C';
      else grade = 'F';

      status = grade === 'F' ? 'fail' : 'pass';

      req.body.totalMarks = totalMarks;
      req.body.percentage = percentage;
      req.body.grade = grade;
      req.body.status = status;
    }

    const result = await Result.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Result not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Result updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteResult = async (req, res) => {
  try {
    const result = await Result.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Result not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Result deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getResultByStudent = async (req, res) => {
  try {
    const results = await Result.find({ studentId: req.params.studentId })
      .sort({ year: -1, semester: -1 });

    res.status(200).json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const downloadResultPDF = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id)
      .populate('studentId', 'rollNumber name email department course');

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Result not found',
      });
    }

    const pdf = await generateResultPDF(result);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=result_${result.rollNumber}.pdf`);
    res.send(pdf);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getResultStats = async (req, res) => {
  try {
    const stats = await Result.aggregate([
      {
        $group: {
          _id: { semester: '$semester', year: '$year' },
          totalStudents: { $sum: 1 },
          passedStudents: {
            $sum: { $cond: [{ $eq: ['$status', 'pass'] }, 1, 0] },
          },
          averagePercentage: { $avg: '$percentage' },
        },
      },
      { $sort: { '_id.year': -1, '_id.semester': -1 } },
    ]);

    res.status(200).json({
      success: true,
      stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
