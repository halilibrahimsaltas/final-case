// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const paymentRoutes = require('./routes/paymentRoutes');
const { runConsumer } = require('./services/kafkaConsumer');
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
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  
  // Kafka consumer'ı başlat
  try {
    await runConsumer();
    console.log('Kafka consumer başarıyla başlatıldı');
  } catch (error) {
    console.error('Kafka consumer başlatma hatası:', error);
  }
});
