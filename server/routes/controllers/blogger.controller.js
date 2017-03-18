
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
  }
}
  