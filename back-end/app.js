// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Inspirational Quotes");
});

const quotesController = require("./controllers/quotesController.js");
app.use("/quotes", quotesController);

// EXPORT
module.exports = app;
