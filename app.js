const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const exerciseController = require("./Controllers/exerciseController.js");
app.use("/exercises", exerciseController);

app.get("/", (req, res) => {
  res.send("Welcome to Fitness4All!");
})

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
})

module.exports = app;