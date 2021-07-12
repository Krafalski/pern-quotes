const quotes = require("express").Router();
const quotesArray = require("../models/quote.js");

// INDEX
quotes.get("/", (req, res) => {
  res.json({ success: true, payload: quotesArray });
});

// SHOW
quotes.get("/:arrayIndex", (req, res) => {
  if (quotesArray[req.params.arrayIndex]) {
    res.json({
      success: true,
      payload: quotesArray[req.params.arrayIndex],
    });
  } else {
    res.redirect("/404");
  }
});

// UPDATE
quotes.put("/:arrayIndex", (req, res) => {
  const existingQuote = quotesArray[req.params.arrayIndex];
  if (existingQuote) {
    quotesArray[req.params.arrayIndex] = req.body;
    res.json({
      success: true,
      payload: quotesArray[req.params.arrayIndex],
    });
  } else {
    res.redirect("/404");
  }
});

// CREATE
quotes.post("/", (req, res) => {
  const { person, quote, likes } = req.body;
  if (person && quote && likes) {
    quotesArray.push(req.body);
    res.json({
      success: true,
      payload: quotesArray[quotesArray.length - 1],
    });
  } else {
    res.status(422).json({
      success: false,
      payload: "Must include all required attrs",
    });
  }
});

// DELETE
quotes.delete("/:arrayIndex", (req, res) => {
  const existingQuote = quotesArray[req.params.arrayIndex];
  if (existingQuote) {
    quotesArray.splice(req.params.indexArray, 1);
    res.json({
      success: true,
      payload: existingQuote,
    });
  } else {
    res.redirect("/404");
  }
});

module.exports = quotes;
