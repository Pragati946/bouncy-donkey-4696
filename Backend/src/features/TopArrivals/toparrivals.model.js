const mongoose = require("mongoose");

const topArrivalSchema = new mongoose.Schema(
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

const TopArrivalProduct = mongoose.model("toparrival", topArrivalSchema);

module.exports = TopArrivalProduct;
