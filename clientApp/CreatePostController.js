"use strict";

// CreatePostController facilitates creation of a new blog posting. This
// controller gets a list of all current bloggers so that a selection list 
// of bloggers can be built. A new blog post contains blogger name and
// IDs to help with later blog posting lookups.
// On success, this controller routes to /list-posts/all

blogApp.controller("CreatePostController", [
  "$scope",
  "$http",
  "$location",
  function ($scope, $http, $location) {

    $http({
      method: "GET", 
      url: "http://localhost:8080/api/list-bloggers"
    })
      .then(
        function(response) { //success
          $scope.bloggers = response.data;
        }, 
        function(response) { //error
          alert("Problem in CreatePostController");
        }
      );
    
    $scope.createPost = function() {      
      const newPost = {
        title: $scope.newTitle,
        content: $scope.newContent,
        imagelink: $scope.newImagelink,
        byname: $scope.chosenBlogger.name,
        byguid: $scope.chosenBlogger._id
      };

      $http({
        method: "POST",
        url: "http://localhost:8080/api/create-post",
        data: newPost
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
