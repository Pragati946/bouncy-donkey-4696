const express = require("express");

const Men = require("./mens.model");

const app = express.Router();

app.get("", async (req, res) => {
  const { page, limit, q } = req.query;
  try {
    if (q) {
      let temp = new RegExp(q, "i");
      let products = await Men.find({ title: temp })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else {
      let products = await Men.find()
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
      console.log({ products });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});


app.get("/:id", async (req, res) => {
  try {
    let product = await Men.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
