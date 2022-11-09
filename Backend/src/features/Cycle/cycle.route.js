const express = require("express");

const Cycle = require("./cycle.model");

const app = express.Router();

app.get("", async (req, res) => {
  try {
    let products = await Cycle.find();
    res.send(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
