import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import "dotenv/config";
import connectDB from "./DB/connection.js";
import authRouter from "./routes/auth.js";

import fse from "fs-extra";
import path from "path";
//Routes import
import jam3iyaRoutes from "./routes/jam3iya.js";
import activityRoutes from "./routes/activity.js";
import userRoutes from "./routes/user.js";
import getAuthUser from "./middlewares/auth.js";

fse.ensureDir(path.join("public", "uploads"));

const app = express();
const PORT = process.env.PORT || 5000;
var corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//routing
app.use("/auth", authRouter);
app.use(getAuthUser);
app.use("/api/jam3iya", jam3iyaRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/user", userRoutes);

app.all("*", (req, res) => {
  res.status(400).send("unvalid route");
});

connectDB((err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log("App listening on port " + PORT);
    });
  }
});
