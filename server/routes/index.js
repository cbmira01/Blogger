
// http://stackoverflow.com/a/31443029
//   Filter for API routes first, then let Angular 
//   handle the rest of the routes.

const path = require("path");
const router = require("express").Router();
module.exports = router;

const postingController = require("./controllers/posting.controller.js");
const bloggerController = require("./controllers/blogger.controller.js");

// Log all requested routes to the console.
router.use(function(req, res, next) {
  console.log(`Route request: ${req.method}, ${req.path}`);
  next();
});

router.get("/api/home", bloggerController.list);

router.get("/api/users", function(req, res) {
  const myData = {
    "name": "Here is a USER name",
    "info": "Here is some USER info..."
  }
  res.json(myData);
});

router.get("/*", function(req, res){
  // console.log(`  Route passed to Angular: ${req.method}, ${req.path}`);
  const serveFile = path.join(__dirname, "/../../", "public/index.html");
  return res.sendFile(serveFile);
});
