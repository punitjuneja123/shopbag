const express = require("express");
productRoute = express.Router();
const { productModel } = require("../models/products.model");

productRoute.get("/product", (req, res) => {
  res.send("mobile,laptop,mensfashion,womensfashion");
});

// ........................................................product route.........................................................
productRoute.get("/product/:product", async (req, res) => {
  let product = req.params.product;
  let page = req.query.page;
  let sort = req.query.sort;
  if (page == undefined) {
    let data = await productModel.find({ category: product });
    res.send(data);
  } else {
    if (sort == "lth") {
      let data = await productModel
        .find({ category: product })
        .sort({ disprice: 1 })
        .limit(12)
        .skip(12 * (page - 1));
      res.send(data);
    } else if (sort == "htl") {
      let data = await productModel
        .find({ category: product })
        .sort({ disprice: -1 })
        .limit(12)
        .skip(12 * (page - 1));
      res.send(data);
    } else {
      let data = await productModel
        .find({ category: product })
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

// search option
productRoute.get("/product/search/:search", async (req, res) => {
  let query = req.params.search;

  let page = req.query.page;
  let sort = req.query.sort;
  if (page == undefined) {
    let data = await productModel.find({
      title: { $regex: query, $options: "i" },
    });
    if (data.length > 0) {
      res.send(data);
    } else {
      res.status(400);
      res.send("no product found");
    }
  } else {
    if (sort == "lth") {
      let data = await productModel
        .find({
          title: { $regex: query, $options: "i" },
        })
        .sort({ disprice: 1 })
        .limit(12)
        .skip(12 * (page - 1));
      res.send(data);
    } else if (sort == "htl") {
      let data = await productModel
        .find({
          title: { $regex: query, $options: "i" },
        })
        .sort({ disprice: -1 })
        .limit(12)
        .skip(12 * (page - 1));
      res.send(data);
    } else {
      let data = await productModel
        .find({
          title: { $regex: query, $options: "i" },
        })
        .limit(12)
        .skip(12 * (page - 1));
      res.send(data);
    }
  }
});
module.exports = { productRoute };
