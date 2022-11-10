const express = require("express");
const Accessories = require("./accessories.model");

const app = express.Router();

app.get("", async (req, res) => {
  const { page, limit, q } = req.query;
  try {
    if (q) {
      let temp = new RegExp(q, "i");
      let products = await Accessories.find({ title: temp })
        .limit(limit)
        .skip((page - 1) * limit);
      res.send(products);
    } else {
      let products = await Accessories.find()
        .limit(limit)
        .skip((page - 1) * limit);
      res.send(products);
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    let product = await Accessories.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
