
// Implement CRUD operations for blogger model.

const mongoose = require("mongoose");
const Blogger = require("../../models/blogger.model.js");

module.exports = {
  
  // List all files in the database
  list: function(req, res, next) {
    Blogger.find(function(err, files) {
      if (err) {
        console.log(`Error in blogger.controller.js: ${err}`);
        res.status(500).json(err);
      }

      res.json(files);
    });
  }
}


  