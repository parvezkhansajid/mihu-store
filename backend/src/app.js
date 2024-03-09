const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const errorMiddleware = require("./middlewares/error");

app.use(bodyParser());

const product = require("./routes/productRoute");
app.use("/api/v1", product);

app.use(errorMiddleware);

module.exports = app;
