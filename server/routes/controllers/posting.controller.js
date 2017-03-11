
// Implement CRUD operations for posting model.

const mongoose = require('mongoose');
const File = require('../../models/posting.model.js');

module.exports = {
  // List all files in the database
  list: function(req, res, next) {
    Blogger.find(function(err, files) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }

      res.json(files);
    });
  }
}
