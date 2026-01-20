const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Axis Bank API is running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Axis Bank API Server running on port ${PORT}`);
  console.log(`🔐 JWT authentication enabled`);
  console.log(`📧 Email: ${process.env.EMAIL_USER || 'Not configured'}`);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});
