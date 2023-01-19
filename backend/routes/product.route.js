const express = require("express");
productRoute = express.Router();
const { productModel } = require("../models/products.model");

productRoute.get("/product", (req, res) => {
  res.send("mobile,laptop,mensfashion,womensfashion");
});

// ........................................................mobile route.........................................................
productRoute.get("/product/mobile", async (req, res) => {
  let page = req.query.page;
  let data = await productModel
    .find({ category: "mobile" })
    .limit(12)
    .skip(12 * (page - 1));
  res.send(data);
});

module.exports = { productRoute };
