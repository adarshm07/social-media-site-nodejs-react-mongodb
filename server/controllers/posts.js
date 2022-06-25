import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const data = await Post.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json("No data found.");
  }
};

export const createPosts = async (req, res) => {
  try {
    const data = new Post(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json("Couldn't create post.");
  }
};
