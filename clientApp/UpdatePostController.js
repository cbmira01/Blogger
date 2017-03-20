"use strict";

blogApp.controller("UpdatePostController", [
  "$scope",
  "$http",
  "$location",
  "$route", 
  "$routeParams",
  function ($scope, $http, $location, $route, $routeParams) {

    // Make sure $scope contains current post values
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

    // Send any updated posting values
    $scope.updatePost = function() {

      const updatedPosting = {
        title: $scope.newtitle,
        content: $scope.newcontent
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
