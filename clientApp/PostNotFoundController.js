
blogApp.controller("PostNotFoundController", [
  "$scope", 
  function($scope) {      
    $scope.image = "img/no-cat.jpg";
    $scope.title = "Post not found";
    $scope.text = "Sorry, that blog posting could not be found.";
  }
]);
