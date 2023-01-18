const jwt = require("jsonwebtoken");
require("dotenv").config();

let authorization = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.key, (err, decode) => {
      if (decode) {
        req.body.userID = decode.userID;
        console.log(req.body);
        next();
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
