const mongoose = require("mongoose");

const connect = async () => {
  return await mongoose.connect(process.env.URL);
};

module.exports = connect;
