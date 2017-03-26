"use strict";

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
          alert(`Problem in CreatePostController`);
        }
      );
    
    $scope.createPost = function() {      
      const newPost = {
        title: $scope.newtitle,
        content: $scope.newcontent,
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
            $location.path("/list-posts");
          }, 
          function(response) { //error
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
          }
        );        
    };
  }
]);
