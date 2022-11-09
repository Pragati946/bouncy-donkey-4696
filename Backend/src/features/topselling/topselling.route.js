const express = require("express");
const TopsellingProduct = require("./topselling.model");
const app = express.Router();


app.get("/", async (req, res) => {
  try {
    let products = await TopsellingProduct.find()
    console.log({ products });
    res.send(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = app;
