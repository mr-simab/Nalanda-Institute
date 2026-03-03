import express from 'express';
import {
  getAllFees,
  getFeeById,
  createFee,
  payFee,
  updateFee,
  deleteFee,
  getFeeByStudent,
  getFeeStats,
} from '../controllers/fee.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { authorize } from '../middleware/role.middleware.js';

const router = express.Router();

router.get('/', protect, getAllFees);
router.get('/stats', protect, authorize('admin'), getFeeStats);
router.get('/:id', protect, getFeeById);
router.get('/student/:studentId', protect, getFeeByStudent);
router.post('/', protect, authorize('admin'), createFee);
router.post('/:id/pay', protect, payFee);
router.put('/:id', protect, authorize('admin'), updateFee);
router.delete('/:id', protect, authorize('admin'), deleteFee);

export default router;
