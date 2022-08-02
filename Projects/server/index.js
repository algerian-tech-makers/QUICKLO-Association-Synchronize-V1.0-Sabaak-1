import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./DB/connection.js";

import fse from "fs-extra"
import path from "path"
//Routes import
import jam3iyaRoutes from "./routes/jam3iya.js";


fse.ensureDir(path.join("public", "uploads"))


const app = express();
const PORT = process.env.PORT || 5000;
var corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"))
//routing
app.use("/api/jam3iya", jam3iyaRoutes);

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
