const express = require("express");
const TopsellingProduct = require("./topselling.model");
const app = express.Router();

app.get("/", async (req, res) => {
  const { q, page, limit, off } = req.query;
  try {
    if (q) {
      let temp = new RegExp(q, "i");
      let products = await TopsellingProduct.find({ title: temp })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else if (off) {

      // let products = await TopsellingProduct

    } else {
      let products = await TopsellingProduct.find()
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
    let product = await TopsellingProduct.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = app;
