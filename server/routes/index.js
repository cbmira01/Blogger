
// http://stackoverflow.com/a/31443029
//   Allow Express to handle the API routes first, 
//   then let Angular handle the remaining routes.

const path = require("path");
const router = require("express").Router();
module.exports = router;

// CRUD implementations for models...
const postingController = require("./controllers/posting.controller.js");
const bloggerController = require("./controllers/blogger.controller.js");

// Log all requested routes to the console.
router.use(function(req, res, next) {
  console.log(`Route request: ${req.method}, ${req.path}`);
  next();
});

// All API routes handled here...
router.get("/api/home", bloggerController.list);
router.post("/api/create-blogger", bloggerController.create);
router.get("/api/all-posts", postingController.list);
router.get("/api/read-post/:pid", postingController.read);


// Remaining routes handled by Angular.
router.get("/*", function(req, res){
  // console.log(`  Route passed to Angular: ${req.method}, ${req.path}`);
  const serveFile = path.join(__dirname, "/../../", "public/index.html");
  return res.sendFile(serveFile);
});
