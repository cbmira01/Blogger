//
  "use strict";

  var ngApp = angular.module("bloggerApp", ["ngRoute"]);

  ngApp.config(function($routeProvider) {
    $routeProvider
      .when("/", {
          templateUrl: "/templates/home.html",
          controller: "HomeController"
      })
      .otherwise({
          redirectTo: "/"
      });
  });
