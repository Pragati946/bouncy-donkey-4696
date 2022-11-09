const mongoose = require("mongoose");

const footwearSchema = new mongoose.Schema(
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

const FootWear = mongoose.model("footwear", footwearSchema);

module.exports = FootWear;
