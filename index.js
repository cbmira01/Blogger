// 
const express    = require('express');
const config     = require('./config/serverConfig');

const app = express();
app.listen(config.port, function() {
  console.log(`Base directory is ${__dirname}`);
  console.log(`Blogger app is listening on port ${config.port}.`);
});

