const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./src/config/config.env" });

module.exports = app;
