
blogApp.controller("UpdateBloggerController", [
  "$scope",
  "$http",
  "$location",
  "$route", 
  "$routeParams",
  function ($scope, $http, $location, $route, $routeParams) {
    
    $scope.updateBlogger = function() {
      
      const updateBlogger = {
        name: $scope.name,
        slogan: $scope.slogan
      };

      $http({
        method: "PUT",
        url: `http://localhost:8080/api/update-blogger/${$routeParams.bloggerid}`,
        data: updateBlogger
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
