"use strict";

// UpdatePostController fills $scope with a list of all current posts,
// or posts from a selected blogger, then sends a possibly updated post
// back to the API. 
// On success, this controller routes to /list-posts/all

blogApp.controller("UpdatePostController", [
  "$scope",
  "$http",
  "$location",
  "$route", 
  "$routeParams",
  function ($scope, $http, $location, $route, $routeParams) {

    $http({
      method: "GET", 
      url: `http://localhost:8080/api/read-post/${$routeParams.postid}`
    })
      .then(
        function(response) { //success
          $scope.posting = response.data;
        }, 
        function(response) { //error
          $location.path("/page-not-found");
        }
      );

    $scope.updatePosting = function() {
      const updatedPosting = {
        title: $scope.newTitle,
        content: $scope.newContent,
        imagelink: $scope.newImagelink
      };

      $http({
        method: "POST",
        url: `http://localhost:8080/api/update-post/${$routeParams.postid}`,
        data: updatedPosting
      })
        .then(
          function(response) { //success
            $scope.data = response.data;
            $scope.status = response.status;
            $location.path("/list-posts/all");
          }, 
          function(response) { //error
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
          }
        );        
    };
  }
]);
