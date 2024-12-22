const Cart = require("../models/cart");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get(`/`, async (req, res) => {
  try {
    const cartList = await Cart.find(req.query);

    if (!cartList) {
      res.status(500).json({ success: false });
    }
    return res.status(200).json(cartList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post(`/add`, async (req, res) => {
  const cartItem = await Cart.find(req.body.ProductId);

  if (!cartItem) {
    let cartList = new Cart({
      productTitle: req.body.productTitle,
      image: req.body.image,
      price: req.body.price,
      quantity: req.body.quantity,
      subTotal: req.body.subTotal,
      ProductId: req.body.productId,
      userId: req.body.userId,
    });
    try {
      if (!cartList) {
        res.status(500).json({ success: false });
      } else {
        cartList = await cartList.save();
        res.status(201).json(cartList);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: error.message });
    }
  }else{
    res.status(401).json({msg:"Product aldreay added in the cart"})
  }
});

router.put("/:id", async (req, res) => {
  const cartList = await Cart.findByIdAndUpdate(
    req.params.id,
    {
      productTitle: req.body.productTitle,
      image: req.body.image,
      price: req.body.price,
      quantity: req.body.quantitty,
      subTotal: req.body.subTotal,
      ProductId: req.body.productId,
      userId: req.body.userId,
    },
    { new: true }
  );

  try {
    if (!cartList) {
      res.status(500).json({ success: false });
    } else {
      res.send(added);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete("/remove", async (req, res) => {
  const cartItem = await Cart.findByIdAndDelete(req.params.id);

  try {
    if (cartItem) {
      return res
        .status(200)
        .json({ success: true, message: "The Item is deleted!" });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Item not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
});
module.exports = router;
