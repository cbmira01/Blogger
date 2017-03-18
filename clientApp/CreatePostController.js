
blogApp.controller("CreatePostController", [
  "$scope",
  "$http",
  "$location",
  function ($scope, $http, $location) {
    
    $scope.createPost = function() {
      
      const newPost = {
        title: $scope.title,
        content: $scope.content
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
