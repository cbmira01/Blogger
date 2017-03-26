"use strict";

// Definition of the application's AngularJS module and routes
// begins here. HTML5 history option is used to eliminate #hash
// symbols in route URLs.

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
      .when("/create-post", {
          templateUrl: "templates/create-post.html",
          controller: "CreatePostController"
      })
      .when("/read-post/:postid", {
          templateUrl: "templates/read-post.html",
          controller: "ReadPostController"
      })
      .when("/list-bloggers", {
          templateUrl: "templates/list-bloggers.html",
          controller: "ListBloggersController"
      })   
      .when("/list-posts/:bloggerid", {
          templateUrl: "templates/list-posts.html",
          controller: "ListPostsController"
      })
      .when("/update-blogger/:bloggerid", {
          templateUrl: "templates/update-blogger.html",
          controller: "UpdateBloggerController"
      })
      .when("/update-post/:postid", {
          templateUrl: "templates/update-post.html",
          controller: "UpdatePostController"
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
