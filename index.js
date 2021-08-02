import express from "express";
import mongoose from "mongoose";
import { ShortUrl } from "./models/shorturls.js";

const app = express();
const port = 3000;

const url = "mongodb://localhost/UrlShortener";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected "));

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/Fullurl", async (request, response) => {
  const fullurl = await addUrl.find();
  response.send(fullurl);
});

app.post("/Fullurl", async (request, response) => {
  const addUrl = request.body;
  console.log(addUrl);

  const fullurl = new ShortUrl(addUrl);

  try {
    const newUrl = await fullurl.save();
    response.send(newUrl);
  } catch (err) {
    response.status(500);
    response.send(err);
  }
});
app.get("/:FullUrl", async (request, respone) => {
  const { FullUrl } = request.params;
  console.log(FullUrl);
  const fullurl = await ShortUrl.findOne(FullUrl);
  respone.send(fullurl);
});
app.get("/:shortUrl", async (request, response) => {
  const { shortUrl } = request.params;
  console.log(shortUrl);
  const ShortUrl = await ShortUrl.find({ shortUrl: shortUrl });
  respone.send(ShortUrl);
});
//
// app.use("/shorturl", UrlRouter);

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
