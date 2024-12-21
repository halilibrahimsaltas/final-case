const { Product } = require("../models/products");
const express = require("express");
const router = express.Router();
const { Category } = require("../models/category");


// Get all products
router.get("/", async (req, res) => {
  

  const page = parseInt(req.query.page) || 1 ;
  const perPage = 8;
  const totalPosts = await Product.find().populate("category").countDocuments();
  const totalPages = Math.ceil(totalPosts/perPage);

  if(page > totalPages){
      return res.status(404).json({message : "Page not found"})
  }

  const productlist = await Product.find().populate("category")
  .skip((page - 1)* perPage)
  .limit(perPage)
  .exec();

  if (!productlist) {
    res.status(500).json({ success: false });
  }
  res.send(productlist);
});
// Get single product
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id).populate("category");
  if (!product) {
    return res.status(500).json({ success: false });
  }
  res.send(product);
});
// Create a new product
router.post("/create", async (req, res) => {
  const category = await Category.findById(req.body.category);
    if (!category) return res.status(400).send("Invalid Category");
    let product = new Product({
      name: req.body.name,
      description: req.body.description,
      richDescription: req.body.richDescription,
      image: req.body.image,
      images: req.body.images,
      brand: req.body.brand,
      price: req.body.price,
      oldPrice:req.body.oldPrice,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      isFeatured: req.body.isFeatured,
    });
    product = await product.save();
    if (!product) return res.status(500).send("The product cannot be created");
    res.send(product);
}   );  

// Update a product
router.put("/:id", async (req, res) => {
  const category = await Category.findById(req.body.category);
    if (!category) return res.status(400).send("Invalid Category");
    const product = await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        images: req.body.images,
        brand: req.body.brand,
        price: req.body.price,
        oldPrice:req.body.oldPrice,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        isFeatured: req.body.isFeatured,
        }, { new: true });
    if (!product) return res.status(500).send("the product cannot be updated!");
    res.send(product);
}
);
// Delete a product
router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      if (product) {
        return res
          .status(200)
          .json({ success: true, message: "the product is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "product not found!" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

module.exports = router;