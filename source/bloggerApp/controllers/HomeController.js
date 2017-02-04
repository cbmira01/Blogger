  // 
  blogApp.controller(
    "HomeController",[
      "$scope",
      function($scope) {
        $scope.bloggers = ["blogger0", "blogger1", "blogger2"];
        $scope.posts = ["post0", "post1", "post2"];
      };
  ]);
