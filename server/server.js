// 
const express = require("express");
const config = require("./serverConfig");
const router = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
// for parsing JSON and application/x-www-form-urlencoded
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use("/", express.static(path.join(__dirname, "../public")));
app.use("/node_modules",express.static(path.join(__dirname, "../node_modules")));
app.use(router);

app.listen(config.port, function() {
  console.log(`Express server is running...`);
  console.log(`  Base directory ${__dirname}`);
  console.log(`  Listening on port ${config.port} \n`);
});
