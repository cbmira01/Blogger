// 
const express = require("express");
const config = require("./serverConfig");
const router = require("./routes");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require("path");
const cli = require("commander");

// Find Mongo connection info on the command line.
cli
  .option('-c, --connect <connect>', 'Mongo connect address')
  .option('-u, --username <username>', 'Mongo username')
  .option('-p, --password <password>', 'Mongo password')
  .parse(process.argv);

if (!cli.connect || !cli.username || !cli.password ) {
  console.log("  Server startup needs connecton info for MongoDB. Use --help for help.");
  process.exit();
}


process.exit();

// todo: Establish MongDB connection
const dbName = "";
const mongoPort = "27017";
// Mongoose connect string specification
//   mongodb://[username:password@]host1[:port1]][/[database][?options]]
const mcs = `mongodb://${cli.username}:${cli.password}@${cli.connect}:${mongoPort}/${dbName}`;
mongoose.connect(mcs);
const db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

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
