const express = require("express");

const Equipment = require("./equipment.model");

const app = express.Router();

app.get("", async (req, res) => {
  try {
    let products = await Equipment.find();
    res.send(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = app;
