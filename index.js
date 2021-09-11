// const express = require("express");
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { urlRouter } from "./routes/shorturls.js";
import { userRouter } from "./routes/users.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const url = `mongodb+srv://ikram:${process.env.MongoPassword}@cluster0.rlfdm.mongodb.net/UrlShortener`;
// ||
// "mongodb://localhost/UrlShortener";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (request, respone) => {
  respone.send("Welcome to node app!!!! Hi Guys");
});

// app.get("/jwt", (req, res) => {
//   const token = jsonwebtoken.sign({ user: "johndoe" }, jwtSecret);
//   res.cookie("token", token, { httpOnly: true });
//   res.json({ token });
// });

app.use("/users", userRouter);

app.use("/url", urlRouter);

app.listen(PORT, () => console.log("The server is started in " + PORT));
