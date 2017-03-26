"use strict";

// Establish MongDB connection 
//  (thanks to http://theholmesoffice.com/mongoose-connection-best-practice/)

const mongoose = require("mongoose");
const dbConfig = require("./config");
const cli = require("commander");

// Find MongoDB connection info on the command line
cli
  .option("-c, --connect <connect>", "database connection address")
  .option("-u, --username <username>", "database username")
  .option("-p, --password <password>", "database password")
  .option("-r, --reset <seed_option>", "reset initial database to 'empty' or 'seed'")
  .parse(process.argv);

if ( !cli.connect ) {
  console.log("  Server startup needs connect information for MongoDB. Use index --help for help.");
  process.exit();
}

const haveAuthInfo = ( cli.username && cli.password );
if ( dbConfig.mongoUsesAuth && !haveAuthInfo ) {
  console.log("  Server startup needs username and password for MongoDB. Use index --help for help.");
  process.exit();
}

if ( dbConfig.mongoUsesAuth ) {
  var dbURI = `mongodb://${cli.username}:${cli.password}@${cli.connect}:${dbConfig.mongoPort}/${dbConfig.dbName}`;
} else {
  var dbURI = `mongodb://${cli.connect}:${dbConfig.mongoPort}/${dbConfig.dbName}`;
}

// Silence Mongoose mpromise deprecation warning
//    http://stackoverflow.com/a/38153706
mongoose.Promise = global.Promise; 
mongoose.connect(dbURI);

// Import the models
require("./models/blogger.model.js");
require("./models/posting.model.js");

mongoose.connection.on("connected", function () {  
  console.log(`MongoDB connection open to ${dbURI}\n`);
}); 

// Authentication errors caught here; halt the application
mongoose.connection.on("error",function (err) {  
  console.log(`MongoDB connection error: ${err}\n`);
  process.exit();
}); 

// If MongoDB disconnects, then halt the application
mongoose.connection.on("disconnected", function () {  
  console.log("MongoDB disconnected, application exits\n"); 
  process.exit();
});

// If the application process ends, then close the MongoDB connection nicely
process.on("disconnect", function() {  
  mongoose.connection.close(function () { 
    console.log("MongoDB connection closed because the app was terminated\n"); 
    process.exit(0); 
  }); 
}); 
