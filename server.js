const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { APP_PORT, DB_URL } = require('./config');
const routes = require("./routes");
const bodyParser = require("body-parser");

mongoose.connect(DB_URL).then(() => console.log("Connected"));
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));
app.use(
  bodyParser.urlencoded({extended: true})
);
app.use(bodyParser.json());
app.use('/api', routes);

// Start the server
app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`);
})