"use strict";

// Establish API routes and a default route back to the Angular application.

// Structure here was suggested by http://stackoverflow.com/a/31443029
//   Allow Express to handle the API routes first, 
//   then let Angular handle the remaining routes.

const path = require("path");
const router = require("express").Router();
module.exports = router;

// CRUDL implementations for models...
const postingController = require("./controllers/posting.controller.js");
const bloggerController = require("./controllers/blogger.controller.js");

// Log all requested routes to the console.
router.use(function(req, res, next) {
  console.log(`Route request: ${req.method}, ${req.path}`);
  next();
});

// All API routes handled here...
router.get("/api/list-bloggers", bloggerController.list);
router.get("/api/list-posts/:bloggerid", postingController.list);
router.get("/api/read-blogger/:bloggerid", bloggerController.read);
router.get("/api/read-post/:postid", postingController.read);

router.post("/api/create-blogger", bloggerController.create);
router.post("/api/create-post", postingController.create);
router.post("/api/update-blogger/:bloggerid", bloggerController.update);
router.post("/api/update-post/:postid", postingController.update);
router.post("/api/delete-blogger/:bloggerid", bloggerController.delete);
router.post("/api/delete-post/:postid", postingController.delete);

// Remaining routes handled by Angular...
router.get("/*", function(req, res){
  const serveFile = path.join(__dirname, "/../../", "public/index.html");
  return res.sendFile(serveFile);
});
