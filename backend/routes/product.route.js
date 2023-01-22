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
  } else {
    if (sort == "lth") {
      let data = await productModel
        .find({ category: "mobile" })
        .sort({ disprice: 1 })
        .limit(12)
        .skip(12 * (page - 1));
      res.send(data);
    } else if (sort == "htl") {
      let data = await productModel
        .find({ category: "mobile" })
        .sort({ disprice: -1 })
        .limit(12)
        .skip(12 * (page - 1));
      res.send(data);
    } else {
      let data = await productModel
        .find({ category: "mobile" })
        .limit(12)
        .skip(12 * (page - 1));
      res.send(data);
    }
  }
});
// ******************************************************product view/get single data**********************************************
productRoute.get("/product/productview/:id", async (req, res) => {
  let ID = req.params.id;
  try {
    let data = await productModel.findOne({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send("spmething went wrong while getting product view data");
  }
});
module.exports = { productRoute };
