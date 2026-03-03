import Admission from '../models/Admission.js';
import Student from '../models/Student.js';
import User from '../models/User.js';

export const getAllAdmissions = async (req, res) => {
  try {
    const { status, course, department } = req.query;

    let query = {};
    if (status) query.status = status;
    if (course) query.course = course;
    if (department) query.department = department;

    const admissions = await Admission.find(query)
      .populate('course', 'name code')
      .populate('department', 'name code')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: admissions.length,
      data: admissions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAdmissionById = async (req, res) => {
  try {
    const admission = await Admission.findById(req.params.id)
      .populate('course', 'name code')
      .populate('department', 'name code')
      .populate('studentId', 'rollNumber name');

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: 'Admission not found',
      });
    }

    res.status(200).json({
      success: true,
      data: admission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createAdmission = async (req, res) => {
  try {
    // Generate application number
    const count = await Admission.countDocuments();
    const applicationNumber = `APP${new Date().getFullYear()}${String(count + 1).padStart(4, '0')}`;

    const admissionData = {
      ...req.body,
      applicationNumber,
    };

    const admission = await Admission.create(admissionData);

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: admission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateAdmission = async (req, res) => {
  try {
    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: 'Admission not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Admission updated successfully',
      data: admission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteAdmission = async (req, res) => {
  try {
    const admission = await Admission.findByIdAndDelete(req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: 'Admission not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Admission deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateAdmissionStatus = async (req, res) => {
  try {
    const { status, remarks } = req.body;

    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      { status, remarks },
      { new: true, runValidators: true }
    );

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: 'Admission not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Status updated successfully',
      data: admission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAdmissionStats = async (req, res) => {
  try {
    const stats = await Admission.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    const total = await Admission.countDocuments();

    res.status(200).json({
      success: true,
      total,
      stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
