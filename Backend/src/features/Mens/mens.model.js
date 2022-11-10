const mongoose = require("mongoose");

const MenSchema = new mongoose.Schema(
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

const Men = mongoose.model("men", MenSchema);

module.exports = Men;
