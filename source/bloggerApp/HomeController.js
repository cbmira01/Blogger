//

blogApp.controller("HomeController", [
  "$scope", 
  "$http", 
  function($scope, $http) {
    $http({method: "GET", url: "http://localhost:8080/api/home"})
      .then(function(response) {
            $scope.resData = response.data;
      }, function(response) {
            alert("Problem in HomeController API request: " + response);
      })
    }
]);
