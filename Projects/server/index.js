import express from "express";
import cors from "cors";

import "dotenv/config";
import connectDB from "./DB/connection.js";

const app = express();
const PORT = process.env.PORT || 5000;
var corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOptions));
app.use(express.json());

//routing
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
