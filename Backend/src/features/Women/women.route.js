const express = require("express");
const Women = require("./women.model");

const app = express.Router();

app.get("", async (req, res) => {
  const { q, page, limit } = req.query;
  try {
    if (q) {
      let temp = new RegExp(q, "i");
      let products = await Women.find({ title: temp })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else {
      let products = await Women.find()
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    let product = await Women.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
