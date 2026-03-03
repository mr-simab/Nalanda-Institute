export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'fallback_secret_key',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  mongoUri: process.env.MONGODB_URI,
  maxFileSize: parseInt(process.env.MAX_FILE_SIZE) || 5242880,
  uploadDir: process.env.UPLOAD_DIR || './uploads',
};
