const express = require("express");

const Men = require("./mens.model");

const app = express.Router();

app.get("", async (req, res) => {
  try {
    let products = await Men.find();
    res.send(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


module.exports = app;