import express from 'express';
import {
  getAllAdmissions,
  getAdmissionById,
  createAdmission,
  updateAdmission,
  deleteAdmission,
  updateAdmissionStatus,
  getAdmissionStats,
} from '../controllers/admission.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { authorize } from '../middleware/role.middleware.js';

const router = express.Router();

router.get('/', protect, getAllAdmissions);
router.get('/stats', protect, authorize('admin'), getAdmissionStats);
router.get('/:id', protect, getAdmissionById);
router.post('/', createAdmission);
router.put('/:id', protect, authorize('admin'), updateAdmission);
router.patch('/:id/status', protect, authorize('admin'), updateAdmissionStatus);
router.delete('/:id', protect, authorize('admin'), deleteAdmission);

export default router;
