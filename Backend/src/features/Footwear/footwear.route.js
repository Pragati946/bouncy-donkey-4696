const express = require("express");

const FootWear = require("./footwear.model");

const app = express.Router();

app.get("", async (req, res) => {
  try {
    let products = await FootWear.find();
    res.send(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
