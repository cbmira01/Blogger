"use strict";

// CreateBloggerController facilitates creation of a new blogger.
// On success, this controller routes to /home

blogApp.controller("CreateBloggerController", [
  "$scope",
  "$http",
  "$location",
  function ($scope, $http, $location) {
    
    $scope.createBlogger = function() {      
      const newBlogger = {
        name: $scope.newName,
        slogan: $scope.newSlogan,
        resume: $scope.newResume,
        photolink: $scope.newPhotolink
      };

      $http({
        method: "POST",
        url: "http://localhost:8080/api/create-blogger",
        data: newBlogger
      })
        .then(
          function(response) { //success
            $scope.data = response.data;
            $scope.status = response.status;
            $location.path("/home");
          }, 
          function(response) { //error
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
          }
        );        
    };
  }
]);
