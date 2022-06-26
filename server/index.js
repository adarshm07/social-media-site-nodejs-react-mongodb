import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Routes
import PostRoute from "./routes/posts.routes.js";
import AuthRoute from "./routes/auth.routes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", PostRoute);
app.use("/auth", AuthRoute);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 4000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("Server connected.")))
  .catch((error) => console.log(error.message));
