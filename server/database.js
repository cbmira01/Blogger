
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
  .option("-r, --reseed", "reseed database, if present")
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

const dbURI = `mongodb://`
  + `${cli.username}:`
  + `${cli.password}@`
  + `${cli.connect}:`
  + `${dbConfig.mongoPort}/`
  + `${dbConfig.dbName}`
  ;
  
console.log(`MongoDB connection string: ${dbURI}`);  
mongoose.connect(dbURI);

// Import models
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
