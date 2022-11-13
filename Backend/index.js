require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connect = require("./src/Congif/db");
const cors = require("cors");
const PORT = process.env.PORT;

const topSellingRoute = require("./src/features/topselling/topselling.route");
const topArrivalRoute = require("./src/features/TopArrivals/toparrivals.route");
const mensRoute = require("./src/features/Mens/mens.route");
const wemonRoute = require("./src/features/Women/women.route");
const footwearRoute = require("./src/features/Footwear/footwear.route");
const cardioRoute = require("./src/features/Cardio/cardio.route");
const cycleRoute = require("./src/features/Cycle/cycle.route");
const accessoriesRoute = require("./src/features/Accessories/accessories.route");
const supplemnetRoute = require("./src/features/Supplements/supplemnets.route");
const equipmentRoute = require("./src/features/Equipment/equipment.route");

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

app.listen(8080, async () => {
  try {
    await connect();
    console.log(`http://localhost:8080`);
  } catch (error) {
    console.log("object");
  }
});
