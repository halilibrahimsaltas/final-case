const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
//const authJwt = require('./helper/jwt')



app.use(cors());
app.options("*", cors());

//middlewares
app.use(bodyParser.json());
app.use(express.json());
//app.use(authJwt());


//Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const userRoutes = require("./routes/user");
const cart = require("./routes/cart");


app.use("/api/categories", categoriesRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cart", cart);

//Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log("Database connection is ready...");
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });



//server
