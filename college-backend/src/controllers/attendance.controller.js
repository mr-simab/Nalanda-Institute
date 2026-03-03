import Attendance from '../models/Attendance.js';

export const getAllAttendance = async (req, res) => {
  try {
    const { studentId, semester, year, month, subject } = req.query;

    let query = {};
    if (studentId) query.studentId = studentId;
    if (semester) query.semester = parseInt(semester);
    if (year) query.year = parseInt(year);
    if (month) query.month = parseInt(month);
    if (subject) query.subject = subject;

    const attendance = await Attendance.find(query)
      .populate('studentId', 'rollNumber name email')
      .populate('facultyId', 'name designation')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: attendance.length,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAttendanceById = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id)
      .populate('studentId', 'rollNumber name email department course')
      .populate('facultyId', 'name designation');

    if (!attendance) {
      return res.status(404).json({
        success: false,
        message: 'Attendance record not found',
      });
    }

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createAttendance = async (req, res) => {
  try {
    const { attendance } = req.body;

    const totalClasses = attendance.length;
    const attendedClasses = attendance.filter(a => a.status === 'present' || a.status === 'late').length;
    const percentage = totalClasses > 0 ? (attendedClasses / totalClasses) * 100 : 0;

    const attendanceData = {
      ...req.body,
      totalClasses,
      attendedClasses,
      percentage,
    };

    const record = await Attendance.create(attendanceData);

    res.status(201).json({
      success: true,
      message: 'Attendance recorded successfully',
      data: record,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateAttendance = async (req, res) => {
  try {
    const { attendance } = req.body;

    if (attendance) {
      const totalClasses = attendance.length;
      const attendedClasses = attendance.filter(a => a.status === 'present' || a.status === 'late').length;
      const percentage = totalClasses > 0 ? (attendedClasses / totalClasses) * 100 : 0;

      req.body.totalClasses = totalClasses;
      req.body.attendedClasses = attendedClasses;
      req.body.percentage = percentage;
    }

    const record = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Attendance record not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Attendance updated successfully',
      data: record,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteAttendance = async (req, res) => {
  try {
    const record = await Attendance.findByIdAndDelete(req.params.id);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Attendance record not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Attendance record deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAttendanceByStudent = async (req, res) => {
  try {
    const { month, year, subject } = req.query;
    const studentId = req.params.studentId;

    let query = { studentId };
    if (month) query.month = parseInt(month);
    if (year) query.year = parseInt(year);
    if (subject) query.subject = subject;

    const attendance = await Attendance.find(query)
      .sort({ year: -1, month: -1 });

    // Calculate overall attendance
    const totalClasses = attendance.reduce((sum, a) => sum + a.totalClasses, 0);
    const attendedClasses = attendance.reduce((sum, a) => sum + a.attendedClasses, 0);
    const overallPercentage = totalClasses > 0 ? (attendedClasses / totalClasses) * 100 : 0;

    res.status(200).json({
      success: true,
      overall: {
        totalClasses,
        attendedClasses,
        percentage: overallPercentage.toFixed(2),
      },
      count: attendance.length,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const markAttendance = async (req, res) => {
  try {
    const { date, status, subject } = req.body;
    const studentId = req.params.studentId;

    const studentAttendance = await Attendance.findOne({
      studentId,
      subject,
      month: new Date(date).getMonth() + 1,
      year: new Date(date).getFullYear(),
    });

    if (studentAttendance) {
      const existingRecord = studentAttendance.attendance.find(
        a => a.date.toDateString() === new Date(date).toDateString()
      );

      if (existingRecord) {
        existingRecord.status = status;
      } else {
        studentAttendance.attendance.push({ date, status });
      }

      studentAttendance.totalClasses = studentAttendance.attendance.length;
      studentAttendance.attendedClasses = studentAttendance.attendance.filter(
        a => a.status === 'present' || a.status === 'late'
      ).length;
      studentAttendance.percentage =
        studentAttendance.totalClasses > 0
          ? (studentAttendance.attendedClasses / studentAttendance.totalClasses) * 100
          : 0;

      await studentAttendance.save();
    } else {
      await Attendance.create({
        studentId,
        subject,
        month: new Date(date).getMonth() + 1,
        year: new Date(date).getFullYear(),
        attendance: [{ date, status }],
        totalClasses: 1,
        attendedClasses: status === 'present' || status === 'late' ? 1 : 0,
        percentage: status === 'present' || status === 'late' ? 100 : 0,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Attendance marked successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
