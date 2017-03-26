"use strict";

// ListBloggersController fills $scope with a list of current bloggers,
// and can facilitate the selection of a blogger to delete. This 
// controller can handle zero bloggers.
// On success, the current route is reloaded.

blogApp.controller("ListBloggersController", [
  "$scope", 
  "$http", 
  "$location", 
  "$route", 
  "$routeParams",
  function($scope, $http, $location, $route, $routeParams) {

    $http({
      method: "GET", 
      url: "http://localhost:8080/api/list-bloggers"
    })
      .then(
        function(response) { //success
          $scope.bloggers = response.data;
        }, 
        function(response) { //error
          alert("Problem in ListBloggersController");
        }
      );

    $scope.deleteBlogger = function(bloggerid) {
      $http({
        method: "POST",
        url: `http://localhost:8080/api/delete-blogger/${bloggerid}`
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
    };
  }
]);
