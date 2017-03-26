
// Implement CRUDL operations for the posting model.

const mongoose = require("mongoose");
const HttpStatus = require("http-status-codes");
const Posting = require("../../models/posting.model.js");

module.exports = {
  
  // Return postings by blogger id, or return all
  list: function(req, res, next) {
    const bloggerid = req.params.bloggerid;
    
    if (bloggerid.toLowerCase() === "all") {
      Posting.find(function(err, postings) {
        if (err) {
          console.log(`  Error in posting.controller.js - list all: ${err}`);
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        }
        res.json(postings);
      });
    } 
    else {  
      Posting.find({ "byguid": bloggerid}, function(err, postings) {
        if (err) {
          console.log(`  Error in posting.controller.js - list by bloggerid: ${err}`);
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        }
        res.json(postings);
      });
    }
  },
   
  // Read a particular posting
  read: function(req, res, next) {
    const postid = req.params.postid;

    Posting.findById(postid, function(err, posting) {
      if (err) {
        console.log(`  Error in posting.controller.js - read: ${err}`);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
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
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      }
      res.json({
        success : "Posting was added successfully.", 
        status : HttpStatus.OK
      });
      console.log(`  New posting added: \n${JSON.stringify(newPosting, null, 2)}`);
    });
  },

  // Update an existing posting
  update: function(req, res, next) {    
    const postid = req.params.postid;
    const updatedPosting = req.body; 
    
    Posting.update({ _id : postid }, { $set: updatedPosting}, function (err, raw) {
      if (err) {
        console.log(`  Error in posting.controller.js - update: ${err}`);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      }

      res.json({
        success : "Posting was updated successfully.", 
        status : HttpStatus.OK
      });
      console.log(`  Posting updated: \n${JSON.stringify(updatedPosting, null, 2)}`);    
    });
  },

  // Delete a posting
  delete: function (req, res, next) {
    const postid = req.params.postid;

    Posting.findOneAndRemove({ _id : postid}, function (err, raw){
      if (err) {
        console.log(`  Error in posting.controller.js - delete: ${err}`);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      }
      res.json({
        success : "Posting was deleted successfully.", 
        status : HttpStatus.OK
      });
    });
  },
}
