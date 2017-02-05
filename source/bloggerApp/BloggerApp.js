//
  "use strict";

  var blogApp = angular.module("blogApp", ["ngRoute"]);

  blogApp.config( ["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/", {
          templateUrl: "templates/home.html",
          controller: "HomeController"
      })
      .otherwise({
          redirectTo: "/"
      });
  }]);
