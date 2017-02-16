
// Start server-side components, Express and Mongoose,
//   and establish application routing.

const express = require("express");
const serverConfig = require("./config");
const router = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Pull in database connection dialogue
require("./database");

// For parsing JSON and application/x-www-form-urlencoded
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Establish static and virtual routing
app.use("/", express.static(path.join(__dirname, "../public")));
app.use("/node_modules",express.static(path.join(__dirname, "../node_modules")));
app.use(router);

// Start Express
app.listen(serverConfig.serverPort, function() {
  console.log(`Express server is running...`);
  console.log(`  Base directory ${__dirname}`);
  console.log(`  Listening on port ${serverConfig.serverPort} \n`);
});
