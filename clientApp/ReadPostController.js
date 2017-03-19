
blogApp.controller("ReadPostController", [
  "$scope", 
  "$http", 
  "$location", 
  "$route", 
  "$routeParams",
  function($scope, $http, $location, $route, $routeParams) {      
    $http({
      method: "GET", 
      url: `http://localhost:8080/api/read-post/${$routeParams.postid}`
    })
      .then(
        function(response) { //success
          $scope.posting = response.data;        
        }, 
        function(response) { //error
          $location.path("/page-not-found");
        }
      )
    }
]);
