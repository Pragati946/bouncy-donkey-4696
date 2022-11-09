const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema(
  {
    url: String,
    image: String,
    title: String,
    price1: String,
    price2: String,
    off: String,
  },
  { versionKey: false, timestamps: true }
);

const Equipment = mongoose.model("equipment", equipmentSchema);

module.exports = Equipment;
