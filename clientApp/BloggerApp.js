
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
      .when("/list-posts", {
          templateUrl: "templates/list-posts.html",
          controller: "ListAllPostsController"
      })
      .when("/read-post/:postid", {
          templateUrl: "templates/read-post.html",
          controller: "ReadPostController"
      })   
      .when("/post-not-found", {
          templateUrl: "templates/post-not-found.html",
          controller: "PostNotFoundController"
      })  
      .when("/create-post", {
          templateUrl: "templates/create-post.html",
          controller: "CreatePostController"
      })        
      .otherwise({
          redirectTo: "/home"
      });

    // Use the HTML5 History API
    // https://scotch.io/tutorials/pretty-urls-in-angularjs-removing-the-hashtag
    $locationProvider.html5Mode(true);

  }
]);
