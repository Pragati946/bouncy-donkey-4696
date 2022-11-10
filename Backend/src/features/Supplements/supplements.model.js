const mongoose = require("mongoose");

const supplementSchema = new mongoose.Schema(
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

const Supplement = mongoose.model("supplement", supplementSchema);

module.exports = Supplement;
