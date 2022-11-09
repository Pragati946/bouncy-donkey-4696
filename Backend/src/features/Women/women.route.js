const express = require("express");
const Women = require("./women.model");

const app = express.Router();

app.get("", async (req, res) => {
  try {
    let products = await Women.find();
    res.send(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
