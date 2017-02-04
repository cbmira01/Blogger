// 
const router = require("express").Router();
module.exports = router;

// http://stackoverflow.com/questions/31442955/mean-stack-how-does-routing-between-express-and-angular-work
// API routes first...
// router.get("/API/users", UserController.getUsers);
// router.get("/API/user/:id", UserController.getUserById);

// ...then let Angular handle the rest of the routes
router.get("*", function(req, res){
   return res.sendFile(__dirname + "../public/index.html");
});
