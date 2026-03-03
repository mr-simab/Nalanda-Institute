import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  getAllGallery,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery,
  getFeaturedGallery,
} from '../controllers/gallery.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { authorize } from '../middleware/role.middleware.js';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Images only!'));
  },
});

const router = express.Router();

router.get('/', getAllGallery);
router.get('/featured', getFeaturedGallery);
router.get('/:id', getGalleryById);
router.post('/', protect, authorize('admin', 'faculty'), upload.array('images', 10), createGallery);
router.put('/:id', protect, authorize('admin', 'faculty'), updateGallery);
router.delete('/:id', protect, authorize('admin', 'faculty'), deleteGallery);

export default router;
