const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { connectRedis } = require('./config/redis');
const { runConsumer } = require('./services/kafkaConsumer');
const billingRoutes = require('./routes/billingRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/billing', billingRoutes);

// MongoDB ve Redis bağlantısı
Promise.all([
    mongoose.connect(process.env.CONNECTION_STRING),
    connectRedis()
])
.then(() => {
    console.log('Database ve Redis bağlantıları hazır');
    // Kafka consumer'ı başlat
    return runConsumer();
})
.then(() => {
    console.log('Kafka consumer başarıyla başlatıldı');
})
.catch(error => {
    console.error('Başlangıç hatası:', error);
    process.exit(1);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Billing service ${PORT} portunda çalışıyor`);
}); 