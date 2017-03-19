
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
      .when("/create-blogger", {
          templateUrl: "templates/create-blogger.html",
          controller: "CreateBloggerController"
      })
      .when("/update-blogger/:bloggerid", {
          templateUrl: "templates/update-blogger.html",
          controller: "UpdateBloggerController"
      })
      .when("/create-post", {
          templateUrl: "templates/create-post.html",
          controller: "CreatePostController"
      }) 
      .when("/read-post/:postid", {
          templateUrl: "templates/read-post.html",
          controller: "ReadPostController"
      })   
      .when("/list-posts", {
          templateUrl: "templates/list-posts.html",
          controller: "ListAllPostsController"
      })
      .when("/page-not-found", {
          templateUrl: "templates/page-not-found.html",
          controller: "PageNotFoundController"
      })         
      .otherwise({
          redirectTo: "/home"
      });

    // Use the HTML5 History API
    // https://scotch.io/tutorials/pretty-urls-in-angularjs-removing-the-hashtag
    $locationProvider.html5Mode(true);

  }
]);
