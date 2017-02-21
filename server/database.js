
// Establish MongDB connection 
//  (thanks to http://theholmesoffice.com/mongoose-connection-best-practice/)

"use strict";

const mongoose = require("mongoose");
const cli = require("commander");
const dbConfig = require("./config");

// Find MongoDB connection info on the command line
cli
  .option("-c, --connect <connect>", "Mongo connect address")
  .option("-u, --username <username>", "Mongo username")
  .option("-p, --password <password>", "Mongo password")
  .parse(process.argv);

if (!cli.connect || !cli.username || !cli.password ) {
  console.log("  Server startup needs connecton info for MongoDB. Use index --help for help.");
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
