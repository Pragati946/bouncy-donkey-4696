const express = require("express");
const CardioProduct = require("./cardio.model");

const app = express.Router();

app.get("", async (req, res) => {
  try {
    let products = await CardioProduct.find();
    res.send(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
