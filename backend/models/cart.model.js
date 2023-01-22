const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    productid: String,
    title: String,
    image: String,
    price: Number,
    discount: Number,
    disprice: Number,
    quantity: Number,
    userID: String,
  },
  { versionKey: false }
);

const cartModel = mongoose.model("cart", cartSchema);

module.exports = { cartModel };
