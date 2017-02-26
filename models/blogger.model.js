
"use strict";

const mongoose = require("mongoose");
const cli = require("commander");

const BloggerSchema = new mongoose.Schema({
  bloggerName: String,
  bloggerSlogan: String,
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

  console.log();
  console.log(`Database re-seeding was requested...\n`);

  // Delete contents
  Blogger.remove({}, function(err) {
    if (err) {
      throw err;
    }
  });

  // Reseed the database to a known state
  const bloggers = require("./blogger.seed.json");
  Blogger.create(bloggers, function(err, newBloggers) {
    if (err) {
      throw err;
    }
  });
});

module.exports = Blogger
