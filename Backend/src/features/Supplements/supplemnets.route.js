const express = require("express");

const Supplement = require("./supplements.model");

const app = express.Router();

app.get("", async (req, res) => {
  try {
    let products = await Supplement.find();
    res.send(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = app;
