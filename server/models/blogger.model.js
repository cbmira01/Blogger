
// This model is required in server/database.js 

"use strict";

const mongoose = require("mongoose");
const cli = require("commander");

// Silence Mongoose mpromise deprecation warning
//    http://stackoverflow.com/a/38153706
mongoose.Promise = global.Promise; 

const BloggerSchema = new mongoose.Schema({
  name: String,
  slogan: String,
  resume: String,
  photolink: String,
  created_at: { type: Date, default: Date.now },
  bloggerguid: String,
});

const Blogger = mongoose.model("Blogger", BloggerSchema);

// Reset the blogger collection to a known state, seeded or empty.
//   Thanks to @shauvonm for the remove/create pattern
Blogger.count({}, function(err, count) {
  if (err) {
    throw err;
  }

  if (cli.reset) {
    Blogger.remove({}, function(err) {
      if (err) {
        throw err;
      }
      
      if (cli.reset === "seed") {
        const bloggers = require("./blogger.seed.json");
        Blogger.create(bloggers, function(err, newBloggers) {
          if (err) {
            throw err;
          }
          console.log("Blogger collection was re-seeded.");    
        }); 
      }
      console.log("Blogger collection was deleted.");    
    }); 
  }
});

module.exports = Blogger
