import express from 'express';
import {
  getAllResults,
  getResultById,
  createResult,
  updateResult,
  deleteResult,
  getResultByStudent,
  downloadResultPDF,
  getResultStats,
} from '../controllers/result.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { authorize } from '../middleware/role.middleware.js';

const router = express.Router();

router.get('/', protect, getAllResults);
router.get('/stats', protect, authorize('admin', 'faculty'), getResultStats);
router.get('/:id', protect, getResultById);
router.get('/:id/pdf', protect, downloadResultPDF);
router.get('/student/:studentId', protect, getResultByStudent);
router.post('/', protect, authorize('admin', 'faculty'), createResult);
router.put('/:id', protect, authorize('admin', 'faculty'), updateResult);
router.delete('/:id', protect, authorize('admin'), deleteResult);

export default router;
