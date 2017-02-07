//

blogApp.controller("UsersController", ["$scope", "$http", 
  function($scope, $http) {
    $http({method: "GET", url: "http://localhost:8080/api/users"})
      .then(function(response) {
            $scope.resData = response.data;
      }, function(response) {
            console.log("Problem in UsersController API request: " + response);
      })
    }
]);
