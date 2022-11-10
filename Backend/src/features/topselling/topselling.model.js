const mongoose = require("mongoose");

const topSellingSchema = new mongoose.Schema(
  {
    url: String,
    image: String,
    title: String,
    price1: String,
    price2: String,
    off: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const TopsellingProduct = mongoose.model("topselling", topSellingSchema);

module.exports = TopsellingProduct;
