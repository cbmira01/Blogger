
blogApp.controller("UpdateBloggerController", [
  "$scope",
  "$http",
  "$location",
  "$route", 
  "$routeParams",
  function ($scope, $http, $location, $route, $routeParams) {
    
    // Make sure $scope is filled with current blogger values
    $http({
      method: "GET", 
      url: `http://localhost:8080/api/read-blogger/${$routeParams.bloggerid}`
    })
      .then(
        function(response) { //success
          $scope.blogger = response.data;
        }, 
        function(response) { //error
          alert(`Problem in UpdateBloggerController (GET)`);
        }
      )

    // Send any updated blogger values
    $scope.updateBlogger = function() {      
      const updatedBlogger = {
        name: $scope.name,
        slogan: $scope.slogan
      };

      $http({
        method: "POST",
        url: `http://localhost:8080/api/update-blogger/${$routeParams.bloggerid}`,
        data: updatedBlogger
      })
        .then(
          function(response) { //success
            $scope.data = response.data;
            $scope.status = response.status;
            $location.path("/home");
          }, 
          function(response) { //error
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
          }
        );        
    };
  }
]);
