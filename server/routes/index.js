// 
const path = require("path");
const router = require("express").Router();
module.exports = router;

// Log all requested routes to the console.
router.use(function(req, res, next) {
  console.log(`Route request: ${req.method}, ${req.path}`);
  next();
});

// http://stackoverflow.com/a/31443029
// Filter for API routes first...
router.get("/api/home", function(req, res) {
  const myData = {
    "name": "Here is my HOME name...",
    "info": "Here is some HOME info to look at..."
  }
  res.json(myData);
});

router.get("/api/users", function(req, res) {
  const myData = {
    "name": "Here is a USER name",
    "info": "Here is some USER info..."
  }
  res.json(myData);
});

// ...then let Angular handle the rest of the routes
router.get("/*", function(req, res){
  console.log(`  Route passed to Angular: ${req.method}, ${req.path}`);
  const serveFile = path.join(__dirname, "/../../", "public/index.html");
  return res.sendFile(serveFile);
});
