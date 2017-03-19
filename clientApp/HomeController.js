"use strict";

blogApp.controller("HomeController", [
  "$scope", 
  "$http", 
  function($scope, $http) {
    $http({
      method: "GET", 
      url: "http://localhost:8080/api/list-bloggers"
    })
      .then(
        function(response) { //success
          $scope.bloggers = response.data;
        }, 
        function(response) { //error
          alert(`Problem in HomeController`);
        }
      );
    }
]);