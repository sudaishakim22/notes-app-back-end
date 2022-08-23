const mongoose = require("mongoose");

const db = (url) => {
  const connection_url = url;

  mongoose
    .connect(connection_url)
    .then(() => {
      console.log("db started!");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = db;
