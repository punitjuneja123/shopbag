const express = require("express");
let cartRoute = express.Router();
const { cartModel } = require("../models/cart.model");

cartRoute.get("/cart", async (req, res) => {
  let userID = req.body.userID;
  try {
    let data = await cartModel.find({ userID: userID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send("something went wrong while getting the cart data");
  }
});

cartRoute.post("/cart", async (req, res) => {
  let payload = req.body;
  try {
    let data = new cartModel(payload);
    await data.save();
    res.send("product added to cart");
  } catch (error) {
    console.log(error);
    res.send("spmething went wrong while adding to cart");
  }
});

cartRoute.patch("/cart/upadtequantity/:id", async (req, res) => {
  let { quantity } = req.body;
  let ID = req.params.id;
  try {
    await cartModel.findByIdAndUpdate({ _id: ID }, { quantity: quantity });
    res.send("updated");
  } catch (error) {
    console.log(error);
    res.send("something went wrong while updating");
  }
});

cartRoute.delete("/cart/delete/:id", async (req, res) => {
  let ID = req.params.id;
  try {
    await cartModel.findByIdAndDelete({ _id: ID });
    res.send("deleted");
  } catch (error) {
    console.log(error);
    res.send("something went wrong while deleting");
  }
});
module.exports = { cartRoute };
