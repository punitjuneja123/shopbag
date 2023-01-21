const jwt = require("jsonwebtoken");
require("dotenv").config();

let authorization = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.key, (err, decode) => {
      if (decode) {
        let price = req.body.price;
        let discount = req.body.discount;
        req.body.userID = decode.userID;
        req.body.disprice = price - price * (discount / 100);
        console.log(req.body);
        req.send(disprice);
      } else {
        res.status(498);
        res.send("please provide correct token");
      }
    });
  } else {
    res.send("please provide a token");
  }
};

module.exports = { authorization };
