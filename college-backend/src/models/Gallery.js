import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      enum: ['events', 'sports', 'academic', 'campus', 'awards', 'other'],
      required: true,
    },
    images: [{
      url: {
        type: String,
        required: true,
      },
      caption: {
        type: String,
      },
      uploadedAt: {
        type: Date,
        default: Date.now,
      },
    }],
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    eventDate: {
      type: Date,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model('Gallery', gallerySchema);
export default Gallery;
