"use strict";

// UpdateBloggerController fills $scope with a list of all current bloggers,
// then sends a possibly updated blogger back to the API. 
// On success, this controller routes to /list-bloggers

blogApp.controller("UpdateBloggerController", [
  "$scope",
  "$http",
  "$location",
  "$route", 
  "$routeParams",
  function ($scope, $http, $location, $route, $routeParams) {
    
    $http({
      method: "GET", 
      url: `http://localhost:8080/api/read-blogger/${$routeParams.bloggerid}`
    })
      .then(
        function(response) { //success
          $scope.blogger = response.data;
        }, 
        function(response) { //error
          $location.path("/page-not-found");
        }
      );

    $scope.updateBlogger = function() {      
      const updatedBlogger = {
        name: $scope.newname,
        slogan: $scope.newslogan
      };

      $http({
        method: "POST",
        url: `http://localhost:8080/api/update-blogger/${$routeParams.bloggerid}`,
        data: updatedBlogger
      })
        .then(
          function(response) { //success
            $scope.data = response.data;
            $scope.status = response.status;
            $location.path("/list-bloggers");
          }, 
          function(response) { //error
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
          }
        );        
    };
  }
]);
