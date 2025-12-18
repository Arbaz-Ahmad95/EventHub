const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("AUTH HEADER:", req.headers.authorization);


    // check token exists
    if (!authHeader) {
      return res.status(401).json({ msg: "No token provided" });
    }

    // Bearer <token>
    const token = authHeader.split(" ")[1];

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user to request
    req.user = {
      id: decoded.id,
    };

    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};
