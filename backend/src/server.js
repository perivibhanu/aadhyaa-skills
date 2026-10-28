import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB, getDBStatus } from './config/db.js';
import kitRoutes from './routes/kitRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import componentRoutes from './routes/componentRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import { companyInfo } from './data/seedData.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Serve static assets (images, flyers, cards)
app.use('/assets', express.static(path.join(__dirname, '../wwwroot/assets')));

// API Routes
app.use('/api/kits', kitRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/components', componentRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Company & General Info
app.get('/api/company', (req, res) => {
  res.json({ success: true, data: companyInfo });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'Aadhyaa Skills R&D API',
    mongoConnected: getDBStatus(),
    timestamp: new Date().toISOString(),
  });
});

// Root welcome
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Aadhyaa Skills Research & Development API',
    endpoints: [
      '/api/projects',
      '/api/kits',
      '/api/components',
      '/api/inquiries',
      '/api/company',
      '/api/health',
    ],
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[API Error]:', err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

// Start server immediately & connect to DB in background
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Aadhyaa Skills Backend running on http://127.0.0.1:${PORT}`);
  console.log(`📡 Health Check: http://127.0.0.1:${PORT}/api/health`);
  connectDB();
});
