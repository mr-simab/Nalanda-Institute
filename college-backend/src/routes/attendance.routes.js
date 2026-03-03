import express from 'express';
import {
  getAllAttendance,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance,
  getAttendanceByStudent,
  markAttendance,
} from '../controllers/attendance.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { authorize } from '../middleware/role.middleware.js';

const router = express.Router();

router.get('/', protect, getAllAttendance);
router.get('/:id', protect, getAttendanceById);
router.get('/student/:studentId', protect, getAttendanceByStudent);
router.post('/', protect, authorize('admin', 'faculty'), createAttendance);
router.post('/student/:studentId/mark', protect, markAttendance);
router.put('/:id', protect, authorize('admin', 'faculty'), updateAttendance);
router.delete('/:id', protect, authorize('admin'), deleteAttendance);

export default router;
