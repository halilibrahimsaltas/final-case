// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config();

// Uygulama başlatma
const app = express();
app.use(express.json());

// MongoDB bağlantısı
connectDB();

// Routes
app.use('/api/payments', paymentRoutes);

// Sunucu başlatma
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
