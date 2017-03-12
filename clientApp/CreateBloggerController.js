
blogApp.controller("CreateBloggerController", [
  "$scope",
  "$http",
  "$location",
  "$log",
  function ($scope, $http, $location, $log) {
    
    $scope.createBlogger = function() {

      const newBlogger = {
        name: $scope.bloggerName,
        slogan: $scope.bloggerSlogan
      };

      $http({
        method: "POST",
        url: "http://localhost:8080/api/create-blogger",
        data: newBlogger
        })
        .then(
          function(response) { //success
            $scope.response = response;
          }, 
          function(response) { //error
            $log.info(`Problem in CreateBloggerController: \n${JSON.stringify(response, null, 2)}`);
            alert(`Problem in CreateBloggerController`);
          }
        )
        
      $location.path("/home");
    }
  }
]);
