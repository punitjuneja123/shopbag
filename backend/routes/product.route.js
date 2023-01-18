const express = require("express");
productRoute = express.Router();
const { productModel } = require("../models/products.model");

productRoute.get("/product", (req, res) => {
  res.send("mobile,laptop,mensfashion,womensfashion");
});

// ........................................................mobile route.........................................................
productRoute.get("/product/mobile", (req, res) => {
  res.send("mobile product");
});

module.exports = { productRoute };
