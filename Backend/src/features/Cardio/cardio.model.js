const mongoose = require("mongoose");

const cardioSchema = new mongoose.Schema(
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


const CardioProduct = mongoose.model("cardio", cardioSchema); 

module.exports = CardioProduct;