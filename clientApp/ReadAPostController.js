
blogApp.controller("ReadAPostController", [
  "$scope", 
  "$http", 
  "$log",
  function($scope, $http, $log) {
    $http({
      method: "GET", 
      url: `http://localhost:8080/api/read-post`
      })
      .then(
        function(response) { //success
          $scope.postings = response.data;
        }, 
        function(response) { //error
          $log.info(`Problem in ReadAPostController ${JSON.stringify(response, null, 2)}`);
          alert(`Problem in ReadAPostController`);
        }
      )
    }
]);
