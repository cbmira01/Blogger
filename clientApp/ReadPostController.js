"use strict";

// ReadPostController facilitates the detailed display of a 
// particular blog post. If the resource lookup fails at the
// API, this controller will route to /page-not-found

blogApp.controller("ReadPostController", [
  "$scope", 
  "$http", 
  "$location", 
  "$route", 
  "$routeParams",
  function($scope, $http, $location, $route, $routeParams) {      
    $http({
      method: "GET", 
      url: `http://localhost:8080/api/read-post/${$routeParams.postid}`
    })
      .then(
        function(response) { //success
          $scope.posting = response.data;  
          if ($scope.posting == null) {
            $location.path("/page-not-found");
          }
        }, 
        function(response) { //error
          $location.path("/page-not-found");
        }
      );
    }
]);
