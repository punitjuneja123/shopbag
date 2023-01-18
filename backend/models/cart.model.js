const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    title: String,
    image: String,
    price: Number,
    discount: Number,
    description: String,
    category: String,
    rating: Number,
    count: Number,
    userID: String,
  },
  { versionKey: false }
);

const cartModel = mongoose.model("cart", cartSchema);

module.exports = { cartModel };
