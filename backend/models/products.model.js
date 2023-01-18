const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
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

const productModel = mongoose.model("product", productSchema);

module.exports = { productModel };
