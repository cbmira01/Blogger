// Implement CRUD operations for blogger model.

const mongoose = require("mongoose");
const Blogger = require("../../models/blogger.model.js");

module.exports = {
  
  // Return a list of all bloggers 
  list: function(req, res, next) {
    
    Blogger.find(function(err, bloggers) {
      if (err) {
        console.log(`  Error in blogger.controller.js - list: ${err}`);
        res.status(500).json(err);
      }
      res.json(bloggers);
    });
  },

  // Read a particular blogger
  read: function(req, res, next) {

    const bloggerid = req.params.bloggerid;

    Blogger.findById(bloggerid, function(err, blogger) {
      if (err) {
        console.log(`  Error in blogger.controller.js - read: ${err}`);
        res.status(500).json(err);
      }
      res.json(blogger);
    });
  },
 
  // Create a new blogger
  create: function(req, res, next) {
    
    const newBlogger = req.body; 
    const newBloggerDocument = new Blogger(newBlogger);    

    newBloggerDocument.save(function (err) {
      if (err) {
        console.log(`  Error in blogger.controller.js - create: ${err}`);
        res.status(500).json(err);
      }
      
      res.json({success : "New blogger added successfully.", status : 200});
      console.log(`  New blogger added: \n${JSON.stringify(newBlogger, null, 2)}`);
    });
  },

  // Update an existing blogger
  update: function(req, res, next) {
    
    const bloggerid = req.params.bloggerid;
    const updatedBlogger = req.body; 
    
    Blogger.update({ _id : bloggerid }, { $set: updatedBlogger}, function (err, raw) {
      if (err) {
        console.log(`  Error in blogger.controller.js - update: ${err}`);
        res.status(500).json(err);
      }

      res.json({success : "Blogger was updated successfully.", status : 200});
      console.log(`  Blogger updated: \n${JSON.stringify(updatedBlogger, null, 2)}`);    
    });
  },

  // Delete a blogger
  delete: function (req, res, next) {

    const bloggerid = req.params.bloggerid;

    Blogger.findOneAndRemove({ _id : bloggerid}, function (err, raw){
      if (err) {
        console.log(`  Error in blogger.controller.js - update: ${err}`);
        res.status(500).json(err);
      }
      res.json({success : "Blogger was deleted successfully.", status : 200});
    });
  },
}