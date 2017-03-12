
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
        url: "http://localhost:8080/api/create-blogger",
        data: newBlogger
        })
        .then(
          function(response) { //success
            $scope.data = response.data;
            $scope.status = response.status;
          }, 
          function(response) { //error
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
            
            // $log.info(`Problem in CreateBloggerController: \n${JSON.stringify(response, null, 2)}`);
            // alert(`Problem in CreateBloggerController`);
          }
        )        
    }
  }
]);
