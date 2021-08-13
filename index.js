// const express = require("express");
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { urlRouter } from "./routes/shorturls.js";
import { userRouter } from "./routes/users.js";
const app = express();
const PORT = process.env.PORT || 5000;

const url =
  "mongodb+srv://ikram:ikram98@cluster0.rlfdm.mongodb.net/UrlShortener";
// ||
// "mongodb://localhost/UrlShortener";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (request, respone) => {
  respone.send("Welcome to node app!!!! Hi Guys");
});

app.use("/users", userRouter);

app.use("/url", urlRouter);

app.listen(PORT, () => console.log("The server is started in " + PORT));
