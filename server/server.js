// 
const express = require("express");
const config = require("./serverConfig");
const router = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cli = require("commander");

// Find Mongo connection info on the command line.
cli
  .option("-c, --connect <connect>", "Mongo connect address")
  .option("-u, --username <username>", "Mongo username")
  .option("-p, --password <password>", "Mongo password")
  .parse(process.argv);

if (!cli.connect || !cli.username || !cli.password ) {
  console.log("  Server startup needs connecton info for MongoDB. Use --help for help.");
  process.exit();
}

// Establish MongDB connection 
//  (thanks to http://theholmesoffice.com/mongoose-connection-best-practice/)
const dbName = "bloggerAppDb";
const mongoPort = "27017";

const dbURI = `mongodb://${cli.username}:${cli.password}@${cli.connect}:${mongoPort}/${dbName}`;
mongoose.connect(dbURI);

mongoose.connection.on("connected", function () {  
  console.log("Mongoose connection open to " + dbURI);
}); 

mongoose.connection.on("error",function (err) {  
  console.log("Mongoose connection error: " + err);
  process.exit();
}); 

mongoose.connection.on("disconnected", function () {  
  console.log("Mongoose --disconnected--"); 
  process.exit();
});

// If the Node process ends, close the Mongoose connection 
process.on("SIGINT", function() {  
  mongoose.connection.close(function () { 
    console.log("Mongoose disconnected via app termination"); 
    process.exit(0); 
  }); 
}); 

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
