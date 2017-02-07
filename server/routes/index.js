// 
const router = require("express").Router();
module.exports = router;

// http://stackoverflow.com/a/31443029
// Filter for API routes first...

router.get("/api/home", function(req, res) {
  const myData = {
    "name": "Here is my name...",
    "info": "Here is some info to look at..."
  }
  res.json(myData);
});

router.get("/api/users", function(req, res) {
  const myData = {
    "name": "Here is a user name",
    "info": "Here is some user info..."
  }
  res.json(myData);
});

// ...then let Angular handle the rest of the routes
router.get("*", function(req, res){
   return res.sendFile(__dirname + "../public/index.html");
});
