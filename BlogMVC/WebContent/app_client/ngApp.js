var app = angular.module('ngBlog', ['ngRoute'])
.config(function($routeProvider){
   $routeProvider
    .when('/',{
        templateUrl: 'general.view.html',
        controller: 'generalController'
     })
     .when('/general',{
        templateUrl: 'general.view.html',
        controller: 'generalController'
     })
     .when('/login',{
        templateUrl: 'login.view.html',
        controller: 'loginController'
     })
     .when('/home',{
        templateUrl: 'home.view.html',
        controller: 'homeController'
     })
     .when('/register',{
		templateUrl: 'register.view.html',
		controller: 'registrationController'
	})
      .when('/posts',{
        templateUrl: 'posts.view.html',
        controller: 'postsController'
     })
    .when('/addPost',{
        templateUrl: 'addPost.view.html',
        controller: 'postsController'
    })
    .when('/blogGen',{
	    template: '<bloggeneral-directive></bloggeneral-directive>',
	    controller: 'generalController'
    	})
    	.when('/blog',{
	    template: '<blog-directive></blog-directive>',
	    controller: 'postsController'
    	})
    .otherwise({
		redirectTo: '/'
	});



});