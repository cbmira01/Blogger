
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
   
  // Read a particular posting
  read: function(req, res, next) {

    const postid = req.params.postid;

    Posting.findById(postid, function(err, posting) {
      if (err) {
        console.log(`  Error in posting.controller.js - read: ${err}`);
        res.status(500).json(err);
      }

      res.json(posting);
    });
  },

  // Create a new blog posting
  create: function(req, res, next) {   
 
    const newPosting = req.body; 
    const newPostingDocument = new Posting(newPosting);    

    newPostingDocument.save(function (err) {
      if (err) {
        console.log(`  Error in posting.controller.js - create: ${err}`);
        res.status(500).json(err);
      }
      
      res.json({success : "New posting added successfully.", status : 200});
      console.log(`  New posting added: \n${JSON.stringify(newPosting, null, 2)}`);
    });
  }
}
