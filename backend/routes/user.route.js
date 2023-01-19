const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { userModel } = require("../models/user.model");
let userRoute = express.Router();

userRoute.get("/", (req, res) => {
  res.send("welcome to shopbag");
});

userRoute.post("/users/register", async (req, res) => {
  let { name, email, number, password } = req.body;
  let data = await userModel.find({ email });
  console.log(data);
  if (data.length != 0) {
    res.status(409);
    res.send("email already exists");
  } else {
    bcrypt.hash(password, 8, async (err, hash) => {
      if (err) {
        console.log(err);
        res.send("something went wrong while saving password");
      } else {
        let data = userModel({ name, email, number, password: hash });
        await data.save();
        res.send("user registered");
      }
    });
  }
});

userRoute.post("/users/signin", async (req, res) => {
  let { email, password } = req.body;
  let data = await userModel.find({ email });
  if (data.length > 0) {
    bcrypt.compare(password, data[0].password, (err, result) => {
      if (result) {
        console.log(data[0]._id);
        let token = jwt.sign({ userID: data[0]._id }, process.env.key);
        res.send({ msg: "login successful", token: token });
      } else {
        res.status(401);
        res.send("wrong password");
      }
    });
  } else {
    res.status(401);
    res.send("wrong credentials");
  }
});

module.exports = { userRoute };
