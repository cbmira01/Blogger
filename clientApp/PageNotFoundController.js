"use strict";

// PageNotFoundController delivers content to display in case a
// application resource (blogger or posting) was not found.

blogApp.controller("PageNotFoundController", [
  "$scope", 
  function($scope) {      
    $scope.image = "img/no-cat.jpg";
    $scope.title = "Page not found";
    $scope.text = "Sorry, the page you are looking for could not be found.";
  }
]);
