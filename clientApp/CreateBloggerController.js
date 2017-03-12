
blogApp.controller("CreateBloggerController", [
  "$scope",
  "$http",
  "$log",
  function ($scope, $http, $log) {
    
    $scope.createBlogger = function() {

      const newBlogger = {
        name: $scope.bloggerName,
        slogan: $scope.bloggerSlogan
      };

      $http({
        method: "POST",
        url: "http://localhost:8080/api/createBlogger",
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
    }
  }
]);
