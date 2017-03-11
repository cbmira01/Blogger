//

blogApp.controller("HomeController", [
  "$scope", 
  "$http", 
  function($scope, $http) {
    $http
      .get("http://localhost:8080/api/home")
      .then(function(response) {
            $scope.bloggers = response.data;
      }, function(response) {
            alert(`Problem in HomeController: ${JSON.parse(response.data)}`);
      })
    }
]);
