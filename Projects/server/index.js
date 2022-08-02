import express from "express";
import cors from "cors"

import "dotenv/config"
import connectDB from "./DB/connection.js";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();

var corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

//routing
app.use("/auth", authRouter);
app.all("*", (req, res) => {
  res.status(400).send(req.cookies);
});


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});