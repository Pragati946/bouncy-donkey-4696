const express = require("express");
const Accessories = require("./accessories.model");

const app = express.Router();

app.get("", async (req, res) => {
  try {
    let products = await Accessories.find();
    res.send(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = app;
