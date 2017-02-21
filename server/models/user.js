"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  slogan: String,
});

const model = mongoose.model("User", userSchema);

module.exports = model;
