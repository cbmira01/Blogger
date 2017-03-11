
// Implement CRUD operations for blogger model.

const mongoose = require('mongoose');
const File = require('../../models/blogger.model.js');

module.exports = {
  // List all files in the database
  list: function(req, res, next) {
    File.find(function(err, files) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }

      res.json(files);
    });
  }
}


  