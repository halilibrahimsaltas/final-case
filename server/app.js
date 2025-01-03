const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const producer = require('./utils/kafka/producer');
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
    console.log('Kafka producer connected successfully');
  } catch (error) {
    console.error('Kafka producer connection error:', error);
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
    app.listen(PORT, '0.0.0.0', () => { // Docker için host '0.0.0.0' olarak ayarlandı
      console.log(`Server is running on http://localhost:${PORT}`);
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

// Graceful shutdown
const shutdown = async () => {
  console.log('Performing graceful shutdown...');
  try {
    await producer.disconnectProducer();
    await mongoose.connection.close();
    console.log('Graceful shutdown completed');
    process.exit(0);
  } catch (err) {
    console.error('Error during shutdown:', err);
    process.exit(1);
  }
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

module.exports = app;
