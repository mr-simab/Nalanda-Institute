import Fee from '../models/Fee.js';

export const getAllFees = async (req, res) => {
  try {
    const { studentId, status, semester, year } = req.query;

    let query = {};
    if (studentId) query.studentId = studentId;
    if (status) query.status = status;
    if (semester) query.semester = parseInt(semester);
    if (year) query.year = parseInt(year);

    const fees = await Fee.find(query)
      .populate('studentId', 'rollNumber name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: fees.length,
      data: fees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFeeById = async (req, res) => {
  try {
    const fee = await Fee.findById(req.params.id)
      .populate('studentId', 'rollNumber name email department course');

    if (!fee) {
      return res.status(404).json({
        success: false,
        message: 'Fee record not found',
      });
    }

    res.status(200).json({
      success: true,
      data: fee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createFee = async (req, res) => {
  try {
    const fee = await Fee.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Fee record created successfully',
      data: fee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const payFee = async (req, res) => {
  try {
    const { paymentMode, transactionId, amount } = req.body;

    const fee = await Fee.findById(req.params.id);

    if (!fee) {
      return res.status(404).json({
        success: false,
        message: 'Fee record not found',
      });
    }

    fee.paidAmount += amount;
    fee.dueAmount -= amount;
    fee.paymentMode = paymentMode;
    fee.transactionId = transactionId;
    fee.paidDate = new Date();

    if (fee.dueAmount <= 0) {
      fee.status = 'paid';
      fee.dueAmount = 0;
    } else if (fee.paidAmount > 0) {
      fee.status = 'partial';
    }

    // Generate receipt number
    const count = await Fee.countDocuments();
    fee.receiptNumber = `REC${new Date().getFullYear()}${String(count).padStart(6, '0')}`;

    await fee.save();

    res.status(200).json({
      success: true,
      message: 'Fee payment successful',
      data: fee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateFee = async (req, res) => {
  try {
    const fee = await Fee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!fee) {
      return res.status(404).json({
        success: false,
        message: 'Fee record not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Fee updated successfully',
      data: fee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteFee = async (req, res) => {
  try {
    const fee = await Fee.findByIdAndDelete(req.params.id);

    if (!fee) {
      return res.status(404).json({
        success: false,
        message: 'Fee record not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Fee record deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFeeByStudent = async (req, res) => {
  try {
    const fees = await Fee.find({ studentId: req.params.studentId })
      .sort({ createdAt: -1 });

    const totalDue = fees.reduce((sum, fee) => sum + fee.dueAmount, 0);
    const totalPaid = fees.reduce((sum, fee) => sum + fee.paidAmount, 0);

    res.status(200).json({
      success: true,
      totalDue,
      totalPaid,
      count: fees.length,
      data: fees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFeeStats = async (req, res) => {
  try {
    const stats = await Fee.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          totalAmount: { $sum: '$amount' },
        },
      },
    ]);

    const totalCollected = await Fee.aggregate([
      { $match: { status: 'paid' } },
      { $group: { _id: null, total: { $sum: '$paidAmount' } } },
    ]);

    res.status(200).json({
      success: true,
      stats,
      totalCollected: totalCollected[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
