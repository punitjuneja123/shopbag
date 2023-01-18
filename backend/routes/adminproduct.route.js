const express = require("express");
adminProductRoute = express.Router();
const { productModel } = require("../models/products.model");

adminProductRoute.get("/admproduct", async (req, res) => {
  let UID = req.body.userID;
  let data = await productModel.find({ userID: UID });
  res.send(data);
});

adminProductRoute.post("/admproduct/create", async (req, res) => {
  let payload = req.body;
  try {
    let data = new productModel(payload);
    await data.save();
    res.send("product added/created");
  } catch (error) {
    console.log(error);
    res.send("something went wrong while creating the product");
  }
});

// ...........................................................admin mobile route.................................................
adminProductRoute.get("/admproduct/mobile", (req, res) => {
  res.send("admin mobile");
});

module.exports = { adminProductRoute };
