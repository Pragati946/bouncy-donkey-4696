require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connect = require("./Congif/db");
const cors = require("cors");
const PORT = process.env.PORT;

const topSellingRoute = require("./features/topselling/topselling.route");
const topArrivalRoute = require("./features/TopArrivals/toparrivals.route");
const mensRoute = require("./features/Mens/mens.route");
const wemonRoute = require("./features/Women/women.route");
const footwearRoute = require("./features/Footwear/footwear.route");
const cardioRoute = require("./features/Cardio/cardio.route");
const cycleRoute = require("./features/Cycle/cycle.route");
const accessoriesRoute = require("./features/Accessories/accessories.route");
const supplemnetRoute = require("./features/Supplements/supplemnets.route");
const equipmentRoute = require("./features/Equipment/equipment.route");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/topSellings", topSellingRoute);
app.use("/topArrivals", topArrivalRoute);
app.use("/mens", mensRoute);
app.use("/womens", wemonRoute);
app.use("/footwears", footwearRoute);
app.use("/cardio", cardioRoute);
app.use("/cycles", cycleRoute);
app.use("/accessories", accessoriesRoute);
app.use("/supplements", supplemnetRoute);
app.use("/equipments", equipmentRoute);

app.get("/", async (req, res) => {
  res.send("knergoineriufneriurje");
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log("object");
  }
});
