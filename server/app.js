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

// Database Connection
mongoose
  .connect(process.env.CONNECTION_STRING) // Removed deprecated options
  .then(() => {
    console.log("Database connection is ready...");
    const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not defined
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1); // Exit on database connection error
  });

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Performing graceful shutdown...');
  producer.disconnectProducer()
    .then(() => mongoose.connection.close())
    .then(() => process.exit(0))
    .catch(err => {
      console.error('Error during shutdown:', err);
      process.exit(1);
    });
});

module.exports = app;
