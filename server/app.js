const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { producer, sendMessage } = require('./utils/kafka/producer');
require("dotenv/config");

// Middlewares
app.use(cors());
app.options("*", cors());
app.use(express.json()); 

// Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");

app.use("/api/categories", categoriesRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cart", cartRoutes);

// Kafka producer'ı başlat
const initializeKafka = async () => {
  try {
    await producer.connect();
    console.log('Kafka producer bağlantısı başarılı');
  } catch (error) {
    console.error('Kafka producer bağlantı hatası:', error);
    process.exit(1);
  }
};

// Database Connection
mongoose
  .connect(process.env.CONNECTION_STRING, {
    // MongoDB 8.x için önerilen yapılandırma
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
  .then(async () => {
    console.log("Database connection is ready...");
    
    // Kafka bağlantısını başlat
    await initializeKafka();
    
    const PORT = process.env.PORT || 4000; // Default port 4000 olarak değiştirildi
    app.listen(PORT, async () => { // Docker için host '0.0.0.0' olarak ayarlandı
      try {
        console.log(`Server ${PORT} portunda çalışıyor`);
        
        // Kafka'yı başlat
        await initializeKafka();
        
        // MongoDB'ye bağlan
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Database bağlantısı hazır...');
      } catch (error) {
        console.error('Sunucu başlatma hatası:', error);
        process.exit(1);
      }
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Uygulama kapatıldığında bağlantıları temizle
process.on('SIGTERM', async () => {
  try {
    await producer.disconnect();
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Kapatma hatası:', error);
    process.exit(1);
  }
});

module.exports = app;
