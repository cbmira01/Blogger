
blogApp.controller("ListAllPostsController", [
  "$scope", 
  "$http", 
  "$log",
  function($scope, $http, $log) {
    $http({
      method: "GET", 
      url: "http://localhost:8080/api/all-posts"
      })
      .then(
        function(response) { //success
          $scope.postings = response.data;
        }, 
        function(response) { //error
          $log.info(`Problem in ListAllPostsController ${JSON.stringify(response, null, 2)}`);
          alert(`Problem in ListAllPostsController`);
        }
      )
    }
]);
