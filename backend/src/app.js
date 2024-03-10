const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middlewares/error");

app.use(bodyParser());
app.use(cookieParser());

const product = require("./routes/productRoute");
app.use("/api/v1", product);
const user = require("./routes/userRoute");
app.use("/api/v1", user);

app.use(errorMiddleware);

module.exports = app;
