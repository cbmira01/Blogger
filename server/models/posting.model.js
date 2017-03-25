
// This model is required in server/database.js 

"use strict";

const mongoose = require("mongoose");
const cli = require("commander");

// Silence Mongoose mpromise deprecation warning
//    http://stackoverflow.com/a/38153706
mongoose.Promise = global.Promise; 

const PostingSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  byname: String,
  byguid: String,
  title: String,
  content: String,
  imagelink: String,
});

const Posting = mongoose.model("Posting", PostingSchema);

// Reset the posting collection to a known state, seeded or empty.
//   Thanks to @shauvonm for the remove/create pattern
Posting.count({}, function(err, count) {
  if (err) {
    throw err;
  }

  if (cli.reset) {
    Posting.remove({}, function(err) {
      if (err) {
        throw err;
      }
      
      if (cli.reset === "seed") {
        const postings = require("./posting.seed.json");
        Posting.create(postings, function(err, newPostings) {
          if (err) {
            throw err;
          }
          console.log("Posting collection was re-seeded.");    
        }); 
      }
      console.log("Posting collection was deleted.");    
    }); 
  }
});

module.exports = Posting
