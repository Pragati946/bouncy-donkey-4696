const express = require("express");
const cors=require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json({ extended: false }));
app.use(express.json());
app.use(cors())
app.use("/payment", require("./routes/payment"));

app.listen(port, () => console.log(`server started on port ${port}`));