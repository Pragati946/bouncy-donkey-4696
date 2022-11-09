const mongoose = require("mongoose");

const cycleSchema = new mongoose.Schema(
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

const Cycle = mongoose.model("cycle", cycleSchema);

module.exports = Cycle;
