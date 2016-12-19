var app = angular.module('ngBlog', ['ngRoute'])
.config(function($routeProvider){
   $routeProvider
    .when('/',{
        templateUrl: 'posts.view.html',
        controller: 'postsController'
     })
      .when('/posts',{
        templateUrl: 'posts.view.html',
        controller: 'postsController'
     })
    .when('/addPost',{
        templateUrl: 'addPost.view.html',
        controller: 'postsController'
    })
    	.when('/blog',{
	    template: '<blog-directive></blog-directive>',
	    controller: 'postsController'
    	})
    .otherwise({
		redirectTo: '/'
	});



});