import Gallery from '../models/Gallery.js';

export const getAllGallery = async (req, res) => {
  try {
    const { category, featured } = req.query;

    let query = {};
    if (category) query.category = category;
    if (featured) query.isFeatured = featured === 'true';

    const gallery = await Gallery.find(query)
      .populate('uploadedBy', 'name email')
      .sort({ isFeatured: -1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: gallery.length,
      data: gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getGalleryById = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id)
      .populate('uploadedBy', 'name email');

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: 'Gallery not found',
      });
    }

    res.status(200).json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createGallery = async (req, res) => {
  try {
    const { title, description, category, eventDate } = req.body;
    const images = req.files;

    if (!images || images.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No images uploaded',
      });
    }

    const imageData = images.map(file => ({
      url: `/uploads/${file.filename}`,
      caption: file.originalname,
    }));

    const gallery = await Gallery.create({
      title,
      description,
      category,
      eventDate,
      images: imageData,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: 'Gallery created successfully',
      data: gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: 'Gallery not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Gallery updated successfully',
      data: gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: 'Gallery not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Gallery deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFeaturedGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find({ isFeatured: true, isActive: true })
      .populate('uploadedBy', 'name')
      .sort({ eventDate: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: gallery.length,
      data: gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
