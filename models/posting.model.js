
"use strict";

const mongoose = require("mongoose");
const cli = require("commander");

const PostingSchema = new mongoose.Schema({
  title: String,
  content: String,
  created_at: { type: Date, default: Date.now },
});

const Posting = mongoose.model("Posting", PostingSchema);

// Seed the database if empty or if requested at startup
Posting.count({}, function(err, count) {
  if (err) {
    throw err;
  }

  if ( !cli.reseed && !(count == 0)) {
    return ;
  }

  console.log(`Posting collection was re-seeded...`);

  // Delete contents
  Posting.remove({}, function(err) {
    if (err) {
      throw err;
    }
  });

  // Reseed the database to a known state
  const postings = require("./posting.seed.json");
  Posting.create(postings, function(err, newPostings) {
    if (err) {
      throw err;
    }
  });
});

module.exports = Posting
