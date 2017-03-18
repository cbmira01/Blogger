
blogApp.controller("ListAllPostsController", [
  "$scope", 
  "$http", 
  function($scope, $http) {
    $http({
      method: "GET", 
      url: "http://localhost:8080/api/all-posts"
    })
      .then(
        function(response) { //success
          $scope.postings = response.data;
        }, 
        function(response) { //error
          alert(`Problem in ListAllPostsController`);
        }
      )
    }
]);
