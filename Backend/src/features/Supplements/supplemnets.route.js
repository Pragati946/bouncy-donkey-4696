const express = require("express");

const Supplement = require("./supplements.model");

const app = express.Router();

app.get("", async (req, res) => {
  const { q, page, limit } = req.query;
  try {
    if (q) {
      let temp = new RegExp(q, "i");
      let products = await Supplement.find({ title: temp })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else {
      let products = await Supplement.find()
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    let product = await Supplement.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
