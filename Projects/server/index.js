import express from "express";
import cors from "cors"

import "dotenv/config"
import connectDB from "./DB/connection";

const app = express()

var corsOptions = {
    origin: "http://localhost:5000",

};


app.use(cors(corsOptions));
app.use(express.json());

//routing
app.all("*", (req, res) => {
    res.status(400).send("unvalid route")
})


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});