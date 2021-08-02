import mongoose from "mongoose";
import shortid from "shortid";

const UrlSchema = new mongoose.Schema({
  FullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: shortid.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const ShortUrl = mongoose.model("ShortUrl", UrlSchema);
