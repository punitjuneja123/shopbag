const express = require("express");
productRoute = express.Router();
const { productModel } = require("../models/products.model");

productRoute.get("/product", (req, res) => {
  res.send("mobile,laptop,mensfashion,womensfashion");
});

// ........................................................mobile route.........................................................
productRoute.get("/product/mobile", async (req, res) => {
  let page = req.query.page;
  let sort = req.query.sort;
  if (page == undefined) {
    let data = await productModel.find({ category: "mobile" });
    res.send(data);
  } else if (page != undefined && sort != undefined) {
    if ((sort = "lth")) {
      let data = await productModel
        .find({ category: "mobile" })
        .sort({ price: 1 })
        .limit(12)
        .skip(12 * (page - 1));
      res.send(data);
    } else {
      let data = await productModel
        .find({ category: "mobile" })
        .sort({ price: -1 })
        .limit(12)
        .skip(12 * (page - 1));
      res.send(data);
    }
  } else {
    let data = await productModel
      .find({ category: "mobile" })
      .limit(12)
      .skip(12 * (page - 1));
    res.send(data);
  }
});

module.exports = { productRoute };
