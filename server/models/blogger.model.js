
// This model is required in server/database.js 

"use strict";

const mongoose = require("mongoose");
const cli = require("commander");

const BloggerSchema = new mongoose.Schema({
  name: String,
  slogan: String,
  created_at: { type: Date, default: Date.now },
});

const Blogger = mongoose.model("Blogger", BloggerSchema);

// Seed the database if empty or if requested at startup
Blogger.count({}, function(err, count) {
  if (err) {
    throw err;
  }

  if ( !cli.reseed && !(count == 0)) {
    return ;
  }

  // Delete contents prior to reseeding.
  Blogger.remove({}, function(err) {
    if (err) {
      throw err;
    }
    
    // Reseed the database to a known state.
    const bloggers = require("./blogger.seed.json");
    Blogger.create(bloggers, function(err, newBloggers) {
      if (err) {
        throw err;
      }
    }); 

    console.log(`Blogger collection was re-seeded...`);    
  });  
});

module.exports = Blogger
