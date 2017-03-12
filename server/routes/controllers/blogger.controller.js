
// Implement CRUD operations for blogger model.

const mongoose = require("mongoose");
const Blogger = require("../../models/blogger.model.js");

module.exports = {
  
  // Return all bloggers in the database
  list: function(req, res, next) {
    
    Blogger.find(function(err, files) {
      if (err) {
        console.log(`Error in blogger.controller.js - list: ${err}`);
        res.status(500).json(err);
      }

      res.json(files);
    });
  },
  
  // Create a new blogger
  create: function(req, res, next) {
    
    const newBlogger = req.body.blogger;

    const newBloggerModel = new Blogger(newBlogger);
    newBloggerModel.save(function (err) {
      if (err) {
        console.log(`Error in blogger.controller.js - create: ${err}`);
        res.status(500).json(err);
      } else {
        res.json(newBloggerModel);
      }
    });
  }
}
  