const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/user.route");
const { productRoute } = require("./routes/product.route");
const { authorization } = require("./middleware/auth.middleware");
const { adminProductRoute } = require("./routes/adminproduct.route");
const { cartRoute } = require("./routes/cart.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(productRoute);
app.use(authorization);
app.use(adminProductRoute);
app.use(cartRoute);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
    console.log("failed connecting to db");
  }
  console.log("server started");
});
