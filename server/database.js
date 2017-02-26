
// Establish MongDB connection 
//  (thanks to http://theholmesoffice.com/mongoose-connection-best-practice/)

"use strict";

const mongoose = require("mongoose");
const cli = require("commander");
const dbConfig = require("./config");

// Find MongoDB connection info on the command line
cli
  .option("-c, --connect <connect>", "database connection address")
  .option("-u, --username <username>", "database username")
  .option("-p, --password <password>", "database password")
  .option("-r, --reset", "reset database, if switch is present")
  .parse(process.argv);

if ( !cli.connect ) {
  console.log("  Server startup needs connect location for MongoDB. Use index --help for help.");
  process.exit();
}

const haveAuthInfo = ( cli.username && cli.password );
if ( dbConfig.mongoUsesAuth && !haveAuthInfo ) {
  console.log("  Server startup needs username and password for MongoDB. Use index --help for help.");
  process.exit();
}

const dbURI = `mongodb://`
  + `${cli.username}:`
  + `${cli.password}@`
  + `${cli.connect}:`
  + `${dbConfig.mongoPort}/`
  + `${dbConfig.dbName}`
  ;

mongoose.connect(dbURI);

mongoose.connection.on("connected", function () {  
  console.log(`MongoDB connection open to ${dbURI}`);
}); 

// Authentication errors caught here; halt the application
mongoose.connection.on("error",function (err) {  
  console.log(`MongoDB connection error: ${err}`);
  process.exit();
}); 

// If MongoDB disconnects, then halt the application
mongoose.connection.on("disconnected", function () {  
  console.log("MongoDB --disconnected--"); 
  process.exit();
});

// If the application process ends, then close the MongoDB connection nicely
process.on("SIGINT", function() {  
  mongoose.connection.close(function () { 
    console.log("MongoDB disconnected via app termination"); 
    process.exit(0); 
  }); 
}); 
