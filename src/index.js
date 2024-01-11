const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const groceryController = require("./controllers/grocery.controller");

app.use("/inventory", groceryController);

module.exports = app;
