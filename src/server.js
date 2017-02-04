// 
const express    = require('express');
const config     = require('./config');

const app = express();
app.listen(config.port, function() {
  console.log(`Blogger app is listening on port ${config.port}.`);
});
