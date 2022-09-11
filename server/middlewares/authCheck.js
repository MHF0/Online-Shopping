const jwt = require("jsonwebtoken");

const authCheck = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Login required",
    });
  }
  const token = req.headers.authorization.split(" ").pop();
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Invalid token",
          err,
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      message: "No token provided",
    });
  }
};

module.exports = authCheck;
