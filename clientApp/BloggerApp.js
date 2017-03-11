
"use strict";

var blogApp = angular.module("blogApp", ["ngRoute"]);

blogApp.config([
  "$routeProvider", 
  "$locationProvider", 
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/home", {
          templateUrl: "templates/home.html",
          controller: "HomeController"
      })
      .when("/", {
          redirectTo: "/home"
      })
      .when("/users", {
          templateUrl: "templates/users.html",
          controller: "UsersController"
      })
      .otherwise({
          templateUrl: "templates/unknown.html",
          controller: "UnknownController"
      });

    // Use the HTML5 History API
    // https://scotch.io/tutorials/pretty-urls-in-angularjs-removing-the-hashtag
    $locationProvider.html5Mode(true);

  }
]);
