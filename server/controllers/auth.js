import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).json("User account created");
  } catch (error) {
    next(error);
    res.status(404).json(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json("User not found.");

    const isAuthenticated = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isAuthenticated)
      return res.status(401).json("username or password is incorrect.");

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...rest } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        details: { ...rest }, isAdmin
      });
  } catch (error) {
    res.status(400).json("Couldn't create post.");
  }
};
