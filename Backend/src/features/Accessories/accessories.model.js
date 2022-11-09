const mongoose = require("mongoose");

const accessoriesSchema = new mongoose.Schema(
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

const Accessories = mongoose.model("accssories", accessoriesSchema);

module.exports = Accessories;
