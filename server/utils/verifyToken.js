import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    // console.log('access', req.cookies);
    if (!token) res.status(401).json("Not authenticated.");

    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) res.status(401).json("Invalid session.");
      req.user = user;
      next();
    });
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
