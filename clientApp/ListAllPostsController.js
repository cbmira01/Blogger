"use strict";

blogApp.controller("ListAllPostsController", [
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
          alert(`Problem in ListAllPostsController`);
        }
      );
    }
]);
