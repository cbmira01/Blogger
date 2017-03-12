
blogApp.controller("HomeController", [
  "$scope", 
  "$http", 
  "$log",
  function($scope, $http, $log) {
    $http({
      method: "GET", 
      url: "http://localhost:8080/api/home"
      })
      .then(
        function(response) { //success
          $scope.bloggers = response.data;
        }, 
        function(response) { //error
          $log.info(`Problem in HomeController ${JSON.stringify(response, null, 2)}`);
          alert(`Problem in HomeController`);
        }
      )
    }
]);
