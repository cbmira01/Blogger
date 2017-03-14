
// Implement CRUD operations for posting model.

const mongoose = require("mongoose");
const Posting = require("../../models/posting.model.js");

module.exports = {
  
  // Return all postings
  list: function(req, res, next) {
    
    Posting.find(function(err, postings) {
      if (err) {
        console.log(`  Error in posting.controller.js - list: ${err}`);
        res.status(500).json(err);
      }

      res.json(postings);
    });
  },
  
  // Return a particular posting
  read: function(req, res, next) {
    
    Posting.find(function(err, postings) {
      if (err) {
        console.log(`  Error in posting.controller.js - list: ${err}`);
        res.status(500).json(err);
      }

      res.json(postings);
    });
  }  
}
