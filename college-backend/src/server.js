import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';
import { config } from './config/env.js';

dotenv.config();

const PORT = config.port;

// Connect to database and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} in ${config.nodeEnv} mode`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
