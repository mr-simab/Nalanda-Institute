import express from 'express';
import authRoutes from './auth.routes.js';
import facultyRoutes from './faculty.routes.js';
import studentRoutes from './student.routes.js';
import admissionRoutes from './admission.routes.js';
import feeRoutes from './fee.routes.js';
import resultRoutes from './result.routes.js';
import attendanceRoutes from './attendance.routes.js';
import galleryRoutes from './gallery.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/faculty', facultyRoutes);
router.use('/students', studentRoutes);
router.use('/admissions', admissionRoutes);
router.use('/fees', feeRoutes);
router.use('/results', resultRoutes);
router.use('/attendance', attendanceRoutes);
router.use('/gallery', galleryRoutes);

export default router;
