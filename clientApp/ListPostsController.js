"use strict";

blogApp.controller("ListPostsController", [
  "$scope", 
  "$http", 
  "$location", 
  "$route", 
  "$routeParams",
  function($scope, $http, $location, $route, $routeParams) {
    $http({
      method: "GET", 
      url: `http://localhost:8080/api/list-posts/${$routeParams.bloggerid}`
    })
      .then(
        function(response) { //success
          $scope.postings = response.data;
        }, 
        function(response) { //error
          alert(`Problem in ListPostsController`);
        }
      );

    $scope.deletePost = function(postid) {
      $http({
        method: "POST",
        url: `http://localhost:8080/api/delete-blogger/${postid}`
      })
        .then(
          function(response) { //success
            $scope.data = response.data;
            $scope.status = response.status;
            $route.reload(); 
          }, 
          function(response) { //error
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
          }
        );        
    }
  }
]);
